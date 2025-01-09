import React, { useState, useRef } from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';

// Import images statically
import slide1 from '../assets/homepageSlides/20190602005752.jpg';
import slide2 from '../assets/homepageSlides/20190602010013.jpg';
import slide3 from '../assets/homepageSlides/20200812153335.jpg';
import slide4 from '../assets/homepageSlides/280270964.jpg';
import slide5 from '../assets/homepageSlides/20190602010222.jpg';
import slide6 from '../assets/homepageSlides/20200812214039.jpg';
import slide7 from '../assets/homepageSlides/20200812214839.jpg';

const Carousel = () => {
    const [autoplay, setAutoplay] = useState(true);
    const [icons, setIcons] = useState({ leftIcon: null, rightIcon: null });
    const sliderRef = useRef(null);

    const toggleAutoplay = () => setAutoplay(!autoplay);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
		slide7
    ];

    return (
        <div className='container-fluid' style={{ marginBottom: '30px' }}>
            <div className='row'>
                <div className='col-12' style={{ paddingTop: '20px' }}>
                    <RBCarousel
                        animation
                        autoplay={autoplay}
                        slideshowSpeed={5000}
                        leftIcon={icons.leftIcon}
                        rightIcon={icons.rightIcon}
                        ref={sliderRef}
                        version={4}>
                        {slides.map((src, index) => (
                            <div key={index} style={{ width: '100%' }}>
                                <img
                                    src={src}
                                    style={{ width: '100%', height: '100%' }}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </RBCarousel>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
