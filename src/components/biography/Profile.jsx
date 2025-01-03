import React from 'react';
import './Profile.css';

const Profile = ({ name, title, imgSrc, bioContent }) => {
    return (
        <div className='profile-container'>
            <div className='bio-header'>
                <img src={imgSrc} alt={name} className='profile-image' />
                <div className='profile-header-content'>
                    <h1 className='profile-name'>{name}</h1>
                    <h3 className='profile-title'>{title}</h3>
                </div>
            </div>
            <div className='bio-details'>
                {bioContent.map((paragraph, index) => (
                    <p key={index} className='bio-paragraph'>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Profile;
