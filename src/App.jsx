    {/* VIDEO DISPLAY */}
    <div className="w-full max-w-4xl px-4">
      <video 
        className="w-full rounded-xl shadow-2xl border border-gray-700" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        {/* Make sure the filename matches exactly what is in your public folder */}
        <source src="/TigerShark_Vault_Logo_Vid.mp4" type="video/mp4" />
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

      {/* IMAGE 2 - Update filename if you renamed it! */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img 
          src="/tigersharkjewelryIMG_8989_2.jpg" 
          alt="Custom Jewelry 2" 
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">Silver Chain Detail</h3>
          <p className="text-gray-400">$34.99</p>
        </div>
      </div>

      {/* IMAGE 3 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img 
          src="/tigersharkjewelryIMG_8991_4.jpg" 
          alt="Custom Jewelry 3" 
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">Premium Pendant</h3>
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
