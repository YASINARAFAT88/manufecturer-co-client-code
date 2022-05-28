import React from 'react';

const Blog = () => {
    return (
    <div className='text-center w-96 m-auto'>
            <h2 className='text-3xl text-gray-800 font-bold m-6'>How will you improve the performance of a React Application?</h2>
            <p className='m-4 font-bold'>Large Rendering problem
        React window টুল ব্যবহার এর মাধ্যমে 
        performance ভালো করা যেতে পারে পেজ এ visible যতটুক থাকবে রেন্ডার হবে ততোটুক,
        Scaffolding problem 
        Rest api ব্যবাহার এর মাধ্যমে Scaffolding problem কিছুটা কমানো সম্ভব,
        Unnecessary Rendering
        Components বেশি বেশি রেন্ডারিং না হয় এর জন্য আমরা reference, Dom, React hook ব্যবহার করতে পারি এতে করে performance batter হয়।।।</p>
    </div>
    );
};

export default Blog;