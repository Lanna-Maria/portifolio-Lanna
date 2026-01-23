import { Button } from './ui/button';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import perfil from '../components/assets/img/perfil.png';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedRole, setDisplayedRole] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');

  const fullText = 'Lanna Maria';
  const fullRole = 'Desenvolvedora Full Stack';
  const fullDescription =
    'Apaixonada por criar soluções web modernas e eficientes.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullRole.length) {
            setDisplayedRole(fullRole.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, 80);

        return () => clearInterval(typingInterval);
      },
      fullText.length * 100 + 300,
    );

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullDescription.length) {
            setDisplayedDescription(fullDescription.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, 30);

        return () => clearInterval(typingInterval);
      },
      fullText.length * 100 + 300 + fullRole.length * 80 + 300,
    );

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden"
    >
      {/* Partículas animadas */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        {/* Avatar */}
        <motion.div
          className="mb-10 -mt-24 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="p-1 rounded-full bg-black/70 backdrop-blur-sm">
            <motion.div
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-white/10 shadow-lg bg-black"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={perfil}
                alt="Foto de perfil da Lanna"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Título com mãozinha */}
        <motion.h1
          className="mb-4 min-h-[1.2em] flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, 14, -8, 14, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.span>

          <span>
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.h1>

        {/* Cargo */}
        <motion.h2
          className="mb-6 text-gray-300 min-h-[1.2em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {displayedRole}
          <span
            className={
              displayedRole.length < fullRole.length
                ? 'animate-pulse'
                : 'opacity-0'
            }
          >
            |
          </span>
        </motion.h2>

        {/* Descrição */}
        <motion.p
          className="mb-8 text-gray-400 max-w-2xl mx-auto min-h-[3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {displayedDescription}
          <span
            className={
              displayedDescription.length < fullDescription.length
                ? 'animate-pulse'
                : 'opacity-0'
            }
          >
            |
          </span>
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={() => scrollToSection('projetos')}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Ver Projetos
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white"
          >
            <a href="/files/curriculo-Lanna.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Baixar CV
            </a>
          </Button>
        </motion.div>

        {/* Redes sociais */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/Lanna-Maria"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/lannamaria/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:lannamarya2016@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
