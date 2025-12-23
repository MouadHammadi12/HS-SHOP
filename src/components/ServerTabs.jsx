import { servers } from '../data/servers'
import './ServerTabs.css'

function ServerTabs({ selectedServer, onSelectServer }) {
  return (
    <section className="section">
      <h2 className="section-title">Choisir le Serveur</h2>
      <div className="servers-grid">
        {servers.map(server => (
          <button
            key={server.id}
            className={`server-card ${selectedServer === server.id ? 'active' : ''}`}
            onClick={() => onSelectServer(server.id)}
            style={{
              borderColor: selectedServer === server.id ? server.color : 'transparent',
              background: selectedServer === server.id ? `${server.color}15` : ''
            }}
          >
            <div className="server-color" style={{ backgroundColor: server.color }}></div>
            <div className="server-info">
              <h3>{server.name}</h3>
              <span className="server-description">{server.description}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ServerTabs

