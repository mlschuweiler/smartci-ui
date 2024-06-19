'use client';

import { usePathname } from 'next/navigation';
import { pipelines } from '@/app/lib/static-data'
import { PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PipelinesPage() {
  console.log("PipelinesPage()!")
  const connection_id = usePathname().split("/")[2];
  const repository_name = usePathname().split("/")[3];
  const pipeline_name = usePathname().split("/")[4];

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="space-y-5">
        <div className="text-2xl outline-2">
          {repository_name}
        </div>
          { pipelines.map((pipeline) => (
            <Link className="flex shrink-0 items-end rounded-lg bg-blue-500 p-4 outline outline-green-500 outline-3 hover:bg-sky-100 hover:text-blue-600" 
                key={pipeline.name} 
                href={`/connections/${connection_id}/${repository_name}/${pipeline.name}`}>
              <div className="flex w-full grow items-center justify-stretch gap-2 rounded-md p-3 text-md font-medium align-middle md:flex-none md:justify-start md:p-2 md:px-3">
                <PlayIcon className="w-12 outline outline-green-500 hover:bg-green-500"/>
                { pipeline.name }
              </div>
            </Link>
          ))}
      </div>
    </main>
    );
  }