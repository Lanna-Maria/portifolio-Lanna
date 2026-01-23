import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Skills() {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap5', 'Axios'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'API RESTful', 'Prisma'],
    linguagensDeProgramacao: ['Python'],
    ferramentasControle: [
      'VS Code',
      'Figma',
      'Insomia',
      'npm',
      'Git',
      'GitHub',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-white">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Possuo Experiência com as principais tecnologias e ferramentas do
            mercado
          </p>
        </div>

        <Card className="p-6 bg-gray-900 border-gray-800">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="flex flex-wrap sm:flex-nowrap w-full gap-2 mb-8 h-auto">
              <TabsTrigger
                value="frontend"
                className="  text-xs sm:text-sm
    hover:bg-purple-600
    transition-colors duration-200
  "
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="  text-xs sm:text-sm
    hover:bg-purple-600
    transition-colors duration-200
  "
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="linguagensDeProgramacao"
                className="  text-xs sm:text-sm
    hover:bg-purple-600
    transition-colors duration-200
  "
              >
                Linguagens de Programação
              </TabsTrigger>
              <TabsTrigger
                value="ferramentasControle"
                className="  text-xs sm:text-sm
    hover:bg-purple-600
    transition-colors duration-200
  "
              >
                Ferramentas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-purple-900/50 text-purple-300 hover:bg-purple-800 border border-purple-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-purple-900/50 text-purple-300 hover:bg-purple-800 border border-purple-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="linguagensDeProgramacao" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.linguagensDeProgramacao.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-purple-900/50 text-purple-300 hover:bg-purple-800 border border-purple-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ferramentasControle" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.ferramentasControle.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-purple-900/50 text-purple-300 hover:bg-purple-800 border border-purple-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
