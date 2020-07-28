import React from "react";

import { ProductCard } from "../../components/cards/productCard/ProductCard";
import { ProductsOptionsBar } from "../../components/productsOptionsBar/ProductsOptionsBar";
import { useProductPicker } from "../../hooks/useProductPicker";

import "./productsScreen.css";

export const ProductsScreen = () => {
  //Hooks
  const [product, handleProductChange] = useProductPicker({});

  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<ProductCard key={`${i}`} handler={handleProductChange} />);
  }

  return (
    <div>
      <h1 className="h3 mb-0 text-gray-800">Administrador de Productos</h1>
      <ProductsOptionsBar product={product} />
      <div className="cards-grid row">{cards}</div>
    </div>
  );
};
