import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        
        fetch(`https://guarded-shelf-84070.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            
                refetch()
                toast.success(`Successfully made an admin`);
            
        })
    }
    return (
    <tr>
        <th></th>
        <td>{ email}</td>
        <td>{ role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default UserRow;