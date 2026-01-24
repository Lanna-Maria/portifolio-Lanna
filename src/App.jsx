import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black w-full">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <Toaster />
    </div>
  );
}
