import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";



export default function Services() {
  return (
   <>
   <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <br />
      <br />
      <h1 className="text-5xl font-bold">My Development Services</h1>
      <p className="mt-4 text-xl text-gray-400">
        I provide a comprehensive range of development services to turn your concepts into <br />
        reality. Explore my experience below to see i can help your project succeed.
      </p>
      
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto"> 
      <div className="bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Web Development</h2>
        <p className="text-gray-400">
           Full-Stack Development web development services, from single-page applications to large-scale
           enterprise platforms. i focus on creating seamless user experiences with robust,
           scalable backends. Technologies include React, Next.js, Node.js, and more
        </p> 
    </div>

   
      <div className="bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Mobile Apps</h2>
        <p className="text-gray-400">
           Leveraging frameworks like React Native to build applications that run smoothly on both
           IOS and Android from single codebase. I handle everything from UI/UX design to
           native API integrations and app store deployment.
        </p> 
    </div>

    
      <div className="bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Game Development</h2>
        <p className="text-gray-400">
           Specializing in indie and commercial game development using engines like Unity and
           Godot. My Services cover game design, mechanics programming, assist integration, and
           performance optimization for various platforms.
        </p> 
    </div>

     
      <div className="bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-white-600 mb-4">Custom Systems</h2>
        <p className="text-gray-400">
           Creating custom software solutions such as CRM systems, backend APIs, data
           processing pipelines, and automation tools. I work closely with you to understand your
           requirements and deliver a system that optimizes your workflow.
        </p> 
    </div>
    </div>
    <br />
    <br />
    <h4 className="text-2xl font-bold">Ready to Start Your Project?</h4>
    <p className="mt-4 text-xl text-gray-400">Let's discuss how I can help bring your ideas to life.</p>
    <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Get in Touch</button>                  
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