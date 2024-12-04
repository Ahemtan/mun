import { Link } from 'react-router-dom'

const HomePage = () => {

  return (


    <>

      <div className='text-xl'>

        <section className="bg-gray-50" id='hero'>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Be Part of Use
                <strong className="font-extrabold text-indigo-700 sm:block"> Increase Conversion. </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Model UN simulations engage hundreds of thousands of students each year, helping them to learn more about the principles of the UN and how it functions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to="/register"
                >
                  Register Now
                </Link>

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

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" id='#about'>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Number Dosen&apos;t Lie</h2>

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
    </>
  )
}

export default HomePage