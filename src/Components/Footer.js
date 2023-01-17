import { Container } from "react-bootstrap"

import ScrollToTop from "react-scroll-to-top"

const Footer = () => {
    return(
        <>
        <Container>
            <p style={{textAlign : "center" ,color:"#F55A5A",fontSize : "13px",fontWeight:"bold"}}> © 2023 || Developed By Sabari. All rights reserved.</p>
        </Container>
         <ScrollToTop smooth top="100" color="#F55A5A" />
         </>
    )
}

export default Footer