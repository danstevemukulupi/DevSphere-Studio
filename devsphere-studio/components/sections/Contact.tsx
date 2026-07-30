"use client";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import emailjs from "@emailjs/browser";
import { useRef} from "react";




export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if(!form.current) return;

  emailjs
    .sendForm(
      "service_80zs5r3",
      "template_u0guq7l",
      form.current,
      {
        publicKey: "aafUyIJB3tEaKqTkG",
      }
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );
};
  return (
    
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Get In Touch
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg text-blue-200">
            Have a project in mind, a question, or just want to say hello?
            I'd love to hear from you. Fill out the form below and I'll get
            back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form
          ref={form}
          onSubmit={sendEmail}
            className="mt-12 w-full  max-w-lg  bg-gray-700  rounded-xl shadow-xl p-8 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-white">
                Project Inquiry
              </h2>

              <p className="mt-2 text-blue-200">
                Please provide as much detail as possible about your project.
              </p>
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder= "Benedicte B"
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-white focus:border-indigo-500 placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-white focus:border-indigo-500 placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-white focus:border-indigo-500 placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-400 py-3 text-black font-semibold transition hover:bg-indigo-700"
            > 
            <span className="mr-4 ">➤</span>
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