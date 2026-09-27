import React from 'react';
import { Microscope, FileText, Award } from 'lucide-react';

const Ciencia = () => {
  return (
    <section id="ciencia" className="py-24 bg-[#eef1fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Ciencia y Avales</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Nuestro desarrollo está respaldado por investigaciones neurológicas y apoyado por especialistas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="flex justify-center mb-6">
              <Microscope size={48} className="text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">Estudios Clínicos</h3>
            <p className="text-primary/75 leading-relaxed">Validado en pruebas con niños del espectro autista, logrando un alto grado de asertividad predictiva.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="flex justify-center mb-6">
              <Award size={48} className="text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">Aval Profesional</h3>
            <p className="text-primary/75 leading-relaxed">Recomendado por psicoterapeutas, neurólogos y terapeutas ocupacionales de prestigiosas instituciones.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="flex justify-center mb-6">
              <FileText size={48} className="text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">Patente Tecnológica</h3>
            <p className="text-primary/75 leading-relaxed">Algoritmos propietarios diseñados para interpretar biometría fisiológica de forma continua y segura.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ciencia;
