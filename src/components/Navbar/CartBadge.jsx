import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center; 
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -13px;
  background: #1a2e46; /* The background color for the badge */
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 10px;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 23px;
`;


const CartBadge = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const itemCount = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContainer>
        <CartIcon />
        {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
    </CartContainer>
  );
};

export default CartBadge;
