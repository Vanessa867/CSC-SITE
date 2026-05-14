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
  { nome: "Poliedro Sistema de Ensino", logo: "/imagem/pareceiros/poliedro.png" },
  { nome: "Rede Saviniana", logo: "/imagem/parceiros/rede_saviniana.png" },
];

export default function Parceiros() {
  return (
    <section className="bg-[#10356A] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider">
          Nossos Parceiros
        </h2>

        {/* Container do Carrossel (Para funcionar o scroll lateral no celular) */}
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
          {parceiros.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[250px] bg-[#FFDE00] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105"
            >
              {/* Círculo do Logo */}
              <div className="bg-blue-800 w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden p-2">
                <img 
                  src={item.logo} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h4 className="text-[#10356A] font-bold text-lg leading-tight">
                {item.nome}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}