import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Request from './pages/Request';
import { Bolt } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-surface-container py-24 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="https://i.postimg.cc/g0Mtqb7b/Whats-App-Image-2026-04-26-at-2-33-38-PM.jpg" 
              alt="VYN Logo" 
              className="h-10 w-auto rounded-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-on-surface-variant max-w-sm mb-10 font-medium leading-relaxed">
            Pioneering high-performance energy infrastructure and smart grid solutions for a sustainable future. Precision engineering for the next generation.
          </p>
          <p className="text-xs font-bold text-secondary uppercase tracking-widest">
            © 2024 VYN Engineering. All rights reserved.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-black text-on-surface uppercase tracking-[0.2em] mb-8">Solutions</h4>
          <nav className="flex flex-col gap-4 text-sm font-bold text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">EV Manufacturing</a>
            <a href="#" className="hover:text-primary transition-colors">Battery Storage</a>
            <a href="#" className="hover:text-primary transition-colors">Charging Networks</a>
            <a href="#" className="hover:text-primary transition-colors">Diagnostics</a>
          </nav>
        </div>

        <div>
          <h4 className="text-xs font-black text-on-surface uppercase tracking-[0.2em] mb-8">Navigation</h4>
          <nav className="flex flex-col gap-4 text-sm font-bold text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-primary transition-colors">Sustainability</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
