import React from 'react';
import './Contactus.css';

const Contactus = () => {
    return (
        <div className='contactus-container'>
            <h2 className='contactus-title'>Contact Us</h2>
            <p className='contactus-text'>
                For any inquiries, please send us an email at:
                <br />
                <a
                    href='mailto:contactus@asiaresearchcenter.org'
                    className='contactus-email'>
                    contactus@asiaresearchcenter.org
                </a>
            </p>
        </div>
    );
};

export default Contactus;
