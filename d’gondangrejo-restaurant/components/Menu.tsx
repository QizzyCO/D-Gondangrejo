
import React, { useState } from 'react';
import { Utensils, Coffee, Pizza, Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  isPopular?: boolean;
}

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Makanan');

  const categories = [
    { name: 'Makanan', icon: <Utensils size={18} /> },
    { name: 'Minuman', icon: <Coffee size={18} /> },
    { name: 'Camilan', icon: <Pizza size={18} /> },
  ];

  const menuItems: MenuItem[] = [
    // Makanan
    {
      id: 1,
      name: "Ayam Bakar D'Gondangrejo",
      price: "Rp 35.000",
      description: "Ayam ungkep bumbu jawa yang dibakar dengan olesan madu dan rempah rahasia.",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400",
      category: "Makanan",
      isPopular: true
    },
    {
      id: 2,
      name: "Nasi Liwet Solo",
      price: "Rp 28.000",
      description: "Nasi gurih khas Solo disajikan dengan ayam suwir, telur pindang, dan kumut.",
      image: "https://i.pinimg.com/736x/a9/c7/5b/a9c75b7d73c2b2c54250f9b97baa3e0a.jpg",
      category: "Makanan"
    },
    {
      id: 3,
      name: "Sop Buntut Spesial",
      price: "Rp 45.000",
      description: "Buntut sapi pilihan dengan kuah bening yang segar dan kaya rempah.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400",
      category: "Makanan",
      isPopular: true
    },
    {
      id: 4,
      name: "Gado-Gado Ibu Kota",
      price: "Rp 25.000",
      description: "Sayuran segar dengan saus kacang kental yang gurih dan kerupuk udang.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
      category: "Makanan"
    },
    // Minuman
    {
      id: 5,
      name: "Es Dawet Ayu",
      price: "Rp 15.000",
      description: "Dawet beras asli dengan santan segar dan gula jawa cair yang legit.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
      category: "Minuman",
      isPopular: true
    },
    {
      id: 6,
      name: "Wedang Uwuh",
      price: "Rp 12.000",
      description: "Minuman rempah hangat tradisional yang kaya akan manfaat kesehatan.",
      image: "https://i.pinimg.com/1200x/24/1c/55/241c55c869f6796ead54c2aaf0dc0acf.jpg",
      category: "Minuman"
    },
    {
      id: 7,
      name: "Kopi Tubruk Gondang",
      price: "Rp 10.000",
      description: "Kopi robusta pilihan dengan aroma yang kuat dan rasa yang mantap.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400",
      category: "Minuman"
    },
    // Camilan
    {
      id: 8,
      name: "Pisang Goreng Madu",
      price: "Rp 18.000",
      description: "Pisang kepok pilihan digoreng dengan adonan madu yang karamelisasi.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400",
      category: "Camilan",
      isPopular: true
    },
    {
      id: 9,
      name: "Tempe Mendoan",
      price: "Rp 15.000",
      description: "Tempe tipis lebar digoreng setengah matang dengan adonan tepung daun bawang.",
      image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&q=80&w=400",
      category: "Camilan"
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-batik-red opacity-[0.03] pointer-events-none animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <p className="text-red-800 font-bold tracking-widest uppercase mb-4">Cita Rasa Otentik</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Menu Pilihan D'Gondangrejo</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-10"></div>
          
          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all shadow-sm ${
                  activeTab === cat.name
                    ? 'bg-red-900 text-white shadow-lg scale-105'
                    : 'bg-white text-stone-600 hover:bg-red-50 hover:text-red-900 border border-stone-200'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={`${item.id}-${activeTab}`} 
              className={`bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-stone-100 animate-slideUp opacity-0 stagger-${(idx % 6) + 1}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-900 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                  <span>Halal</span>
                </div>
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-red-950 px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <Star size={12} className="fill-red-950" />
                    <span>Favorit</span>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-red-800 transition-colors">{item.name}</h3>
                  <span className="text-amber-600 font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn stagger-3 opacity-0">
          <p className="text-stone-500 text-sm mb-6">Semua harga sudah termasuk pajak & pelayanan.</p>
          <a 
            href="https://wa.me/628975078007" 
            className="inline-flex items-center space-x-3 bg-red-900 text-white px-10 py-4 rounded-full font-bold hover:bg-red-800 transition-all shadow-xl hover:scale-105"
          >
            <span>Download Full Menu (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
