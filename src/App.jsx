function App() {
  const services = [
    // Add your services here as they become available
    // Example:
    // {
    //   name: 'Service Name',
    //   description: 'Brief description of the service',
    //   url: 'https://service.stackgobrr.com',
    //   status: 'live' // or 'development'
    // }
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
                <p>{service.description}</p>
                <span className={`status status-${service.status}`}>
                  {service.status}
                </span>
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
