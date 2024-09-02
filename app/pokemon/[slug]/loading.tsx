import React from 'react'

const Loading = () => {
  return (
    <div className='container mx-auto bg-gray-100 py-4 px-6 sm:px-28 fade-in flex flex-col gap-2'>
      {/* Skeleton for Back Link */}
      <div className='text-primary font-semibold text-base md:text-lg animate-pulse'>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>

      {/* Skeleton for Breadcrumbs */}
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-40 mb-4"></div>
      </div>

      <section className='pokemon-detail min-h-[84vh] sm:min-h-[86vh] grid place-items-center'>
        {/* Skeleton for Detail Card */}
        <div className="pokemon-detail__card sm:max-w-[500px] w-full bg-secondary rounded-2xl overflow-y-hidden animate-pulse">
          {/* Skeleton for Image */}
          <div className='pokemon-detail__cover flex items-center justify-center p-4 sm:p-6'>
            <div className="bg-gray-300 rounded-full w-48 h-48"></div>
          </div>
          {/* Skeleton for Content */}
          <div className='pokemon-detail__content bg-tertiary p-4 sm:p-6'>
            <ul className="flex flex-col gap-1 sm:gap-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li key={idx} className="capitalize text-sm sm:text-base animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Loading