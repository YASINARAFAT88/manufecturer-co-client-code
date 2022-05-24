import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Statment = () => {
    const [statment, setStatment] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
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