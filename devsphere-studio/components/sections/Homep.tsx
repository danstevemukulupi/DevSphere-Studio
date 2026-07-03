
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Homep() {
  return (
   <> 
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-6xl font-bold">Engineering Your Vision,<br/>One Line of Code at a Time.</p>
      <p className="mt-4 text-xl text-gray-600">
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
    <Footer />
    </>
   
  );
}