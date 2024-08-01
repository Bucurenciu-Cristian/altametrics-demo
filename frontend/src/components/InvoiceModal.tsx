import React, { useEffect, useRef } from 'react';
import './InvoiceModal.css';

const InvoiceModal = ({ invoice, onClose }) => {
  const modalRef = useRef(null);
  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Invoice Details</h2>
        <p><strong>ID:</strong> {invoice.id}</p>
        <p><strong>Vendor Name:</strong> {invoice.vendor_name}</p>
        <p><strong>Amount:</strong> ${invoice.amount}</p>
        <p><strong>Due Date:</strong> {new Date(invoice.due_date).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {invoice.description}</p>
        <p><strong>Status:</strong> {invoice.paid ? 'Paid' : 'Open'}</p>
        <p><strong>User ID:</strong> {invoice.user_id}</p>
      </div>
    </div>
  );
};

export default InvoiceModal;
