import { fetchInvoiceById } from '@/app/lib/data';
import InvoiceForm from '@/app/ui/invoices/form'; 


export default async function EditInvoicePage({ params }: { params: { id: string } }) {
  const invoice = await fetchInvoiceById(params.id);

  const transformedInvoice = {
    id: invoice.id,
    customerId: invoice.customer_id,
    amount: invoice.amount,
    status: invoice.status,
    date: invoice.id,
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Invoice</h1>
      <InvoiceForm invoice={transformedInvoice} />
    </main>
  );
}
