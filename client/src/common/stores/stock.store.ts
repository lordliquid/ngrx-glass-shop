export const stock = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'ADD_STOCK':
            return payload;
        case 'CREATE_STOCK':
            return [...state, payload];
        case 'UPDATE_STOCK':
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case 'DELETE_STOCK':
            return state.filter(item => {
                return item.id !== payload.id;
            });
        default:
            return state;
    }
};

// export const items = (state: any = [], {type, payload}) => {
//   switch (type) {
//     case 'ADD_ITEMS':
//       return payload;
//     case 'CREATE_ITEM':
//       return [...state, payload];
//     case 'UPDATE_ITEM':
//       return state.map(item => {
//         return item.id === payload.id ? Object.assign({}, item, payload) : item;
//       });
//     case 'DELETE_ITEM':
//       return state.filter(item => {
//         return item.id !== payload.id;
//       });
//     default:
//       return state;
//   }
// };
