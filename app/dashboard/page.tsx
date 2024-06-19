export default function DashboardPage() {
  console.log("DashboardPage()!")

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="space-y-5">
        <div className="text-2xl">
          <p>SmartCI Dashboard</p>
        </div>

        <div className="flex grid grid-cols-3 gap-2">
          <div className="flex order-1 shrink-0 rounded-lg bg-blue-500 p-9 outline outline-green-500 outline-3 hover:bg-sky-100 hover:text-blue-600">
            1
          </div>
          <div className="flex order-2 shrink-0 rounded-lg bg-blue-500 p-9 outline outline-green-500 outline-3 hover:bg-sky-100 hover:text-blue-600">
            2
          </div>
        </div>
      </div>
    </main>
  );
    
}