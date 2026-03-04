import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Part 1: Navbar */}
      <Navbar />

      <main>
        {/* Part 2: Carousel */}
        <Carousel />

        {/* Part 3: About Us Page */}
        <AboutUs />

        <Services />

        {/* Part 4: Contact Us & Footer */}
        <ContactUs />
        <Footer />
      </main>

      {/* Agent Chat Bot */}
      <ChatBot />
    </div>
  );
}
