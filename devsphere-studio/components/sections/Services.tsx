import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function Services() {
  return (
   <>
   <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Welcome to DevSphere Studio</h1>
      <p className="mt-4 text-xl text-gray-600">
        We offer a wide range of services to help you bring your ideas to life.
      </p>
    </div>
    <Footer />
    </>
  );
}