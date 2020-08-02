import React, { useEffect, useRef } from 'react';
import './folderMolda.css';
import { hostNode } from '../../global/enviroments';
import { useFetch } from '../../hooks/useFetch';

export const FolderModal = ({ folder }) => {
  const {
    data: { data },
    loading,
  } = useFetch(`${hostNode}/upload/list/${folder}`);

  return (
    <>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div className='folder-modal-container'>
          <p>Total register : {data?.total_count}</p>
          <div className="d-flex">
            {data?.resources.map((file) => (
              <div class='card' style={{width: '18rem'}}>
                <img src={file.url} class='card-img-top' alt='...' />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
