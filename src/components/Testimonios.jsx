import React, { useState, useEffect } from 'react';

const Testimonios = () => {
  const testimonials = [
    {
      quote: "Desde que usamos AutVoz, podemos anticiparnos a los momentos de estrés de nuestro hijo. Ha sido un cambio radical; ahora tenemos calma donde antes había incertidumbre constante.",
      initial: "M",
      name: "María L.",
      role: "Madre de Leo (7 años)"
    },
    {
      quote: "Mi mayor miedo era que le molestara usar la pulsera por su hipersensibilidad. Para mi sorpresa, el material es tan suave y liviano que nunca intenta quitársela.",
      initial: "C",
      name: "Carlos R.",
      role: "Padre de Sofía (5 años)"
    },
    {
      quote: "Es increíble cómo la app nos notifica antes de que ocurra la desregulación. Nos da tiempo valioso para aplicar las herramientas que nos dio su terapeuta.",
      initial: "V",
      name: "Valeria M.",
      role: "Madre de Tomás (9 años)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonios" className="pt-8 pb-4 md:py-24 bg-[#f0f4ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Historias de Familias</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Descubre cómo AutVoz ha transformado el día a día de diferentes hogares.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto min-h-[480px] sm:min-h-[400px] md:min-h-[350px] px-2">
          {testimonials.map((testimonial, index) => {
            let positionClass = 'translate-x-full opacity-0 z-0'; // a la derecha
            if (index === currentIndex) {
              positionClass = 'translate-x-0 opacity-100 z-10'; // visible
            } else if (index < currentIndex || (currentIndex === 0 && index === testimonials.length - 1)) {
              // Manejo básico para que se vayan hacia la izquierda
              if (!(currentIndex === 0 && index === 1)) {
                 positionClass = '-translate-x-full opacity-0 z-0';
              }
            }
            if (currentIndex === testimonials.length - 1 && index === 0) {
               positionClass = 'translate-x-full opacity-0 z-0';
            }

            return (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${positionClass}`}
            >
              <div className="bg-bgMain p-8 md:p-14 rounded-3xl border border-gray-100 relative shadow-md">
                <div className="absolute -top-6 -left-2 md:-left-6 text-cardLight/30 font-heading text-9xl leading-none">"</div>
                <p className="text-primary/80 italic mb-8 md:mb-10 relative z-10 text-base md:text-xl leading-relaxed pt-4 text-center md:text-left">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-accent text-xl">{testimonial.initial}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-heading font-bold text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-primary/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )})}
          {/* Dots: absolute on mobile, hidden here on md+ */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 md:hidden z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dots: only visible on md+ */}
        <div className="hidden md:flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-300'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
