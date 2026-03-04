import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: <Users size={24} />, label: "Happy Patients", value: "15,000+" },
    { icon: <Award size={24} />, label: "Years Experience", value: "25+" },
    { icon: <CheckCircle2 size={24} />, label: "Successful Cases", value: "10,000+" },
    { icon: <Clock size={24} />, label: "Emergency Care", value: "24/7" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Dentist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-dental-500 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">25+</p>
              <p className="text-sm opacity-90 uppercase tracking-wider font-semibold">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-dental-500 font-semibold uppercase tracking-widest text-sm mb-4">About Our Clinic</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              We Are Committed To Your <span className="text-dental-600">Dental Health</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At BrightSmile, we believe that a beautiful smile can change a life. Our team of dedicated professionals uses the latest technology to provide personalized dental care that is both effective and comfortable.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-dental-50 p-3 rounded-2xl text-dental-600 h-fit">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Modern Equipment</h4>
                  <p className="text-sm text-slate-500">Using the latest dental tech for precision.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-dental-50 p-3 rounded-2xl text-dental-600 h-fit">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Expert Doctors</h4>
                  <p className="text-sm text-slate-500">Board-certified specialists you can trust.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-dental-500 mb-2 flex justify-center md:justify-start">{stat.icon}</div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Detailed Services Section */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Our Comprehensive Dental Services</h3>
            <p className="text-slate-600">We provide a full range of dental treatments designed to keep your smile healthy and beautiful for a lifetime.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-dental-700 mb-3">Preventive Dentistry</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The foundation of a healthy smile is prevention. This includes regular check-ups, professional cleanings, and digital X-rays to catch potential issues early.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Professional Cleanings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Comprehensive Oral Exams</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Fluoride Treatments & Sealants</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-dental-600">Benefit: Prevents tooth decay and gum disease before they start.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-dental-700 mb-3">Restorative Dentistry</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  If you have damaged or missing teeth, our restorative treatments can bring back your smile's function and appearance using durable, natural-looking materials.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Tooth-Colored Fillings</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Porcelain Crowns & Bridges</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Full & Partial Dentures</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-dental-600">Benefit: Restores your ability to eat, speak, and smile with confidence.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-dental-700 mb-3">Cosmetic Dentistry</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Enhance the aesthetics of your smile with our custom cosmetic solutions. We focus on creating a look that is both stunning and natural.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Professional Teeth Whitening</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Porcelain Veneers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Invisalign Clear Aligners</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-dental-600">Benefit: Boosts self-esteem and creates a more youthful appearance.</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-dental-700 mb-3">Advanced Procedures</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  For more complex needs, we offer advanced surgical and therapeutic procedures in-house, ensuring continuity of care.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Dental Implant Placement</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Root Canal Therapy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-dental-500" /> Wisdom Teeth Extraction</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-dental-600">Benefit: Long-term solutions for complex oral health issues.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
