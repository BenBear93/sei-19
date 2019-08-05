console.log("start up");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
var loggedIn = false;
//Initialise postgres client
const configs = {
    user: 'ben',
    host: '127.0.0.1',
    database: 'proj2',
    port: 5432,
};

const pool = new pg.Pool(configs);
pool.on('error', function(err) {
    console.log('idle client error', err.message, err.stack);
});
//configuration setup

// Init express app
const app = express();
app.use(express.static(__dirname + '/public/'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.use(cookieParser());

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);
//register new user
app.post('/register', (request, response)=>{
    let hashedPassword = sha256(request.body.password);
    const queryString = "INSERT INTO allusers (user_name, password, profile_photo, profile_caption) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [request.body.username, hashedPassword, request.body.profilephoto, request.body.caption];
    const userName = request.body.username;
    pool.query(queryString, values, (err, result)=>{
        if (err) {
            console.error('query register error:', err.stack);
            response.send('query error');
        } else {
            console.log("registration successful");
            console.log(result.rows[0]);
            loggedIn = true;
            response.cookie('userid', userName);
            response.cookie('loggedIn', loggedIn);
            response.redirect(`user/${userName}/add`);
        }
    });
});

app.get('/register', (request, response)=>{
    response.render('register')
});
//new photo
app.post('/user/:user_name/add', (request, response)=>{
    let userName = request.params.user_name
    const values = [request.body.photoname, parseInt(request.body.userid), request.body.location, request.body.photoimage, request.body.restaurant]
    const queryString = "INSERT INTO allphotos (image_name, user_id, location, img_link, img_restaurant) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    pool.query(queryString, values, (err, result)=>{
        if (err) {
            console.error('query new photo post error:', err.stack);
            response.send('query error');
        } else {
            console.log("photo posted successfully")
            response.redirect(`/user/${userName}`)
        }
    });
});
app.get('/user/:user_name/add', (request, response)=>{
    let values = [request.params.user_name];
    const queryString = "SELECT allusers.user_name, allusers.id from allusers WHERE allusers.user_name =$1"
    pool.query(queryString, values, (err,result)=>{
        if (err) {
            console.log('query new photo get error:', err.stack);
            response.send('query error');
        } else {
            let data = {
                username: result.rows
            }
            response.render('add', data);
        }
    });
});
//DELETE PHOTO
app.delete('/photo/:id', (request, response)=>{
    let values = [request.params.id];
    let user = request.body.username;
    const queryString = "DELETE FROM allphotos WHERE id = $1";
    pool.query(queryString, values, (err, result)=>{
        if (err) {
            console.error('query delete error:', err.stack);
            response.send('query error');
        } else {
            response.redirect(`/user/${user}`)
        }
    });
});
//LOGIN
app.post('/login', (request, response)=>{
    let hashedPassword = sha256(request.body.password);
    let values = [request.body.username];
    let userName = request.body.username;
    console.log("value is "+values);
    const queryString = "SELECT password FROM allusers WHERE user_name=$1";
    pool.query(queryString, values, (err, result)=>{
        if (err) {
            console.log('query login error:', err.stack);
            response.send('query error');
        } else {
            console.log(result);
            console.log(queryString);
            if (result.rows.length === 0) {
                console.log('user does not exists');
            } else if (result.rows[0].password !== hashedPassword) {
                console.log('entered wrong password');
            } else {
                console.log('login ok');
                loggedIn = true;
                console.log(userName);
                console.log(result.rows);
                response.cookie('userid', userName);
                response.cookie('loggedIn', loggedIn);
                response.redirect(`/user/${userName}`);

            }
        }
    });
});

app.get('/login', (request, response)=>{
    response.render('login')
});
//logout page
app.get('/logout', (request,response)=>{
    response.clearCookie('loggedIn');
    response.clearCookie('userid');
    response.redirect('/login');
});
//INDIVIDUAL PHOTO PAGE
app.get('/photo/:id', (request,response)=>{
    if (loggedIn === false) {
        response.redirect('/login');
    } else {
        let values = [parseInt(request.params.id)];
        const imageQueryString = "SELECT allphotos.*, allusers.user_name FROM allphotos INNER JOIN allusers ON (allphotos.user_id = allusers.id) WHERE allphotos.id=$1"
        pool.query(imageQueryString, values, (err, result)=>{
            if (err) {
                console.error('query one photo error:', err.stack);
                response.send('query error');
            } else {
                console.log('query result:', result.rows);
                let data = {
                    allphotos: result.rows,
                    username: request.cookies.userid
                }
                console.dir(data);
                response.render('photo', data);
            }
        });
    }
});
//INDIVIDUAL USER PAGE
app.get('/user/:user_name', (request,response)=>{
    if (loggedIn === false) {
        response.redirect('/login')
    } else {
        console.log("starting this user: "+request.params.user_name);
        let values = [request.params.user_name];
        const userQueryString = "SELECT allusers.user_name, allusers.profile_photo, allusers.profile_caption,  allphotos.* FROM allusers INNER JOIN allphotos ON (allusers.id = allphotos.user_id) WHERE allusers.user_name = $1 "
        pool.query(userQueryString, values, (err,result)=>{
            console.log("result row is");
            console.log(result.rows);
            if (result.rows.length === 0) {
                const queryString = "SELECT allusers.user_name, allusers.profile_photo, allusers.profile_caption FROM allusers WHERE allusers.user_name = $1"
                pool.query(queryString, values, (err,result)=>{
                    let data = {
                    username: request.cookies.userid,
                    oneUser: result.rows
                    }
                    response.render('noimage', data);
                });

            } else {
                console.log(result.rows);
                let data = {
                    username: request.cookies.userid,
                    oneUser: result.rows
                }
                response.render('user', data);
            }
        });
    }
});
///HOME PAGE
app.get('/home', (request,response)=>{
    if (loggedIn === false){
        response.redirect('/login');
    } else {
        const queryString = 'SELECT * from allphotos ORDER BY id ASC';
        pool.query(queryString, (err, result)=>{
            if (err){
                console.log('query home error:', err.stack);
                response.send('query error');
            } else {
                console.log('query result:', result.rows);
                let data = {
                    allphotos: result.rows,
                    username: request.cookies.userid
                }
            response.render('home', data);
            }
        });
    }
});
//////RE DIRECT TO LOGIN PAGE
app.get('/', (request, response)=>{
    response.redirect('/login');
});




 // * ===================================
 // * Listen to requests on port 3000
 // * ===================================
 // */
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log('Tuning into port ' + PORT));

let onClose = function() {

    console.log("closing");

    server.close(() => {

        console.log('Process stopped');

        pool.end(() => console.log('Close db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);