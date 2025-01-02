import React from 'react';
import './Team.css';
import Copyright from './Copyright';

const ContactInfo = ({ name, job, phone, email, imgSrc }) => (
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
        </div>
    </div>
);

const Team = () => {
    return (
        <>
			<h1 className='research-team'>Research Team</h1>
            <div className='team-container'>
                <ContactInfo
                    name='Charles Zhang'
                    job='Treasurer'
                    phone='949-201-8270'
                    email='charleszhang58@yahoo.com'
                    imgSrc={require('../Zhang.jpg')}
                />
                <ContactInfo
                    name='Abraham Ho'
                    job='Director of Research'
                    phone='888-5011-ARC (272) ext. 102'
                    email='abrahamtho@gmail.com'
                    imgSrc={require('../Ho.png')}
                />
				<ContactInfo
                    name='Jim Waldrup'
                    job='Director of Religious Policy'
                    imgSrc={require('../Waldrup.png')}
                />
				<ContactInfo
                    name='Michael M. C. Reardon'
                    job='Senior Research Policy Analyst'
                    imgSrc={require('../Reardon.png')}
                />
				<ContactInfo
                    name='Brian Siu-Kit Chiu'
                    job='Academic Researcher'
                    imgSrc={require('../Chiu.png')}
                />
				<ContactInfo
                    name='Jacob Chengwei Feng'
                    job='Academic Researcher'
                    imgSrc={require('../Feng.png')}
                />
            </div>
			<Copyright />
        </>
    );
};

export default Team;
