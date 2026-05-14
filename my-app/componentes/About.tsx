// components/About.tsx
import { Home, Target } from "lucide-react"; // Importa o ícone de casa

export default function About() {
  return (
    <section className="bg-blue-50/30 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 uppercase tracking-wide">
          Sobre Nós
        </h2>
        <p className="text-blue-800 leading-relaxed mb-16 text-lg">
          O Colégio de Santa Catarina, fundado em 03 de fevereiro de 1944 como Externato Santa Catarina, segue a pedagogia e o carisma da Bem-aventurada Savina Petrilli, por meio das Irmãs dos Pobres de Santa Catarina de Sena. Com uma estrutura moderna e recursos inovadores, acompanha as transformações sociais e educacionais. Sua proposta pedagógica une conhecimento qualificado à formação humana e cristã, promovendo valores cidadãos e uma visão ampla de mundo. Além disso, mantém um ambiente seguro e acolhedor, característico da Pedagogia Saviniana.
        </p>

        {/* Bloco Nossa Missão */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-left max-w-3xl mx-auto">
          {/* Centralizamos o ícone dentro do quadrado azul com flex e items-center */}
          <div className="w-24 h-24 bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center">
            <Target className="text-white w-12 h-12" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2 uppercase">
              Nossa Missão
            </h3>
            <p className="text-blue-800">
              Promover e resgatar o ser humano em todas as suas dimensões por meio da educação, da assistência social e da evangelização, alicerçadas nos princípios cristãos e savinianos, que resultem em uma expressiva atuação social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}