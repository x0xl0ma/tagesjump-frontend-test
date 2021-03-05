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
  const { code, productName, price, image, id } = product;
  const { old_price, current_price } = price;

  return (
    <div className="product__card">
      {old_price ? <div className="sale">Скидка</div> : null}
      <img src={image.url} alt="" className="product__card__image" />
      <div className="wrapper">
        <div className="product__info">
          <span className="product__code">{code}</span>
          <span>{productName}</span>
          {old_price ? (
            <div className="product__prices">
              <span className="old__price">{old_price}&#8381;</span>&nbsp;
              <span className="current__price">
                {Math.round(current_price)}&#8381;
              </span>
            </div>
          ) : (
            <span className="current__price">{current_price}&#8381;</span>
          )}
        </div>
        <div className="icon__container">
          {chart.includes(`${id}chart`) ? (
            <img
              src={addedToChart}
              alt="Добавить в корзину"
              title="Добавить в корзину"
              className="chart"
              onClick={() => chartHandler(product)}
            />
          ) : (
            <img
              src={chartIcon}
              alt="Убрать из корзины"
              title="Убрать из корзины"
              className="chart"
              onClick={() => chartHandler(product)}
            />
          )}

          {favorites.includes(`${id}favorite`) ? (
            <img
              src={favorite}
              alt="Убрать из избранного"
              title="Убрать из избранного"
              className="favorite"
              onClick={() => favoritesHandler(product)}
            />
          ) : (
            <img
              src={addToFavorites}
              alt="Добавить в избранное"
              title="Добавить в избранное"
              className="favorite"
              onClick={() => favoritesHandler(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
