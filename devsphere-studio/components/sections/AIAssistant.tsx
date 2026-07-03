import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function AIAssistant() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">Welcome to DevSphere Studio</h1>
        <p className="mt-4 text-xl text-gray-600">
          Our AI Assistant is designed to help you with your development needs.
        </p>
      </div>
      <Footer />
    </>
  );
}
   