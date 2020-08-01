import React from "react";

export const ProductRow = ({ handler }) => {
  return (
    <tr onClick={() => handler({ hola: "mundo" })}>
      <td>Iphone 12 Pro Max Turbo</td>
      <td>Celulo Mamalon</td>
      <td>6000000</td>
    </tr>
  );
};
