import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Services() {
  return (
   <>
   <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
      <h1 className="text-6xl font-bold">My Development Services</h1>
      <p className="mt-4 text-xl text-gray-400">
        I provide a comprehensive range of development services to turn your concepts into <br />
        reality. Explore my experience below to see i can help your project succeed.
      </p>
    </div>
    <Footer />
    </>
  );
}