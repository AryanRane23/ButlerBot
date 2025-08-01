/*

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-blue-900 text-white font-sans">

      
      <header className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold tracking-wide mb-3 md:mb-0">BUTLER BOT</h1>
        <Link to="/login">
          <button className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Login
          </button>
        </Link>
      </header>


      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
            Meet <span className="text-blue-300">ButlerBot</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
            Your intelligent hotel assistant for delivery, cleaning, and guest support — all automated.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/butler-rocket.png"
            alt="Hotel Bot"
            className="w-[300px] md:w-[400px] animate-bounce drop-shadow-2xl"
          />
        </div>
      </section>

    
      <section id="features" className="bg-blue-900 text-white px-8 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-blue-800 p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">🚗</div>
            <h4 className="font-bold text-lg mb-2">Delivery to Rooms</h4>
            <p className="text-sm text-gray-300">Transports goods and amenities directly to guest rooms.</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">🧹</div>
            <h4 className="font-bold text-lg mb-2">Room Cleaning Automation</h4>
            <p className="text-sm text-gray-300">Cleans and sanitizes rooms autonomously.</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">📍</div>
            <h4 className="font-bold text-lg mb-2">Navigation Support</h4>
            <p className="text-sm text-gray-300">Guides guests and navigates autonomously through the hotel.</p>
          </div>
        </div>
      </section>

    
      <section id="contact" className="bg-blue-800 text-white px-8 md:px-20 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-200 max-w-xl mx-auto">
          Interested in working with ButlerBot or learning more? Contact us at <strong>support@butlerbot.io</strong>
        </p>
      </section>
    </div>
  );
};
export default Landing;

**/
/*
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-6 text-center">
      
      
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-400">ButlerBot</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#features" className="hover:text-blue-300">Features</a>
          <a href="#about" className="hover:text-blue-300">About</a>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="mt-24 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet ButlerBot <span role="img" aria-label="bot">🤖</span></h2>
          <p className="text-lg text-gray-300 mb-8 px-4">
            Delivering comfort, cleanliness, and concierge service — all in one smart hotel assistant. Automate room delivery, cleaning tasks, and guest support with ease.
          </p>

       
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link to="/about">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition">
              Learn More
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-5 py-2 rounded-md font-semibold transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-5 py-2 rounded-md font-semibold transition">
              Sign Up
            </button>
          </Link>
        </div>

       
        <img
          src="/butler-rocket.png"
          alt="ButlerBot"
          className="w-[250px] md:w-[300px] mx-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Landing;

*/
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">

      {/* ✅ Navbar */}
      <header className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-white tracking-wide mb-3 md:mb-0">BUTLER BOT</h1>
        <Link to="/login">
          <button className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Login
          </button>
        </Link>
      </header>

      {/* ✅ Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
            Meet <span className="text-blue-300">ButlerBot 🤖</span>
          </h2>
          <p className="text-lg text-white max-w-md mx-auto md:mx-0">
            Delivering comfort, cleanliness, and concierge service — all in one smart hotel assistant.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/butler-rocket.png"
            alt="Hotel Bot"
            className="w-[300px] md:w-[400px] animate-bounce drop-shadow-2xl"
          />
        </div>
      </section>

      {/* ✅ Features Section */}
      <section id="features" className="bg-[#2c2c4e] text-white px-8 md:px-20 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#3a3a5d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">🚗</div>
            <h4 className="font-bold text-lg mb-2">Delivery to Rooms</h4>
            <p className="text-sm text-white">Transports goods and amenities directly to guest rooms.</p>
          </div>
          <div className="bg-[#3a3a5d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">🧹</div>
            <h4 className="font-bold text-lg mb-2">Room Cleaning Automation</h4>
            <p className="text-sm text-white">Cleans and sanitizes rooms autonomously.</p>
          </div>
          <div className="bg-[#3a3a5d] p-6 rounded-xl shadow-md text-center hover:scale-105 transition">
            <div className="text-4xl mb-3">📍</div>
            <h4 className="font-bold text-lg mb-2">Navigation Support</h4>
            <p className="text-sm text-white">Guides guests and navigates autonomously through the hotel.</p>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="bg-[#24243e] text-white px-8 md:px-20 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-white max-w-xl mx-auto">
          Interested in working with ButlerBot or learning more? Contact us at <strong>support@butlerbot.io</strong>
        </p>
      </section>
    </div>
  );
};

export default Landing;




