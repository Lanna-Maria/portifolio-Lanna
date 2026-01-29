import { Card } from './ui/card';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const experiences = [
    {
      company: 'Residência em TIC 20 – Capacita Brasil (UECE)',
      position: 'Estágio em Desenvolvimento Full Stack',
      period: 'Out 2025 - Dez 2025',
      description:
        'Atuação no desenvolvimento de aplicações web full stack, com foco em boas práticas, arquitetura escalável e integração entre front-end e back-end.',
      achievements: [
        'Desenvolvimento de interfaces responsivas utilizando React, integração de APIs RESTful e manipulação de dados com Axios e Prisma.',
        'Experiência com bancos de dados relacionais, Git e GitHub, atuando em ambientes com metodologias ágeis e colaboração em equipe.',
      ],
    },
    {
      company:
        'Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)',
      position: 'Programação e Desenvolvimento',
      period: '2021 - 2025',
      description:
        'Atuação em projetos acadêmicos de desenvolvimento de software.',
      achievements: [
        'Participação em projetos acadêmicos e práticos voltados ao desenvolvimento web, análise de sistemas e soluções tecnológicas.',
        'Aplicação de conceitos de Programação Orientada a Objetos, SQL, Engenharia de Software, Computação Gráfica, IHC, Inteligência Artificial e Aprendizado de Máquina.',
        'Desenvolvimento de interfaces e aplicações centradas no usuário, utilizando boas práticas de codificação e versionamento com Git.',
      ],
      academicLinks: [
        {
          label: 'Currículo Lattes',
          url: 'https://lattes.cnpq.br/7989926813407096',
        },
      ],
    },
  ];

  const academicEducation = [
    {
      institution: 'Instituto Federal do Ceará (IFCE) – Campus Tianguá',
      degree: 'Bacharelado em Ciência da Computação',
      period: '2021 - 2025',
      description:
        'Foco em desenvolvimento de software, engenharia de software e resolução de problemas computacionais, com base sólida em algoritmos, estruturas de dados e boas práticas de programação.',
    },
  ];

  const complementaryEducation = [
    {
      institution: 'Capacita Brasil – UECE',
      degree: 'Extensão Universitária em Desenvolvimento Full Stack',
      period: 'Jan 2025 - Dez 2025',
      description:
        'Curso de 1 ano com formação teórica e prática em desenvolvimento front-end e back-end, incluindo estágio com projetos reais. Envolve o uso de tecnologias modernas como React, Node.js e bancos de dados relacionais, preparando para atuação profissional no desenvolvimento web full stack.',
    },
  ];

  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Espanhol', level: 'Intermediário' },
    { name: 'Inglês', level: 'Básico' },
  ];

  return (
    <section id="experiencia" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">Experiência & Formação</h2>
          <motion.div
            className="w-20 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experiência */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-purple-400" />
              <h3 className="text-white">Experiência</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-6 border-l-4 border-l-purple-600 bg-gray-900 border-gray-800">
                    <div className="mb-2">
                      <h4 className="text-white">{exp.position}</h4>
                      <div className="flex justify-between flex-wrap gap-2 mt-1">
                        <span className="text-purple-400">{exp.company}</span>
                        <span className="text-gray-500">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-3">{exp.description}</p>

                    <ul className="space-y-1">
                      {exp.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 flex items-start"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* LINK ACADÊMICO */}
                    {exp.academicLinks && exp.academicLinks.length > 0 && (
                      <div className="mt-4">
                        <span className="block text-xs text-gray-500 mb-1">
                          Produção acadêmica:
                        </span>
                        {exp.academicLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 hover:underline transition"
                          >
                            🔗 {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formação + Idiomas */}
          <div>
            {/* Formação Acadêmica */}
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h3 className="text-white text-lg font-semibold">
                Formação Acadêmica
              </h3>
            </div>

            <div className="space-y-6 mb-20">
              {academicEducation.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: -10 }}
                >
                  <Card className="p-6 border-l-4 border-l-purple-600 bg-gray-900 border-gray-800">
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <div className="flex justify-between flex-wrap gap-2 mt-1">
                      <span className="text-purple-400">{edu.institution}</span>
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Formação Complementar */}
            <div className="flex items-center gap-3 mb-8 mt-24 pt-8">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h3 className="text-white text-lg font-semibold">
                Formação Complementar
              </h3>
            </div>

            <div className="space-y-6 mb-24">
              {complementaryEducation.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: -10 }}
                >
                  <Card className="p-6 border-l-4 border-l-purple-600 bg-gray-900 border-gray-800">
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <div className="flex justify-between flex-wrap gap-2 mt-1">
                      <span className="text-purple-400">{edu.institution}</span>
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Idiomas */}
            <div className="pt-16">
              <div className="flex items-center gap-3 mb-8 pt-8">
                <Globe className="w-6 h-6 text-purple-400" />
                <h3 className="text-white text-lg font-semibold">Idiomas</h3>
              </div>

              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: -10 }}
                  >
                    <Card className="p-6 border-l-4 border-l-purple-600 bg-gray-900 border-gray-800">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-medium">{lang.name}</h4>
                        <span className="text-gray-400">{lang.level}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
