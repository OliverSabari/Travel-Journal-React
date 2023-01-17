import { Card } from "react-bootstrap"

const TravelCards = (props) => {

    return (
        <Card className="card-div">
           
            <div className="img-div">

                <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + `/Images/${props.coverImg}`}
                    className="travel-img"
                />

            </div>

            <div className="content-div">

                <div className="content-top-div">

                    {/* <img 
                        src={process.env.PUBLIC_URL + "/Images/location.png"}
                        alt="location.png"
                        className="location-img"
                    /> */}

                    <p className="location-text">
                    📍 {props.location.toUpperCase()}
                    </p>

                    <p className="map-link">
                        <a href={props.map} target="_blank" rel="noreferrer" >
                            View on Google Maps
                        </a>
                    </p>

                </div>

                <h2> 
                    {props.title}
                </h2>

                <p className="travel-date">
                     {props.date.from} - {props.date.to}
                </p>

                <p className="travel-description">
                    {props.description}
                </p>

            </div>
            
        </Card>
    )
}

export default TravelCards