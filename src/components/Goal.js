import React from 'react';
import './Goal.css';
import Copyright from './Copyright';
import { ListGroup } from 'react-bootstrap';

const Goal = () => {
    const goals = [
        'Bridge the gap between the East and West in targeted areas such as culture, language, medicine, and religion.',
        'Establish an eminent research and education center to train scholars and produce world-class and impactful research.',
        'Promote an increased awareness and knowledge between the East and West.',
        'Remove/minimize misunderstandings and biases currently upheld by the general public.',
        'Propagate/disseminate truths to society in general and scholars in particular.',
        'Teach relevant topics in the Asian context to businessmen and scholars.',
    ];

    return (
        <>
            <div className='about'>
                <h2>
                    The goal of ARC is to provide a platform by setting up an
                    institute to:
                </h2>
                <ListGroup>
                    {goals.map((goal, index) => (
                        <ListGroup.Item key={index}>{goal}</ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <Copyright />
        </>
    );
};

export default Goal;
