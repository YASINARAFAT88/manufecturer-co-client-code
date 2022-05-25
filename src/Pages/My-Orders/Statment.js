import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Statment = () => {
    const [statment, setStatment] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
              method: 'GET',
              headers: {
                'authorization' : `bearer ${localStorage.getItem('accessToken')}`
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
        <div>
            <h2>My Statment {statment.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
          {
              statment.map((a, index) => <tr>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.item}</td>
                <td>{a.perUnit}</td>
              </tr>)
          }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Statment;