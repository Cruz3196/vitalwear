import React from 'react';
import { Hero, Navbar, Promos,Footer, Benefit, Newsletter, NewArrivals } from '../components';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Promos/>
      <Benefit/>
      <NewArrivals/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home;
