
import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="kontak" className="py-24 scroll-mt-nav bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3">
            <p className="text-amber-600 font-bold tracking-widest uppercase mb-4">Hubungi Kami</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">Mari Mampir dan Rasakan Keramahan Kami</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-amber-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Lokasi Kami</h4>
                  <p className="text-stone-600">Jl. Solo – Purwodadi, Jetak, Wonorejo, Kec. Gondangrejo, Kabupaten Karanganyar, Jawa Tengah 57188</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-amber-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Telepon & WhatsApp</h4>
                  <p className="text-stone-600">0897-5078-007</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-amber-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Pertanyaan & Reservasi</h4>
                  <p className="text-stone-600">Tersedia setiap hari pukul 06.00 – 23.00</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-amber-600 rounded-3xl text-white shadow-xl shadow-amber-600/20">
              <h4 className="text-xl font-bold mb-4">Siap Berkunjung?</h4>
              <p className="mb-8 opacity-90 text-sm">Klik tombol di bawah untuk membuka navigasi langsung ke lokasi kami melalui Google Maps.</p>
              <a 
                href="https://maps.app.goo.gl/yC7o9yGzW9sSgR3X7" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-amber-700 px-6 py-3 rounded-full font-bold hover:bg-stone-100 transition-all w-full justify-center"
              >
                <span>Buka Google Maps</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 h-[500px] lg:h-auto min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15821.814136497776!2d110.80834718203127!3d-7.525408958009634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a11003722eb03%3A0x33153572b1e1fe9f!2sD&#39;Gondangrejo!5e0!3m2!1sid!2sid!4v1768632877216!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Peta Lokasi D'Gondangrejo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
