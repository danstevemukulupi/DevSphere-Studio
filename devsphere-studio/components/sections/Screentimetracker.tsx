import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Screentimetracker() {
  return (
    <>
    <Navbar />  
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <h2 className="text-4xl font-bold text-white-600 mb-10 mt-10">Screen Time Tracker</h2>
     {/* Background Video */}
        <video
          loop 
          playsInline
          controls
          className="w-4/5 max-5xl rounded-xl shadow-xl mb-10"
        >
          <source src="/Screen-Time-Tracker-Sound.mp4" type="video/mp4" />
        </video>
    </div>
    <hr className="border-gray-700 "></hr>
    <Footer />
  </>
);
}