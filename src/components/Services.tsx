import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Baby, HeartPulse, Microscope, Smile } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and preventive care for a healthy foundation."
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional whitening."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Teeth Whitening",
    description: "Brighten your smile by several shades with our advanced whitening systems."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth and restored function."
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatric Care",
    description: "Gentle and fun dental experiences designed specifically for children."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Oral Surgery",
    description: "Expert surgical care for extractions, wisdom teeth, and more complex needs."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dental-500 font-semibold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Comprehensive Care For <span className="text-dental-600">Every Smile</span>
          </h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of dental services to meet the needs of your entire family, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-dental-500/5 transition-all duration-300"
            >
              <div className="bg-white group-hover:bg-dental-500 group-hover:text-white p-4 rounded-2xl w-fit mb-6 shadow-sm transition-colors duration-300 text-dental-600">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
