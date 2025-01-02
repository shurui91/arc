import React from 'react'; // Import React
import VisionImages from './VisionImages'; // Import VisionImages component
import './Vision.css'; // Import CSS for styling

const Vision = () => {
    return (
        <div className='vision'>
            <div className='vision-content'>
                <VisionImages />
            </div>
        </div>
    );
};

export default Vision;
