import React, { useState } from 'react';
import { ViewTitle } from '../../components/viewTitle/ViewTitle';

import './adminResourcesScreen.css';
import { FolderModal } from '../../components/folderModal/FolderModal';

export const AdminResourcesScreen = () => {
  const folders = ['banners', 'products', 'category', 'clasification'];

  const [actived, setActived] = useState(null);

  return (
    <>
      <ViewTitle title='Administrar Recursos' />
      <div className='d-flex flex-wrap mt-2'>
        {folders.map((folder, i) => (
          <div
            key={i}
            className={`card shadow mb-2 folder mr-2 pointer ${
              actived === folder && 'selected'
            }`}
            onClick={() => setActived(folder)}
          >
            <div className='card-header py-3'>
              <span className='d-flex'>
                <i
                  className={`fas fa-lg mr-3  ${
                    actived === folder ? 'fa-folder-open' : 'fa-folder '
                  }`}
                ></i>
                <h6 className='m-0 font-weight-bold text-primary'>{folder}</h6>
              </span>
            </div>
          </div>
        ))}
      </div>
      {actived != null && <FolderModal folder={actived} visible />}
    </>
  );
};
