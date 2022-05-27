import React, { useEffect, useState }  from 'react';
import { useForm } from "react-hook-form";

const MyReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    const url = `http://localhost:5000/reviews`
          fetch(url,{
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => console.log(data))
  };

    return (
        <div className="justify-center items-center">
            <h2>Please Add your feedbeck</h2>
            <form className='flex-col flex w-72 justify-center m-6' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Your Name' className='border border-2 m-2 border-solid border-gray-700 ' {...register("name", { required: true, maxLength: 20 })} />

      <input placeholder='Rating Out Of /10' className='border border-2 m-2 border-solid border-gray-700 ' type='number' {...register("rating") } />

      <textarea placeholder='Description' className='border border-2 m-2 border-solid border-gray-700 ' type="text" {...register("description")} />

      <input className='border border-2 m-2 border-solid border-gray-700  border-collapse text-white hover:text-xl rounded-md font-bold h-9 bg-gradient-to-r from-cyan-800 to-gray-800 text-center' value='Add Review' type="submit" />
    </form>
        </div>
    );
};

export default MyReview;