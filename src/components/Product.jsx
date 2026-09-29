import React, { useState } from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, Bluetooth } from 'lucide-react';

const variants = [
  {
    id: 'todas',
    name: 'Todas',
    image: '/pulsera-colores.jpg',
    alt: 'Pulseras AutVoz en celeste, lila y gris',
    swatchClass: 'bg-[conic-gradient(from_210deg,#9ec7e6_0_33%,#c5b0d8_33%_66%,#c0c0c4_66%_100%)]',
  },
  {
    id: 'celeste',
    name: 'Celeste',
    image: '/pulsera-celeste.jpg',
    alt: 'Pulsera AutVoz celeste pastel',
    swatchClass: 'bg-[#9ec7e6]',
  },
  {
    id: 'lila',
    name: 'Lila',
    image: '/pulsera-lila.jpg',
    alt: 'Pulsera AutVoz lila lavanda',
    swatchClass: 'bg-[#c5b0d8]',
  },
  {
    id: 'gris',
    name: 'Gris',
    image: '/pulsera-gris.jpg',
    alt: 'Pulsera AutVoz gris claro',
    swatchClass: 'bg-[#c0c0c4]',
  },
];

const Product = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const current = variants[currentIdx];

  const ColorPickerContent = () => (
    <div className="flex flex-col items-center gap-2 bg-white/95 backdrop-blur-md border border-gray-200 px-5 py-3 rounded-2xl shadow-[0_18px_45px_-5px_rgba(0,0,0,0.28)]">
      <div className="flex items-center gap-2">
        {variants.map((variant, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Ver pulsera ${variant.name}`}
              aria-pressed={isActive}
              title={variant.name}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-300 ${variant.swatchClass} ${isActive
                ? 'border-primary scale-110 ring-2 ring-primary/20'
                : 'border-white/80 hover:scale-110 hover:border-primary/40'
                }`}
            />
          );
        })}
      </div>
      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-primary/80">
        {current.name}
      </p>
    </div>
  );

  const features = [
    {
      icon: <Activity size={32} className="text-accent" />,
      title: "Tecnología wearable predictiva",
      description: "Sensores avanzados que anticipan crisis emocionales analizando patrones fisiológicos invisibles a simple vista."
    },
    {
      icon: <Heart size={32} className="text-accent" />,
      title: "Material ultrasuave",
      description: "Diseño inclusivo pensado para la hipersensibilidad sensorial. Tan cómodo que olvidarán que lo llevan puesto."
    },
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Biometría en tiempo real",
      description: "Datos continuos y seguros enviados a la app familiar para tomar decisiones informadas y brindar apoyo oportuno."
    }
  ];

  return (
    <section id="producto" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Diseño pensado para ellos</h2>
              <p className="text-lg text-primary/70">
                La pulsera AutVoz integra tecnología de grado médico en un formato amigable y no invasivo.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-cardLight/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-primary/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de la derecha (Imagen y Selector flotante) */}
          <div className="relative mt-10 lg:mt-0 pb-16 sm:pb-4">
            {/* Contenedor principal con una sombra gris profunda y muy visible */}
            <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[580px] rounded-[2rem] sm:rounded-[2.75rem] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.3)] border border-gray-200/80 overflow-visible bg-[#f4f4f6]">
              {variants.map((variant, idx) => {
                const isActive = idx === currentIdx;

                return (
                  <img
                    key={variant.id}
                    src={variant.image}
                    alt={variant.alt}
                    className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] sm:rounded-[2.75rem] transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                  />
                );
              })}

              {/* Selector más abajo en celulares y sombra pronunciada */}
              <div className="absolute -bottom-14 sm:-bottom-4 left-0 right-0 z-20 flex justify-center px-4">
                <ColorPickerContent />
              </div>
            </div>

            {/* Insignias flotantes */}
            <div className="product-float-badge absolute top-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md border border-gray-200 p-2.5 pr-4 rounded-2xl shadow-[0_12px_25px_-10px_rgba(0,0,0,0.2)] flex items-center space-x-3 z-30 hidden sm:flex cursor-pointer origin-center">
              <div className="product-float-badge-icon bg-accent/20 p-2 rounded-xl text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-bold text-primary text-sm leading-tight">Diseño Premium</p>
                <p className="text-[10px] text-primary/60 font-medium uppercase tracking-wider">Ergonómico</p>
              </div>
            </div>

            <div className="product-float-badge absolute bottom-12 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md border border-gray-200 p-2.5 pr-4 rounded-2xl shadow-[0_12px_25px_-10px_rgba(0,0,0,0.2)] flex items-center space-x-3 z-30 hidden sm:flex cursor-pointer origin-center">
              <div className="product-float-badge-icon bg-[#009EE3]/10 p-2 rounded-xl text-[#009EE3]">
                <Bluetooth size={18} />
              </div>
              <div>
                <p className="font-bold text-primary text-sm leading-tight">Sincronización</p>
                <p className="text-[10px] text-primary/60 font-medium uppercase tracking-wider">Bluetooth 5.0</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;