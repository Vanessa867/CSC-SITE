import Image from 'next/image';

export default function Extracurriculares() {
  return (
    <section className="bg-[#f0f9ff] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold text-[#10356A] mb-16 uppercase tracking-wider">
          Extracurriculares
        </h2>

        <div className="space-y-24">
          
          {/* BLOCO 1: Imagem na Direita (Integral) */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#10356A] mb-4">Integral</h3>
              <p className="text-blue-900 leading-relaxed">
                Oferecemos uma infraestrutura moderna e segura, equipada para 
                proporcionar o melhor aprendizado e desenvolvimento.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative h-80 w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-lg">
                <Image 
                  src="/imagem/futebol.jpg" 
                  alt="Integral" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* BLOCO 2: Imagem na Esquerda (Esportes e Projetos) */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <div className="relative h-80 w-full overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-lg">
                <Image 
                  src="/imagem/vr.jpg" 
                  alt="Esportes e Projetos" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#10356A] mb-4">Esportes e projetos</h3>
              <p className="text-blue-900 leading-relaxed">
                Oferecemos uma infraestrutura moderna e segura, equipada para 
                proporcionar o melhor aprendizado e desenvolvimento.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}