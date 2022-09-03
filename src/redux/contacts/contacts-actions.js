import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
 
} from './contacts-types';
import { generate } from 'shortid';

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

