import contactApi from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchContacts = async () => {
  try {
    const { data } = await contactApi.get('');
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchDeleteContacts = async id => {
  try {
    await contactApi.delete(`/${id}`);
    const { data } = await contactApi.get('');
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchPostContacts = async contact => {
  try {
    await contactApi.post('', contact);
    const { data } = await contactApi.get('');
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
