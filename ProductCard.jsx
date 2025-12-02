import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ initialSoldOut = false }) => {
  const [isSoldOut] = useState(initialSoldOut);

  const cardClassName = `product-card${isSoldOut ? ' product-card--sold-out' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="product-image">
        <img
          src="https://via.placeholder.com/250x350"
          alt="Auriculars inalàmbrics"
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">Auriculars Inalàmbrics Pro</h2>

        <p className="product-description">
          Cancel·lació de soroll avançada, 30 hores de bateria i so d'alta fidelitat.
        </p>

        <div className="product-price-section">
          <span className="current-price">99,99 €</span>
          <span className="old-price">149,99 €</span>

          <span className="spacer"></span>
          <span className="discount-tag">OFERTA</span>
        </div>

        <button className="add-to-cart-btn" disabled={isSoldOut}>
          {isSoldOut ? 'Esgotat' : 'Afegir a la cistella'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
