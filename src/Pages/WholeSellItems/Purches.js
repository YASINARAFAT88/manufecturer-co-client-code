import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import './Stoks.css'
import useInventory from './useInventory';

const Purches = () => {
    const [stocks, setStocks] = useInventory();
    const naviGate = useNavigate();
    

    return (
        <>
        <h2 className='text-center font-bold m-3 text-5xl'>All-Items</h2>
        <div className='grid lg:grid-cols-3'>
            
            {
                stocks.map(item => <div
                    key={item._id}>
                    <div className='shadow rounded-md drop-shadow-2xl bg-gray-800 w-96 mb-5 m-auto'>
                        <div className='stock'>
                            <div style={{ height: '190px' }} className='text-white'>
                                <h2 className='pl-4 pr-4 pt-2 text-3xl'>{item.name}</h2>
                                <p className='pl-4 pr-4'>{item.description}</p>
                                <h6 className='pl-4 pr-4'>Price: {item.price}</h6>
                                <h6 className='pl-4 pr-4'>Quantity: {item.quantity}</h6>
                                <h5 className='pl-4 pr-4'>Per-Unit: {item.Perunit}</h5>
                            </div>
                            <button onClick={() => (item._id)} className='btn btn text-red-400 w-32 hover:font-bold text-xl rounded-full bg-gradient-to-r from-cyan-800 to-gray-800 text-center  ml-5 mr-5 my-5'>Delete</button>
                            <button className='btn btn text-green-400 w-32 hover:text-green-200 rounded-full text-xl bg-gradient-to-r from-cyan-800 to-gray-800 text-center '>Buy Now</button>
                        </div>
                    </div>
                </div>)}
        </div>
        </>
    );
};

export default Purches;