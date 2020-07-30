export const checkDuplicateFiles = (newFile, filesState = []) => {
  let duplicated = false;
  for (const file of filesState) {
    if (file.name === newFile.name) {
      duplicated = true;
      break;
    } else {
      duplicated = false;
    }
  }
  return duplicated;
};
