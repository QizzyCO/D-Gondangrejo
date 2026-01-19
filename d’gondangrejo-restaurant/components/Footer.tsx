
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLk09t5nk4LiILxbsDGcBb8Yt526RQtKGKPQ&s";

  return (
    <footer className="bg-red-950 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-batik opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-1 rounded-full shadow-lg border border-amber-400">
                <img src={logoUrl} alt="Logo D’Gondangrejo" className="w-12 h-12 object-contain rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight">D’Gondangrejo</span>
            </div>
            <p className="text-stone-300 mb-8 leading-relaxed text-sm">
              Restoran & Rest Area dengan konsep tradisional modern yang menyajikan hidangan lezat khas Jawa. Tempat terbaik untuk singgah, beristirahat, dan berkumpul bersama keluarga.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dgondangrejopoint/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all shadow-md"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all shadow-md">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all shadow-md">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-500">Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#tentang" className="text-stone-300 hover:text-amber-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="text-stone-300 hover:text-amber-400 transition-colors">Layanan</a></li>
              <li><a href="#galeri" className="text-stone-300 hover:text-amber-400 transition-colors">Galeri Foto</a></li>
              <li><a href="#fasilitas" className="text-stone-300 hover:text-amber-400 transition-colors">Fasilitas</a></li>
              <li><a href="#ulasan" className="text-stone-300 hover:text-amber-400 transition-colors">Testimoni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-500">Jam Buka</h4>
            <ul className="space-y-4 text-stone-300">
              <li className="flex justify-between text-sm">
                <span>Senin - Minggu</span>
                <span className="text-white font-bold">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-t border-white/10 pt-4 mt-4 text-sm">
                <span>Toko Oleh-oleh</span>
                <span className="text-white font-bold">Buka Setiap Hari</span>
              </li>
              <li className="pt-4 italic text-xs text-stone-400">
                *Buka setiap hari termasuk hari libur nasional.
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-500">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-stone-300">
                Jl. Solo – Purwodadi, Jetak, Wonorejo, Kec. Gondangrejo, Kabupaten Karanganyar, Jawa Tengah 57188
              </li>
              <li>
                <a href="tel:08975078007" className="text-stone-300 hover:text-white transition-colors">0897-5078-007</a>
              </li>
              <li>
                <a href="mailto:info@dgondangrejo.com" className="text-stone-300 hover:text-white transition-colors">info@dgondangrejo.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-stone-400 text-xs">
          <p>Copyright &copy; {new Date().getFullYear()} D’Gondangrejo. Seluruh Hak Cipta Dilindungi.</p>
          <p className="mt-2 text-stone-500">Matur Nuwun. Didesain dengan ❤️ untuk keramahan khas Jawa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
