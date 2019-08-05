var React = require("react");

class Add extends React.Component {
    render() {
        console.log(this.props.username[0].user_name);
        console.log(this.props.username[0].id);
        let userName = this.props.username[0].user_name;
        let userId = this.props.username[0].id;
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
                    <div className="container w-75 p-3">
                        <form method="POST" action={"/user/"+userName+"/add?_method=POST"} className="text-center">
                            <div className="form-group row">
                                <label for="inputPhotoname3" className="col-sm-2 col-form-label">Name of photo</label>
                                <div className="col-sm-10">
                                  <input type="photoname" className="form-control" name="photoname" id="inputPhotoname3" placeholder="Give your photo a name"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputLocation3" className="col-sm-2 col-form-label">Location</label>
                                <div className="col-sm-10">
                                  <input type="location" className="form-control" name="location" id="inputLocation3" placeholder="Central, North, South, East or West?"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputRestaurant3" className="col-sm-2 col-form-label">Restaurant</label>
                                <div className="col-sm-10">
                                  <input type="restaurant" className="form-control" name="restaurant" id="inputRestaurant3" placeholder="Name of the restaurant"/>
                                </div>
                            </div>
                            <div className="form-group row">
                               <label for="inputImage3" className="col-sm-2 col-form-label">Image Link</label>
                               <div className="col-sm-10">
                                <input type="photoimage" className="form-control" name="photoimage" id="inputImage3" placeholder="Image Address Link"/>
                               </div>
                            </div>
                            <input type="hidden" name="userid" value={userId}/>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <p><input value="Submit" type="submit"/>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Add;