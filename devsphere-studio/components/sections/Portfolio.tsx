import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <br />
        <br />
        <br />
        <h1 className="text-5xl font-bold">My Work</h1>
        <p className="mt-4 text-xl text-gray-400">
          Here is a selection of projects that showcase my skills and dedication to quality. Each<br />
          project represents a unique challenge and a successful solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto"> 
      <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src="/e-commerce.webp"
            alt="e-commerce project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Web Development</h2>
        <p className="text-gray-400">
           Full-Stack Development web development services, from single-page applications to large-scale
           enterprise platforms. i focus on creating seamless user experiences with robust,
           scalable backends. Technologies include React, Next.js, Node.js, and more
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>

   
      <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
         <div className="relative w-full h-48 md:h-56">
          <Image
            src="/mobileappone.webp"
            alt="mobile project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Mobile Apps</h2>
        <p className="text-gray-400">
          Full-Stack Development web development services, from single-page applications to large-scale
           enterprise platforms. i focus on creating seamless user experiences with robust,
           scalable backends. Technologies include React, Next.js, Node.js, and more
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>

    <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
       <div className="relative w-full h-48 md:h-56">
          <Image
            src="/mobile.webp"
            alt="mobile project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Mobile Apps</h2>
        <p className="text-gray-400">
           Full-Stack Development web development services, from single-page applications to large-scale
           enterprise platforms. i focus on creating seamless user experiences with robust,
           scalable backends. Technologies include React, Next.js, Node.js, and more
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>

    <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
       <div className="relative w-full h-48 md:h-56">
          <Image
            src="/mobiletwo.webp"
            alt="e-commerc project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Mobile Apps</h2>
        <p className="text-gray-400">
           Leveraging frameworks like React Native to build applications that run smoothly on both
           IOS and Android from single codebase. I handle everything from UI/UX design to
           native API integrations and app store deployment.
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>


      <div className="bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
         <div className="relative w-full h-48 md:h-56">
          <Image
            src="/game.webp"
            alt="game project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Game Development</h2>
        <p className="text-gray-400">
           Specializing in indie and commercial game development using engines like Unity and
           Godot. My Services cover game design, mechanics programming, assist integration, and
           performance optimization for various platforms.
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>

     
      <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300">
         <div className="relative w-full h-48 md:h-56">
          <Image
            src="/custom.png"
            alt="custom project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Custom Systems</h2>
        <p className="text-gray-400">
           Creating custom software solutions such as CRM systems, backend APIs, data
           processing pipelines, and automation tools. I work closely with you to understand your
           requirements and deliver a system that optimizes your workflow.
        </p> 
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
            </div>
    </div>
    </div>
    </div>
   
    <br />
    <br />
    <br/>
      </div> 
       <hr className="border-gray-700 "></hr>
      <Footer />
    </>
  
  );
}