import React from 'react';

const Package = () => {
    return (
        <div className="stats stats-vertical ml-52 m-8 bg-slate-700 text-white  lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Happy Customer</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  <div className="stat">
    <div className="stat-title">new Customer</div>
    <div className="stat-value">3K</div>
    <div className="stat-desc">Dec 31st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Customer</div>
    <div className="stat-value">1.4M</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-title">Review</div>
    <div className="stat-value">45,200</div>
    <div className="stat-desc">↗︎ 400 (8%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-title">40+ Tools</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    );
};

export default Package;