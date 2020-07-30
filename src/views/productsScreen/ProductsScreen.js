import React from "react";

import { ProductsOptionsBar } from "../../components/productsOptionsBar/ProductsOptionsBar";
import { useProductPicker } from "../../hooks/useProductPicker";
import { ProductsTable } from "../../components/tables/productsTable/ProductsTable";
import { ProductRow } from "../../components/productRow/ProductRow";

import "./productsScreen.css";

export const ProductsScreen = () => {
  //Hooks
  const [product, handleProductChange] = useProductPicker({});

  const products = [];
  for (let i = 0; i < 5; i++) {
    products.push(<ProductRow key={`${i}`} handler={handleProductChange} />);
  }

  return (
    <div>
      <h1 className='h3 mb-0 text-gray-800'>Administrador de Productos</h1>
      <ProductsOptionsBar product={product} />
      <ProductsTable products={products} />
      {/* <div className="cards-grid row">{cards}</div> */}
    </div>
  );
};
