import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../data/data';
import ProductCard from '../ProductCard/ProductCard';
import './SimilarProducts.css'; // Import CSS file for styles
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SimilarProducts = () => {
  const { id } = useParams();

  // Find the current product based on id
  const product = Products.find((p) => p.id === parseInt(id));

  // Filter similar products based on category and exclude the current product
  const similarProducts = Products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 7); // Limit to three similar products

  // Ensure each product has all required properties
  const productsWithImage = similarProducts.filter((p) => p.image);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="similar-products">
      <div className="container">
        <h2 className="title">Similar Products</h2>
        <Carousel responsive={responsive}>
          {productsWithImage.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SimilarProducts;
