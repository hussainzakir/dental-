import React from 'react';
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-dental-500 p-2 rounded-xl text-white">
                <Stethoscope size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                BrightSmile
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing world-class dental care with a personal touch. Your smile is our priority and our passion.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-dental-500 p-3 rounded-xl transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['General Dentistry', 'Orthodontics', 'Cosmetic Dentistry', 'Dental Implants', 'Teeth Whitening'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest news and dental tips.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border-none rounded-xl px-4 py-3 text-sm flex-1 outline-none focus:ring-2 focus:ring-dental-500"
              />
              <button className="bg-dental-500 hover:bg-dental-600 p-3 rounded-xl transition-all">
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 BrightSmile Dental Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
