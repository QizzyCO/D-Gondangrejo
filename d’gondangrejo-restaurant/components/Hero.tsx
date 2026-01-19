
import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-batik opacity-20 pointer-events-none animate-float"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-red-950/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 animate-fadeIn shadow-lg opacity-0">
          <Star className="text-amber-400 fill-amber-400" size={16} />
          <span className="text-white text-sm font-bold">4.6 (189 Ulasan)</span>
          <span className="text-white/40">|</span>
          <span className="text-white text-sm font-medium">Rp 25k – 50k</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-2xl animate-slideUp opacity-0 stagger-1">
          Rest Area & Restoran Khas Jawa dengan Pelayanan Terbaik di Gondangrejo
        </h1>
        
        <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium animate-slideUp opacity-0 stagger-2">
          Nikmati kenyamanan Joglo tradisional dengan cita rasa otentik dan fasilitas lengkap untuk keluarga dan perjalanan Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-slideUp opacity-0 stagger-3">
          <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-red-950 rounded-full font-bold transition-all shadow-xl hover:scale-105 border-b-4 border-amber-700">
            Lihat Menu
          </button>
          <a href="#kontak" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-100 text-stone-900 rounded-full font-bold transition-all shadow-xl hover:scale-105 border-b-4 border-stone-300">
            Rute Lokasi
          </a>
          <a href="https://wa.me/628975078007" className="w-full sm:w-auto px-8 py-4 bg-red-800/60 hover:bg-red-700/80 backdrop-blur-md text-white border border-white/30 rounded-full font-bold transition-all shadow-xl">
            Hubungi Kami
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left animate-slideUp opacity-0 stagger-4">
          <div className="bg-red-950/40 backdrop-blur-lg p-5 rounded-2xl border border-white/10 flex items-start space-x-4 hover:bg-red-900/40 transition-colors group">
            <div className="bg-amber-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <MapPin className="text-red-950" size={20} />
            </div>
            <div>
              <p className="text-amber-400 text-xs uppercase tracking-wider font-bold mb-1">Alamat</p>
              <p className="text-white text-sm leading-tight">Wonorejo, Gondangrejo, Karanganyar</p>
            </div>
          </div>
          
          <div className="bg-red-950/40 backdrop-blur-lg p-5 rounded-2xl border border-white/10 flex items-start space-x-4 hover:bg-red-900/40 transition-colors group">
            <div className="bg-amber-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Clock className="text-red-950" size={20} />
            </div>
            <div>
              <p className="text-amber-400 text-xs uppercase tracking-wider font-bold mb-1">Operasional</p>
              <p className="text-white text-sm font-semibold">Setiap Hari: 06.00 – 23.00</p>
              <span className="inline-block mt-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Buka Sekarang</span>
            </div>
          </div>
          
          <div className="bg-red-950/40 backdrop-blur-lg p-5 rounded-2xl border border-white/10 flex items-start space-x-4 hover:bg-red-900/40 transition-colors group">
            <div className="bg-amber-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Phone className="text-red-950" size={20} />
            </div>
            <div>
              <p className="text-amber-400 text-xs uppercase tracking-wider font-bold mb-1">Telepon</p>
              <p className="text-white text-sm font-semibold">0897-5078-007</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
