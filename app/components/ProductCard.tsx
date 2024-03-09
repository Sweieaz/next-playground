import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

import React from 'react';

const ProductCard = () => {
  return (
    <div className={styles.cart}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
