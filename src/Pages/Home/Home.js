import React from 'react';
import TimeDate from '../Shared/TimeDate';
import Banner from './Banner';
import Footer from './Footer';
import Package from './Package';
import Plan from './Plan';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plan></Plan>
            <h2 className='text-3xl font-bold text-center m-4'>Time Shideul</h2>
            <TimeDate></TimeDate>
            <Package></Package>
            <Footer></Footer>
        </div>
    );
};

export default Home;