'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export default function Midia() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsta() {
      try {
        const response = await fetch('https://instagram-data12.p.rapidapi.com/user/posts?username=colegiodesantacatarina', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'SUA_CHAVE_AQUI', // Substitua pela sua chave
            'x-rapidapi-host': 'instagram-data12.p.rapidapi.com'
          }
        });
        const data = await response.json();
        // Pegamos apenas os primeiros 6 posts
        setPosts(data.data.edges.slice(0, 6));
      } catch (error) {
        console.error("Erro ao puxar Instagram:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInsta();
  }, []);

  if (loading) return <div className="text-center py-20 text-[#10356A]">Carregando feed...</div>;

  return (
    <section className="bg-[#f0f9ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#10356A] mb-12 uppercase tracking-wider">
          Mídia CSC
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item, index) => {
            const post = item.node;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    CSC
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">colegiodesantacatarina</p>
                    <p className="text-[10px] text-gray-500">Recife, Pernambuco</p>
                  </div>
                </div>

                {/* Imagem Real do Instagram */}
                <a href={`https://www.instagram.com/p/${post.shortcode}`} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img 
                      src={post.display_url} 
                      alt="Post Instagram"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      // CORREÇÃO DO ERRO DO TARGET (IMAGEM 2)
                      onError={(e) => { 
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/500?text=Instagram+Post'; 
                      }}
                    />
                  </div>
                </a>

                {/* Ícones de Interação */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-4">
                      <Heart size={20} className="text-gray-700 cursor-pointer hover:text-red-500" />
                      <MessageCircle size={20} className="text-gray-700 cursor-pointer" />
                      <Send size={20} className="text-gray-700 cursor-pointer" />
                    </div>
                    <Bookmark size={20} className="text-gray-700 cursor-pointer" />
                  </div>
                  <p className="text-[10px] text-gray-600 font-bold">
                    {post.edge_liked_by?.count || 0} curtidas
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}