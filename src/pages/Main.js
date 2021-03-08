import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard/ProductCard";
import Select from "../components/select/Select";
import data from "../data/items.json";
import {
  optionsForSelectPrice,
  labelForPriceSelect,
  optionsForSelectMaterial,
  labelForMaterialSelect,
  findItem,
  addItemToStorage,
  removeItemFromStorage,
} from "../utils";

import "./main.scss";

const Main = () => {
  const [products] = useState(data);
  const [direction, setDirection] = useState("asc");
  const [material, setMaterial] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [chart, setChart] = useState([]);

  const sortData = (a, b, direct) =>
    direct === "asc"
      ? a.price.current_price - b.price.current_price
      : b.price.current_price - a.price.current_price;

  const sortedData = [...products].sort((a, b) => sortData(a, b, direction));

  const filterByMaterial = (product) => {
    const materialNumber = Number(material);
    if (materialNumber === 0) {
      return true;
    }
    return product.material === materialNumber;
  };

  const filteredAndSortedData = sortedData.filter(filterByMaterial);

  const chartHandler = (item) => {
    const chartItem = `${item.id}chart`;
    if (!findItem(chartItem)) {
      addItemToStorage(chartItem, item.name);
      setChart([...chart, chartItem]);
    } else {
      removeItemFromStorage(chartItem);
      const updatedChart = chart.filter((item) => item !== chartItem);
      setChart(updatedChart);
    }
  };

  const favoritesHandler = (item) => {
    const favItem = `${item.id}favorite`;
    if (!findItem(favItem)) {
      addItemToStorage(favItem, item.name);
      setFavorites([...favorites, favItem]);
    } else {
      removeItemFromStorage(favItem);
      const updatedFavorites = favorites.filter((fav) => fav !== favItem);
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    setFavorites(
      Object.keys(localStorage).filter((item) => item.includes("favorite"))
    );
    setChart(
      Object.keys(localStorage).filter((item) => item.includes("chart"))
    );
  }, []);

  return (
    <main>
      <section>
        <h1 className="main-title">Комплекты стеллажных систем</h1>
        <div className="selects">
          <Select
            label={labelForPriceSelect}
            options={optionsForSelectPrice}
            onChanged={setDirection}
            selectedOption={direction}
          />
          <Select
            label={labelForMaterialSelect}
            options={optionsForSelectMaterial}
            onChanged={setMaterial}
            selectedOption={material}
          />
        </div>
        <div className="products">
          {filteredAndSortedData.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              favoritesHandler={favoritesHandler}
              favorites={favorites}
              chart={chart}
              chartHandler={chartHandler}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Main;
