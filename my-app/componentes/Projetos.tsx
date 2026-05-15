'use client';

import { useState } from 'react';
import Image from 'next/image';

const projetosData = [
  {
    id: 'Integral',
    titulo: 'Integral',
    slug: 'Integral',
    imagem: '/imagem/integral.png',
    descricao: 'O projeto Integral visa promover uma educação completa, integrando conhecimentos teóricos e práticos para preparar os alunos para os desafios do mundo moderno.',
    textoExtra: 'Com atividades práticas e projetos interdisciplinares, os estudantes desenvolvem habilidades essenciais para o sucesso profissional e pessoal.'
  },
  {
    id: 'jogos-internos',
    titulo: 'Jogos Internos',
    slug: 'Jogos internos',
    imagem: '/imagem/esportes.png',
    descricao: 'Nossos jogos internos promovem a integração, o espírito esportivo e o trabalho em equipe entre os alunos de todas as séries.',
    textoExtra: 'É um momento de celebração e saúde através do esporte.'
  },
  {
    id: 'Esportes',
    titulo: 'Esportes',
    slug: 'Esportes',
    imagem: '/imagem/esportes.png',
    descricao: 'O projeto Esportes visa promover a prática esportiva e o trabalho em equipe entre os alunos.',
    textoExtra: 'Através dos esportes, os estudantes desenvolvem habilidades físicas e sociais importantes.'
  },
  {
    id: 'outros',
    titulo: 'outros',
    slug: 'Outros',
    imagem: '/imagem/outros.jpg',
    descricao: 'Outros projetos e vivências que enriquecem a educação dos nossos alunos.',
    textoExtra: 'Cada projeto tem seu propósito único e contribui para o desenvolvimento integral dos estudantes.'
  },
];

export default function Projetos() {
  const [projetoAtivo, setProjetoAtivo] = useState(projetosData[0]);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-[#10356A] mb-2 uppercase tracking-tight">
            Nossos projetos 
          </h2>
          <p className="text-gray-500 text-lg">
            Projetos do ensino fundamental e ensino médio!
          </p>
        </div>

        {/* Menu de Abas (Tabs) */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {/* Botões de seta (Azul Marinho) */}
          <button className="w-10 h-10 rounded-full bg-[#10356A] text-white flex items-center justify-center flex-shrink-0 hover:bg-blue-900 transition-colors">
            ←
          </button>

          {projetosData.map((projeto) => (
            <button
              key={projeto.id}
              onClick={() => setProjetoAtivo(projeto)}
              className={`px-6 py-2 rounded-full border-2 transition-all whitespace-nowrap font-bold ${
                projetoAtivo.id === projeto.id
                  ? 'bg-[#10356A] border-[#10356A] text-white'
                  : 'border-gray-200 text-[#10356A] hover:border-[#10356A]'
              }`}
            >
              {projeto.slug}
            </button>
          ))}

          <button className="w-10 h-10 rounded-full bg-[#10356A] text-white flex items-center justify-center flex-shrink-0 hover:bg-blue-900 transition-colors">
            →
          </button>
        </div>

        {/* Conteúdo do Projeto Selecionado */}
        <div className="flex flex-col lg:flex-row items-center gap-12 animate-in fade-in duration-500">
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-[40px] shadow-2xl border border-gray-100">
              <Image
                src={projetoAtivo.imagem}
                alt={projetoAtivo.titulo}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Indicador de páginas (dots em Azul Marinho) */}
            <div className="flex justify-center gap-2 mt-6">
              {projetosData.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === projetosData.indexOf(projetoAtivo) 
                      ? 'w-10 bg-[#10356A]' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-black text-[#10356A] mb-6 uppercase">
              {projetoAtivo.titulo}
            </h3>
            <div className="space-y-6 text-blue-950 leading-relaxed text-lg text-justify font-medium">
              <p>{projetoAtivo.descricao}</p>
              <p>{projetoAtivo.textoExtra}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}