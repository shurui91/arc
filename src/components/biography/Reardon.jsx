import React from 'react';
import Profile from './Profile';

const Reardon = () => {
    const bioContent = [
        'Michael M. C. Reardon has established himself as a distinguished author, speaker, and thought leader in Christian academia. Since 2019, he has served as a Professor of New Testament and Historical Theology at Canada Christian College and School of Graduate Theological Studies. His leadership as the Academic Dean of the school since 2020 underscores his deep commitment to fostering rigorous theological education. Michael has authored several book reviews and journal articles and is regularly invited for guest lectures and podcast interviews. Most recently, he co-edited Transformed into the Same Image: Constructive Investigations into the Doctrine of Deification (IVP Academic, 2024).',
        'In December 2020, Michael was appointed as the Director of the Eckstein Institute for Jewish and Christian Relations, an academic think tank supported by multiple grants, such as the International Fellowship of Christians and Jews Research Institute Development Grant (2020–2022) and the Center for Jewish-Christian Understanding and Cooperation Research, Education, and Creative Scholarship Grant (2023). His projects at the institute have included organizing multiple symposia related to Jewish-Christian dialogue, creating curriculum for seminaries across North America on Judeo-Christian theology, and a forthcoming publication entitled The Seed of Abraham: Intersections of Jewish and Christian Thought (Wipf & Stock, expected in fall 2025).',
        'Previously, Michael served as a Campus Chaplain at the University of Toronto (2019–2024) and a Campus Outreach Coordinator for an international student ministry. In the latter role he coordinated efforts across seven university campuses from 2012 to 2020.',
        'As of December 2024, Michael joined the Asia Research Center to work as a Senior Religious Policy Analyst. In this role Michael offers valuable insights into religious policy to help shape diplomatic and legislative efforts between the United States and Asian communities, both domestically and abroad.',
        'Outside of the workplace, Michael enjoys hiking, basketball, and board games with his wife and three children.',
    ];
    return (
        <Profile
            name='Michael M. C. Reardon'
            title='Senior Research Policy Analyst'
            imgSrc={require('../../Reardon.png')}
            bioContent={bioContent}
        />
    );
};

export default Reardon;
