var React = require("react");

class Login extends React.Component {
    render() {
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
                          <a className="x" href="/register">
                            <button className="btn btn-outline-light mr-2" type="button">REGISTER</button>
                          </a>
                          <a className="y" href="/login">
                            <button className="btn btn-outline-light mr-4" type="button">LOGIN</button>
                          </a>
                      </form>
                    </nav>
                    <h3 className="text-center">Login</h3>
                    <form method="POST" action="/login?_method=POST" className="text-center">
                        <p>User Name</p><input name="username" size="25"/>
                        <p>Password</p><input name="password" size="25"/>
                        <p><input value="Submit" type="submit"/></p>
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = Login;