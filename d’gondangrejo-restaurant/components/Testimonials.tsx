
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Budi Santoso",
      role: "Wisatawan Family",
      comment: "Pelayanan sangat ramah. Tempatnya sangat luas dan nyaman, cocok banget buat singgah bareng keluarga pas perjalanan dari Solo ke Purwodadi.",
      rating: 5
    },
    {
      name: "Siska Amelia",
      role: "Local Guide",
      comment: "Desain Joglo yang unik. Fasilitas super lengkap, toiletnya bersih banget. Makanan khas Jawanya otentik dan harganya sangat terjangkau.",
      rating: 5
    },
    {
      name: "Rahmat Hidayat",
      role: "Pengguna Bus Wisata",
      comment: "Cocok banget buat tempat singgah bus. Parkirannya luas banget, makanan cepat disajikan. Pelayanan top markotop!",
      rating: 4
    }
  ];

  return (
    <section id="ulasan" className="py-24 scroll-mt-nav bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div>
            <p className="text-amber-600 font-bold tracking-widest uppercase mb-4">Ulasan Pelanggan</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Apa Kata Mereka?</h2>
          </div>
          <div className="flex items-center space-x-2 bg-stone-100 px-6 py-3 rounded-2xl border border-stone-200">
            <span className="text-2xl font-bold text-stone-900">4.6</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className={`${s <= 4 ? 'text-amber-500 fill-amber-500' : 'text-stone-300'}`} />
              ))}
            </div>
            <span className="text-stone-500 font-medium">189 Google Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 flex flex-col h-full relative group transition-all hover:bg-stone-100 hover:shadow-xl">
              <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors" size={48} />
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className={`${s <= rev.rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300'}`} />
                ))}
              </div>
              <p className="text-stone-600 text-lg mb-8 flex-grow leading-relaxed italic">
                "{rev.comment}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 leading-none mb-1">{rev.name}</h4>
                  <p className="text-stone-500 text-sm">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
