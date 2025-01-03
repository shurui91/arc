import React from 'react';
import Profile from './Profile';

const Chiu = () => {
    const bioContent = [
        'Brian holds a Ph.D. in Theology (2024) from Talbot School of Theology, Biola University, and an M.A. in Theology (2017) from Wheaton College. His research focuses on theological education and the history of Christianity in China. Currently, he serves as a researcher in Southern California.',
        "A sampling of Brian’s recent publications include “The Sinicization of Christian Pietism: Jia Yuming’s and Watchman Nee’s Approaches to the Problem of Rationality Versus Spirituality” (2023), “Beyond Localization: Theological Education in China and Watchman Nee’s Concepts and Practices in Spiritual Education” (2024), and 'Deification as a Theological Foundation and Goal for Formational Theological Education' (2024).",
        'Brian also co-translated Entrance to the Kingdom by Robert Govett into Chinese in 2021.',
    ];
    return (
        <Profile
            name='Brian Siu-Kit Chiu'
            title='Academic Researcher'
            imgSrc={require('../../assets/images/Chiu.png')}
            bioContent={bioContent}
        />
    );
};

export default Chiu;
