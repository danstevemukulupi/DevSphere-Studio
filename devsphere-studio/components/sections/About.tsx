import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <br />
        <br />
        <br />
        <h1 className="text-5xl font-bold ">About Me</h1>
        <p className="mt-4 text-xl text-gray-400 ">
          I am a dedicated and passionate software developer with a strong background in creating robust, scalable, and <br />
          user-friendly appplications. My journey in technology began with a fascination for how things work, which quickly <br />
          evovled into a career building digital solutions that solve real-world problems. 
          <br /><br />
          My development philosophy is centered around clean code, thoughtful design, and conitinuous learning. I thrive in <br />
          collaborative environments and am committed to delivering products that only meet but exceed client <br />
          expectations. Whether it's complex system or a simple, elegant website, i bring the same level of commitment and <br />
          craftsmanship to every project.
        </p>
        <div className="space-x-4 container mx-auto text-center">
          <br/>
                <button className="bg-blue-400 hover:bg-blue-700 text-black py-2 px-4 rounded">Let's Work Together</button>
            </div>
           <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold ">My Tech Stack</h1>
        <p className="mt-4 text-1xl text-gray-400 ">I'm proficient in a wide array of technologies for building modern applications</p>  

         <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-10 max-w-8xl mx-auto"> 
              <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center p-6">
                  <Image
                    src="/javascript.webp"
                    alt="Javascript"
                    width={200}
                    height={100}
                    className="object-contain"
                    
                  />
                </div>
            
               
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">JavaScript</h2>     
            </div>
        
              <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Java</h2>
              
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Python</h2>
                
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">HTML/CSS</h2>
             
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">TypeScript</h2>
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">React</h2>
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Next.js</h2>
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobileappone.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Node.js</h2>
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobile.webp"
                    alt="mobile project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">MongoDB</h2>
            </div>

             <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/mobiletwo.webp"
                    alt="e-commerc project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Angular</h2>
            </div>
        
        
              <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/game.webp"
                    alt="game project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">Unity</h2>
            </div>
        
             
              <div className="bg-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative w-full h-48 md:h-56">
                  <Image
                    src="/custom.png"
                    alt="custom project"
                    fill
                    className="object-cover"
                    
                  />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-white-600 mb-4 text-center">PostgreSQL</h2>
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