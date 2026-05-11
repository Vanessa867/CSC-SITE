import Image from 'next/image';

export default function Estrutura() {
  return (
    <section className="bg-[#f0f9ff] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LADO ESQUERDO: O Carrossel (Simplificado) */}
        <div className="relative w-full md:w-1/2 group">
          <div className="relative h-[300 md:h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image 
              src="/imagem/estrutura.jpeg" // Nome da sua imagem na pasta public/imagem
              alt="Estrutura da Escola"
              fill
              className="object-cover"
            />
            
            {/* Setas de Navegação (Apenas visual por enquanto) */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button className="bg-white/30 hover:bg-white/50 p-3 rounded-r-lg text-white font-bold backdrop-blur-sm">
                &#10094;
              </button>
              <button className="bg-white/30 hover:bg-white/50 p-3 rounded-l-lg text-white font-bold backdrop-blur-sm">
                &#10095;
              </button>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Texto */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#10356A] uppercase tracking-wider">
            Estrutura
          </h2>
          <p className="text-blue-900 text-lg font-semibold leading-relaxed">
            Oferecemos uma infraestrutura moderna e segura, equipada para 
            proporcionar o melhor aprendizado e desenvolvimento.
          </p>
        </div>

      </div>
    </section>
  );
}