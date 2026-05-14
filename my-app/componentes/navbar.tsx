// components/Navbar.tsx
import Image from 'next/image';

export default function navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-10 py-6 bg-transparent">
      {/* Logo */}
      <div className="relative h-12 w-24">
        <Image 
          src="/imagem/logo.png" 
          alt="Logo Colégio" 
          fill 
          className="object-contain"
        />
      </div>

      {/* Links - Alterado de font-medium para font-bold */}
      <div className="flex gap-8 text-white font-bold">
        <a href="#" className="hover:text-blue-300 transition">Sobre nós</a>
        <a href="#" className="hover:text-blue-300 transition">Ensino</a>
        <a href="#" className="hover:text-blue-300 transition">Extracurriculares</a>
        <a href="#" className="hover:text-blue-300 transition">Serviços</a>
        <a href="#" className="hover:text-blue-300 transition">Pastoral</a>
      </div>
    </nav>
  );
}