import { Card } from './ui/card';
import { Button } from './ui/button';
import { Code2, Database, Globe, Sparkles, Download } from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ correto

import { useEffect, useRef, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend',
      description:
        'Desenvolvimento de interfaces modernas, responsivas e dinâmicas com React, JavaScript e integração de APIs utilizando Axios.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend',
      description:
        'Criação de APIs escaláveis com Node.js e Express, integração com bancos de dados relacionais e manipulação de dados via Prisma ORM.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-950" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">Sobre Mim</h2>
          <motion.div
            className="w-20 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-4 text-gray-300">
              🎓 Sou graduada em Bacharelado em Ciência da Computação pelo IFCE
              - Campus Tianguá. Tenho foco em Engenharia de Software,
              Desenvolvimento de Sistemas e Machine Learning.
            </p>
            <p className="mb-4 text-gray-300">
              💻Capacitada em Desenvolvimento FullStack pela Residência em TIC
              20 Capacita Brasil (UECE).
            </p>

            <p className="mb-4 text-gray-300">
              💻 Full Stack Developer em formação com ênfase em Frontend, possuo
              experiência em HTML5, CSS3, Bootstrap 5, JavaScript (React.js,
              Node.js, Express), Python, SQL e Prisma ORM.
            </p>
            <p className="mb-4 text-gray-300">
              🚀 Busco uma oportunidade no mercado de trabalho para aplicar e
              expandir meus conhecimentos, sempre aprendendo e me adaptando às
              constantes evoluções do mundo tech. Acredito que um bom código não
              deve ser apenas funcional, mas também limpo, testável e de fácil
              manutenção.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                label: 'Localização',
                value: 'Guaraciaba do Norte, Ceará, Brasil',
              },
              {
                label: 'Experiência',
                value:
                  'Experiência prática em desenvolvimento Full Stack e projetos acadêmicos',
              },
              {
                label: 'Formação',
                value:
                  'Gradução em Ciência da Computação, Instituto Federal de Educação, Ciência e Tecnologia do Ceará Campus Tianguá. 2021 / 2025',
              },
              {
                label: 'Formação Complementar',
                value:
                  'Desenvolvimento Fullstack, Programa Residência em TIC 20 Capacita Brasil C-Jovem (UECE). Janeiro a Dezembro de 2025',
              },

              { label: 'Email', value: 'lannamarya2016@gmail.com' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 bg-purple-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                ></motion.div>
                <span className="text-gray-300">
                  <strong className="text-white">{item.label}:</strong>{' '}
                  {item.value}
                </span>
              </motion.div>
            ))}

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <a
                  href="/portifolio-Lanna/files/curriculo-Lanna.pdf"
                  download="Curriculo-Lanna-Maria.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Baixar Currículo
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all border-t-4 border-t-purple-600 bg-gray-900 border-gray-800 h-full">
                <motion.div
                  className="text-purple-400 mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
