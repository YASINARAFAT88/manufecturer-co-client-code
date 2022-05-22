import React from 'react';
import tools from './1.png';
import making from './2.jpg';
import drill from './3.jpg';
import cutter from './4.jpg';

const Plan = () => {
    return (
        <div className="hero lg:h-96 sm:min-h-full lg:px-14  bg-gray-800 mt-12 rounded-lg  max-w-fit mx-auto text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='grid lg:grid-cols-2 grid-cols-2 gap-4 '>
       <div>
       <img className='w-52 rounded-md' src={tools} />
       </div>
       <div>
       <img className='w-52 rounded-md' src={making} />
       </div>
       <div>
       <img className='w-52 rounded-md' src={drill} />
       </div>
       <div><img className='w-52 rounded-md' src={cutter} /></div>
   </div>
    <div className='w-96'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn text-white w-64 hover:font-bold rounded-full bg-gradient-to-r from-cyan-800 to-gray-800">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Plan;