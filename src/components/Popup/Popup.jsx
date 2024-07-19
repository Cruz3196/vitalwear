import React, { useState } from 'react'
import Newsletter from '../../data/Newsletter.jpg'
import './Popup.css'

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); 

    const handleClose = () => {
        setFadeOut(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 300);
    };


    return (
        showPopup && (
            <div className='popup-overlay'>
                <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
                    <button className='close-button' onClick={handleClose}>
                        x
                    </button>
                    <div className='popup-left'>
                        <img src={Newsletter}  alt='Newsletter'/>
                    </div>
                    <div className='popup-right'>
                        <h2>Sign Up to Our Newsletter</h2>
                        <p>
                            Be the first to get the latest news about trends, promotions, an much more 
                        </p>
                        <form>
                            <input type='email' placeholder='Your email address' required /> 
                            <button type='submit'>JOIN</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;

