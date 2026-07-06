import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function AIAssistant() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            AI Project Scope Assistant
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
           Have a brilliant app idea? Describe it below, and our AI assistant will provide instant
           suggestions for key features, a potential tech stack, and a high-level effort estimate to
           help you get started

          </p>

          {/* Contact Form */}
          <form
            action="#"
            method="POST"
            className="mt-12 w-full max-w-200  bg-gray-700  rounded-xl shadow-xl p-8 space-y-6"
          >
            


            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-white  md:text-3xl"
              >
                Your App Idea
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="e.g., A mobile app that helps users find local hiking trails with user-submitted photos and difficulty ratings..." 
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-indigo-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-3 text-white font-semibold transition hover:bg-indigo-700"
            >
              Generate Suggestions
            </button>
          </form>
        </div>
      </section>
      
       <hr className="border-gray-700 "></hr>
      <Footer />
    </>
  );
}
   