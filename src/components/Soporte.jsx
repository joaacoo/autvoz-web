import React from 'react';
import { HeadphonesIcon, MessageCircle } from 'lucide-react';

const Soporte = () => {
  return (
    <section id="soporte" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Soporte Técnico Especializado</h2>
        <p className="text-lg text-primary/70 mb-12 leading-relaxed">
          Estamos aquí para acompañarte en cada paso. Si tienes dudas sobre la configuración, sincronización con la app o el uso diario de tu pulsera AutVoz, nuestro equipo empático está listo para ayudarte.
        </p>
        
        <div className="flex justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 shadow-sm flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
            <MessageCircle size={20} />
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Soporte;
