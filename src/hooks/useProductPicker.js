import { useState } from "react";

export const useProductPicker = () => {
  const [product, setProduct] = useState({});

  const handleProductChange = (value) => {
    if (JSON.stringify(value) === JSON.stringify(product))
      return setProduct({});
    setProduct(value);
  };

  return [product, handleProductChange];
};
