var React = require("react");

class Userlists extends React.Component {
    render(){
        let y = this.props.userList.map(photo => {
            let url = "/photo/" + photo.id;
            return(
                <div className="card border-secondary">
                    <a className="img-link" href={url}>
                        <img src={photo.img_link} className="card-img-top img-fluid mx-auto" alt="Responsive image"/>
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{photo.image_name}</h5>
                      <p className="card-text">{photo.img_restaurant}</p>
                      <p className="card-text">{photo.location}</p>
                    </div>
                </div>
            )
        });
        return (
                <div className="card-columns">
                  {y}
                </div>
        )
    }
}

module.exports = Userlists;