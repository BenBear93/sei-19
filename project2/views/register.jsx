var React = require("react");

class Register extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                    <script>UPLOADCARE_PUBLIC_KEY = "3f350d77cacd8f87b6a4";</script>
                    <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.min.js" charset="utf-8"></script>
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
                        <form method="POST" action="/register?_method=POST" className="text-center">
                            <div className="form-group row">
                                <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                  <input type="username" className="form-control" name="username" id="inputUsername3" placeholder="Username"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                  <input type="password" className="form-control" name="password" id="inputPassword3" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputCaption3" className="col-sm-2 col-form-label">Caption</label>
                                <div className="col-sm-10">
                                  <input type="caption" className="form-control" name="caption" id="inputCaption3" placeholder="Caption"/>
                                </div>
                            </div>
                            <div className="form-group row">
                               <label htmlFor="inputProfilephoto3" className="col-sm-2 col-form-label">Profile Photo</label>
                               <div className="col-sm-10">
                                <input type="profilephoto" className="form-control" name="profilephoto" id="inputProfilephoto3" placeholder="Profile photo image link"/>
                               </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <p><input value="Submit" type="submit"/>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="container mt-4">
                      <div class="float-right mb-4 mt-2">
                        <input type="hidden" role="uploadcare-uploader" id="uploadedImage"/>
                      </div>

                      <h2 class="mb-4">Simple Image Hosting</h2>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Register;