import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AddProductModal } from "../addProductModal/AddProductModal";
import { EditProductModal } from "../editProductModal/EditProductModal";
import { DeleteProductModal } from "../deleteProductModal/DeleteProductModal";

import "./productsOptionsBar.css";

export const ProductsOptionsBar = ({ product }) => {
  const isEnabled = Object.keys(product).length > 0;

  const [stickyState, setSticky] = useState(false);

  const optBar = useRef();

  //Hooks
  useEffect(() => {
    const sticky = optBar.current.getBoundingClientRect().bottom;
    const onScroll = () =>
      window.pageYOffset >= sticky ? setSticky(true) : setSticky(false);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isEnabled]);

  const [{ search }, handleInputChange] = useForm({});

  return (
    <div>
      <div
        className={`${stickyState && "sticky"} options mb-3 card shadow`}
        ref={optBar}>
        <div className='input-group mb-2 ml-1 mt-1'>
          <input
            aria-label='Nombre de producto...'
            aria-describedby='button-addon2'
            className='form-control'
            onChange={handleInputChange}
            placeholder='Nombre de producto...'
            type='text'
            value={search}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-primary mr-2'
              type='button'
              id='button-addon2'>
              Search
              <i className='fas fa-fw fa-search ml-1'></i>
            </button>
          </div>
        </div>
        <div className='row ml-1'>
          <button
            type='button'
            className='btn btn-primary btn-sm mr-2 mb-1 btn-icon-split'
            data-toggle='modal'
            data-target='#addProductModal'>
            <span className='icon text-white-50'>
              <i className='fas fa-plus'></i>
            </span>
            <span className='text'>Añadir Producto</span>
          </button>

          <button
            type='button'
            className='btn btn-warning btn-sm mr-2 mb-1 btn-icon-split'
            data-toggle='modal'
            data-target='#editProductModal'
            disabled={!isEnabled}>
            <span className='icon text-white-50'>
              <i className='fas fa-edit'></i>
            </span>
            <span className='text'> Editar Producto</span>
          </button>

          <button
            type='button'
            className='btn btn-danger btn-sm mr-2 mb-1 btn-icon-split'
            data-toggle='modal'
            data-target='#deleteProductModal'
            disabled={!isEnabled}>
            <span className='icon text-white-50'>
              <i className='fas fa-trash'></i>
            </span>
            <span className='text'> Eliminar Producto</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      <div
        className='modal fade'
        id='addProductModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='addProductModalLabel'
        aria-hidden='true'>
        <AddProductModal />
      </div>

      <div
        className='modal fade'
        id='editProductModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='editProductModal'
        aria-hidden='true'>
        <EditProductModal />
      </div>

      <div
        className='modal fade'
        id='deleteProductModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='deleteProductModal'
        aria-hidden='true'>
        <DeleteProductModal />
      </div>
    </div>
  );
};
