import React, { useState, useEffect } from 'react';
 
const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
 
  useEffect(() => {
    // Simulate fetching invoices from backend
    const fetchedInvoices = [
      { id: 1, amount: '$500', status: 'Pending' },
      { id: 2, amount: '$500', status: 'Paid' },
    ];
    setInvoices(fetchedInvoices);
  }, []);
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="font-bold">Invoice #{invoice.id}</h2>
            <p>Amount: {invoice.amount}</p>
            <p>Status: {invoice.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Invoices;