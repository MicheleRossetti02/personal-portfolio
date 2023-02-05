import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />

                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon mt-3">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={github} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p><i className="fas fa-copyright fa-sm fa-fw"></i> CopyRight 2023. All Right Reserved Michele Rossetti</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}