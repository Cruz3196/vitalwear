import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import ProductCard from '../ProductCard/ProductCard'; // Import the ProductCard component
import '../ProductCard/ProductCard.css'; 
import "react-loading-skeleton/dist/skeleton.css";
import { Products } from '../../data/data'; // Import the NewProducts data

const NewArrivals = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(Products.slice(0,6)); //displaying only the first 6 products 
            setLoading(false);
        }, 1000); // Simulating the delay for 1 second
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-12 py-5 text-center'>
                    <Skeleton height={40} width={560} />
                </div>
                {[...Array(10)].map((_, index) => (
                    <div className='col-md-4 col-sm-6 col-xs-8 col-12 mb-4' key={index}>
                        <Skeleton height={592} />
                    </div>
                ))}
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                {data.map((product) => (
                    <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                        <ProductCard product={product} /> {/* Use the ProductCard component */}
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            <div className="container-md my-2 py-2">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 text-center">New Arrivals</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default NewArrivals;
