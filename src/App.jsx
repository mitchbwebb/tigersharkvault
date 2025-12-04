import React, { useState, useEffect } from 'react';
import { 
  Gem, 
  Shirt, 
  ShoppingBag, 
  Mail, 
  ArrowRight, 
  Anchor, 
  Facebook, 
  Instagram, 
  Twitter,
  Menu,
  X 
} from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const navLinks = [
    { name: 'THE VAULT', href: '#about' },
    { name: 'SNEAK PEEK', href: '#sneak-peek' },
    { name: 'JOIN', href: '#join' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-2 z-50">
            <h1 className="text-xl md:text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent filter drop-shadow-lg">
              TigerShark Vault
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-amber-100/80">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-amber-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-amber-500 z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-amber-500 tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[60px] md:blur-[120px] animate-pulse"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          
          {/* VIDEO INTRO */}
          <div className="relative w-full aspect-video max-w-3xl mb-8 md:mb-10 rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-slate-800 bg-slate-900 group animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-amber-500/5 pointer-events-none z-10"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-1000"
              /* Note: Removed poster as that file was not in your screenshot */
            >
              {/* UPDATED VIDEO PATH */}
              <source src="public/TigerShark_Vault_Logo_Vid.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="text-amber-500 font-bold tracking-[0.2em] mb-2 md:mb-4 text-xs md:text-base animate-fade-in-up delay-100">EST. 2025</h2>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter drop-shadow-2xl animate-fade-in-up delay-200">
            UNLOCK THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">TREASURE</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-8 md:mb-10 leading-relaxed px-4 animate-fade-in-up delay-300">
            Premium Resale. Custom Apparel. Unique Jewelry.
            <br className="hidden md:block" />
            <span className="text-amber-200 italic block mt-2 md:inline md:mt-0"> The Vault opens soon.</span>
          </p>

          <div id="join" className="w-full max-w-md animate-fade-in-up delay-300 px-4">
            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col md:flex-row gap-2 md:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for launch updates..."
                  className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-6 py-4 rounded-lg md:rounded-r-none md:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder-slate-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg md:rounded-l-none md:rounded-r-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {submitted ? 'JOINED!' : 'JOIN'}
                  {!submitted && <ArrowRight size={20} />}
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
              Be the first to know when we drop.
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-500/50">
          <Anchor size={24} className="md:w-8 md:h-8" />
        </div>
      </header>

      {/* About Grid */}
      <section id="about" className="py-16 md:py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<ShoppingBag size={40} className="text-amber-400" />}
              title="Resale Finds"
              description="Curated treasures and rare finds, authenticated and vaulted for you."
            />
            <FeatureCard 
              icon={<Shirt size={40} className="text-amber-400" />}
              title="Custom Apparel"
              description="Premium tees and hoodies with unique designs, printed on demand."
            />
            <FeatureCard 
              icon={<Gem size={40} className="text-amber-400" />}
              title="Custom Jewelry"
              description="One-of-a-kind pieces designed to make a statement."
            />
          </div>
        </div>
      </section>

      {/* Sneak Peek Section - 3 Jewelry Items */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden" id="sneak-peek">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter drop-shadow-xl">
            SNEAK PEEK
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            A glimpse into the exclusive items coming to The Vault.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* UPDATED IMAGE PATHS FOR ALL 3 ITEMS */}
          <SneakPeekCard 
            imageSrc="public/tigersharkjewelryIMG_8987.jpg"
            title="Signature Necklace"
            category="JEWELRY"
          />
          <SneakPeekCard 
            imageSrc="public/tigersharkjewelryIMG_8991_4.jpg"
            title="Vault Bracelet"
            category="JEWELRY"
          />
          <SneakPeekCard 
            imageSrc="public/tigersharkjewelryIMG_8989_2.jpg"
            title="Onyx Link"
            category="JEWELRY"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">TIGERSHARK VAULT</h3>
            <p className="text-slate-500 text-sm mt-2">© 2025 TigerShark Vault. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <SocialLink href="#" icon={<Instagram size={20} />} />
            <SocialLink href="#" icon={<Facebook size={20} />} />
            <SocialLink href="#" icon={<Twitter size={20} />} />
            <SocialLink href="mailto:contact@tigersharkvault.net" icon={<Mail size={20} />} />
          </div>
        </div>
      </footer>
      
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700/50 hover:border-amber-500/50 hover:bg-slate-800 transition-all group">
    <div className="mb-4 md:mb-6 p-4 bg-slate-900 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const SneakPeekCard = ({ imageSrc, title, category }) => (
  <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all group">
    <div className="relative h-64 md:h-80 bg-slate-950 p-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50 z-10"></div>
      <img 
        src={imageSrc} 
        alt={title}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://via.placeholder.com/400x320?text=Image+Not+Found"; 
          console.error("Image failed to load:", imageSrc);
        }}
        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:scale-105 transition-transform duration-500 relative z-0"
      />
    </div>
    <div className="p-6 relative z-20 bg-slate-900">
      <p className="text-amber-500 text-xs font-bold tracking-widest mb-2">{category}</p>
      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{title}</h3>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
  >
    {icon}
  </a>
);

export default App;
