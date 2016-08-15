export const selectedCustomer = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_CUSTOMER':
      return payload;
    default:
      return state;
  }
};
