import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Work } from './components/Work';

export default function App() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-ink">
        Skip to my work
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
