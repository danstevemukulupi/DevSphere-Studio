import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <br />
        <br />
        <br />
        <h1 className="text-5xl font-bold">My Work</h1>
        <p className="mt-4 text-xl text-blue-200">
          Here is a selection of projects that showcase my skills and dedication to quality. Each<br />
          project represents a unique challenge and a successful solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto"> 
      <div className="bg-gray-700 rounded-xl shadow-lg  hover:shadow-2xl transition-shadow duration-300
      border border-gray-700 
      hover:border-blue-400 
      hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
      transition-all 
      duration-300">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src="/mapovote.png"
            alt="e-commerce project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Blockchain-Based Secure E-Voting DApp</h2>
        <p className="text-blue-200">
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
                <Link href="/mapovote">
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                <a href="https://github.com/danstevemukulupi/BLOCKCHAIN-BASED-SECURED-ELECTRONIC-VOTING-DAPP"
                target="_blank"
                rel="noopener noreferrer"
                > 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">View Code</button>
                </a>
                
            </div>
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
            alt="mobile project"
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
                <Link href="/socialmedia"> 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                <a href="https://github.com/danstevemukulupi/SOCIAL-MEDIA-CONTENT-PLANNER"
                target="_blank"
                rel="noopener noreferrer"
                > 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
                </a>
            </div>
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
            src="/Atu-Gym-App.png"
            alt="mobile project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Atu Gym Tracker</h2>
        <p className="text-blue-200">

           This is a full-stack web application for fitness <br />
           enthusiasts to track their workout progress, set fitness goals, <br />
           and connect with other users.<br />
           The app provides a comprehensive platform for managing workouts, <br/ >
           nutrition, and overall fitness journey.

        </p> 
         <div className="flex flex-wrap gap-3 container mx-auto mt-4">
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">MongoDb</h1>
         
          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded">Express.js</h1>

          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded ">React</h1>

          <h1 className="text-lg font-semibold text-white bg-gray-600  px-2 py-2 rounded mb-6">Node.js</h1>
        
        </div>
         <div className="space-x-4 container mx-auto text-center">
          <br/>
                <Link href="/atugymtracker"> 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                 <a href="https://github.com/danstevemukulupi/ATU-GYM-TRACKER/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
                </a>
            </div>
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
            src="/Screen-Time-Tracker.png"
            alt="e-commerc project"
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
                <Link href="/screentimetracker"> 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                 <a href="https://github.com/danstevemukulupi/Screen-Time-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                > 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
                </a>
            </div>
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
            src="/Nike-Shoes.png"
            alt="game project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Nike Shoes Website</h2>
        <p className="text-blue-200">
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
          <br/>
          <br/>
                <Link href="/nikeshoes"> 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                 <a href="https://github.com/danstevemukulupi/Nike-Shoes-Website"
                target="_blank"
                rel="noopener noreferrer"
                > 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
                </a>
            </div>
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
            src="/Hitting-Game.png"
            alt="custom project"
            fill
            className="object-cover"
            
          />
        </div>
        <br />
        <div className="p-8">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Hitting Game</h2>
        <p className="text-blue-200">
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
          <br />
          <br />
                <Link href="/hittinggame">
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">Live Demo</button>
                </Link>
                 <a href="https://github.com/danstevemukulupi/HITTING-BALL-GAME"
                target="_blank"
                rel="noopener noreferrer"
                > 
                <button className="bg-gray-900 hover:bg-blue-700 text-white py-2 px-4 rounded">View Code</button>
                </a>
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