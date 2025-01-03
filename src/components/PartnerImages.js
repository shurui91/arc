import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import './PartnerImages.css';

const PartnerImages = () => {
    return (
        <div>
            <Link to='/partners'>
                {' '}
                {/* Link to the /partners page */}
                <img
                    className='partner-image'
                    src={require('../assets/images/20190601193138.jpg')}
                    alt='OC Music Dance'
                />
            </Link>
        </div>
    );
};

export default PartnerImages;
