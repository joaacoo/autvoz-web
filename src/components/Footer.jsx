import React from 'react';
import { CreditCard, Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 md:pt-20 pb-6 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-12 text-center">
          <span 
            className="font-heading font-bold text-3xl tracking-tight text-white mb-4 cursor-pointer hover:text-gray-200 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            AutVoz
          </span>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Tecnología empática para el bienestar emocional y la conexión familiar.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AutVoz. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Políticas de Privacidad</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Términos y Condiciones</span>
          </div>
        </div>
        <p className="text-gray-500 text-[10px] sm:text-xs mt-10 md:mt-6 text-center max-w-xs md:max-w-3xl mx-auto px-4 md:px-2 leading-relaxed">
          AutVoz maneja los datos biométricos con estrictos protocolos de seguridad y encriptación, asegurando la privacidad absoluta de los usuarios según la ley de protección de datos personales.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
