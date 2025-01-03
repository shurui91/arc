import React from 'react';
import './Institute.css';
import Copyright from './Copyright';
import ImageOne from '../assets/institute/20190602010013.jpg';
import ImageTwo from '../assets/institute/20190602010222.jpg';
import ImageThree from '../assets/institute/20200812153335.jpg';
import ImageFour from '../assets/institute/20200812191222.jpg';
import ImageFive from '../assets/institute/20200812214039.jpg';
import ImageSix from '../assets/institute/20200812214814.jpg';
import ImageSeven from '../assets/institute/20200812214839.jpg';

const Institute = () => {
    const researchPapers = [
        {
            title: 'Religious Policy in Modern Asia',
            url: '/pdfs/religious-policy-modern-asia.pdf',
        },
        {
            title: 'Interfaith Dialogue Strategies',
            url: '/pdfs/interfaith-dialogue-strategies.pdf',
        },
        {
            title: 'Religious Freedom and Policy Trends',
            url: '/pdfs/religious-freedom-policy-trends.pdf',
        },
        {
            title: 'The Role of Theology in Diplomacy',
            url: '/pdfs/theology-in-diplomacy.pdf',
        },
    ];

    const images = [
        {
            src: ImageOne,
            alt: 'Institute Image 1',
        },
        {
            src: ImageTwo,
            alt: 'Institute Image 2',
        },
		{
			src: ImageThree,
			alt: 'Institute Image 3',
		},
		{
			src: ImageFour,
			alt: 'Institute Image 4',
		},
		{
			src: ImageFive,
			alt: 'Institute Image 5',
		},
		{
			src: ImageSix,
			alt: 'Institute Image 6',
		},
		{
			src: ImageSeven,
			alt: 'Institute Image 7',
		}
    ];

    return (
        <>
            <div className='institute-container'>
                <h1>Religious Policy Institute</h1>
				<div className='image-gallery'>
                    {images.map((image, index) => (
                        <div key={index} className='image-item'>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
                <div className='introduction'>
                    <p>
                        The Religious Policy Institute is a leading think tank
                        dedicated to exploring the intersections of theology,
                        religious freedom, and public policy. Since its
                        founding, the institute has focused on fostering
                        dialogue, conducting rigorous research, and shaping
                        informed policies that promote mutual understanding and
                        coexistence among diverse religious communities.
                    </p>
                    <p>
                        Our mission is to advance scholarship in religious
                        studies while addressing contemporary challenges in
                        interfaith relations, religious education, and global
                        diplomacy. Through publications, symposia, and
                        collaborative projects, the institute provides a
                        platform for scholars, policymakers, and religious
                        leaders to exchange ideas and insights.
                    </p>
                </div>

                <div className='research-papers'>
                    <h2>Research Papers</h2>
                    <ul>
                        {researchPapers.map((paper, index) => (
                            <li key={index}>
                                <a
                                    href={paper.url}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {paper.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Institute;
