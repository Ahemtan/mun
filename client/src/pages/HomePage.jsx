import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

const HomePage = () => {

  return (


    <>

      <div className='text-xl'>

        <section className="bg-gradient-to-b" id='hero'>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Be Part of Us
                <strong className="font-extrabold text-primary sm:block"> Connecting Minds <span className='text-secondary'>Shaping Futures</span></strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Model UN simulations engage hundreds of thousands of students each year, helping them to learn more about the principles of the UN and how it functions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo/90 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to="/register"
                >
                  Register Now
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-indigo/90 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  to="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id='about' className='bg-gray-100'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <p className='text-light font-semibold text-secondary'>About Us</p>
                <h1 className="text-2xl text-primary sm:text-4xl font-bold">
                  KMC MUN
                </h1>

                <p className="mt-4 text-gray-700 text-xl max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                  architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                  sequi.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />

    </>
  )
}

export default HomePage