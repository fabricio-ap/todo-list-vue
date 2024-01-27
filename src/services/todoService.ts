import { TODO_URL } from '@/utils/urls';
import { api } from './api';

export const getTodos = async () => {
  const { data } = await api.get(TODO_URL);
  return data;
};
