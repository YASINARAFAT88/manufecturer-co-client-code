import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Statment = () => {
    const [statment, setStatment] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure you want to Delete your Order..?')
      if(proceed){
        const url = `http://localhost:5000/booking/${id}`
        fetch(url, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          const remaining = statment.filter(a => a._id !== id)
          setStatment(remaining)
          console.log(data)
        })
      }
    }
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
              method: 'GET',
              headers: {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res => {
              if(res.status === 401 || res.status === 403){
                navigate('/')
                signOut(auth)
                localStorage.removeItem('accessToken')
              }
              return res.json()
            })
            .then(data => setStatment(data))
        }
    }, [user])
    return (
        <div className='m-6'>
            <h2 className='text-2xl'>My Order {statment.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Item</th>
        <th>Delete Item</th>
      </tr>
    </thead>
    <tbody>
          {
              statment.map((a, index) => <tr>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.item}</td>
                <td><button onClick={() => handleDelete(a._id)} className='btn btn-xs w-24'>Delete</button></td>
              </tr>)
          }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Statment;