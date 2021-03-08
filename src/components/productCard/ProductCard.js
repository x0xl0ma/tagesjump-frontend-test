import React from "react";

import chartIcon from "./icons/chart.svg";
import addedToChart from "./icons/addToChart.svg";
import addToFavorites from "./icons/addToFavorites.svg";
import favorite from "./icons/favorite.svg";

import "./product-card.scss";

const ProductCard = ({
  product,
  favoritesHandler,
  favorites,
  chart,
  chartHandler,
}) => {
  const { code, name, price, image, id } = product;

  const { old_price, current_price } = price;

  return (
    <div className="product products__card">
      {old_price ? <div className="product__sale-label">Скидка</div> : null}
      <img src={image.url} alt="" className="product__image" />
      <div className="product__inner">
        <div className="product__info">
          <div className="product__code">{code}</div>
          <div className="product__name">{name}</div>
          {old_price ? (
            <div className="product__prices">
              <span className="product__old-price">{old_price}&#8381;</span>
              <span className="product__current-price">
                {Math.round(current_price)}&#8381;
              </span>
            </div>
          ) : (
            <span className="product__current-price">
              {Math.round(current_price)}&#8381;
            </span>
          )}
        </div>
        <div className="product__actions">
          {chart.includes(`${id}chart`) ? (
            <button
              className="button chart"
              onClick={() => chartHandler(product)}
            >
              <img src={addedToChart} alt="" />
            </button>
          ) : (
            <button
              className="button chart"
              onClick={() => chartHandler(product)}
            >
              <img src={chartIcon} alt="" />
            </button>
          )}

          {favorites.includes(`${id}favorite`) ? (
            <button
              className="button"
              onClick={() => favoritesHandler(product)}
            >
              <img src={favorite} alt="" />
            </button>
          ) : (
            <button
              className="button"
              onClick={() => favoritesHandler(product)}
            >
              <img src={addToFavorites} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
