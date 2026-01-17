
import React from 'react';
import { Coffee, Utensils, Heart, Leaf, CloudSun, Music } from 'lucide-react';

const Advantages: React.FC = () => {
  const advantages = [
    { title: "Kopi Enak", desc: "Racikan kopi pilihan untuk menyegarkan perjalanan Anda.", icon: <Coffee /> },
    { title: "Teh Berkualitas", desc: "Pilihan teh tradisional dengan aroma wangi melati.", icon: <Leaf /> },
    { title: "Hidangan Penutup", desc: "Dessert lezat khas Solo untuk pencuci mulut sempurna.", icon: <CloudSun /> },
    { title: "Lunch & Dinner", desc: "Cocok untuk santap siang maupun makan malam keluarga.", icon: <Utensils /> },
    { title: "Suasana Nyaman", desc: "Tenang, santai, romantis, dan pastinya sangat trendi.", icon: <Heart /> },
    { title: "Hiburan", desc: "Alunan musik lembut yang menenangkan suasana.", icon: <Music /> },
  ];

  return (
    <section className="py-24 bg-red-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-batik opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-4">Keunggulan Kami</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">Lebih Dari Sekadar Tempat Singgah Makan</h2>
          </div>
          <p className="text-stone-300 max-w-sm">
            Kami menghadirkan pengalaman kuliner yang lengkap dengan suasana yang mendukung produktivitas maupun relaksasi dalam balutan nuansa Jawa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div key={index} className="p-8 rounded-3xl border border-amber-500/20 bg-red-900/40 hover:bg-red-800/60 transition-all flex items-start space-x-6 group">
              <div className="p-4 bg-amber-500/20 rounded-2xl text-amber-500 group-hover:bg-amber-500 group-hover:text-red-950 transition-all">
                {adv.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{adv.title}</h3>
                <p className="text-stone-300 leading-relaxed text-sm">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
