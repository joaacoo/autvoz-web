import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, Bluetooth } from 'lucide-react';

const Product = () => {
  const images = ['/pulsera.jpg', '/pulsera2.jpg', '/pulsera3.jpg'];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

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
                  <div className="flex-shrink-0 w-16 h-16 bg-cardLight/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
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

          <div className="relative mt-0 lg:mt-0 perspective-1000">
            <div className="absolute inset-0 bg-cardSoft rounded-[3rem] transform rotate-1 scale-95 opacity-10 sm:scale-100 sm:rotate-2 lg:scale-105 lg:rotate-3 opacity-15 sm:opacity-20"></div>

            {/* Carrusel — cross-fade 3D premium */}
            <div className="relative w-full h-[320px] sm:h-[500px] lg:h-[600px] rounded-[3rem] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] overflow-hidden group perspective-1000">
              {images.map((img, idx) => {
                const isActive = idx === currentImg;
                const isExiting = idx === (currentImg - 1 + images.length) % images.length && !isActive;

                return (
                  <img
                    key={idx}
                    src={img}
                    alt={`AutVoz - Vista ${idx + 1}`}
                    className={`
                      absolute inset-0 w-full h-full object-cover
                      transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                      ${isActive
                        ? 'opacity-100 scale-100 rotate-y-0 z-10 filter-none'
                        : isExiting
                          ? 'opacity-0 scale-95 rotate-y-6 z-5 blur-sm'
                          : 'opacity-0 scale-105 -rotate-y-6 z-0'
                      }
                    `}
                  />
                );
              })}

              {/* Indicadores con progreso */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`relative h-2.5 rounded-full transition-all duration-500 ease-out ${idx === currentImg ? 'bg-white w-10 shadow-lg scale-110' : 'bg-white/40 w-3 hover:bg-white/80 hover:scale-110'
                      }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  >
                    {idx === currentImg && (
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Badges Glassmorphism para toque moderno/Premium */}
            <div className="absolute top-8 -left-4 sm:-left-8 bg-white/70 backdrop-blur-md border border-white/40 p-3 pr-5 rounded-2xl shadow-xl flex items-center space-x-3 z-30 animate-float hidden sm:flex cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:bg-white/90">
              <div className="bg-accent/20 p-2 rounded-xl text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-bold text-primary text-sm leading-tight">Diseño Premium</p>
                <p className="text-[10px] text-primary/60 font-medium uppercase tracking-wider">Ergonómico</p>
              </div>
            </div>

            <div className="absolute bottom-24 -right-4 sm:-right-8 bg-white/70 backdrop-blur-md border border-white/40 p-3 pr-5 rounded-2xl shadow-xl flex items-center space-x-3 z-30 animate-float hidden sm:flex cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:bg-white/90" style={{ animationDelay: '1.5s' }}>
              <div className="bg-[#009EE3]/10 p-2 rounded-xl text-[#009EE3]">
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
