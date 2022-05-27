import React from 'react';
import TimeDate from '../Shared/TimeDate';
import WholeSellItems from '../WholeSellItems/WholeSellItems';
import AllReviews from './AllReviewa';
import Banner from './Banner';
import Package from './Package';
import Plan from './Plan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plan></Plan>
            <WholeSellItems></WholeSellItems>
            <hr></hr>
            <h2 className='review-btn btn text-white w-96 hover:text-xl rounded-full bg-gradient-to-r from-cyan-800 to-gray-800 text-center ml-40 mt-6 font-bold'>All Review</h2>
            <AllReviews></AllReviews>
            <h2 className='text-3xl text-gray-800 font-bold text-center m-4'>Time Shideul</h2>
            <TimeDate></TimeDate>
            <h2 className='text-3xl text-gray-800 font-bold text-center mt-6'>Busniess Summary</h2>
            <Package></Package>
        </div>
    );
};

export default Home;