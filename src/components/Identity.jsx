import React from 'react';
import { Users, Lightbulb, UserCheck, Lock, Globe, Heart } from 'lucide-react';

const Identity = () => {
  const values = [
    { icon: <Heart size={24} />, title: "Empatía activa", color: "bg-cardLight" },
    { icon: <Lightbulb size={24} />, title: "Innovación científica", color: "bg-cardSoft" },
    { icon: <UserCheck size={24} />, title: "Diseño inclusivo", color: "bg-cardLight" },
    { icon: <Lock size={24} />, title: "Confianza y transparencia", color: "bg-cardSoft" },
    { icon: <Globe size={24} />, title: "Compromiso social", color: "bg-cardLight" }
  ];

  return (
    <section id="identidad" className="pt-16 pb-8 md:py-24 bg-gradient-to-b from-cardSoft/10 via-cardSoft/5 to-bgMain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-8 md:mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center lg:text-left">Nuestra Identidad</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 text-center">
                <h3 className="text-xl font-heading font-bold text-accent mb-3">Misión</h3>
                <p className="text-primary/80 leading-relaxed">
                  Ser la voz fisiológica de los niños con TEA, traduciendo sus estados internos 
                  para mejorar su calidad de vida y la de sus familias a través de tecnología accesible.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 text-center">
                <h3 className="text-xl font-heading font-bold text-accent mb-3">Visión</h3>
                <p className="text-primary/80 leading-relaxed">
                  Ser la empresa líder en tecnología asistiva en Argentina y la región, 
                  redefiniendo el estándar de cuidado y comprensión del neurodesarrollo.
                </p>
              </div>
            </div>
          </div>

          {/* Divider solo visible en mobile entre las dos columnas */}
          <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

          <div className="relative h-full flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center lg:text-left">Nuestros Valores</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {values.slice(0, 4).map((value, index) => (
                <div key={index} className={`${value.color} bg-opacity-40 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-opacity-60 transition-colors`}>
                  <div className="text-primary mb-3 bg-white p-3 rounded-full shadow-sm">
                    {value.icon}
                  </div>
                  <h4 className="font-heading font-bold text-primary text-sm sm:text-base">{value.title}</h4>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className={`${values[4].color} bg-opacity-40 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-opacity-60 transition-colors w-full md:w-1/2 mx-auto`}>
                <div className="text-primary mb-3 bg-white p-3 rounded-full shadow-sm">
                  {values[4].icon}
                </div>
                <h4 className="font-heading font-bold text-primary text-sm sm:text-base">{values[4].title}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
