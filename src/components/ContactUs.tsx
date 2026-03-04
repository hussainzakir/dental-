import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dental-500 font-semibold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Get In Touch With Our <span className="text-dental-600">Experts</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Have questions or want to book an appointment? We're here to help you achieve your perfect smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <a 
              href="tel:5551234567"
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md hover:border-dental-200 transition-all group"
            >
              <div className="bg-dental-50 p-4 rounded-2xl text-dental-600 group-hover:bg-dental-500 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Call Us</h4>
                <p className="text-slate-500">(555) 123-4567</p>
                <p className="text-slate-500">(555) 987-6543</p>
              </div>
            </a>

            <a 
              href="mailto:info@brightsmile.com"
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md hover:border-dental-200 transition-all group"
            >
              <div className="bg-dental-50 p-4 rounded-2xl text-dental-600 group-hover:bg-dental-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Email Us</h4>
                <p className="text-slate-500">info@brightsmile.com</p>
                <p className="text-slate-500">support@brightsmile.com</p>
              </div>
            </a>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=F957%2B2H+HITEC+City+Hyderabad+Telangana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md hover:border-dental-200 transition-all group"
            >
              <div className="bg-dental-50 p-4 rounded-2xl text-dental-600 group-hover:bg-dental-500 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-lg">Visit Us</h4>
                <p className="text-slate-500">F957+2H HITEC City</p>
                <p className="text-slate-500">Hyderabad, Telangana</p>
                <p className="text-xs text-dental-600 mt-2 font-semibold flex items-center gap-1">
                  Get Directions <ArrowUpRight size={12} />
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-10"
                >
                  <div className="bg-green-100 text-green-600 p-6 rounded-full mb-6">
                    <CheckCircle2 size={64} />
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-slate-900 mb-4">Message Sent!</h4>
                  <p className="text-slate-600 text-lg mb-8">
                    Thank you for reaching out. Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-dental-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
                  <input 
                    required
                    name="fullName"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-dental-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-dental-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-dental-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Service Interested In *</label>
                  <select 
                    required 
                    name="service"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-dental-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option>General Dentistry</option>
                    <option>Orthodontics</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Your Message (Optional)</label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-dental-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {error && (
                  <div className="sm:col-span-2 flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl text-sm">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-dental-600 hover:bg-dental-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-dental-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
