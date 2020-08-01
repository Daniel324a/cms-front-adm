import React, { useContext } from "react";
import { TableFilesData } from "../../../context/TableFilesContext";
import { ProgressBar } from "../../progressBar/ProgressBar";
import { cutLargeName } from "../../../utils/cutLargeName";

export const FilesTable = ({ filesItem, onPress }) => {
  const { filesArray } = useContext(TableFilesData);

  return (
    <div>
      <div className=''>
        <div className='card shadow mb-4'>
          <div className='card-header py-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='m-0 font-weight-bold text-primary'>
                Lista de archivos
              </h6>
              <button
                type='button'
                className='btn btn-primary btn-sm mb-0'
                onClick={onPress}>
                Subir todos
              </button>
            </div>
          </div>
          <div className='card-body'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>V. Previa</th>
                    <th>N. Archivo</th>
                    <th>Progreso</th>
                    <th>Fecha de cracion</th>
                    <th className='text-nowrap'>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {filesArray.map((item, i) => (
                    <tr key={item.name}>
                      <td>
                        {/* <img
                          src={item.preview}
                          alt={item.name}
                          className='img-thumbnail'
                          style={{ width: 100, height: 80 }}/> */}
                        3
                      </td>
                      <td className='align-middle'>
                        {cutLargeName(item.name, 3, 12)}
                      </td>
                      <td className='align-middle'>
                        {/* <ProgressBar percent={item.progress} /> */}2
                      </td>
                      <td className='align-middle'>
                        {/* {Date(item.lastModified).slice(0, 24)} */}1
                      </td>
                      <td className='text-nowrap align-middle'>
                        <button
                          className='btn p-0 text-dark mr-3'
                          data-toggle='tooltip'
                          data-original-title='Edit'>
                          <i className='fas fa-check text-success'></i>
                        </button>
                        <button
                          className='btn p-0'
                          data-toggle='tooltip'
                          data-original-title='Close'>
                          <i className='fas fa-times text-danger'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
