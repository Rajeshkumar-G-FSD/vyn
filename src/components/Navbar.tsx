import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bolt, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/g0Mtqb7b/Whats-App-Image-2026-04-26-at-2-33-38-PM.jpg" 
            alt="VYN Logo" 
            className="h-12 w-auto rounded-lg object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-tight transition-all duration-200 px-1 py-1 relative",
                  isActive 
                    ? "text-primary font-semibold" 
                    : "text-secondary hover:text-on-surface"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link 
            to="/request"
            className="bg-primary hover:bg-primary/90 text-on-primary px-6 py-2.5 rounded-lg active:scale-95 transition-all text-sm font-medium shadow-sm"
          >
            Request Service
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-surface-container px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                location.pathname === link.path ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/request"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-on-primary px-6 py-4 rounded-lg text-center font-medium"
          >
            Request Service
          </Link>
        </motion.div>
      )}
    </header>
  );
}
