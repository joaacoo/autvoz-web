import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cardLight rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-48 -left-24 w-72 h-72 bg-cardSoft rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-cardLight rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
          La voz fisiológica para <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
            niños con TEA
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-primary/80 font-medium mb-10">
          Transformamos la incertidumbre familiar en calma y predictibilidad emocional. 
          Monitoreo biométrico en tiempo real diseñado con empatía.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4357a7] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Adquirir AutVoz
          </button>
          <button className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-sm hover:scale-105 active:scale-95">
            Conoce cómo funciona
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
