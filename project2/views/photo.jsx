var React = require("react");

class Photo extends React.Component {
    render() {
        let photo = this.props.allphotos[0];
        let url = "/user/" + photo.user_name;
        let photoId = photo.id;
        let userName = photo.user_name;
        let userId = this.props.username;
        if (userId === userName){
            return (
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
                              <a className="x" href={"/user/"+userId}>
                                <button className="btn btn-outline-light mr-2" type="button">{userId}</button>
                              </a>
                              <a className="y" href="/logout">
                                <button className="btn btn-outline-light mr-4" type="button">LOGOUT</button>
                              </a>
                          </form>
                        </nav>
                        <div className="card border-secondary w-50 mx-auto">
                            <a className="img-link" href={url}>
                                <img src={photo.img_link} className="card-img-top img-fluid" alt="Responsive image"/>
                            </a>
                            <div className="card-body">
                              <h5 className="card-title">{photo.image_name}</h5>
                              <p className="card-text">{photo.img_restaurant}</p>
                              <p className="card-text">{photo.location}</p>
                            </div>
                            <div className="card-footer">
                              <form>
                                  <a className="name-link" href={url}>{photo.user_name}</a>
                                  <input type="hidden" name="username" value={userName}/>
                                  <button type="submit" className="btn btn-danger float-right" formMethod="POST" formAction={"/photo/"+photoId+"?_method=delete"}>Delete</button>
                              </form>
                            </div>
                        </div>
                    </body>
                </html>
                )
        } else {
            return (
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
                              <a className="x" href={"/user/"+userId}>
                                <button className="btn btn-outline-light mr-2" type="button">{userId}</button>
                              </a>
                              <a className="y" href="/logout">
                                <button className="btn btn-outline-light mr-4" type="button">LOGOUT</button>
                              </a>
                          </form>
                        </nav>
                        <div className="card border-secondary w-50 mx-auto">
                            <a className="img-link" href={url}>
                                <img src={photo.img_link} className="card-img-top img-fluid" alt="Responsive image"/>
                            </a>
                            <div className="card-body">
                              <h5 className="card-title">{photo.image_name}</h5>
                              <p className="card-text">{photo.img_restaurant}</p>
                              <p className="card-text">{photo.location}</p>
                            </div>
                            <div className="card-footer">
                              <form>
                                  <a className="name-link" href={url}>{photo.user_name}</a>
                                  <input type="hidden" name="username" value={userName}/>
                              </form>
                            </div>
                        </div>
                    </body>
                </html>
            )
        }
    }
}

module.exports = Photo;