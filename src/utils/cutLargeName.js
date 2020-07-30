// corta un texto para que quede con este formato
// texto = 'La Bebesita bebelin', length = 3
// retorno 'La ...bebelin'

export const cutLargeName = (string = '', length = 1) => {
  if (string.length >= 20) {
    const aux = string.substring(0, length);
    return cutLargeName(aux + '...' + string.slice(string.length / 2));
  }
  return string;
};
