
import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Menu', href: '#menu' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Ulasan', href: '#ulasan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLk09t5nk4LiILxbsDGcBb8Yt526RQtKGKPQ&s";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-red-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-full shadow-lg border-2 border-amber-400">
              <img src={logoUrl} alt="Logo D’Gondangrejo" className="w-10 h-10 object-contain rounded-full" />
            </div>
            <span className={`text-xl md:text-2xl font-bold tracking-tight text-white`}>
              D’Gondangrejo
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-amber-400 text-white/90`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/628975078007"
              className="bg-amber-500 hover:bg-amber-600 text-red-950 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-white p-2`}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-red-900 shadow-xl absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-red-800 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/628975078007"
              className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-red-950 px-5 py-3 rounded-lg font-bold transition-all"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
