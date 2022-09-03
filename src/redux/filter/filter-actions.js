import { FILTER_CONTACTS } from './filter-types';

export const filterContacts = payload => {
  return {
    type: FILTER_CONTACTS,
    payload,
  };
};
