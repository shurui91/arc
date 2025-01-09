import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerContent'>
                    <div className='footerRow'>
                        <div className='footerColumn'>
                            <p className='contactTitle'>CONTACT US</p>
                            <ul className='footerList'>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        size='lg'
                                    />
                                    <span>&nbsp;abrahamtho@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className='footerColumn'>
                            <p className='contactTitle'>PARTNERS</p>
                            <div className='d-flex align-items-center'>
                                <img
                                    style={{ width: '100%' }}
                                    src={require('../assets/images/20200821224340.png')}
                                    alt='Partner Logo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
