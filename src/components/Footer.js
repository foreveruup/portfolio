import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/amir-ai/"><img src={navIcon1} alt="Linkedin" /></a>
                            <a href="https://github.com/foreveruup"><img src={navIcon2} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/jiyembayev.a/profilecard/?igsh=MThnb2tkdm9tbThjcQ=="><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}