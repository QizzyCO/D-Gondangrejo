
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 scroll-mt-nav overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-batik-red opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.weddingku.com/images/upload/articles/images682/f30mdq5ccw1a90720161432.jpg" 
                alt="D'Gondangrejo Joglo Design" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-red-100 rounded-3xl -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-red-900 rounded-full opacity-10 hidden md:block"></div>
            
            <div className="absolute bottom-10 left-10 bg-red-900 p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-amber-400/30">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-red-950 font-bold text-xl">
                H
              </div>
              <div>
                <p className="font-bold text-white leading-none">100% Halal</p>
                <p className="text-amber-400 text-sm mt-1">Sertifikasi & Terpercaya</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <p className="text-red-800 font-bold tracking-widest uppercase mb-4 flex items-center space-x-2">
              <span className="w-10 h-[2px] bg-amber-500"></span>
              <span>Tentang Kami</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
              Warisan Budaya & Cita Rasa Otentik di Jalur Utama Solo – Purwodadi
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              D’Gondangrejo adalah tempat makan favorit bagi wisatawan, penumpang bus, dan keluarga yang mendambakan suasana nyaman di tengah perjalanan. Kami mengusung desain <strong>Joglo khas Jawa</strong> yang ikonik, menciptakan atmosfer tradisional namun tetap modern dan fungsional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Wisatawan & Bus",
                "Menu Khas Jawa",
                "Toko Oleh-oleh Solo",
                "Area Sangat Luas",
                "Ramah Keluarga",
                "Suasana Tenang"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-red-50 p-3 rounded-xl border border-red-100">
                  <CheckCircle2 className="text-red-800 flex-shrink-0" size={18} />
                  <span className="text-stone-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-red-900 rounded-3xl border-l-8 border-amber-500 shadow-lg text-white">
              <p className="italic text-white/90 leading-relaxed font-medium">
                "Kami berkomitmen memberikan pengalaman singgah terbaik bagi setiap pelanggan dengan keramahan khas Jawa dan hidangan yang memanjakan lidah."
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="w-10 h-0.5 bg-amber-500"></div>
                <span className="font-bold text-amber-400 uppercase tracking-tighter text-sm">Manajemen D’Gondangrejo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
