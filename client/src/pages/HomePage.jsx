import React from 'react'

const HomePage = () => {

  return (
    <div className='text-xl'>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-indigo-700 sm:block"> Increase Conversion. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Number Dosen't Lie</h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>

        <dl
          className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

            <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">$4.8m</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

            <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">24</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

            <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">86</dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

            <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">86k</dd>
          </div>
        </dl>
      </div>

    </div>
  )
}

export default HomePage