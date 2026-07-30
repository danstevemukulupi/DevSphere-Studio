
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import React from "react"; 
import Image from "next/image";
import Link from "next/link";
//import { Container, Row, Col } from "react-bootstrap"; 


export default function Homep() {
  return (
   <> 
    <Navbar />
    <div className="flex flex-col items-center justify-center   py-70 bg-gray-800">
      <h1 className="text-7xl font-bold mb-6">Engineering Your Vision,<br/>One Line of Code at a Time.</h1>
      <p className="mt-4 text-2xl text-blue-200 mb-6">
      Welcome to DevSphere Studio, where innovative ideas are <br />
      transformed into powerfull software solutions. From sleek websites<br />
      to complex enterorise systems, let's build the future together.
      </p>
        <div className="space-x-4 container mx-auto text-center ">
          <br/>
                <Link href="/contact">
                <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Get a Free Quotes</button>
                </Link>
                <Link href="/portfolio">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">View My Work</button>
                </Link>
            </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900"> 
      <h1 className="text-4xl font-bold text-white mt-2">What I Build</h1>
      <p className="mt-4 text-xl text-blue-200">Specializing in a wide range of development services to meet your business needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 max-w-8xl  mx-auto">  
            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
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
              <p className="text-blue-200 text-center">
                Crafting responsive, high-performance <br />
                websites and web applications using modern < br/>
                technologies.
              </p> 
          </div>
          </div>
      
            <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
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
              <p className="text-blue-200 text-center">
                Building beautiful and intuitive cross-platform <br />
                mobile applications for IOS and Android.
              </p> 
               
          </div>
          </div>
      
          <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300
          border border-gray-700 
          hover:border-blue-400 
          hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
          transition-all 
          duration-300">
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
              <p className="text-blue-200 text-center">
                Developing engaging 2D and 3D games with <br />
                immersive and gameplay mechanics.
              </p> 
              
          </div>
          </div>

            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
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
              <p className="text-blue-200 text-center">
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
          <Link href="/services">
          <h1 className="hover:text-green-200 hover:underline underline-offset-6 transition duration-300 text-xl font-bold text-blue-300">
            Learn More About My Services  
            <span className="ml-8">→</span>
            </h1>
            
          </Link>
      </div>
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <h1 className="text-4xl font-bold text-white mt-10">Features Projects</h1>
      <p className="mt-4 text-xl text-blue-200">A glimpse into the quality and creativity of my work.</p>
      
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-8xl mx-auto"> 
            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl  transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/mapovote.png"
                  alt="ecommercee project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8 ">
              <h2 className="text-2xl font-bold text-white-600 mb-4">Blockchain-Based Secure E-Voting DApp</h2>
              <p className="text-blue-200">
                A decentralized application for secure and transparent electronic voting. <br />
                Utilizes blockchain technology to <br />
                ensure the integrity and immutability of votes...
              </p>   
          </div>
          </div>
            <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
               <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/Social-Media-Content.png"
                  alt="task project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8">
              <h2 className="text-2xl font-bold text-white-600 mb-4">Social Media Content Planner</h2>
              <p className="text-blue-200">
              A social media content planning tool that helps users create, schedule,<br />
              and track their content. Features real-time updates, notifications, and an <br />
              intuitive drag-and-drop interface...
              </p> 
               
          </div>
          </div>

            <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300
            border border-gray-700 
            hover:border-blue-400 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all 
            duration-300">
               <div className="relative w-full h-48 md:h-56">
                <Image
                  src="/Screen-Time-Tracker.png"
                  alt="analytics project"
                  fill
                  className="object-cover"
                  
                />
              </div>
              <br />
              <div className="p-8">
              <h2 className="text-2xl font-bold text-white-600 mb-4">Screen Time Tracker</h2>
              <p className="text-blue-200">
                A tool for monitoring and analyzing screen time usage. <br />
                Provides insights into user behavior <br />
                and helps manage digital well-being... 
              </p> 
          </div>
          </div>
          </div>
         <div className="space-x-4 container mx-auto text-center">
          <br/>
               <Link href="/portfolio">
                <button className="bg-gray-700 hover:bg-green-200 hover:text-black text-white  font-bold py-4 px-8 rounded mt-10">Explore All Projects</button>
                </Link>               
         </div>
          <br />
          <br />
          <br/>

      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
        <div className="flex items-center justify-center h-40 mb-50">
                <Image
                  src="/idea-final.png"
                  alt="project idea"
                  width={1800}
                  height={1800}
                  className="object-contain"  
                />
              </div>

        <div className="flex items-center gap-8"> 
           <Image
                  src="/dev.png"
                  alt="developer"
                  width={800}
                  height={800}
                  className="object-contain"  
                />
       <div>         
      <h1 className="text-5xl font-bold text-white">Meet The Developer</h1>
      
      <p className="mt-4 text-2xl text-blue-200 max-w-2xl">
      I'am a passionate software developer with knack for turning complex problems into elegant, user-friendly <br />
      solutions. with years of experience across the techn stack, i'm dedicated to delivering high-quality code and <br />
      exceptional results.
      </p>
      <Link href="/about">
          <h1 className="hover:text-green-200 hover:underline underline-offset-6 mt-6 transition duration-300 text-xl font-bold text-blue-300">
            Learn more about my journey  
            <span className="ml-8">→</span>
            </h1>
            
          </Link>
      </div>
      </div>
      </div>
       <hr className="border-gray-700 "></hr>
    <Footer />
    </>
   
  );
}