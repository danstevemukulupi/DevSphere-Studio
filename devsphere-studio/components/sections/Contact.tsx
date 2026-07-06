import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Get In Touch
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
            Have a project in mind, a question, or just want to say hello?
            I'd love to hear from you. Fill out the form below and I'll get
            back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form
            action="#"
            method="POST"
            className="mt-12 w-full max-w-lg  bg-gray-700  rounded-xl shadow-xl p-8 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white">
                Project Inquiry
              </h2>

              <p className="mt-2 text-gray-400">
                Please provide as much detail as possible about your project.
              </p>
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>

              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder= "Benedicte B"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-indigo-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="benedicte.b14@hotmail.com"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-indigo-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Project Description
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Describe your project, goals, and any specific requirements..." 
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-indigo-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-3 text-white font-semibold transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <hr className="border-gray-700" />

      <Footer />
    </>
  );
}