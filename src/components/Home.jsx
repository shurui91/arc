import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import Vision from './Vision';
import UpdateList from './UpdateList';
import PartnerImages from './PartnerImages';
import Footer from './Footer';
import Copyright from './Copyright';

const Home = () => {
    return (
        <>
            <div className='home'>
                <Carousel />
                <UpdateList />
                {/* <Vision /> */}
                <PartnerImages />
                <Footer />
                {/* <audio src={soundfile} autoPlay loop>
        Your browser does not support the audio element.
      </audio> */}
            </div>
            <Copyright />
        </>
    );
};

export default Home;
