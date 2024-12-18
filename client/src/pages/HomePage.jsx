import { Link } from 'react-router-dom'
import Contact from '../components/Contact'


const HomePage = () => {

  return (


    <>

      <div className='text-xl'>

        <section className="bg-gradient-to-b" id='hero'>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-bold text-gray-800 font-kanit sm:text-5xl">
                Be Part of Us
                <strong className="font-kanit text-primary sm:block"> Connecting Minds <span className='text-secondary'>Shaping Futures</span></strong>
              </h1>

              <p className="mt-4 font-bold text-gray-800 font-kanit sm:text-xl/relaxed">
                Join Us on 9th, 10th & 11th of January <br /> to give life to diplomacy and change yours along with it
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo/90 focus:outline-none focus:ring active:bg-#f6941f sm:w-auto"
                  to="https://forms.gle/dqtQTaDPVhfsCKPX6" target="_blank"
                >
                  Delegate Registration
                </Link>
                <Link
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo/90 focus:outline-none focus:ring active:bg-#f6941f sm:w-auto"
                  to="https://forms.gle/VdfED69rM4TfjjWo6" target="_blank"
                >
                  Dais Registration
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-indigo/90 focus:outline-none focus:ring active:text-#f6941f sm:w-auto"
                  to="https://www.instagram.com/kmc_mun/" target="_blank"
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
            <p className='text-light font-semibold font-kanit text-secondary'>About Us</p>
                <h1 className="text-2xl text-primary sm:text-4xl  font-kanit font-bold">
                  KMC MUN
                </h1>
            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                

                <p className="mt-4 text-gray-700 text-xl max-w-[400px]">
                  Model UN conferences, strive to excel beyond the finite pages of a textbook, where students shall represent countries worldwide as civil UN diplomats and tackle ongoing globally acclaimed issues. Kathmandu Model Seconday School Model United Nations 2025 is an excellent opportunity to stimulate UN committees, and meaningful debates on global issues with minds all over nepal and beyond, searching for a common ground of execution. We aspire to develop negotiation, public speaking, and resolution-based skills. The floor of the delegation is open to students from Grades 7 to 12.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <Contact />

    </>
  )
}

export default HomePage