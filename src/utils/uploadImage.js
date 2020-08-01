import { hostNode } from "../global/enviroments";

export const uploadImage = (type, tag, files) => {
  const formdata = new FormData();
  const http = new XMLHttpRequest();

  console.log(files);

  // formdata.append("files", files);

  // http.open("POST", `${hostNode}/upload/${type}/${tag}`);
  // http.onreadystatechange = event => {
  //   if (http.readyState === 4) {
  //     console.log(http.responseText);
  //   }
  // };

  // http.send(formdata);
};
