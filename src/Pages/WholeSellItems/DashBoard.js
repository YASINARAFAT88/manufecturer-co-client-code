import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

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

    
    const haldleBooking = event =>{
        event.preventDefault();
        const quantity = event.target.Quantity.value;
        const email = event.target.email.value;
        const name = event.target.name.value;
        const itemsName = event.target.itemsName.value;
        const phone = event.target.phone.value;
        
        const booking = {
            dashboardId: dashboardId,
            perUnit: quantity,
            email: email,
            name: name,
            item: itemsName
        }

        fetch('http://localhost:5000/booking', {

            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{

        })

    }
    
    return (
        <div>
            <h2 className='text-center font-bold text-2xl text-gray-600'> Hello..{user?.displayName || ''}</h2>
            <h2 className='text-center font-bold text-2xl text-gray-600 mb-4'>{user?.email || ''}</h2>
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
                    <form onSubmit={haldleBooking}>

                        <input className='ml-4 mb-3 w-80 h-8 rounded-md bg-slate-300 text-black font-bold p-5' name='name' disabled value={user.displayName || ''} placeholder=' Type Name' type="text" />

                        <input className='ml-4 mb-3 w-80 h-8 rounded-md bg-slate-300 text-black font-bold p-5' name='email' disabled value={user.email || ''} placeholder=' Type Email' type="email" />

                        <input className='ml-4 mb-3 w-80 h-8 rounded-md bg-slate-300 text-black font-bold p-5' name='itemsName' disabled value={items.name || ''} type="text" />

                        <input className='ml-4 mb-3 w-80 h-8 rounded-md bg-slate-300 text-black font-bold p-5' name='Quantity' placeholder='  Type Quantity' type="text" />

                        <input className='ml-4 mb-3 w-80 h-8 rounded-md bg-slate-300 text-black font-bold p-5' name='phone' placeholder='  Phone Number' type="text" />
                        

                        <input className='btn btn-outline text-green-500 mr-64 ml-4 w-80 h-8 rounded-md mb-3 text-xl font-bold p-3' name='submit' type="submit" value="Buy now" />
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