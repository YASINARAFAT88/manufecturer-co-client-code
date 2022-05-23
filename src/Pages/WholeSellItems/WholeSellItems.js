import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HooksContext } from '../../App';
import './Stoks.css'
import Item from './Item';

const WholeSellItems = () => {
    const naviGate = useNavigate();
    const stocks = useContext(HooksContext);

    return (
        <div id='stocks'>
        <h1 className='stocks-title text-center text-4xl m-8 font-bold'>Menufecring Avaible Items</h1>
        <div className="stocks-container">
            {
                stocks.slice(0, 6).map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
        <div className='btn-div'>
            <button onClick={() => naviGate('/purches')} className='review-btn btn text-white w-44 hover:text-xl rounded-full bg-gradient-to-r from-cyan-800 to-gray-800 text-center font-bold'>See All Items</button>
        </div>
    </div>
    );
};

export default WholeSellItems;