import React from 'react';
import { ProductCard } from '../../components/cards/ProductCard';

import './productsScreen.css';

export const ProductsScreen = () => {
  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<ProductCard key={`${i}`} />);
  }

  return (
    <div>
      <h1 className='h3 mb-0 text-gray-800'>Administrador de Productos</h1>
      <div className='input-group mb-2 mt-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Nombre de producto...'
          aria-label='Nombre de producto...'
          aria-describedby='button-addon2'
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-primary'
            type='button'
            id='button-addon2'
          >
            Search
            <i className='fas fa-fw fa-search ml-1'></i>
          </button>
        </div>
      </div>
      <div className='row ml-1'>
        <button
          type='button'
          class='btn btn-primary btn-sm mr-2 mb-2 btn-icon-split'
        >
          <span class='icon text-white-50'>
          <i class="fas fa-plus-square"></i>
          </span>
          <span class='text'>Añadir Producto</span>
        </button>

        <button
          type='button'
          class='btn btn-warning btn-sm mr-2 mb-2 btn-icon-split'
        >
          <span class='icon text-white-50'>
            <i class='fas fa-edit'></i>
          </span>
          <span class='text'> Editar Producto</span>
        </button>

        <button
          type='button'
          class='btn btn-danger btn-sm mr-2 mb-2 btn-icon-split'
        >
          <span class='icon text-white-50'>
            <i class='fas fa-trash'></i>
          </span>
          <span class='text'> Eliminar Producto</span>
        </button>
      </div>
      <div className='cards-grid row'>{cards}</div>
    </div>
  );
};
