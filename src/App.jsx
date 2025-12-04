import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-sans">
      {/* HEADER / HERO SECTION */}
      <header className="relative bg-amber-950 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-4 text-amber-500">
            TigerShark Vault
          </h1>
          <p className="text-2xl md:text-3xl font-light text-stone-300 mb-8">
            Premium Materials & Custom Craftsmanship
          </p>
          <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg border border-amber-600">
            View Collection
          </button>
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
            {/* CORRECTED PATH: No 'public/' in the link! */}
            <source src="/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
             Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* GALLERY SECTION (Woodworking Style) */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-amber-900 mb-4">Artisan Collection</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Featuring premium matte finishes and gold accents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ITEM 1 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              <img 
                src="/tigersharkjewelryIMG_8987.jpg" 
                alt="Custom Piece" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Gold & Onyx Custom</h3>
              <p className="text-stone-600 mb-4">Hand-assembled with precision links and a signature clasp.</p>
              <span className="text-amber-700 font-bold text-xl">$29.99</span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              <img 
                src="/tigersharkjewelryIMG_8989_2.jpg" 
                alt="Chain Detail" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Silver Chain Detail</h3>
              <p className="text-stone-600 mb-4">Rugged durability meets elegant design.</p>
              <span className="text-amber-700 font-bold text-xl">$34.99</span>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200">
            <div className="relative overflow-hidden h-72 bg-gray-100">
              <img 
                src="/tigersharkjewelryIMG_8991_4.jpg" 
                alt="Premium Pendant" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">The Vault Standard</h3>
              <p className="text-stone-600 mb-4">Our signature piece designed for everyday wear.</p>
              <span className="text-amber-700 font-bold text-xl">$39.99</span>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-amber-950 text-amber-100 py-12 text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">TigerShark Vault</h2>
        <p className="mb-8 opacity-75">Est. 2025</p>
        <p className="text-sm opacity-50">&copy; 2025 TigerShark Vault. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
