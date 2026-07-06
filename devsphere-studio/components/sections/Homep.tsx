
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import React from "react"; 
import Image from "next/image";
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
      <h1 className="text-4xl font-bold text-white mt-2">What I Build</h1>
      <p className="mt-4 text-xl text-gray-400">Specializing in a wide range of development services to meet your business needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 max-w-8xl  mx-auto"> 
            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-40">
                <Image
                  src="/coding.png"
                  alt="coding project"
                  width={100}
                  height={100}
                  className="object-contain"  
                />
              </div>
              <br />
              <div className="p-6">
              <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Web Development</h2>
              <p className="text-gray-400 text-center">
                Crafting responsive, high-performance <br />
                websites and web applications using modern < br/>
                technologies.
              </p> 
          </div>
          </div>
      
            <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <div className="flex items-center justify-center h-40">
                <Image
                  src="/phoneee.png"
                  alt="phoneee project"
                  width={100}
                  height={100}
                  className="object-contain"
                  
                />
              </div>
              <br />
              <div className="p-6">
              <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Mobile Apps</h2>
              <p className="text-gray-400 text-center">
                Building beautiful and intuitive cross-platform <br />
                mobile applications for IOS and Android.
              </p> 
               
          </div>
          </div>
      
          <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
             <div className="flex items-center justify-center h-40">
                <Image
                  src="/game.png"
                  alt="game project"
                  width={100}
                  height={100}
                  className="object-contain"  
                />
              </div>
              <br />
              <div className="p-6">
              <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Game Development</h2>
              <p className="text-gray-400 text-center">
                Developing engaging 2D and 3D games with <br />
                immersive and gameplay mechanics.
              </p> 
              
          </div>
          </div>

            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
               <div className="flex items-center justify-center h-40">
                <Image
                  src="/custom1.png"
                  alt="custom1 project"
                  width={100}
                  height={100}
                  className="object-contain"
                  
                />
              </div>
              <br />
              <div className="p-6">
              <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Custom Systems</h2>
              <p className="text-gray-400 text-center">
                 Designing and implementing bespoke <br />
                 software systems tailored to your unique <br />
                  business needs.
              </p> 
              
          </div>
          </div>
          </div>
         
          <br />
          <br />
          <br/>

      </div>
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Features Projects</h1>
      <p className="mt-4 text-xl text-gray-400">A glimpse into the quality and creativity of my work.</p>
      
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-8xl mx-auto"> 
            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/ecommercee.jpeg"
                  alt="ecommercee project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8">
              <h2 className="text-2xl font-bold text-white-600 mb-4">E-Commerce Platform "ShopSphere</h2>
              <p className="text-gray-400">
                A full-featured e-commerce solution with a modern storefront, <br />
                product management, and a secure checkout process. Built with <br />
                Next.js and integrated with Stripe for payments.
              </p> 
             
          </div>
          </div>
      
         
            <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
               <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/task.png"
                  alt="task project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8">
              <h2 className="text-2xl font-bold text-white-600 mb-4">Task Management App "Taskify"</h2>
              <p className="text-gray-400">
              A cross-platform mobile app for team collaboration and task < br />
              tracking. Features real-time updates, notifications, and an <br />
              intuitive drag-and-drop interface. 
              </p> 
               
          </div>
          </div>

            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
               <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/analytic.png"
                  alt="analytics project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8">
              <h2 className="text-2xl font-bold text-white-600 mb-4">Data Analytics Dashboard</h2>
              <p className="text-gray-400">
                A web-based dashboard for visualizing and analyzing complex <br />
                datasets. Includes interactive charts, data filtering, and export <br />
                functionalities.
              </p> 
          </div>
          </div>
          </div>
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-700 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-10">Explore All Projects</button>                  
         </div>
          <br />
          <br />
          <br/>

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