import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer/cartReducer';
import { Products } from '../../data/data';
import AdditionalInfo from './AdditionalDetail';
import SimilarProducts from './SimilarProducts';
import styled from 'styled-components';
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

// Styled components for the layout
const ProductContainer = styled.div`
  padding-top: 70px; 
  padding-right: 70px; 
  padding-left: 70px; 
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 1021px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 1rem;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center; /* Center align content */
    margin-left: 0;
    padding: 0;
  }
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000000; /* Example color */
`;

const ProductDescription = styled.p`
  color: #4B5563; /* Example color */

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size */
    text-align: center; /* Center align text */
  }
`;

const ProductPrice = styled.h6`
  font-size: 1.5rem;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  width: 175px;
  height: 50px;
  background-color: #FFFFFF; /* White background */
  color: #000000; /* Black text */
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #000000; 
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and text */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  
  /* Hover state */
  &:hover {
    background-color: #000000; /* Black background on hover */
    color: #FFFFFF; /* White text on hover */
  }
`;

const WishlistButton = styled.button`
  width: 175px;
  height: 50px;
  background-color: #FFFFFF; /* White background */
  color: #000000; /* Black text */
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #000000; 
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and text */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  
  /* Hover state */
  &:hover {
    background-color: #000000; /* Black background on hover */
    color: #FFFFFF; /* White text on hover */
  }
`;

const QuantityButton = styled.button`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: 1px solid #E5E7EB; /* Example border color */
  color: #4B5563; /* Example text color */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #E5E7EB; /* Example hover background color */
  }
`;

const PlusMinusButton = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center; /* Align items vertically in the center */
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center; /* Align items vertically in the center */
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = () => {
      const product = Products.find((p) => p.id === parseInt(id));
      setProduct(product);
    };

    getProduct();
  }, [id]);

  const addProduct = () => {
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    dispatch(addCart(productToAdd));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToWishlist = () => {
    alert('Added to wishlist!');
  };

  return (
      <ProductContainer>
        <ProductWrapper>
          {/* Product Image Container */}
          <ImageContainer>
            <ProductImage src={product.image} alt={product.title} />
          </ImageContainer>

          {/* Product Info */}
          <ProductInfoWrapper>
            <div>
              <ProductTitle>{product.title}</ProductTitle>
            </div>
            <ProductDescription>{product.description}</ProductDescription>
            <div className="flex items-center">
              <Rater
                style={{ fontSize: "20px" }}
                total={5}
                interactive={false}
                rating={product.rating}
              />
              <p className="ml-3 text-sm text-gray-400">
                ({product.reviews})
              </p>
            </div>
            <ProductPrice>${product.price}</ProductPrice>
            <ButtonsContainer>
              <PlusMinusButton>
                <QuantityButton onClick={decreaseQuantity}>−</QuantityButton>
                <div className="flex h-8 w-8 items-center justify-center border-t border-b">
                  {quantity}
                </div>
                <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
              </PlusMinusButton>
              <AddToCartButton onClick={addProduct}>
                <BiShoppingBag size={24} />
                Add to Cart
              </AddToCartButton>
              <WishlistButton onClick={addToWishlist}>
                <AiOutlineHeart size={24} />
                Add to Wishlist
              </WishlistButton>
            </ButtonsContainer>
          </ProductInfoWrapper>
        </ProductWrapper>

        {/* Additional Info and Similar Products */}
        <AdditionalInfo />
        <SimilarProducts />
      </ProductContainer>
  );
};

export default ProductPage;
