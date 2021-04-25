export const sortAsc = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

export const clearStr = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
