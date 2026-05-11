import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'; // Instale: npm install lucide-react

const posts = [1, 2, 3, 4, 5, 6]; // Simulando 6 posts

export default function Midia() {
  return (
    <section className="bg-[#f0f9ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#10356A] mb-12 uppercase tracking-wider">
          Mídia CSC
        </h2>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              
              {/* Header do Post */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">
                  CSC
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">colegiodesantacatarina</p>
                  <p className="text-[10px] text-gray-500">Recife, Pernambuco</p>
                </div>
              </div>

              {/* Imagem do Post */}
              <div className="aspect-square bg-gray-200">
                <img 
                  src={`/imagem/insta-${post}.jpg`} // Nomeie suas fotos como insta-1.jpg, insta-2.jpg, etc.
                  alt="Post Instagram"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ações (Icons) */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-4">
                    <Heart size={20} className="text-gray-700 cursor-pointer hover:text-red-500" />
                    <MessageCircle size={20} className="text-gray-700 cursor-pointer" />
                    <Send size={20} className="text-gray-700 cursor-pointer" />
                  </div>
                  <Bookmark size={20} className="text-gray-700 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}