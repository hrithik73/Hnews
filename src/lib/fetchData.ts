import { api } from 'src/config/api';

export const fetchData = async (type: string) => {
  const res = await api.get(`${type}.json`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.data;
};
