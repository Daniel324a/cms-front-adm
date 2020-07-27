import React from 'react';

export const FilesTable = ({files}) => {
  return (
    <div>
      <div class=''>
        <div class='card shadow mb-4'>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>
              Lista de archivos
            </h6>
          </div>
          <div class='card-body'>
            <div class='table-responsive'>
              <table class='table table-bordered'>
                <thead>
                  <tr>
                    <th>N. Archivo</th>
                    <th>Progreso</th>
                    <th>Fecha de cracion</th>
                    <th class='text-nowrap'>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lunar probe project</td>
                    <td>
                      <div class='progress progress-xs margin-vertical-10 '>
                        <div
                          class='progress-bar bg-danger'
                          style={{ width: '35%', height: '100$' }}
                        ></div>
                      </div>
                    </td>
                    <td>May 15, 2015</td>
                    <td class='text-nowrap'>
                      <button
                        className='btn p-0 text-dark mr-3'
                        data-toggle='tooltip'
                        data-original-title='Edit'
                      >
                        <i class='fas fa-edit'></i>
                      </button>
                      <button
                        className='btn p-0'
                        data-toggle='tooltip'
                        data-original-title='Close'
                      >
                        <i class='fas fa-times text-danger'></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Dream successful plan</td>
                    <td>
                      <div class='progress progress-xs margin-vertical-10 '>
                        <div
                          class='progress-bar bg-warning'
                          style={{ width: '85%', height: '100$' }}
                        ></div>
                      </div>
                    </td>
                    <td>July 1, 2015</td>
                    <td class='text-nowrap'>
                      <button
                        className='btn p-0 text-dark mr-3'
                        data-toggle='tooltip'
                        data-original-title='Edit'
                      >
                        <i class='fas fa-edit'></i>
                      </button>
                      <button
                        className='btn p-0'
                        data-toggle='tooltip'
                        data-original-title='Close'
                      >
                        <i class='fas fa-times text-danger'></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
