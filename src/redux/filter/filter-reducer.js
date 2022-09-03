import { FILTER_CONTACTS } from './filter-types';

const initialStore = '';
const filterReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;
    default:
      return store;
  }
};

export default filterReducer;
