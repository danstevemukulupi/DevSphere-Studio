import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
        <h1 className="text-6xl font-bold">Welcome to DevSphere Studio</h1>
        <p className="mt-4 text-xl text-gray-600">
          Our portfolio showcases our latest projects and achievements.
        </p>
      </div>
       <hr className="border-gray-700 "></hr>
      <Footer />
    </>
  
  );
}