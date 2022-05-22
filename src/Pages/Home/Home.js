import React from 'react';
import TimeDate from '../Shared/TimeDate';
import WholeSellItems from '../WholeSellItems/WholeSellItems';
import Banner from './Banner';
import Package from './Package';
import Plan from './Plan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plan></Plan>
            <WholeSellItems></WholeSellItems>
            <h2 className='text-3xl text-gray-800 font-bold text-center m-4'>Time Shideul</h2>
            <TimeDate></TimeDate>
            <h2 className='text-3xl text-gray-800 font-bold text-center m-4'>Busniess Summary</h2>
            <Package></Package>
        </div>
    );
};

export default Home;