import { Card } from '@/components/ui/Card';

export default function ProjectsPage(){
  const projects = [
    { id: '1', title: 'AI Chat Demo', desc: 'Interactive assistant with streaming responses.' },
    { id: '2', title: 'Image Generator', desc: 'Prompt-based image generation showcase.' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(p=> (
          <Card key={p.id}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}