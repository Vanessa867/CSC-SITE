'use client';

import { useState, useEffect } from 'react';

export default function LgpdBanner() {
  const [exibir, setExibir] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  
  // Estados das preferências
  const [consentimento, setConsentimento] = useState({
    essencial: true, // Sempre true por lei
    marketing: false,
    analitico: false,
  });

  useEffect(() => {
    const salvo = localStorage.getItem('lgpd-preferencias');
    if (!salvo) {
      setExibir(true);
    } else {
      aplicarConsentimento(JSON.parse(salvo));
    }
  }, []);

  const aplicarConsentimento = (prefs: any) => {
    // Aqui você comunica ao Google/Facebook que pode ou não carregar scripts
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'analytics_storage': prefs.analitico ? 'granted' : 'denied',
      });
    }
  };

  const salvarPreferencias = (finalPrefs: any) => {
    localStorage.setItem('lgpd-preferencias', JSON.stringify(finalPrefs));
    aplicarConsentimento(finalPrefs);
    setExibir(false);
    setModalAberto(false);
  };

  if (!exibir) return null;

  return (
    <>
      {/* Banner Principal Inferior */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 animate-in fade-in slide-in-from-bottom-10">
        <div className="max-w-7xl mx-auto bg-[#10356A] border-t-4 border-[#FFDE00] shadow-2xl p-6 rounded-t-xl">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <p className="text-white text-[12px] leading-relaxed flex-1 text-justify">
              Para melhorar sua experiência em nosso website, utilizamos cookies. Eles nos ajudam a personalizar conteúdo e anúncios, além de analisar nosso tráfego. Ao navegar em nosso site, você tem a opção de personalizar suas preferências... 
              <a href="https://www.colegiosantacatarina.com.br/wp-content/uploads/2025/06/politica_privacidade_dados_lgpd_csc2025.pdf" className="font-bold underline ml-1">AVISO DE PRIVACIDADE</a>.
            </p>
            
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button 
                onClick={() => setModalAberto(true)}
                className="bg-gray-600 hover:bg-gray-500 text-white text-[11px] font-bold py-2 px-4 rounded shadow"
              >
                Selecionar preferências
              </button>
              <button 
                onClick={() => salvarPreferencias({ essencial: true, marketing: false, analitico: false })}
                className="bg-transparent border border-[#FFDE00] text-[#FFDE00] hover:bg-[#FFDE00]/10 text-[11px] font-bold py-2 px-4 rounded"
              >
                Rejeitar não necessários
              </button>
              <button 
                onClick={() => salvarPreferencias({ essencial: true, marketing: true, analitico: true })}
                className="bg-[#FFDE00] hover:bg-[#e6c800] text-[#10356A] text-[11px] font-bold py-2 px-4 rounded shadow-lg"
              >
                Aceitar Tudo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Preferências (Exatamente como na sua imagem) */}
      {modalAberto && (
        <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#0a254a] w-full max-w-2xl rounded-lg overflow-hidden border border-blue-400">
            <div className="p-6 border-b border-blue-900 flex justify-between items-center">
              <h2 className="text-white font-bold text-xl">Este site usa cookies</h2>
              <button onClick={() => setModalAberto(false)} className="text-white hover:text-red-400">✕</button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Essencial */}
              <div className="bg-[#10356A] p-4 rounded flex justify-between items-center border border-blue-800">
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">⌄ Essencial</h4>
                  <p className="text-gray-300 text-[11px]">Necessários para o funcionamento do site.</p>
                </div>
                <div className="w-10 h-5 bg-blue-400 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
              </div>

              {/* Analítico */}
              <div className="bg-[#10356A] p-4 rounded flex justify-between items-center border border-blue-800">
                <div>
                  <h4 className="text-white font-bold text-sm">Marketing / Analítico</h4>
                  <p className="text-gray-300 text-[11px]">Para entendermos como você usa o site.</p>
                </div>
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-[#FFDE00]"
                  checked={consentimento.marketing}
                  onChange={(e) => setConsentimento({...consentimento, marketing: e.target.checked, analitico: e.target.checked})}
                />
              </div>
            </div>

            <div className="p-6 bg-[#081b36] flex justify-between">
              <button onClick={() => salvarPreferencias({ essencial: true, marketing: true, analitico: true })} className="text-blue-900 bg-white font-bold py-2 px-6 rounded text-xs">Aceitar Tudo</button>
              <button onClick={() => salvarPreferencias(consentimento)} className="text-blue-900 bg-white font-bold py-2 px-6 rounded text-xs">Salvar e fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}