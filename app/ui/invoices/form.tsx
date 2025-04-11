'use client';

import { useState, useEffect } from 'react';

type Invoice = {
  id: string;
  customerId: string;
  amount: number;
  status: 'pending' | 'paid';
  date: string;
};

interface InvoiceFormProps {
  invoice: Invoice;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ invoice }) => {
  const [formData, setFormData] = useState({
    customerId: invoice.customerId,
    amount: invoice.amount,
    status: invoice.status,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Invoice updated', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="customerId">Customer ID</label>
        <input
          id="customerId"
          name="customerId"
          type="text"
          value={formData.customerId}
          onChange={handleChange}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default InvoiceForm;