'use client';

import { connections } from '@/app/lib/static-data'
import { PlusIcon, WindowIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react'
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from 'next/link';

export default function ConnectionsPage() {
  console.log("ConnectionsPage()!")
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="space-y-5">
        <Link className="flex shrink-0 items-end rounded-lg bg-slate-500 p-4 outline outline-white outline-3 outline-dashed hover:bg-sky-100 hover:text-blue-600"
          href={`/connections?new=true`}>
          <div className="flex w-full grow items-center justify-stretch gap-2 rounded-md p-3 text-md font-medium align-middle md:flex-none md:justify-start md:p-2 md:px-3">
            <PlusIcon className="w-12" />
            Create a New Connection
          </div>
          <NewConnectionModalPopup />
        </Link>

        {connections.map((connection) => (
          <Link className="flex shrink-0 items-end rounded-lg bg-blue-500 p-4 outline outline-green-500 outline-3 hover:bg-sky-100 hover:text-blue-600"
            key={connection.id}
            href={`/connections/${connection.id}`}>
            <div className="flex w-full grow items-center justify-stretch gap-2 rounded-md p-3 text-md font-medium align-middle md:flex-none md:justify-start md:p-2 md:px-3">
              <WindowIcon className="w-12" />
              {connection.provider}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

function NewConnectionModalPopup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newConnection = searchParams.get("new");

  function createNewConnection(formData: any) {
    console.log("createNewConnection Function called.");
    // event.preventDefault()
    const providerName = formData.get('provider_name');
    const baseUrl = formData.get('base_url');
    {/* TODO: Submit new creation API call */ }
  }

  return (
    <>
      {newConnection &&
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="p-8 border shadow-lg rounded-md bg-white">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900">New Connection</h3>
              <div className="mt-2 px-7 py-3">
                <form onSubmit={createNewConnection}>
                  {/* Create Form for creating new provider */}
                  <div className="flex">
                    <div className="flex text-lg text-gray-500 p-2">Provider</div>
                    <input className="border-4 flex shrink-0" name="provider_name"/>
                  </div>
                  <div className="flex">
                    <div className="flex text-lg text-gray-500 p-2">Base URL</div>
                    <input className="border-4 flex shrink-0" name="base_url"/>
                  </div>
                  <div className="flex">
                    <div className="flex text-lg text-gray-500 p-2">Authentication -- TBD</div>
                  </div>
                  <div className="flex justify-center mt-4">
                    {/* TODO: Something is broken and form submittal is not trigger function correctly */}
                    <button onClick={router.back} type="submit" className="px-4 py-2 p-3 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">Submit</button>
                    {/* Using useRouter to dismiss modal*/}
                    <button onClick={router.back} className="px-4 py-2 p-3 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
