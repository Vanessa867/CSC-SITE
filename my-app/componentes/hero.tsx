// components/Hero.tsx
export default function hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay Escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/imagem/slider.png')" }}
      >
        {/* Camada de cor para dar contraste ao texto (Overlay) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Conteúdo opcional por cima */}
      <div className="relative z-0 text-center text-white">
        {/* Se quiser colocar um título aqui depois */}
      </div>
    </section>
  );
}