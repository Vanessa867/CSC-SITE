import Navbar from '../componentes/navbar';
import Hero from '../componentes/hero';
import About from '../componentes/About';
import Education from '@/componentes/Education';
import Estrutura from '../componentes/Estrutura';
import Extracurriculares from '@/componentes/Projetos';
import Parceiros from '@/componentes/Parceiros';
import Midia from '@/componentes/Midia';
import Contato from '@/componentes/Contato';
import Footer from '@/componentes/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* O resto do conteúdo do site vem aqui embaixo */}
      <section className="py-20 bg-white"> {/* py-20 dá um espaço respirável, mas não a tela toda */}
        <About />
        <Education />
        <Estrutura />
        <Extracurriculares />
        <Parceiros />
        <Midia />
        <Contato />
        <Footer />
      </section>
    </main>
  );
}