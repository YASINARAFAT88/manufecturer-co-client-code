import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
    const { dashboardId } = useParams();
    const [items, setItems] = useState({});
    const [user, loading, error] = useAuthState(auth)
    useEffect(() => {

        const url = `http://localhost:5000/items/${dashboardId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-2xl text-gray-600'> Hello..{user?.displayName}</h2>
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
                        <input className='ml-4 mb-3' placeholder=' Type Quantity' type="text" />
                    </form>
                    
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