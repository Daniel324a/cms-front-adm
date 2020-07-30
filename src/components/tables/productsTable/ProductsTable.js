import React from "react";

export const ProductsTable = ({ products }) => {
  return (
    <div className='card shadow'>
      <div className='card-header py-3'>
        <h5 className='m-0 font-weight-bold text-primary'>Lista productos</h5>
      </div>
      <table className='table table-borderless'>
        <thead>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Detalle</th>
            <th scope='col'>Precio</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    </div>
  );
};
