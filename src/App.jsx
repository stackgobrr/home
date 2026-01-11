import { Keyboard, BarChart3, Rocket, Puzzle, Github, Mail, ExternalLink } from 'lucide-react'

function App() {
  const projects = [
    {
      name: 'Emojiroglyphics',
      description: 'A 3-player collaborative game where players decode emoji hieroglyphics',
      url: 'https://emojiroglyphics.stackgobrr.com',
      status: 'live',
      icon: Puzzle,
      tags: ['Game', 'React', 'WebRTC'],
      featured: true
    },
    {
      name: 'WM Dojo',
      description: 'Interactive window manager practice and learning tool',
      url: 'https://wm-dojo.stackgobrr.com',
      status: 'live',
      icon: Keyboard,
      tags: ['Tool', 'Education']
    },
    {
      name: 'Actions Dashboard',
      description: 'Real-time GitHub Actions workflow monitoring dashboard',
      url: 'https://actions.dashboard.stackgobrr.com',
      status: 'live',
      icon: BarChart3,
      tags: ['Dashboard', 'CI/CD']
    },
    {
      name: 'SPA Template',
      description: 'Production-ready single-page application template with AWS deployment',
      url: 'https://spa-template.stackgobrr.com',
      status: 'live',
      icon: Rocket,
      tags: ['Template', 'Infrastructure']
    }
  ]

  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">stackgobrr</h1>
          <p className="header-description">
            Building tools, games, and infrastructure for developers
          </p>
          <div className="header-links">
            <a href="https://github.com/samholden" target="_blank" rel="noopener noreferrer" className="header-link">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="mailto:hello@stackgobrr.com" className="header-link">
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {featuredProject && (
          <section className="featured-section">
            <h2 className="section-title">Featured Project</h2>
            <a
              href={featuredProject.url}
              className="featured-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="featured-content">
                <div className="featured-icon">
                  <featuredProject.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="featured-info">
                  <div className="featured-header">
                    <h3>{featuredProject.name}</h3>
                    <span className="status-badge status-live">Live</span>
                  </div>
                  <p className="featured-description">{featuredProject.description}</p>
                  <div className="tag-list">
                    {featuredProject.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <ExternalLink size={20} className="external-icon" />
              </div>
            </a>
          </section>
        )}

        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <a
                  key={index}
                  href={project.url}
                  className="project-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-icon">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="project-info">
                    <div className="project-header">
                      <h3>{project.name}</h3>
                      <ExternalLink size={16} className="external-icon" />
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag tag-small">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React · Deployed on AWS · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
