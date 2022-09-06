import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchContacts,
  fetchDeleteContacts,
  fetchPostContacts,
} from 'api/fetchContacts';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: contacts, filter: '' },
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContacts, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

/* export const getContactsAsync = () => async dispatch => {
  try {
    // fetch
    // dispatch
  } catch (error) {
    toast.error(error.message);
  }
}; */

export const getContactsAsync = () => async dispatch => {
  try {
    const { data } = await fetchContacts();
    dispatch(setContacts(data));
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteContactAsync = id => async dispatch => {
  try {
    await fetchDeleteContacts(id);
    const { data } = await fetchContacts();
    dispatch(setContacts(data));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addContactAsync = contact => async dispatch => {
  try {
    await fetchPostContacts(contact);
    const { data } = await fetchContacts();
    dispatch(setContacts(data));
  } catch (error) {
    toast.error(error.message);
  }
};
