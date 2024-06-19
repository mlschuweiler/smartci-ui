'use client';

import { usePathname } from 'next/navigation';
import { repositories } from '@/app/lib/static-data';
import { PlusIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function RepositoriesPage() {
  console.log("RepositoriesPage()!")
  const connection_id = usePathname().split("/")[2];

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="space-y-5">
      { repositories.map((repository) => (
        repository.provider_id == connection_id ? (
          <Link className="flex shrink-0 items-end rounded-lg bg-blue-500 p-4 outline outline-green-500 outline-3 hover:bg-sky-100 hover:text-blue-600" 
            key={repository.id} 
            href={`/connections/${connection_id}/${repository.name}`}>
          <div className="flex w-full grow items-center justify-stretch gap-2 rounded-md p-3 text-md font-medium align-middle md:flex-none md:justify-start md:p-2 md:px-3">
            <CircleStackIcon className="w-12"/>
            <h1>{ repository.name }</h1>
          </div>
        </Link>
        ) : (<div></div>)
      ))}
      </div>
    </main>
    );
  }