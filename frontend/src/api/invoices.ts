import apiClient from './axiosClient';

export const fetchInvoices = async () => {
  const response = await apiClient.get('/invoices');
  return response.data;
};
