import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-sans">
      {/* HEADER */}
      <header className="relative bg-amber-950 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-4 text-amber-500">
            TigerShark Vault
          </h1>
          <p className="text-2xl md:text-3xl font-light text-stone-300 mb-8">
            SNEAK PEEK: Exclusive Collection
          </p>
        </div>
      </header>

      {/* VIDEO SECTION */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-10 mb-16">
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-stone-200 bg-black">
          <video 
            className="w-full" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            {/* EXACT FILENAME from your screenshot */}
            <source src="/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
             Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* GALLERY GRID */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ITEM 1: Signature Necklace */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              {/* EXACT FILENAME from your screenshot */}
              <img 
                src="/tigersharkjewelryIMG_8987.jpg" 
                alt="Signature Necklace" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Signature Necklace</h3>
              <p className="text-stone-600 mb-4">Gold & Onyx Custom</p>
            </div>
          </div>

          {/* ITEM 2: Vault Bracelet */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              {/* EXACT FILENAME from your screenshot */}
              <img 
                src="/tigersharkjewelryIMG_8989_2.jpg" 
                alt="Vault Bracelet" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Vault Bracelet</h3>
              <p className="text-stone-600 mb-4">Silver Chain Detail</p>
            </div>
          </div>

          {/* ITEM 3: Onyx Link */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              {/* EXACT FILENAME from your screenshot */}
              <img 
                src="/tigersharkjewelryIMG_8991_4.jpg" 
                alt="Onyx Link" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Onyx Link</h3>
              <p className="text-stone-600 mb-4">Premium Pendant</p>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-amber-950 text-amber-100 py-12 text-center">
        <p className="text-sm opacity-50">&copy; 2025 TigerShark Vault. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
