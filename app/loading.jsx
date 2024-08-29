import React from 'react'

const Loading = () => {
  return (
    <main className="container mx-auto bg-gray-100 p-6 flex flex-col gap-5 min-h-svh fade-in">
    {/* Skeleton for Select Dropdown */}
    <div className="md:max-w-[300px] bg-white p-2 rounded-2xl w-full animate-pulse">
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>

    {/* Skeleton for Search Bar */}
    <div className="md:max-w-[400px] w-full flex rounded-lg overflow-hidden animate-pulse">
      <div className="flex-1 p-2 h-10 bg-gray-300"></div>
      <div className="text-white p-2 w-20 bg-gray-400"></div>
    </div>

    {/* Skeleton for Pokemon Cards */}
    <div className="grid grid-cols-3 gap-5 fade-in">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="p-4 bg-white rounded-lg shadow-md animate-pulse">
          <div className="h-24 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </main>
  )
}

export default Loading