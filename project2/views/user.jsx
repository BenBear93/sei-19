var React = require("react");
var Userlist = require("./userlist")

class User extends React.Component {
    render(){
        let user = this.props.oneUser;
        let userId = this.props.username;
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                </head>
                <body>
                    <nav className="navbar sticky-top navbar-light bg-dark">
                      <a className="navbar-brand text-white" href="/home">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/foodie-1594981-1352483.png" width="30" height="30" className="d-inline-block align-top ml-4" alt=""/>
                        FOODIE
                      </a>
                      <form className="form-inline">
                          <a className="x" href={"/user"+userId}>
                            <button className="btn btn-outline-light mr-2" type="button">{userId}</button>
                          </a>
                          <a className="y" href="/logout">
                            <button className="btn btn-outline-light mr-4" type="button">LOGOUT</button>
                          </a>
                      </form>
                    </nav>
                    <div className="row">
                        <div className="col-4">
                            <img src={user[0].profile_photo} className="px-4 rounded-circle mx-auto d-block img-fluid  py-3" alt="Responsive image"/>
                        </div>
                        <div className="col-6 jumbotron jumbotron-fluid bg-transparent">
                            <div className="container">
                                <h1 className="display-4">{user[0].user_name}</h1>
                                <p className="lead">{user[0].profile_caption}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 bg-light">
                        <Userlist userList={user}>
                        </Userlist>
                    </div>
                    <nav className="footer navbar fixed-bottom navbar-light  bg-white">
                        <a className="mx-auto" href={"/user/"+user[0].user_name+"/add"}>
                            <button className="btn btn-outline-warning mx-auto" type="button">ADD</button>
                        </a>
                    </nav>
                </body>
            </html>
            )
    }
}

module.exports = User;