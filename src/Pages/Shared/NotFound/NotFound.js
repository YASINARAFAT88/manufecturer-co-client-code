import React from 'react';
import img from './not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-96 mx-auto' src={img} alt="" />
            <h3 className='text-center text-4xl font-bold m-5'>Page Not Found</h3>
        </div>
    );
};

export default NotFound;