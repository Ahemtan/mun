import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            KMC MUN strongly commits to fostering delegates a beginner-friendly experience of diplomacy and delegation from scratch. We promise to build bridges rather than walls via diplomacy. You're just one click away to begin your very own 2025 with a blend of diplomacy and entertainment.
                        </p>

                        <div className="mt-8">
                            <a href="#" className="text-2xl font-bold text-primary"> Divyam Jha <br /> Secretary General </a>

                            <address className=" text-1xl mt-2 not-italic font-regular font-kanit">Kathmandu Model Secondary School, <br /> Bagbazar, Kathmandu <br /> +977 9865491485 </address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-xl border lg:col-span-3 lg:p-12">
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-primary/20 border p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-primary/20 border p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-primary/20 border p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border-primary/20 border p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-secondary px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact