// src/components/navBar.jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId) => {
    setIsOpen(false);

    setTimeout(() => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 500);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-white/90 shadow-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold bg-gradient-to-br from-indigo-900/70 to-purple-900/60 bg-clip-text text-transparent">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.href.slice(1))}
                className="text-gray-700 hover:text-indigo-900 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul 
          className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
          role="menu" 
          aria-label="Mobile navigation"
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item} role="none">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="block px-4 py-3 text-gray-700 hover:text-indigo-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
                role="menuitem"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;