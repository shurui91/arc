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
                                    <span>&nbsp;contactus@asiaresearchcenter.org</span>
                                </li>
                            </ul>
                        </div>
                        <div className='footerColumn'>
                            <p className='contactTitle'>PARTNERS</p>
                            <div className='d-flex align-items-center'>
                                <img
                                    src={require('../assets/images/ocmd_logo.png')}
                                    alt='ocmd_logo'
                                />
								<img
                                    src={require('../assets/images/rieec_logo.png')}
                                    alt='ocmd_logo'
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
