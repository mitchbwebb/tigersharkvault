import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 bg-[#02020a]">
        <div className="text-xl font-bold tracking-widest text-amber-500">TIGERSHARK VAULT</div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-amber-500 hover:text-amber-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* HERO SECTION WITH VIDEO */}
      <div className="text-center pt-10 pb-8 px-4">
        <div className="max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl border border-amber-500/20">
          <video 
            className="w-full" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="text-5xl font-black tracking-tighter text-white mb-4">SNEAK PEEK</h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          A glimpse into the exclusive items coming to The Vault.
        </p>
      </div>

      {/* GRID CONTAINER */}
      <div className="max-w-md mx-auto px-4 pb-20 space-y-6">

        {/* CARD 1 - Signature Necklace */}
        <div className="bg-[#0a0a16] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl hover:border-amber-500/40 transition-all duration-300">
          <div className="bg-[#0f0f1f] h-80 flex items-center justify-center p-8">
            <img 
              src="/tigersharkjewelryIMG_8987.jpg" 
              alt="Signature Necklace with black stones and gold chain" 
              className="max-h-full max-w-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="p-6 bg-[#0a0a16]">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-1">JEWELRY</div>
            <h3 className="text-xl font-bold text-amber-400">Signature Necklace</h3>
          </div>
        </div>

        {/* CARD 2 - Vault Bracelet */}
        <div className="bg-[#0a0a16] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl hover:border-amber-500/40 transition-all duration-300">
          <div className="bg-[#0f0f1f] h-80 flex items-center justify-center p-8">
            <img 
              src="/tigersharkjewelryIMG_8989_2.jpg" 
              alt="Vault Bracelet with black beads and gold accents" 
              className="max-h-full max-w-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="p-6 bg-[#0a0a16]">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-1">JEWELRY</div>
            <h3 className="text-xl font-bold text-white">Vault Bracelet</h3>
          </div>
        </div>

        {/* CARD 3 - Onyx Link */}
        <div className="bg-[#0a0a16] rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl hover:border-amber-500/40 transition-all duration-300">
          <div className="bg-[#0f0f1f] h-80 flex items-center justify-center p-8">
            <img 
              src="/tigersharkjewelryIMG_8991_4.jpg" 
              alt="Onyx Link bracelet with rectangular black stones" 
              className="max-h-full max-w-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="p-6 bg-[#0a0a16]">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-1">JEWELRY</div>
            <h3 className="text-xl font-bold text-white">Onyx Link</h3>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-white/5">
        <div className="font-bold text-white text-base mb-2">TIGERSHARK VAULT</div>
        <p>&copy; 2025 TigerShark Vault. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
