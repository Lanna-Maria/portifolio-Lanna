import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import cafeDoAmanha from '../components/assets/img/CafeAmanha.png';
import petShop from '../components/assets/img/petFeliz.png';
import apiAlunos from '../components/assets/img/api.png';
import academicos from '../components/assets/img/faculdade.png';

export function Projects() {
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

  const projects = [
    {
      title: 'ProjetoFullStack-Cafe-do-amanha',
      description:
        'Aplicação FullStack em React.js, Axios, Node.js, PostgreSQL e Prisma ORM. O projeto oferece uma página inicial que apresenta o conceito poético do café, permite visualizar cardápios e produtos, realizar pedidos de forma interativa, integra frontend e backend e conta com interface responsiva para dispositivos mobile e desktop.',
      image: cafeDoAmanha,
      tags: [
        'React.js',
        'Node.js',
        'JavaScript',
        'PostgreSQL',
        'PrismaORM',
        'Axios',
      ],
      github:
        'https://github.com/Lanna-Maria/ProjetoFullStack-Cafe-do-amanha.git',
    },
    {
      title: 'PetShopFeliz Website (Versão React)',
      description:
        'Aplicação web desenvolvida em equipe utilizando React. O projeto consistiu na criação de um site moderno, responsivo e funcional para um PetShop fictício, simulando uma aplicação real com React e bibliotecas auxiliares. Este projeto foi realizado durante o curso de Extensão Universitária em Desenvolvimento Full Stack, pelo programa Residência em TIC 20 – Capacita Brasil (UECE), módulo intermediário.',
      image: petShop,
      tags: [
        'React',
        'React Router DOM',
        'React Toastify',
        'Context API',
        'Bootstrap',
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
      ],
      github: 'https://github.com/Lanna-Maria/projeto-pet-shop-frontend.git',
      demo: 'https://lanna-maria.github.io/projeto-pet-shop-frontend/',
    },
    {
      title: 'Api de Cadastro de Alunos',
      description:
        'API RESTful em Node.js, Express, PostgreSQL e Prisma ORM. Segue o padrão MVC (Model-View-Controller) e fornece uma API RESTful para gerenciar alunos e professores de uma escola.',
      image: apiAlunos,
      tags: ['Node.js', 'Express', 'PostgreSQL', 'PrismaORM', 'Insomia'],
      github: 'https://github.com/Lanna-Maria/cadastro-de-alunos-backend.git',
    },
    {
      title: 'Projetos Acadêmicos',
      description:
        'Projetos acadêmicos realizados ao longo do curso de Bacharelado em Ciência da Computação, abordando diferentes áreas da computação e suas aplicações práticas.',
      image: academicos,
      tags: [
        'C',
        'Python',
        'JavaScript',
        'Java',
        'OpenGL',
        'MachineLearning',
        'LLMs',
        'PHP',
        'Laravel',
        'Bootstrap',
        'HTML5',
        'CSS3',
        'MySQL',
        'Socket.io',
      ],
      github: 'https://github.com/Lanna-Maria/projetos-academicos.git',
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-950" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white text-3xl font-semibold">
            Projetos em Destaque
          </h2>
          <motion.div
            className="w-20 h-1 bg-purple-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all bg-gray-900 border-gray-800 h-full">
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-purple-600 text-purple-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {/* Botão Código */}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>

                  {/* Botão Demo (apenas se o projeto tiver a propriedade demo) */}
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Deploy
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
