import React from 'react';
import Profile from './Profile';

const Feng = () => {
    const bioContent = [
        'Jacob Chengwei Feng is a Lecturer of Religious Studies at the School of Humanities of UC Irvine and a Postdoctoral Scholar at the Center for Missiological Research (CMR) at Fuller Theological Seminary. He holds a Ph.D. degree in Theological Studies from Fuller Theological Seminary.',
        'He is the Leader of the Theology Interest Group at the Society for Pentecostal Studies and a Fellow at Oxford Interfaith Forum. He received the David Hubbard Award for his distinguished dissertation and the ARTFinc prize for his article published in the journal Christian Perspective of Science and Technology.',
        'Jacob has published over twenty articles in academic journals such as the Scottish Journal of Theology, Zygon, Dialog, Religions, Journal for the Study of Christian Culture, Journal of the Evangelical Theological Society, Christian Perspectives on Science and Technology (New Series, Australia), Journal of Chinese Theology (China), International Journal of Sino-Western Studies, Journal for Research of Christianity in China, and Foreign Language Research in China.',
        'His research interests include systematic theology, Chinese theology, Pentecostal theology, theology-religion-science trialogue, and ecumenical and interfaith dialogue with world religions.',
    ];
    return (
        <Profile
            name='Jacob Chengwei Feng'
            title='Academic Researcher'
            imgSrc={require('../../assets/images/Feng.png')}
            bioContent={bioContent}
        />
    );
};

export default Feng;
