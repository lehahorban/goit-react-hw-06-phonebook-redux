import { ADD_CONTACTS, REMOVE_CONTACTS, FILTER_CONTACTS } from './types';
import shortid, { generate } from 'shortid';

export const addContacts = payload => {
  return {
    type: ADD_CONTACTS,
    payload: {
      id: generate(),
      ...payload,
    },
  };
};

export const removeContacts = payload => {
  return {
    type: REMOVE_CONTACTS,
    payload,
  };
};

export const filterContacts = payload => {
  return {
    type: FILTER_CONTACTS,
    payload,
  };
};
