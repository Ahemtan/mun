import { useState } from 'react'
import axiosInstance from '../lib/axios';
import { handleApiError } from '../lib/errorhandler';
import toast from 'react-hot-toast';
import { LoaderCircle } from 'lucide-react';
const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const res = await axiosInstance.post('/form', formData)
      toast.success(res.data.message)
      setLoading(false);
    } catch (error) {
      const { messgae } = handleApiError(error);
      setLoading(false)
      toast.error(messgae);
    }
    
  }

  return (
    <section className='container h-screen m-auto'>
      <div className="w-full h-full flex items-center justify-center">

        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Register Now!</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
            inventore quaerat mollitia?
          </p>

          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Register Now For Event!</p>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative">
                <input
                required
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">Name</label>

              <div className="relative">
                <input
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Your Name"
                  name='name'
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>

              <div className="relative">
                <input
                required
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  type="tel"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Phone Number"
                  name='phone'
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white text-center flex items-center justify-center"
            >
              {loading ? <LoaderCircle className='animate-spin' /> : "Submit"}
            </button>
          </form>
        </div>
      
      </div>
    </section>
  )
}

export default RegisterPage