'use client';

import { usePathname } from 'next/navigation';
import { pipelines } from '@/app/lib/static-data'
import { PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PipelineOverviewPage() {
  console.log("PipelineOverviewPage()!")
  const connection_id = usePathname().split("/")[2];
  const repository_name = usePathname().split("/")[3];
  const pipeline_name = usePathname().split("/")[4];

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="space-y-5">
      <div className="text-2xl">
          {repository_name}
        </div>
          {pipeline_name}
      </div>
    </main>
    );
  }