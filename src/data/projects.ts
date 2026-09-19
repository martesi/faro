export interface Link {
  label: string
  url: string
  icon?: string
}

export interface Project {
  name: string
  description: string
  links: Link[]
}

export const projects: Project[] = [
  {
    name: 'Arca',
    description: 'My workflows.',
    links: [{ label: 'GitHub', url: 'https://github.com/martesi/arca', icon: 'github' }],
  },
  {
    name: 'Skillpack',
    description: 'Bundle skills to be used in ChatGPT web.',
    links: [{ label: 'GitHub', url: 'https://github.com/martesi/skillpack', icon: 'github' }],
  },
  {
    name: 'Cita',
    description: 'Content renderer. Progressive disclosure utilzing how links are rendered.',
    links: [
      { label: 'ChatGPT Sites', url: 'https://cita.martes.dev' },
      { label: 'GitHub Pages', url: 'https://martesi.github.io/cita/' },
      { label: 'GitHub', url: 'https://github.com/martesi/cita', icon: 'github' },
    ],
  },
  {
    name: 'Glint',
    description: 'Custom CSS for the ChatGPT desktop.',
    links: [{ label: 'GitHub', url: 'https://github.com/martesi/glint', icon: 'github' }],
  },
  {
    name: 'Orphic',
    description: 'Downloading images with metadata on Facebook.',
    links: [{ label: 'GitHub', url: 'https://github.com/martesi/orphic', icon: 'github' }],
  },
]

export const recommendations: Project[] = [
  {
    name: 'llm-agents.nix',
    description: 'Nix packages for AI coding agents and development tools.',
    links: [{ label: 'GitHub', url: 'https://github.com/numtide/llm-agents.nix', icon: 'github' }],
  },
]
