import React from 'react';
import { Link } from 'react-router-dom';
import {PromosList} from '../../data/data';
import './Promos.css'

const Promos = () => {


  return (
    <div className='promo-container'>
        {PromosList.map(promo => (
            <div key={promo.id} className="promo-item">
                <img src={promo.imageURL} alt={promo.title}/>
                <div className='promo-content'>
                    <h2>{promo.title}</h2>
                    <Link to="/Products" className="centered-button" 
                    >Explore
                    </Link>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Promos;
