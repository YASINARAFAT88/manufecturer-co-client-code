import React from 'react';
import './MyProfile.css'
import img from './my-pic.jpg'

const MyProfile = () => {
    return (
        <div className='about'>
            <h2 className='font-bold text-3xl m-5'>I'm introduce Aboute My Self</h2>
            <img className='my-pic' style={{width: "250px"}} src={img} alt="" />
            <h4 className='font-bold'>Md.Yasin Arafat</h4>
            <p>I'm From Dhaka Bangladesh or My Skill toDay Html Css bootstrap DaisyUi Tailwind Javajcript React Firebase Node js Mongodb Express ETC.., My Qualifications SSC PASSED  i will leave everything behind and move forward , In sha allah, 
            And This is my 2022 Oath..</p>
            <strong className='font-bold text-2xl text-red-500 m-7'>My Some Projects</strong> <br />
            <a className='font-bold underline text-blue-500 m-5 text-xl' href="https://61ee92e1c5ec599dce828c82--admiring-wright-58797e.netlify.app/">Bootstrap Project</a> <br />
            <a className='font-bold underline text-blue-500 m-5 text-xl' href="https://doctor-chamber-a37bf.web.app/?fbclid=IwAR0zg5xcX-2XAnoiZ1qdr0Ir4XyM23NVQl7IbXftKyh8ij5fengqxFRIxJE">Doctor Chamber Project</a> <br />
            <a className='font-bold underline text-blue-500  mb-6 text-xl' href="https://warehouse-managment-syst-b0f3e.web.app/">Warehouse Project</a>
        </div>
    );
};

export default MyProfile;