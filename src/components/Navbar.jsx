import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        // En el tope de la página, siempre mostrar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Haciendo scroll hacia abajo -> ocultar
        setIsVisible(false);
      } else {
        // Haciendo scroll hacia arriba -> mostrar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-bgMain/90 backdrop-blur-md shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo.jpeg" alt="AutVoz Logo" className="h-14 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#producto" className="text-primary hover:text-accent font-medium transition-colors">Producto</a>
            <a href="#ciencia" className="text-primary hover:text-accent font-medium transition-colors">Ciencia y Avales</a>
            <a href="#testimonios" className="text-primary hover:text-accent font-medium transition-colors">Testimonios</a>
            <a href="#soporte" className="text-primary hover:text-accent font-medium transition-colors">Soporte Técnico</a>
            <button className="bg-accent text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#4357a7] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Comprar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent focus:outline-none relative w-8 h-8 flex justify-center items-center"
            >
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                <Menu size={28} />
              </span>
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                <X size={28} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — siempre renderizado, animado con max-height y opacity */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        } bg-bgMain border-t border-gray-100`}
      >
        <div
          className={`px-4 pt-2 pb-6 space-y-1 flex flex-col transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-3'
          }`}
        >
          {[
            { href: '#producto', label: 'Producto' },
            { href: '#ciencia', label: 'Ciencia y Avales' },
            { href: '#testimonios', label: 'Testimonios' },
            { href: '#soporte', label: 'Soporte Técnico' },
          ].map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className="block px-3 py-2.5 text-primary hover:text-accent hover:bg-accent/5 rounded-xl font-medium transition-colors"
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            className="mt-3 w-full bg-accent text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#4357a7] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
