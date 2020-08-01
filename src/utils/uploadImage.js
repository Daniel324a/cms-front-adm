import { hostNode } from '../global/enviroments';

export const uploadImage = (type, tag, files=[]) => {
  const formdata = new FormData();
  const http = new XMLHttpRequest();

  for (const file of files) {
    formdata.append('files', file);
  }

  return new Promise((resolve, reject) => {
    http.open('POST', `${hostNode}/upload/${type}/${tag}`);
    http.onreadystatechange = (event) => {
      if (files.length === 0) {
        reject('Por favor sube un archivo')
      }
      if (http.readyState === 4) {
        if (http.status === 200) {
          resolve('Los archivos se han subido exitosamente');
        }
        reject('Fallo al subir los archivos');
      }
    };
    http.send(formdata);
  });
};
