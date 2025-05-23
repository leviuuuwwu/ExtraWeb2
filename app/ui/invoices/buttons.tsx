'use client';

import { useRouter } from 'next/navigation';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice as deleteInvoiceAction } from '@/app/lib/actions';

export function UpdateInvoice({ id }: { id: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/dashboard/invoices/${id}/edit`)}
      className="rounded-md border p-2 hover:bg-blue-100"
    >
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-4" />
    </button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoiceAction.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
