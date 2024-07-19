import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom'; 
import { Products } from '../../data/data';
import Skeleton from 'react-loading-skeleton';
import ProductCard from '../ProductCard/ProductCard';
import { IoFilter, IoClose } from "react-icons/io5";
import './Product.css';
import 'react-loading-skeleton/dist/skeleton.css';

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        // Simulating the timeout delay and set data from Products array
        setTimeout(() => {
            setData(Products);
            setLoading(false);
        }, 1000); // Setting the delay to about 1 second
    }, []);

    const Loading = () => {
        return (
            <>
                {[...Array(6)].map((_, index) => (
                    <div className='col-md-4 col-sm-6 col-xs-8 col-12 mb-4' key={index}>
                        <Skeleton height={592} />
                    </div>
                ))}
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <div className='row'>
                {data.map((product) => {
                    return (
                        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </div>
        );
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <div className="container-fluid my-3 py-3">
                {/* Replace filter buttons section with shop details sorting */}
                <div className="shopDetailsSorting">
                    <div className="shopDetailsBreadcrumbLink">
                        <Link to="/" onClick={scrollToTop}>
                            Home
                        </Link>
                        &nbsp;/&nbsp;
                        <Link to="/Products">The Shop</Link>
                    </div>
                    <div className="filterLeft" onClick={toggleDrawer}>
                        <IoFilter/>
                        <p>Filter</p>
                    </div>
                    <div className="shopDetailsSort">
                        <select name="sort" id="sort">
                            <option value="default">Default Sorting</option>
                            <option value="Featured">Featured</option>
                            <option value="bestSelling">Best Selling</option>
                            <option value="a-z">Alphabetically, A-Z</option>
                            <option value="z-a">Alphabetically, Z-A</option>
                            <option value="lowToHigh">Price, Low to high</option>
                            <option value="highToLow">Price, high to low</option>
                            <option value="oldToNew">Date, old to new</option>
                            <option value="newToOld">Date, new to old</option>
                        </select>
                        <div className="filterRight" onClick={toggleDrawer}>
                            <IoFilter/>
                            <p>Filter</p>
                        </div>
                    </div>
                </div>

                <div className={`filterDrawer ${isDrawerOpen ? "open" : ""}`}>
                    <div className="drawerHeader">
                        <p>Filter By</p>
                        <IoClose onClick={closeDrawer} className="closeButton" size={26} />
                    </div>
                    <div className="drawerContent">
                        <Filter />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='shopDetails__left'>
                        <Filter /> 
                    </div>
                    <div className='shopDetails__right'>
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
