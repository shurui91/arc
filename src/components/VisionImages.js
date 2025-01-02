import React from 'react'; // Import React

const VisionImages = () => {
    return (
        <div>
            <img
                style={{ width: '100%' }}
                src={require('../assets/images/ourVision.jpg')}
                alt='Our Vision' // Added alt text for better accessibility
            />
        </div>
    );
};

export default VisionImages;
