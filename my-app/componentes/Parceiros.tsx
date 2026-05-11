import Image from 'next/image';

const parceiros = [
  { nome: "Programa Bilíngue", logo: "/imagem/logo-inter.png" },
  { nome: "Biblioteca Gamificada", logo: "/imagem/logo-arvore.png" },
  { nome: "Bíblia Sagrada", logo: "/imagem/logo-biblia.png" },
  { nome: "Outro Parceiro", logo: "/imagem/logo-parceiro.png" },
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
                  alt={item.nome} 
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