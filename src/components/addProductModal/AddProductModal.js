import React, { useEffect } from "react";

export const AddProductModal = () => {
  useEffect(() => {
    const updateEvent = function (e) {
      let fileName = document.getElementById("inputGroupFile01").files[0].name;
      let nextSibling = e.target.nextElementSibling;
      nextSibling.innerText = fileName;
    };

    window.onload = () =>
      document
        .querySelector(".custom-file-input")
        .addEventListener("change", updateEvent);
    return () =>
      document
        .querySelector(".custom-file-input")
        .removeEventListener("change", updateEvent);
  });

  return (
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title text-dark' id='exampleModalLabel'>
            Añadir Producto
          </h5>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          <input
            className='form-control mb-3'
            placeholder='Nombre...'
            type='text'
          />
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroupFileAddon01'>
                Imagen del Producto
              </span>
            </div>
            <div className='custom-file'>
              <input
                type='file'
                className='custom-file-input'
                id='inputGroupFile01'
                aria-describedby='inputGroupFileAddon01'
              />
              <label className='custom-file-label' htmlFor='inputGroupFile01'>
                Choose file
              </label>
            </div>
          </div>
          <textarea
            className='form-control mb-3'
            placeholder='Detalle...'
            type='text'
          />
          <div className='input-group'>
            <input
              className='form-control mb-3'
              placeholder='Precio'
              type='number'
              step='any'
            />
            <input
              className='form-control mb-3'
              placeholder='Descuento'
              type='number'
              step='any'
            />
          </div>
          <select className='custom-select mb-3' defaultValue='Clasification'>
            <option value='Clasification' disabled>
              Seleccione una Clasificación
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
          <select className='custom-select mb-3' defaultValue='Category'>
            <option value='Category' disabled>
              Seleccione una Categoria
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
          <select className='custom-select mb-3' defaultValue='Subcategory'>
            <option value='Subcategory' disabled>
              Seleccione una Subcategoria
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-secondary'
            data-dismiss='modal'>
            Cerrar
          </button>
          <button type='button' className='btn btn-primary'>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
