import React, { Component } from 'react';
import './PartnerImages.css';
import { Container, Row, Col } from 'react-bootstrap';

class PartnerImages extends Component {
    render() {
        return (
            <div className="partnersImage">
                <Row>
                    <Col sm={12}>
                        <img src={require('../scholarship.jpg')}
                        style={{ width: '100%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <img src={require('../enrichment.jpg')}
                         />
                    </Col>
                    <Col xl={6}>
                        <img src={require('../happy-violin-girls.jpg')}
                         />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PartnerImages;