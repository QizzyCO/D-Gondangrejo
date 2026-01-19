
import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Hidangan', 'Interior', 'Outdoor', 'Fasilitas'];

  const images: GalleryImage[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', category: 'Hidangan', title: 'Nasi Campur Spesial' },
    { id: 2, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', category: 'Interior', title: 'Suasana Joglo Utama' },
    { id: 3, url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', category: 'Outdoor', title: 'Taman Santai Sore' },
    { id: 4, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800', category: 'Hidangan', title: 'Menu Tradisional' },
    { id: 5, url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800', category: 'Interior', title: 'Detail Ukiran Jawa' },
    { id: 6, url: 'https://piaagungbali.com/wp-content/uploads/2024/03/Mades-warung-berawa.jpeg', category: 'Fasilitas', title: 'Area Bermain Anak' },
    { id: 7, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKIA-kVMeGHEzFWV1HujVot8QHfUohLmLAg&s', category: 'Hidangan', title: 'Minuman Segar' },
    { id: 8, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', category: 'Outdoor', title: 'Parkir Bus Luas' },
  ];

  const filteredImages = filter === 'Semua' ? images : images.filter(img => img.category === filter);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= images.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = images.length - 1;
    setSelectedImage(images[nextIndex].id);
  };

  return (
    <section id="galeri" className="py-24 scroll-mt-nav relative overflow-hidden bg-stone-50">
      {/* Decorative Batik Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900 fill-current">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none -rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900 fill-current">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold tracking-widest uppercase mb-4">Galeri Foto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Sekilas Nuansa D’Gondangrejo</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-10"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 ${
                  filter === cat 
                  ? 'bg-amber-600 border-amber-600 text-white shadow-lg' 
                  : 'bg-white border-stone-200 text-stone-600 hover:border-amber-600 hover:text-amber-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fadeIn"
              onClick={() => openLightbox(img.id)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h4 className="text-white font-bold text-lg">{img.title}</h4>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                  <Maximize2 size={16} />
                </div>
              </div>
              {/* Java-style Corner Border Effect on hover */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[60] bg-stone-900/95 flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-[70]"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-[70]"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors z-[70]"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-5xl w-full h-full flex flex-col justify-center items-center" onClick={closeLightbox}>
            <div className="relative w-full h-4/5 flex items-center justify-center">
              <img 
                src={images.find(img => img.id === selectedImage)?.url} 
                alt="Selected" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-zoomIn"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mt-8 text-center text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-2">{images.find(img => img.id === selectedImage)?.title}</h3>
              <p className="text-amber-500 font-medium uppercase tracking-widest text-sm">
                {images.find(img => img.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
