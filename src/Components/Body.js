
import { Container } from "react-bootstrap"
import { TravelData } from "../Config/data"


import TravelCards from "./TravelCards"

const Body = () => {


    return (
        <>
            <Container className="body-div">
                {
                    TravelData.map(data => {
                        return (
                            <TravelCards key={data.id} {...data} />
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Body