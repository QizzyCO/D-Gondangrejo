
import React from 'react';
import { 
  Waves, 
  ParkingCircle, 
  Accessibility, 
  Baby, 
  Dog, 
  CreditCard, 
  Nfc, 
  Ticket, 
  Gem,
  CheckCircle
} from 'lucide-react';

const Facilities: React.FC = () => {
  const facilityGroups = [
    {
      title: "Umum & Aksesibilitas",
      items: [
        { name: "Toilet Bersih & Wangi", icon: <Waves className="w-5 h-5" /> },
        { name: "Parkir Luas & Valet", icon: <ParkingCircle className="w-5 h-5" /> },
        { name: "Ramah Kursi Roda", icon: <Accessibility className="w-5 h-5" /> },
        { name: "Pintu Masuk Luas", icon: <CheckCircle className="w-5 h-5" /> },
        { name: "Area Pet-Friendly", icon: <Dog className="w-5 h-5" /> },
      ]
    },
    {
      title: "Fasilitas Anak",
      items: [
        { name: "Menu Khusus Anak", icon: <Utensils className="w-5 h-5" /> },
        { name: "Kursi Tinggi", icon: <Baby className="w-5 h-5" /> },
        { name: "Meja Ganti Popok", icon: <Gem className="w-5 h-5" /> },
      ]
    },
    {
      title: "Pembayaran",
      items: [
        { name: "Debit & Kredit", icon: <CreditCard className="w-5 h-5" /> },
        { name: "Pembayaran NFC", icon: <Nfc className="w-5 h-5" /> },
        { name: "Kupon Makanan", icon: <Ticket className="w-5 h-5" /> },
        { name: "Pluxee / Sodexo", icon: <Gem className="w-5 h-5" /> },
      ]
    }
  ];

  function Utensils(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    )
  }

  return (
    <section id="fasilitas" className="py-24 scroll-mt-nav bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold tracking-widest uppercase mb-4">Lengkap & Nyaman</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Fasilitas yang Memanjakan</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {facilityGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-800 border-b pb-4 border-stone-200">{group.title}</h3>
              <div className="space-y-4">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 bg-amber-50 p-2 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="font-medium text-stone-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-[40px] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Butuh Ruang Privat untuk Acara?</h3>
            <p className="text-white/80 max-w-xl text-lg mb-8">
              Kami menyediakan area indoor ber-AC dan outdoor yang luas untuk gathering, meeting, atau acara keluarga besar.
            </p>
            <button className="px-8 py-3 bg-white text-amber-700 font-bold rounded-full hover:bg-stone-100 transition-all">
              Tanya Penawaran
            </button>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
