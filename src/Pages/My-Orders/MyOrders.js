import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const MyOrders = () => {
  // const [user] = useAuthState(auth)
  // const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h2 className='text-2xl font-bold text-gray-800'>See your Statment</h2>
        <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboards'>DashBoard</Link></li>
      <li><Link to='/dashboards/review'> Add Review</Link></li>
      <li><Link to='/dashboards/users'>All Users</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default MyOrders;