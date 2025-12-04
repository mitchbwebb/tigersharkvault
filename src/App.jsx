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
      <h1>TigerShark Vault - Coming Soon</h1>
      <p>Premium Resale, Custom Apparel & Jewelry</p>
    </div>
  );
};

export default App;
