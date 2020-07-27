import React, { useContext } from 'react';
import { TableFilesData } from '../../context/TableFilesContext';
import './dropZone.css';

export const DropZone = ({ children, files, table }) => {
  const { setfilesArray } = useContext(TableFilesData);

  const handlerDragEnter = (e) => {
    e.preventDefault();
  };

  const handlerDragLeave = (e) => {
    e.preventDefault();
  };

  const handlerDrop = (e) => {
    e.preventDefault();
    readFiles(e.dataTransfer);
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  const readFiles = (fileList = []) => {
    for (const file of fileList.files) {
      let entryFile = {
        name: file.name,
        lastModifiedDate: file.lastModified,
        preview: '',
        progress: 0,
      };

      const reader = new FileReader();

      reader.onerror = (e) => {
        console.log(e);
      };

      reader.onprogress = (e) => {
        entryFile.progress = (e.loaded / e.total) * 100;
      };

      reader.readAsDataURL(file);

      reader.onload = (e) => {
        entryFile.preview = e.target.result;
        setfilesArray((acc) => [...acc, entryFile]);
      };
    }
  };

  return (
    <div
      className={`dropzone`}
      onDragEnter={handlerDragEnter}
      onDragLeave={handlerDragLeave}
      onDragOver={handlerDragOver}
      onDrop={(e) => handlerDrop(e)}
    >
      {children}
    </div>
  );
};
