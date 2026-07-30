import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-gray-900 text-white py-4">           
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold container mx-auto text-left ">
                <span className="mr-8 ">{"</>"}</span>DevSphere Studio</div>
            <div className="space-x-4 container mx-auto text-center">
                {/*<Link href="/" className="hover:text-gray-400"></Link>*/}
                {/*<Link href="/homep" className="hover:text-blue-400 text-blue-200">Home</Link>*/}
                <Link href="/" className="hover:text-blue-400 text-blue-200">Home</Link>
                <Link href="/services" className="hover:text-blue-400 text-blue-200">Services</Link>
                <Link href="/portfolio" className="hover:text-blue-400 text-blue-200">Portfolio</Link>
                <Link href="/aiassistant" className="hover:text-blue-400 text-blue-200">AI Assistant</Link>
                <Link href="/about" className="hover:text-blue-400 text-blue-200">About</Link>
                <Link href="/contact" className="hover:text-blue-400 text-blue-200">Contact</Link>
            </div>
            <div className="space-x-4 container mx-auto text-right">
                <Link href="/contact">
                <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Contact Me</button>
                </Link>
            </div>

        </div>
    </nav>
    );
        
}
    