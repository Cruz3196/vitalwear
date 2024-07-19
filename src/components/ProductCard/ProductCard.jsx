import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Rater from 'react-rater';
import { addCart } from '../../redux/reducer/cartReducer';
import './ProductCard.css';
import 'react-rater/lib/react-rater.css';

const ProductCard = ({ product }) => {
    const [showQuickAdd, setShowQuickAdd] = useState(false);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    
    return (
        <div 
            className="product-card"
            onMouseEnter={() => setShowQuickAdd(true)}
            onMouseLeave={() => setShowQuickAdd(false)}
        >
            <div className="image-container">
                <img className="product-image" 
                    onClick={() => window.location.href = `/product/${product.id}`}
                    src={product.image} 
                    alt={product.title} />
                {showQuickAdd && (
                    <button className="add-to-cart-icon" onClick={() => addProduct(product)}>
                        <div className='add-cart-text'>
                            ADD TO CART 
                        </div>
                    </button>
                )}
            </div>
            <div className="product-details">
                <h5 className="product-title" onClick={() => window.location.href = `/product/${product.id}`}>
                    {product.title}
                </h5>
                <div className="product-rater">
                    <Rater total={5} rating={product.rater} interactive={false} />
                    <span>({product.reviews} reviews)</span>
                </div>
                <div className="product-price" onClick={() => window.location.href = `/product/${product.id}`}>
                    $ {product.price}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
