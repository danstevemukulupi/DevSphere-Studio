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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Blockchain-Based Secure E-Voting DApp</h2>
        <p className="text-gray-400">
          A decentralized application for secure and transparent electronic voting. <br />
          Utilizes blockchain technology to <br />
          ensure the integrity and immutability of votes.<br />
          no tampering, no fraud, and complete transparency.
        </p> 
        <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">React</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Node.js</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Solidity</h1>
       
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">Hardhat</h1>

        </div>
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">View Code</button>
                
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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Social Media Content Planner</h2>
        <p className="text-gray-400">
          A social media content planning tool that helps users create, schedule,<br />
          and track their content. Features real-time updates, notifications, and an <br />
          intuitive drag-and-drop interface. App provides insights into content strategy and engagement.
        </p> 
        <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">React</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Vite</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Tailwind</h1>
       
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">Flask SQLite</h1>

        </div>
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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Screen Time Tracker</h2>
        <p className="text-gray-400">
           A tool for monitoring and analyzing screen time usage. <br />
           Provides insights into user behavior <br />
           and helps manage digital well-being.<br />
           Tracks and reports on screen time, helping users understand their digital habits.
           Prevents overuse and promotes healthier digital habits.
        </p> 
         <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Ruby on Rails</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">PostgreSQL</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">HTML</h1>
          
        </div>
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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Job Board Application</h2>
        <p className="text-gray-400">
            A web-based job board application that connects job seekers with employers.
            Features job listings, application tracking,
            and user profiles.
            Created with a focus on user experience and accessibility, ensuring a seamless job search process.
        </p> 
        <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Ruby on Rails</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">PostgreSQL</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">HTML</h1>
        </div>
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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Nike Shoes Website</h2>
        <p className="text-gray-400">
           A modern e-commerce website for a fictional shoe brand, 
           featuring a responsive design, product listings, and a shopping cart.
           Built with a focus on user experience and performance.
           The site is optimized for a smooth user experience.
        </p> 
        <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">HTML</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">CSS</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">JavaScript</h1>

          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">Bootstrap</h1>
        </div>
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
        <h2 className="text-2xl font-bold text-white-600 mb-4">Hitting Game</h2>
        <p className="text-gray-400">
           A simple yet engaging game where players hit targets to score points.
            The game features intuitive controls, dynamic levels, and
             keep players challenged and entertained.
            The game is designed to be fun and engaging for players of all ages.

        </p> 
         <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">HTML</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">CSS</h1>
        
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">JavaScript</h1>

          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-4">Bootstrap</h1>
        </div>
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