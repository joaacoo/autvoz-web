import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Ciencia from './components/Ciencia';
import Testimonios from './components/Testimonios';
import Identity from './components/Identity';
import Soporte from './components/Soporte';
import Footer from './components/Footer';

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
);

function App() {
  return (
    <div className="min-h-screen bg-bgMain font-body text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Divider />
        <Product />
        <Divider />
        <Ciencia />
        <Divider />
        <Identity />
        <Divider />
        <Testimonios />
        <Divider />
        <Soporte />
      </main>
      <Footer />
    </div>
  );
}

export default App;
