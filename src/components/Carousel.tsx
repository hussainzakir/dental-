import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Phone } from 'lucide-react';

const slides = [
  {
    type: "hero",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Dental Care for Your Family",
    description: "Experience the highest standard of dental excellence in a comfortable environment.",
    cta: "Book Appointment"
  },
  {
    type: "offer",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    title: "New Patient Special: 50% Off",
    description: "Join our family today and get 50% off your first comprehensive exam and cleaning.",
    cta: "Claim Offer",
    badge: "Limited Time"
  },
  {
    type: "testimonial",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    title: "What Our Patients Say",
    description: "\"The best dental experience I've ever had. The staff is incredibly friendly and the results are amazing!\"",
    author: "Sarah Johnson",
    role: "Patient since 2021",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    type: "clinic",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Our State-of-the-Art Facility",
    description: "We use the latest technology to ensure your comfort and the best possible outcomes.",
    cta: "Take a Tour"
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[600px] md:h-[850px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
            style={{ backgroundImage: `url(${slides[current].image})`, transform: 'scale(1.1)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              {slides[current].badge && (
                <span className="inline-block bg-dental-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                  {slides[current].badge}
                </span>
              )}
              
              {slides[current].type === 'testimonial' && (
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={slides[current].avatar} 
                    alt={slides[current].author}
                    className="w-16 h-16 rounded-full border-2 border-white/30 object-cover"
                  />
                  <div>
                    <p className="font-bold text-lg">{slides[current].author}</p>
                    <p className="text-sm text-white/70">{slides[current].role}</p>
                  </div>
                </div>
              )}

              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/80 font-light leading-relaxed">
                {slides[current].description}
              </p>
              
              {slides[current].cta && (
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contact"
                    className="bg-dental-500 hover:bg-dental-600 text-white px-10 py-4 rounded-full font-semibold transition-all flex items-center gap-2 shadow-xl shadow-dental-500/30 group"
                  >
                    <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                    {slides[current].cta}
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 left-6 md:left-auto md:right-24 flex items-center gap-6 z-30">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? "bg-dental-400 w-12" : "bg-white/30 w-4 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prev}
            className="p-3 rounded-full bg-white/10 hover:bg-dental-500 text-white backdrop-blur-md border border-white/20 transition-all group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="p-3 rounded-full bg-white/10 hover:bg-dental-500 text-white backdrop-blur-md border border-white/20 transition-all group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
