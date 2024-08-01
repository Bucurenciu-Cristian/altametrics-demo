import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoices, setSelectedInvoice, clearSelectedInvoice } from '../features/invoices/invoiceSlice';
import { RootState } from '../store';
import InvoiceModal from '../components/InvoiceModal';
import './InvoicesPage.css';
import LogoutButton from "../components/LogoutButton.tsx";

const InvoicesPage = () => {
  const dispatch = useDispatch();
  const { invoices, status, error, selectedInvoice } = useSelector((state: RootState) => state.invoices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  
  React.useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);
  
  const handleInvoiceClick = (invoice: any) => {
    dispatch(setSelectedInvoice(invoice));
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearSelectedInvoice());
  };
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Invoices</a></li>
          <li><a href="#">Bills</a></li>
          <li><a href="#">Expenses</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>Invoices</h1>
        {token && <LogoutButton />}
        
        <table className="styled-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Payee</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} onClick={() => handleInvoiceClick(invoice)}>
              <td>{invoice.id}</td>
              <td>{invoice.vendor_name}</td>
              <td>{invoice.description}</td>
              <td>{invoice.paid ? null : invoice.amount}</td>
              <td>{new Date(invoice.due_date).toLocaleDateString()}</td>
              <td>{invoice.paid ? 'Paid' : 'Open'}</td>
            </tr>
          ))}
          </tbody>
        </table>
        {isModalOpen && selectedInvoice && (
          <InvoiceModal invoice={selectedInvoice} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default InvoicesPage;
