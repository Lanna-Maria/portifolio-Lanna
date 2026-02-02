import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062f7a] text-white pt-10 pb-6">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between">
          {/* Espaço vazio à esquerda */}
          <div className="w-32" />

          {/* Links centrais */}
          <nav className="flex gap-8 text-sm">
            {[
              { href: '#inicio', label: 'Início' },
              { href: '#sobre', label: 'Sobre' },
              { href: '#experiencia', label: 'Experiência' },
              { href: '#projetos', label: 'Projetos' },
              { href: '#contato', label: 'Contato' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative transition-all duration-300
                  hover:text-purple-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-purple-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ícones */}
          <div className="flex gap-4">
            {[
              {
                href: 'https://github.com/Lanna-Maria',
                icon: Github,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/lannamaria/',
                icon: Linkedin,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:lannamarya2016@gmail.com',
                icon: Mail,
                label: 'Email',
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="
                  p-3 border border-white/30 rounded-lg
                  transition-all duration-300
                  hover:bg-purple-600
                  hover:border-purple-400
                  hover:scale-110
                  hover:shadow-lg hover:shadow-purple-500/30
                  active:scale-95
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-6 text-sm">
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: '#inicio', label: 'Início' },
              { href: '#sobre', label: 'Sobre' },
              { href: '#experiencia', label: 'Experiência' },
              { href: '#projetos', label: 'Projetos' },
              { href: '#contato', label: 'Contato' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  transition-colors duration-300
                  hover:text-purple-300
                  active:text-purple-400
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {[
              {
                href: 'https://github.com/Lanna-Maria',
                icon: Github,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/lannamaria/',
                icon: Linkedin,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:lannamarya2016@gmail.com',
                icon: Mail,
                label: 'Email',
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="
                  p-3 border border-white/30 rounded-xl
                  transition-all duration-300
                  hover:bg-purple-600
                  hover:scale-110
                  active:scale-95
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-purple-900 mt-10 pt-6 text-center text-gray-300 text-sm">
          © {currentYear} Lanna Maria
        </div>
      </div>
    </footer>
  );
}
