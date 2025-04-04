import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

const ContactInfo = ({ name, job, phone, email, imgSrc, bio }) => (
    <div className='contact-info'>
        <div className='contact-image'>
            <img src={imgSrc} alt={name} className='contact-img' />
        </div>
        <div className='contact-details'>
            <p className='contact-name'>
                <h3 className='highlight-name'>{name}</h3>
            </p>
            <p className='job'>{job}</p>
            <p className='phone'>{phone}</p>
            <a href={`mailto:${email}`} className='contactus-email'>
                {email}
            </a>
            {bio && (
                <Link to={bio} className='bio-link'>
                    Biography
                </Link>
            )}
        </div>
    </div>
);

const Team = () => {
    return (
        <>
            <h1 className='research-team'>Research Team</h1>
            <div className='team-container'>
                <ContactInfo
                    name='Abraham Ho'
                    job='President'
                    email='abraham.ho@asiaresearchcenter.org'
                    imgSrc={require('../assets/images/Ho.png')}
                />
                <ContactInfo
                    name='Charles Zhang'
                    job='Treasurer'
                    imgSrc={require('../assets/images/Zhang.jpg')}
                    bio='/zhang'
                />
                <ContactInfo
                    name='Jim Waldrup'
                    job='Director of Religious Policy'
					email='jim.waldrup@asiaresearchcenter.org'
                    imgSrc={require('../assets/images/Waldrup.png')}
                    bio='/waldrup'
                />
                <ContactInfo
                    name='Michael M. C. Reardon'
                    job='Senior Research Policy Analyst'
					email='michael.reardon@asiaresearchcenter.org'
                    imgSrc={require('../assets/images/Reardon.png')}
                    bio='/reardon'
                />
                <ContactInfo
                    name='Brian Siu-Kit Chiu'
                    job='Academic Researcher'
					email='brian.chiu@asiaresearchcenter.org'
                    imgSrc={require('../assets/images/Chiu.png')}
                    bio='/chiu'
                />
                <ContactInfo
                    name='Jacob Chengwei Feng'
                    job='Academic Researcher'
					email='jacob.feng@asiaresearchcenter.org'
                    imgSrc={require('../assets/images/Feng.png')}
                    bio='/feng'
                />
            </div>
        </>
    );
};

export default Team;
