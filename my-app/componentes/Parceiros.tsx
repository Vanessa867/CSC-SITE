'use client';

import { useRef } from 'react';

const parceiros = [
  { nome: "Programa Bilíngue", logo: "/imagem/parceiros/international_school.png" },
  { nome: "Biblioteca Gamificada", logo: "/imagem/parceiros/arvore.png" },
  { nome: "Bíblia Sagrada", logo: "/imagem/parceiros/biblia_sagrada.png" },
  { nome: "Robótica Educacional", logo: "/imagem/parceiros/robotica.png" },
  { nome: "FTD Educação", logo: "/imagem/parceiros/ftd.png" },
  { nome: "ANEC", logo: "/imagem/parceiros/anec.png" },
  { nome: "Plataforma Redigir", logo: "/imagem/parceiros/redigir.png" },
  { nome: "Bernoulli Sistema de Ensino", logo: "/imagem/parceiros/bernoulli.png" },
  { nome: "Poliedro Sistema de Ensino", logo: "/imagem/parceiros/poliedro.png" },
  { nome: "Rede Saviniana", logo: "/imagem/parceiros/rede_saviniana.png" },
];

export default function Parceiros() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Move 80% da tela visível
      
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#10356A] py-16 px-6 relative group">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider">
          Nossos Parceiros
        </h2>

        {/* Setas de Navegação (Aparecem no hover no Desktop) */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-[-20px] top-1/2 z-10 bg-[#FFDE00] text-[#10356A] w-12 h-12 rounded-full items-center justify-center shadow-xl hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
        >
          <span className="text-2xl font-bold">←</span>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-[-20px] top-1/2 z-10 bg-[#FFDE00] text-[#10356A] w-12 h-12 rounded-full items-center justify-center shadow-xl hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
        >
          <span className="text-2xl font-bold">→</span>
        </button>

        {/* Container do Carrossel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {parceiros.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[280px] md:min-w-[320px] bg-[#FFDE00] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg snap-center"
            >
              <div className="bg-blue-800 w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden p-2">
                <img 
                  src={item.logo} 
                  alt={item.nome}
                  className="w-full h-full object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150'; }}
                />
              </div>
              <h4 className="text-[#10356A] font-bold text-lg leading-tight h-12 flex items-center">
                {item.nome}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Estilo CSS para esconder a barra de rolagem */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}