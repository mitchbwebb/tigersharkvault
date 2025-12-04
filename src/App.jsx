import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* HEADER / HERO SECTION */}
      <header className="flex flex-col items-center justify-center py-10 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
          TigerShark Vault
        </h1>
        <p className="text-xl text-gray-300 mb-8">Premium Resale, Custom Apparel & Jewelry</p>
        
        {/* VIDEO DISPLAY */}
        <div className="w-full max-w-4xl px-4">
          <video 
            className="w-full rounded-xl shadow-2xl border border-gray-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            {/* Correct filename from your GitHub */}
            <source src="/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>

      {/* GALLERY GRID */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 border-b border-gray-700 pb-4">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IMAGE 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/tigersharkjewelryIMG_8987.jpg" 
              alt="Custom Jewelry 1" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Gold Custom Piece</h3>
              <p className="text-gray-400">$29.99</p>
            </div>
          </div>

          {/* IMAGE 2 - Corrected filename */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/tigersharkjewelryIMG_8989_2.jpg" 
              alt="Custom Jewelry 2" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Coming Soon Collection</h3>
              <p className="text-gray-400">$34.99</p>
            </div>
          </div>

          {/* IMAGE 3 - Corrected filename */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/tigersharkjewelryIMG_8991_4.jpg" 
              alt="Custom Jewelry 3" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Premium Bracelet</h3>
              <p className="text-gray-400">$39.99</p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-500">
        <p>&copy; 2025 TigerShark Vault. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
