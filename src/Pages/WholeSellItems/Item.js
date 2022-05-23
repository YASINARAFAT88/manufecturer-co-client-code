import React from 'react';
import './Stock.css'
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const { _id, name, img, description, price, Perunit, quantity } = item;
    const navigate = useNavigate();
    const navigateAllStocks = id =>{
        navigate(`/dashboard/${id}`)
    }
    

    return (
        <div className='drop-shadow-2xl rounded bg-gray-800'>
            <div className='stock'>
                <div style={{height:'450px'}} className='text-white'>
                <img style={{height:'230px'}} src={img} alt="" />
                <h2 className='pl-4 pr-4 pt-2 text-2xl font-bold'>{name}</h2>
                <p className='pl-4 pr-4'>{description}</p>
                <h6 className='pl-4 pr-4'>Price: {price}</h6>
                <h6 className='pl-4 pr-4'>Quantity: {quantity}</h6>
                <h5 className='pl-4 pr-4'>Per-unit: {Perunit}</h5>
                </div>
                <button onClick={()=>navigateAllStocks(_id)} className='btn btn text-white w-36 hover:font-bold rounded-full bg-gradient-to-r from-cyan-800 to-gray-800 text-center m-0'>Book now</button>
            </div>
        </div>
        
    );
};

export default Item;