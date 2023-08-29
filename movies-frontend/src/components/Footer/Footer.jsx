import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';




function Footer(){

    return (
        <Container fluid className="footer-wraper">
           <Container fluid className="footer-container">
               <Container fluid className="row">
                  <Container  fluid className="col-6" >FAQ</Container>
                  <Container fluid  className="col-6" >Privacy</Container>
                </Container>
                <Container fluid className="row" >
                <Container fluid className="col-6" >Terms of Use</Container>
                <Container fluid className="col-6" >Contact Us</Container>
                 </Container>
                <Container fluid className="row" >
                <Container  fluid className="col-6" >Account</Container>
                <Container  fluid className="col-6" >1 of 2</Container>
                </Container>
           </Container>

           <Container>
            <p className="credits text-center">Built by Javier Bastande</p>
           </Container>
        </Container>
    )
}

export default Footer;