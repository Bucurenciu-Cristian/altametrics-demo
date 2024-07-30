import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface InvoiceModalProps {
  invoiceId: string | null;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ invoiceId, onClose }) => {
  const invoice = useSelector((state: RootState) =>
    state.invoices.invoices.find((inv) => inv.id === invoiceId)
  );
  
  if (!invoice) return null;
  
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{invoice.vendor_name}</h2>
        <p>Amount: {invoice.amount}</p>
        <p>Due Date: {invoice.due_date}</p>
        <p>Description: {invoice.description}</p>
      </div>
    </div>
  );
};

export default InvoiceModal;
