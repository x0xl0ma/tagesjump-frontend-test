import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard/ProductCard";
import Select from "../components/select/Select";
import products from "../data/items.json";

import "./main.scss";

const optionsForSelectPrice = [
  { label: "Цена по возрастанию", value: "asc" },
  { label: "Цена по убыванию", value: "desc" },
];
const labelForPriceSelect = "Сортировать по:";

const optionsForSelectMaterial = [
  { label: "Не выбрано", value: 0 },
  { label: "Дерево", value: 1 },
  { label: "Металл", value: 2 },
];
const labelForMaterialSelect = "Материал";

const Main = () => {
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

  const findItem = (id) => {
    if (localStorage.getItem(id)) {
      return true;
    }
    return false;
  };

  const chartHandler = (item) => {
    const chartItem = `${item.id}chart`;
    if (!findItem(chartItem)) {
      localStorage.setItem(chartItem, item.name);
      setChart([...chart, chartItem]);
    } else {
      localStorage.removeItem(chartItem);
      const updatedChart = chart.filter((item) => item !== chartItem);
      setChart(updatedChart);
    }
  };

  const favoritesHandler = (item) => {
    const favItem = `${item.id}favorite`;
    if (!findItem(favItem)) {
      localStorage.setItem(favItem, item.name);
      setFavorites([...favorites, favItem]);
    } else {
      localStorage.removeItem(favItem);
      const updatedFavorites = favorites.filter((fav) => fav !== favItem);
      setFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    setFavorites(Object.keys(localStorage).filter((item) => item.includes('favorite')));
    setChart(Object.keys(localStorage).filter((item) => item.includes('chart')));
  }, []);

  return (
    <main>
      <section>
        <h1>Комплекты стеллажных систем</h1>
        <div className="wrapper__for__selects">
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
        <div className="card__wrapper">
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
