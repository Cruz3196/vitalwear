// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import CartBadge from './CartBadge';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? 'scrolled' : ''}>
      <Link className='title' to='/'>VITAL<span>WEAR</span></Link>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to='/Home'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/Products'>SHOP</NavLink>
        </li>
        <li>
          <NavLink to='/Cart'>CART</NavLink>
        </li>
        <li className="mobile-hidden">
          <div className="user-icon-container">
            <FaUser className='userIcon' />
          </div>
        </li>
        <li className="mobile-hidden">
          <NavLink  to="/Cart" className="cart-badge-container">
            <CartBadge />
          </NavLink>
        </li>
      </ul>
      <div className="mobile-icons">
        <div className='user-icon'>
          <FaUser className='user-Icon' />
        </div>
        <NavLink to='/Cart' className="cart-icon">
          <CartBadge />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
