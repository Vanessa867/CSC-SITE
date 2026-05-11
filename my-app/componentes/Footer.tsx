export default function Footer() {
  return (
    <footer className="bg-[#10356A] text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* PARTE SUPERIOR: Logo e Infos Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Endereço */}
          <div className="lg:col-span-2 space-y-6">
            <img src="/imagem/logo-footer.png" alt="Colégio Santa Catarina" className="h-16 w-auto" />
            <h4 className="font-bold text-xl">Colégio de Santa Catarina</h4>
            <p className="text-sm text-blue-200">
              Estr. do Arraial, 2740 - Tamarineira, Recife - PE, 52051-380
            </p>
            <p className="text-sm text-blue-200">(81) 9.9569-1234</p>
          </div>

          {/* Colunas de Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Página Principal</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="hover:text-white cursor-pointer">Institucional</li>
              <li className="hover:text-white cursor-pointer">Informações</li>
              <li className="hover:text-white cursor-pointer">Ensino</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Pastoral</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="hover:text-white cursor-pointer">Institucional</li>
              <li className="hover:text-white cursor-pointer">Informações</li>
              <li className="hover:text-white cursor-pointer">Ensino</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Serviços</h4>
            <ul className="text-sm text-blue-200 space-y-2">
              <li className="hover:text-white cursor-pointer">Institucional</li>
              <li className="hover:text-white cursor-pointer">Informações</li>
              <li className="hover:text-white cursor-pointer">Ensino</li>
            </ul>
          </div>
        </div>

        {/* PARTE DO MEIO: Privacidade e Redes Sociais */}
        <div className="border-t border-blue-800 pt-12 flex flex-col md:flex-row justify-between gap-12">
          
          <div className="space-y-4 max-w-2xl">
            <h5 className="font-bold text-sm uppercase tracking-widest border-b border-white w-fit pb-1">
              Privacidade de Dados
            </h5>
            <div className="text-xs text-blue-200 space-y-2">
              <p>Uso exclusivo para solicitações referentes à LGPD</p>
              <p>Encarregados de dados: Vanessa de Assis Melo e George Gomes dos Santos</p>
              <p>Endereço: Estr. do Arraial, 2740 – Tamarineira, Recife – PE, 52051-380</p>
              <p>Telefone: (81) 9.9569-1234</p>
              <p>E-mail: privacidadeasbeas@asbeas.com.br</p>
            </div>

            {/* REDES SOCIAIS (Ícones removidos para evitar o erro) */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-[#10356A] hover:bg-yellow-400 transition-colors">
                {/* Instagram removido */}
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-[#10356A] hover:bg-yellow-400 transition-colors">
                {/* Facebook removido */}
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-[#10356A] hover:bg-yellow-400 transition-colors">
                {/* Youtube removido */}
              </a>
              <a href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-[#10356A] hover:bg-yellow-400 transition-colors">
                {/* Send/Telegram removido */}
              </a>
            </div>
          </div>

          {/* Logos da Rede Saviniana */}
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/imagem/logosavi.png" 
              alt="Rede Saviniana" 
              className="h-24 md:h-32 w-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}