import React from 'react';
import './AboutUs.css';
import Team from './Team';
import Copyright from './Copyright';

const newsData = [
    {
        title: 'Ellis Island Medal of Honor',
        imgSrc: require('../assets/images/neco.jpg'),
        description: [
            'ARC Founder Charlie Zhang was the recent recipient of the coveted Ellis Island Medal of Honor.',
            'The award pays homage to major contributions by American immigrants to the United States. The Ellis Island Medals of Honor, and its recipients are read into the Congressional Record.',
            'Past medalists include six Presidents, as well as Nobel Prize winners and leaders of industry, education, the arts, sports, and government. ARC and its members are dedicated to spreading knowledge, education, charitable contributions, benevolent public policy, and economic growth.',
        ],
    },
    {
        title: 'Asia Research Center',
        imgSrc: require('../assets/images/arcLogo.jpg'),
        description: [
            'ARC directives are to compile, syntheize and analyze international issues in areas of commerce, religion, government, policy and philapthropic​ ​areas. The coverage and awareness of these issues can help to provide a clearer picture as well as insight for stakeholders both in Asia and the​ ​United States. ARC believes Multilateral cooperation and good will comes​ ​from research and relationship based mutual understanding.',
        ],
    },
    {
        title: 'Asia Youth And Education',
        imgSrc: require('../assets/images/fudan.jpg'),
        description: [
            'ARC is very active in their financial sponsorship and advisory support to institutions such as the New Century International College in Jiangsu.',
            "The goal of ARC's involvement in this and other youth and educational institutions is to widen the cultural and educational bridge between Asia and the United States.",
        ],
    },
    {
        title: 'Pacific Symphony',
        imgSrc: require('../assets/images/pacific.jpg'),
        description: [
            'Charlie Zhang has been on the Board of Directors for the Pacific Symphony of Orange County, his involvement includes financial contributions, working with the students and countless hours of mentorship. Most recently Charlie will be hosting a trip for 100 of the youth orchestra students on a trip to Asia to gain a further understanding of the cultural, social and religious environment in Asia, to foster music appreciation and greater cultural understanding for the next generation of United State and Chinese leaders.',
        ],
    },
    {
        title: 'TED X',
        imgSrc: require('../assets/images/tedx.jpg'),
        description: [
            'ARC founder Charles Zhang was recently featured as a speaker in the internationally renoun TEDX, his speech was given at La Sierra University and is spreading throughout the internet. This heartfelt presentation is directed toward anyone seeking to grow and advance in what is often challenging conditions. "The Power of One Moment" -- this message proves that anything is possible when one can take the best of both Eastern and Western cultures.',
            'His story is an inspiration to many Asian youth who will follow in his footsteps and gives students and citizens alike a chance to see what it takes to make it in this country. Getting a clearer picture of what citizens in the United States and abroad want is important for policymakers, because public attitudes will shape prospects for effective multilateral cooperation in the twenty-first century.',
        ],
    },
];

const NewsItem = ({ title, imgSrc, description }) => (
    <div className='comments-item'>
        <img className='comments-image' src={imgSrc} alt={title} />
        <div className='comments-content'>
            <h5>{title}</h5>
            {description.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    </div>
);

const AboutUs = () => (
    <>
        <div className='partners-container'>
            <Team />
            <h1 className='about-us'>About Us</h1>
            {newsData.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    imgSrc={news.imgSrc}
                    description={news.description}
                />
            ))}
        </div>
        <Copyright />
    </>
);

export default AboutUs;
