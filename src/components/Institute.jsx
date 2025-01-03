import React from 'react';
import './Institute.css';
import Copyright from './Copyright';

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

    return (
        <>
            <div className='institute-container'>
                <h1>Religious Policy Institute</h1>
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
