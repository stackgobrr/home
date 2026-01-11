import { Keyboard, BarChart3, Rocket, Puzzle, Github, ArrowUpRight } from 'lucide-react'

function App() {
  const projects = [
    {
      name: 'Emojiroglyphics',
      description: '3-player collaborative puzzle game',
      url: 'https://emojiroglyphics.stackgobrr.com',
      icon: Puzzle,
      tags: ['Game', 'React', 'WebRTC']
    },
    {
      name: 'WM Dojo',
      description: 'Window manager training platform',
      url: 'https://wm-dojo.stackgobrr.com',
      icon: Keyboard,
      tags: ['Tool', 'Education']
    },
    {
      name: 'Actions Dashboard',
      description: 'GitHub Actions monitoring',
      url: 'https://actions.dashboard.stackgobrr.com',
      icon: BarChart3,
      tags: ['Dashboard', 'CI/CD']
    },
    {
      name: 'SPA Template',
      description: 'React + AWS deployment template',
      url: 'https://spa-template.stackgobrr.com',
      icon: Rocket,
      tags: ['Template', 'IaC']
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>Sam Holden</h1>
        <p className="subtitle">Building developer tools and infrastructure</p>
        <a 
          href="https://github.com/samholden" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-link"
        >
          <Github size={16} strokeWidth={2} />
          <span>github.com/samholden</span>
        </a>
      </header>

      <main className="main">
        <div className="projects">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <a
                key={index}
                href={project.url}
                className="project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-header">
                  <div className="project-title-row">
                    <div className="project-icon">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h2>{project.name}</h2>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={2} className="arrow" />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
