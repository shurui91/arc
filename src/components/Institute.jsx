import React from 'react';
import './Institute.css';
import Copyright from './Copyright';
import ImageOne from '../assets/institute/images/20190602010222.jpg';
import ImageTwo from '../assets/institute/images/20200812153335.jpg';
import ImageThree from '../assets/institute/images/20200812191222.jpg';
import ImageFour from '../assets/institute/images/20200812214039.jpg';
import ImageFive from '../assets/institute/images/20200812214814.jpg';
import ImageSix from '../assets/institute/images/20200812214839.jpg';
import PaperOne from '../assets/institute/pdfs/Vision-of-Spiritual-Education.pdf';
import PaperTwo from '../assets/institute/pdfs/Translation-And-Interpretation.pdf';
import PaperThree from '../assets/institute/pdfs/Gospel.pdf';

const Institute = () => {
    const researchPapers = [
        {
            title: '超越本土化：神學教育在中國與倪柝聲屬靈教育理念和實踐初探',
            url: PaperOne,
        },
        {
            title: '譯經與釋經的關係：以羅馬一章十七節“得生”為例',
            url: PaperTwo,
        },
        {
            title: '追尋更好的譯本：倪柝聲的聖經及其翻譯觀初探',
            url: PaperThree,
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
                        The Religious Policy Institute (RPI) is a prominent
                        department of the Asian Research Center (ARC) and is
                        dedicated to promoting religious freedom—especially
                        within Asian contexts—and fostering collaboration among
                        diverse communities. With a focus on advancing global
                        understanding and respect for different faiths, the
                        Institute works to bridge gaps between various religious
                        groups, political entities, non-governmental
                        organizations (NGOs), and civil society. Through
                        research, dialogue, and policy advocacy, RPI plays a
                        pivotal role in shaping environments where religious
                        diversity can thrive peacefully and equitably.
                    </p>
                    <p>
                        At the heart of RPI’s mission is the development of
                        comprehensive religious policy recommendations aimed at
                        supporting sustainable and inclusive solutions for
                        issues related to religious freedom. The Institute
                        actively engages with policymakers, international
                        organizations, and religious leaders to ensure that the
                        voices of all religious communities are heard and
                        considered in legislative processes. By offering
                        evidence-based insights and strategic guidance, RPI
                        strives to influence both local and global conversations
                        around religion, human rights, and social justice.
                    </p>
                    <p>
                        Through its research, public initiatives, and
                        educational efforts, the Religious Policy Institute aims
                        to build a more informed and compassionate world.
                        Whether through crafting tailored policy advice,
                        organizing interfaith dialogues, or contributing to
                        scholarly discourse, RPI remains committed to its vision
                        of fostering mutual respect and cooperation across
                        religious lines. The Institute continues to serve as a
                        crucial platform for advocacy, collaboration, and
                        knowledge-sharing in the global pursuit of religious
                        freedom.
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
