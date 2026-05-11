export default function Contato() {
  return (
    <section className="bg-[#f0f9ff] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* LADO ESQUERDO: Informações */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#10356A]">Agende uma Visita</h2>
            <p className="text-blue-900 leading-relaxed text-lg">
              Venha conhecer nossa escola e tudo o que ela pode oferecer para o seu futuro! 
              Agende uma visita e descubra um ambiente de aprendizado acolhedor e inspirador.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFDE00] rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#10356A]">Endereço</p>
                <p className="text-sm text-blue-800">Estr. do Arraial, 2740 - Tamarineira, Recife</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFDE00] rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#10356A]">Contato</p>
                <p className="text-sm text-blue-800">(81) 9.9569-1234</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFDE00] rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#10356A]">E-mail</p>
                <p className="text-sm text-blue-800">privacidadeasbeas@asbeas.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Formulário (CORRIGIDO) */}
        <div className="w-full md:w-1/2 bg-[#10356A] p-8 md:p-12 rounded-[30px] shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-10">Envie uma Mensagem</h3>
          
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Nome:" 
              className="w-full p-5 rounded-2xl border-none bg-white text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-700"
            />
            
            <input 
              type="email" 
              placeholder="E-mail:" 
              className="w-full p-5 rounded-2xl border-none bg-white text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
            />
            
            <textarea 
              placeholder="Mensagem:" 
              rows={5}
              className="w-full p-5 rounded-2xl border-none bg-white text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none text-gray-700 resize-none"
            ></textarea>
            
            <div className="flex justify-center md:justify-start">
              <button 
                type="submit"
                className="bg-[#FFDE00] text-[#10356A] font-bold py-4 px-14 rounded-2xl hover:bg-yellow-400 transition-colors text-lg mt-6"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}