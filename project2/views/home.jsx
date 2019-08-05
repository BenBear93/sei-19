var React = require("react");
var Photolist = require("./photolist")

class Home extends React.Component {
    render() {
        let x = this.props.allphotos;
        let userId = this.props.username;
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="style.css"></link>
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
                    <div>
                        <div className="pt-5">
                            <p className="font-weight-bold text-center h1">FOODIE</p>
                            <p className="font-weight-light text-center text-muted">Capture, Eat, Share</p>
                        </div>
                    </div>
                    <div className="p-5 bg-light">
                        <Photolist photoList={x}></Photolist>
                    </div>
                </body>
            </html>
            );
    }
}

module.exports = Home;