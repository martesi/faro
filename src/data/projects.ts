export interface Link {
  label: string
  url: string
}

export interface Project {
  name: string
  description: string
  repo: string
  links?: Link[]
}

export const projects: Project[] = [
  {
    name: 'Arca',
    repo: 'https://github.com/martesi/arca',
    description: 'Reusable agent skills with repository-aware recommendations for what to install.',
  },
  {
    name: 'Skillpack',
    repo: 'https://github.com/martesi/skillpack',
    description: 'A static PWA for browsing portable agent skill registries.',
  },
  {
    name: 'Cita',
    repo: 'https://github.com/martesi/cita',
    description: 'Self-contained references for LLM answers, with the referenced text stored directly in the URL.',
    links: [
      { label: 'ChatGPT Sites', url: 'https://cita.martes.dev' },
      { label: 'GitHub Pages', url: 'https://martesi.github.io/cita/' },
    ],
  },
  {
    name: 'Glint',
    repo: 'https://github.com/martesi/glint',
    description: 'Custom CSS for the ChatGPT desktop renderer applied through local CDP.',
  },
  {
    name: 'Orphic',
    repo: 'https://github.com/martesi/orphic',
    description: 'A typed Facebook userscript for downloading the highest-quality media available with source metadata.',
  },
]

export const recommendations: Project[] = []
