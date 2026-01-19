
import React from 'react';
import { Store, Car, ShoppingBag, Truck, Table, DoorClosed } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { name: "Makan di tempat", icon: <Store className="w-6 h-6" /> },
    { name: "Drive-through", icon: <Car className="w-6 h-6" /> },
    { name: "Bawa pulang", icon: <ShoppingBag className="w-6 h-6" /> },
    { name: "Pesan antar", icon: <Truck className="w-6 h-6" /> },
    { name: "Pesan di meja", icon: <Table className="w-6 h-6" /> },
    { name: "Ruang makan pribadi", icon: <DoorClosed className="w-6 h-6" /> },
  ];

  return (
    <section id="layanan" className="py-24 scroll-mt-nav bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-amber-600 font-bold tracking-widest uppercase mb-4 animate-fadeIn">Layanan Kami</p>
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-16 animate-fadeIn stagger-1">Pilihan Cara Menikmati Hidangan</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group p-8 bg-stone-50 rounded-3xl border border-stone-100 transition-all hover:bg-red-50 hover:shadow-xl hover:-translate-y-2 cursor-default animate-scaleIn opacity-0 stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-600 group-hover:bg-red-800 group-hover:text-white transition-all transform group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="font-bold text-stone-900 group-hover:text-red-900 transition-colors">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
