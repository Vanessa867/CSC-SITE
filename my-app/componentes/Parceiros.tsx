import Image from 'next/image';

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
  return (
    <section className="bg-[#10356A] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider">
          Nossos Parceiros
        </h2>

        {/* Container do Carrossel:
          - flex: coloca os itens lado a lado
          - overflow-x-auto: permite o scroll lateral
          - pb-8: espaço para não cortar a sombra do card
          - snap-x: ativa o efeito de "imã" ao scrollar
        */}
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory">
          {parceiros.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[280px] md:min-w-[300px] bg-[#FFDE00] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 snap-center"
            >
              {/* Círculo do Logo */}
              <div className="bg-blue-800 w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden p-2">
                <img 
                  src={item.logo} 
                  alt={item.nome}
                  className="w-full h-full object-contain"
                  // Correção do erro de TypeScript: target vira currentTarget com cast
                  onError={(e) => { 
                    (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Logo'; 
                  }}
                />
              </div>
              
              <h4 className="text-[#10356A] font-bold text-lg leading-tight">
                {item.nome}
              </h4>
            </div>
          ))}
        </div>

        {/* Indicador visual de scroll para Desktop */}
        <div className="hidden md:block text-right mt-4">
          <p className="text-white/40 text-sm italic">
            Use Shift + Scroll para navegar lateralmente ou arraste →
          </p>
        </div>
      </div>
    </section>
  );
}