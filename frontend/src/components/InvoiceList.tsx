import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Invoice } from '../store/slices/invoiceSlice';
import { setInvoices } from '../store/slices/invoiceSlice';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchInvoices = async () => {
  const { data } = await axios.get('/api/invoices');
  return data;
};

const InvoiceList: React.FC = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  
  const { data, error, isLoading } = useQuery('invoices', fetchInvoices, {
    onSuccess: (data) => {
      dispatch(setInvoices(data));
    },
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching invoices</div>;
  
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice: Invoice) => (
          <li key={invoice.id}>{invoice.vendor_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
