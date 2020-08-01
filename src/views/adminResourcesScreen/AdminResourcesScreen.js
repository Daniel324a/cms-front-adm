import React from 'react';
import { ViewTitle } from '../../components/viewTitle/ViewTitle';

import './adminResourcesScreen.css'

export const AdminResourcesScreen = () => {
  const folders = ['banners', 'products', 'category', 'clasification','clasification','clasification','clasification','clasification','clasification'];

  return (
    <>
      <ViewTitle title='Administrar Recursos' />
      <div className='d-flex flex-wrap' >
        {folders.map((folder) => (
          <div className='card shadow mb-2 folder mr-2 pointer'>
            <div className='card-header py-3'>
              <span className='d-flex'>
                <i className='fas fa-lg fa-folder mr-3'></i>
                <h6 className='m-0 font-weight-bold text-primary'>{folder}</h6>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
