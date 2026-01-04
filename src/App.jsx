function App() {
  const services = [
    {
      name: 'WM Dojo',
      description: 'Window Manager practice and learning tool',
      url: 'https://wm-dojo.stackgobrr.com',
      status: 'live',
      icon: '⌨️'
    },
    {
      name: 'Actions Dashboard',
      description: 'GitHub Actions workflow monitoring dashboard',
      url: 'https://actions.dashboard.stackgobrr.com',
      status: 'live',
      icon: '📊'
    },
    {
      name: 'SPA Template',
      description: 'Single-page application template with React and Vite',
      url: 'https://spa-template.stackgobrr.com',
      status: 'live',
      icon: '🚀'
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>stackgobrr</h1>
        <p className="tagline">Services and Tools</p>
      </header>

      <main className="main">
        {services.length > 0 ? (
          <div className="services-grid">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.url}
                className="service-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{service.name}</h2>
                <div className="service-icon">{service.icon}</div>
                <p className={`status-${service.status}`}>{service.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Services coming soon...</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} stackgobrr</p>
      </footer>
    </div>
  )
}

export default App
