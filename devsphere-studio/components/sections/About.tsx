import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Welcome to DevSphere Studio</h1>
        <p className="mt-4 text-xl text-gray-600">
          About Us
        </p>
      </div>
      </main>
      <Footer />
    </>
  );
}