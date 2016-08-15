export const customers = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_CUSTOMERS':
      return payload;
    case 'CREATE_CUSTOMER':
      return [...state, payload];
    case 'UPDATE_CUSTOMER':
      return state.map(customer => {
        return customer.id === payload.id ? Object.assign({}, customer, payload) : customer;
      });
    case 'DELETE_CUSTOMER':
      return state.filter(customer => {
        return customer.id !== payload.id;
      });
      case 'SEARCH_CUSTOMER':
          return state.filter(customer => {
            console.log(payload);
            return customer.name === payload;
          });
    default:
      return state;
  }
};
