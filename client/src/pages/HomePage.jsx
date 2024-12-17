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
                Join Us On 9th, 10th & 11th of January to give life to diplomacy and change yours along with it
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo/90 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to="https://forms.gle/dqtQTaDPVhfsCKPX6"
                >
                  Delegate Registration
                </Link>
                <Link
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo/90 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to=""
                >
                  Dais Registration
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
                  Model UN conferences, strive to excel beyond the finite pages of a textbook, where students shall represent countries worldwide as civil UN diplomats and tackle ongoing complex globally acclaimed issues. Kathmandu Model College Model United Nations 2025 brings you all an excellent opportunity to stimulate UN committees, and debates on global issues and develop negotiation, public speaking, critical thinking, and resolution-based skills. Via KMC MUN 2025 and its global exposure, minds from all over Nepal and beyond shall come together in common ground to exchange ideas and share meaningful debates. The floor of delegation is open to students from Grades 8 to 12.
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