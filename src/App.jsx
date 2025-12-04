import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans selection:bg-amber-500 selection:text-black">
      
      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              TIGERSHARK VAULT
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">SHOP</a>
              <a href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">ABOUT</a>
              <a href="#" className="text-sm font-medium hover:text-amber-400 transition-colors">CONTACT</a>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105">
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a1a] border-b border-white/10 py-4 px-4 flex flex-col space-y-4 shadow-2xl">
            <a href="#" className="block text-lg font-medium hover:text-amber-400">Shop</a>
            <a href="#" className="block text-lg font-medium hover:text-amber-400">About</a>
            <a href="#" className="block text-lg font-medium hover:text-amber-400">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#050510] to-[#050510] z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-amber-500">
            TigerShark Vault
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12">
            SNEAK PEEK: Exclusive Collection
          </p>

          {/* VIDEO CONTAINER */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video max-w-3xl mx-auto">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              {/* CORRECT VIDEO PATH */}
              <source src="/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
            </video>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </header>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-[#050510]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wide text-white">THE COLLECTION</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="group relative bg-[#0a0a1a] rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-white">
                {/* CORRECT IMAGE PATH 1 */}
                <img 
                  src="/tigersharkjewelryIMG_8987.jpg" 
                  alt="Signature Necklace" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Jewelry</div>
                <h3 className="text-xl font-bold text-white mb-2">Signature Necklace</h3>
                <p className="text-gray-400 text-sm">Gold & Onyx Custom</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-[#0a0a1a] rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-white">
                {/* CORRECT IMAGE PATH 2 */}
                <img 
                  src="/tigersharkjewelryIMG_8989_2.jpg" 
                  alt="Vault Bracelet" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Jewelry</div>
                <h3 className="text-xl font-bold text-white mb-2">Vault Bracelet</h3>
                <p className="text-gray-400 text-sm">Silver Chain Detail</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-[#0a0a1a] rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-white">
                {/* CORRECT IMAGE PATH 3 */}
                <img 
                  src="/tigersharkjewelryIMG_8991_4.jpg" 
                  alt="Onyx Link" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Jewelry</div>
                <h3 className="text-xl font-bold text-white mb-2">Onyx Link</h3>
                <p className="text-gray-400 text-sm">Premium Pendant</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#02020a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">TIGERSHARK VAULT</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600 text-sm">
          &copy; 2025 TigerShark Vault. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
