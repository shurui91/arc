import React, { Component } from 'react';
import './2008symposium.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import SymposiumCarousel from './2008Carousel';
import Footer from '../Footer';

class Symposium extends Component {
    render() {
        return (
            <div>
                <div className="symposium">
                    <h1>2008 A Symposium for Pastors</h1>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={7}>
                                <SymposiumCarousel />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={5}>
                                <div style={{ textAlign: 'center' }}>
                                    <Link to="/events">
                                        <Button type="button">Back</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Symposium;
