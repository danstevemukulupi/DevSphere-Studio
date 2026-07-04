
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import React from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 


export default function Homep() {
  return (
   <> 
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <h1 className="text-6xl font-bold">Engineering Your Vision,<br/>One Line of Code at a Time.</h1>
      <p className="mt-4 text-xl text-gray-400">
      Welcome to DevSphere Studio, where innovative ideas are <br />
      transformed into powerfull software solutions. From sleek websites<br />
      to complex enterorise systems, let's build the future together.
      </p>
        <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Get a Free Quotes</button>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View My Work</button>
            </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <h1 className="text-4xl font-bold text-white">What I Build</h1>
      <p className="mt-4 text-xl text-gray-400">Specializing in a wide range of development services to meet your business needs.</p>
      </div>
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Features Projects</h1>
      <p className="mt-4 text-xl text-gray-400">A glimpse into the quality and creativity of my work.</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <h1 className="text-4xl font-bold text-white">Meet The Developer</h1>
      <p className="mt-4 text-xl text-gray-400">I'am a passionate software developer with knack for turning complex problems into elegant, user-friendly <br />
      solutions. with years of experience across the techn stack, i'm dedicated to delivering high-quality code and <br />
      exceptional results.

      </p>
      </div>
       <hr className="border-gray-700 "></hr>
    <Footer />
    </>
   
  );
}