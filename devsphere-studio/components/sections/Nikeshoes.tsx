import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Nikeshoes() {
    return (
        <>
        <Navbar /> 
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
             {/* Background Video */}
        <video
          loop
          muted
          playsInline
          controls
          className="w-4/5 max-5xl rounded-xl shadow-xl"
        >
          <source src="/Nike-Shoes-Final.mp4" type="video/mp4" />
        </video>
        </div>     
        <hr className="border-gray-700 "></hr>
        <Footer />
        </>
    );
}