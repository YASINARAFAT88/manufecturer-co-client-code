import React, { useEffect, useState }  from 'react';

const AllReviews = () => {
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('https://guarded-shelf-84070.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-5 m-20'>
            {
                review.slice(0).reverse().map(a =>  <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Name: {a.name}</h2>
                  <p>Review: {a.description}</p>
                  <p>Ratings: {a.rating}</p>
                </div>
              </div>)
            }
           
        </div>
    );
};

export default AllReviews;