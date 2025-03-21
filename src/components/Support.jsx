import React from 'react';
import './Support.css';
import Copyright from './Copyright';
import { Container, Jumbotron } from 'react-bootstrap';

const Support = () => {
    return (
        <>
            <div className='support'>
                <Jumbotron style={{ backgroundColor: 'pink', padding: '2rem' }}>
                    <Container>
                        <h1>Support ARC</h1>
                        <p>
                            To support ARC, please send your donation via money
                            order or check to:
                        </p>
                        <address>
                            Asia Research Center
                            <br />
                            27611 La Paz Road
                            <br />
                            Laguna Niguel, CA 92677
                        </address>
                        <p>
                            For more information, please email us to{' '}
                            <a href='mailto:contactus@asiaresearchcenter.org'>
								contactus@asiaresearchcenter.org
                            </a>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <Copyright />
        </>
    );
};

export default Support;
