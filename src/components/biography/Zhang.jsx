import React from 'react';
import Profile from './Profile';

const Zhang = () => {
    const bioContent = [
        'Charles Zhang, founder of Pick Up Stix, embodies the American Dream – he started with nothing but founded the leading Asian fast-casual dining restaurant chain in the country.',
        'Charles Zhang immigrated to the United States in 1980 from Shanghai, China at the age of 25. He did not speak English and had only US $20.00. Within four years, after working as a liquor store clerk, busboy, waiter and gas stations, he had learned to speak English and saved enough money to launch his first restaurant, Shanghai Charlie’s, in Capistrano Beach, California. In 1989 he opened his second full-service restaurant, Stix, in Laguna Niguel, California.',
        'With the success of the Stix restaurant, it became evident that he was a savvy businessman and an up-and-comer in the restaurant industry. The first Pick Up Stix restaurant opened in 1990 in Rancho Santa Margarita, California.',
        'Within a decade, he had built an empire with more than 100 Pick Up Stix locations, a warehouse and Distribution Company, and a commissary named Cal International Foods, Inc. that streamlined the preparation of ingredients ensuring that each restaurant serves the freshest products available with quality and consistency.',
        'Recognizing the potential for enormous growth by being part of a large well-respected restaurant organization, he sold his restaurant businesses and the distribution center to TGIF on June 30, 2001.',
        'Among his many achievements, he was named “Entrepreneur of the Year” in 1997 by accounting firm of Ernst and Young and received the “Spirit of Life” award in 2002 from the City of Hope. In addition, he received “Distinguished Business for Science and Technology” award in May 2008, and “Beijing International Entrepreneur of the Year” in October, 2008.',
        'He retired from Pick Up Stix as the President and CEO on 5/31/2003; however, he continues to serve as a consultant and advisor for PUS. He has divested all his interests in PUS to expand his real estate development company, Zion Enterprises, LLC. He and his team members have successfully acquired a few pieces of land and redeveloped them into medical buildings, office buildings, storages, residential, retail shopping centers, and RV Golf Park. All these projects turned out to be the best investment return.',
        'In addition, he is the CEO & President of Aseptic Solutions USA, which is a state-of-the-art aseptic beverage bottle designed to manufacture a better tasting and longer lasting product with extended shelf life that is capable of keeping food safe, fresh, and flavorful for over a year without refrigeration or preservatives. The company’s anchor customers are Bolthouse, Naked Juice, Sambazon, and others...',
        'He resides in Laguna Niguel with his wife and two sons. Both he and his wife are very active in their church life. He has been devoting his time helping his churches to develop sanctuary meeting halls in San Juan Capistrano, Irvine, Cerritos, and New Jersey.',
    ];
    return (
        <Profile
            name='Charles Zhang'
            title='Treasurer'
            imgSrc={require('../../assets/images/Zhang.jpg')}
            bioContent={bioContent}
        />
    );
};

export default Zhang;
