'use client';

import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => console.log('hello to the dom')}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
