import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const TimeDate = () => {
    const [clock, setClock] = useState();
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        setInterval(()=> {
            const date = new Date();
            setClock(date.toLocaleTimeString())
        },1000)
    },[])
    

    return (
        <div className="hero lg:h-96 sm:min-h-full lg:px-14  bg-gray-800 mt-6 rounded-lg  max-w-fit mx-auto text-white">
            
            <div className="hero-content flex-col lg:flex-row">
            <h2 className='text-3xl text-center text-white font-bold m-3 bg-gray-600 w-56 p-12 rounded-lg shadow-lg'> {clock} </h2>
        <div>
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
    </div>
  </div>
</div>
    );
};

export default TimeDate;