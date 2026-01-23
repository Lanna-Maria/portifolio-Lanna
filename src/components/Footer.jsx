import { Github, Linkedin, Mail, Heart, Download } from 'lucide-react';

<a
  href="/files/curriculo-Lanna.pdf"
  download="curriculo-Lanna.pdf"
  className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
  aria-label="Currículo"
>
  <Download className="w-5 h-5 text-white" />
</a>;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-purple-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="mb-4">Lanna Maria</h3>
            <p className="text-gray-400">
              Desenvolvedora FullStack Apaixonada por criar soluções web
              modernas e eficientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Habilidades Técnicas
                </a>
              </li>

              <li>
                <a
                  href="#projetos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>

              <li>
                <a
                  href="#experiencia"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experiência
                </a>
              </li>

              {/* LATTES */}
              <li>
                <a
                  href="https://lattes.cnpq.br/7989926813407096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Currículo Lattes
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-4">Entre em contato</h3>
            <p className="text-gray-400">
              Se tiver dúvidas, oportunidades ou quiser colaborar, envie um
              e-mail ou baixe meu currículo.
            </p>
            <br></br>
            <div className="flex gap-4">
              <a
                href="https://github.com/Lanna-Maria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lannamaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lannamarya2016@gmail.com"
                className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/files/curriculo-Lanna.pdf"
                download="curriculo-Lanna.pdf"
                className="p-3 bg-gray-900 rounded-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
                aria-label="Currículo"
              >
                <Download className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Feito por Lanna Maria © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
