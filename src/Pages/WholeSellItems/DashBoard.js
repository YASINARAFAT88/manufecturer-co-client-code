import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DashBoard = () => {
    const { dashboardId } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {

        const url = `http://localhost:5000/items/${dashboardId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className='shadow rounded bg-dark w-96 m-3 mx-auto bg-gray-800'>
                <div className='stock'>
                    <div style={{ height: '450px' }} className='text-white'>
                        <img style={{ height: '230px' }} src={items.img} alt="" />
                        <h2 className='pl-4 pr-4 pt-2 text-3xl font-bold'>{items.name}</h2>
                        <p className='pl-4 pr-4'>{items.description}</p>
                        <h6 className='pl-4 pr-4'>Price: {items.price}</h6>
                        <h6 className='pl-4 pr-4'>Quantity: {items.quantity}</h6>
                        <h5 className='pl-4 pr-4'>Per-unit: {items.Perunit}</h5>
                    </div>
                    <form>
                        <input className='ml-4 mb-3' placeholder='Restock' type="text" />
                    </form>
                    <button className='btn btn text-red-400 w-32 hover:font-bold text-xl rounded-full bg-gradient-to-r from-cyan-800 to-gray-800 m-3'>Delivered</button>
                    <button className='btn btn text-green-400 w-32 hover:font-bold text-xl rounded-full bg-gradient-to-r from-cyan-800 to-gray-800   m-3'>Restock</button>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-dark'>CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default DashBoard;