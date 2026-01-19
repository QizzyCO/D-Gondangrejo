
import React from 'react';
import { Calendar, ChevronRight, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  url: string;
}

const Articles: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Warnai Wisata Baru Karanganyar, D'Gondangrejo Resto & Resort Resmi Dilaunching",
      excerpt: "KBRN, Karanganyar: Kabupaten Karanganyar kembali memiliki destiKBRNnasi wisata baru. Tidak melulu di kawasan lereng Gunung Lawu, D'Gondangrejo Resto & Resort hadir mewarnai wilayah Karanganyar utara. ",
      date: "21 desember 2024",
      author: "Qaasid ahmad",
      category: "Kuliner",
      image: "https://cdn.rri.co.id/berita/Surakarta/o/1734778207740-IMG-20241221-WA0024/6pjpd86ukpu6aok.jpeg",
      url: "https://rri.co.id/wisata/1206934/warnai-wisata-baru-karanganyar-d-gondangrejo-resto-resort-resmi-dilaunching"
    },
    {
      id: 2,
      title: "Gaesss, D'Gondangrejo Resmi Beroperasi. Ada Apa Saja di Destinasi Baru Ini?",
      excerpt: "KARANGANYAR, suaramerdeka-solo.com - Kawasan Gondangrejo punya destinasi wisata baru. Yakni D'Gondangrejo Resto & Resort, destinasi wisata yang dikonsep sebagai one stop service, yang berlokasi tepat di Exit Tol Gondangrejo.",
      date: "21 desember 2024",
      author: "irfan salafudin",
      category: "Kuliner",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItMrX1W5XoZto61sD3RRYNG-l59Z6lyMA4w&s",
      url: "https://solo.suaramerdeka.com/solo-raya/0514191673/gaesss-dgondangrejo-resmi-beroperasi-ada-apa-saja-di-destinasi-baru-ini"
    },
    {
      id: 3,
      title: "D'Gondangrejo di Exit Tol Gondangrejo Karanganyar Resmi Dibuka, Ini Fasilitasnya",
      excerpt: "Esposin, KARANGANYAR-Tak hanya kawasan Lereng Gunung Lawu, usaha jasa, perdagangan dan pariwisata di Kabupaten Karanganyar makin tumbuh berkembang di wilayah Gondangrejo. Investor melirik wilayah Gondangrejo untuk menanamkan investasinya. Selain secara geografis dekat dengan Kota Solo, juga adanya akses Exit Tol di Gondangrejo.",
      date: "28 April 2024",
      author: "Indah Septiyaning",
      category: "Kuliner",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0CR5J-RIvwvNoPsU2MtLD9JJW-HVaL8wYg&s",
      url: "https://solopos.espos.id/dgondangrejo-di-exit-tol-gondangrejo-karanganyar-resmi-dibuka-ini-fasilitasnya-2039939"
    }
  ];

  return (
    <section id="artikel" className="py-24 scroll-mt-nav bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-batik-red opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl animate-fadeIn">
            <p className="text-red-800 font-bold tracking-widest uppercase mb-4">Wawasan & Berita</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">Jendela Budaya & Kuliner</h2>
          </div>
          <button className="flex items-center space-x-2 text-red-800 font-bold hover:text-amber-600 transition-colors animate-fadeIn stagger-1 opacity-0">
            <span>Lihat Semua Artikel</span>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article 
              key={post.id} 
              className={`bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100 group hover:shadow-2xl hover:bg-white transition-all duration-500 animate-slideUp opacity-0 stagger-${(idx % 3) + 1}`}
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-amber-500 text-red-950 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {post.category}
                </div>
              </a>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4 text-stone-400 text-xs font-medium">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} className="text-amber-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} className="text-amber-600" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-red-800 transition-colors leading-tight">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </h3>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-900 font-bold text-sm uppercase tracking-wider group/link"
                >
                  <span>Baca Selengkapnya</span>
                  <div className="w-8 h-[2px] bg-amber-500 transition-all group-hover/link:w-12"></div>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
