export const selectedStock = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_STOCK':
      return payload;
    default:
      return state;
  }
};
