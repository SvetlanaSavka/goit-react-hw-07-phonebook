import contactApi from './api';

/* export const fetchContacts = async () => {
  const { data } = await contactApi.get('');
  return data;
};

export const fetchDeleteContacts = async id => {
  await contactApi.delete(`/${id}`);
  const { data } = await contactApi.get('');
  return data;
};

export const fetchPostContacts = async contact => {
  await contactApi.post('', contact);
  const { data } = await contactApi.get('');
  return data;
}; */

export const fetchContacts = () => contactApi.get('');

export const fetchDeleteContacts = id => contactApi.delete(`/${id}`);

export const fetchPostContacts = contact => contactApi.post('', contact);
