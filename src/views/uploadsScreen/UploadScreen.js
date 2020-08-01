import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { DropZone } from '../../components/dropZone/DropZone';
import { FilesTable } from '../../components/tables/filesTables/FilesTable';
import { TableFilesData } from '../../context/TableFilesContext';
import { uploadImage } from '../../utils/uploadImage';

export const UploadScreen = () => {
  const [filesArray, setfilesArray] = useState([]);
  const [filesTable, setFilesTable] = useState([]);
  const [folder, setFolder] = useState(null);

  const handlerSelect = ({ target }) => {
    setFolder(target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (folder != null) {
      uploadImage(folder, 'naruto', [...filesArray])
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: response,
            showConfirmButton: false,
            timer: 1500,
          });
          setFilesTable([]);
          setfilesArray([]);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
    <TableFilesData.Provider
      value={{ filesArray, setfilesArray, filesTable, setFilesTable }}
    >
      <div>
        <h1 className='h3 mb-0 text-gray-800'>Subir recursos</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card shadow mb-4 mt-3'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>Recursos</h6>
              </div>
              <div className='card-body'>
                <p>
                  Selecciona el tipo de recurso que quieres subir y arrastralos
                  o seleccionalos en la zona de subida
                </p>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                      <i className='fas fa-folder-open'></i>
                    </span>
                  </div>
                  <select
                    className='form-control'
                    defaultValue='default'
                    onChange={handlerSelect}
                  >
                    <option value='default'>
                      Selecciona un tipo de recurso
                    </option>
                    <option value='adds'>Anuncios</option>
                    <option value='banners'>Banners</option>
                    <option value='notifications'>Notificaciones</option>
                    <option value='products'>Productos</option>
                  </select>
                </div>
              </div>
            </div>
            <FilesTable onClick={handlerSubmit} onPress={handlerSubmit} />
          </div>

          <div className='col-lg-4'>
            <div className='card shadow mb-4 mt-3'>
              <div className='card-header py-3'>
                <h6 className='m-0 font-weight-bold text-primary'>
                  Zona de cargue
                </h6>
              </div>
              <div className='card-body'>
                <DropZone>Arrastra y suelta los elementos aqui</DropZone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TableFilesData.Provider>
  );
};
