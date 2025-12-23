export const servers = [
  { 
    id: 1, 
    name: 'Premium IPTV Server', 
    region: 'EU', 
    color: '#6366f1', 
    description: 'Premium IPTV streaming with 4K quality, 20,000+ channels, VOD library, and 99.9% uptime. Perfect for European viewers with low latency and buffer-free streaming.' 
  },
  { 
    id: 2, 
    name: 'Elite IPTV Server', 
    region: 'US', 
    color: '#10b981', 
    description: 'Elite IPTV service with HD/4K channels, sports packages, premium movie library, and multi-device support. Optimized for US content and sports events.' 
  },
  { 
    id: 3, 
    name: 'Pro IPTV Server', 
    region: 'ASIA', 
    color: '#f59e0b', 
    description: 'Professional IPTV streaming with Asian channels, K-dramas, anime, and live sports. Fast servers with anti-freeze technology for smooth viewing experience.' 
  },
  { 
    id: 4, 
    name: 'Ultra IPTV Server', 
    region: 'Global', 
    color: '#ef4444', 
    description: 'Ultra-fast global IPTV server with worldwide channel coverage, EPG guide, catch-up TV, and recording features. Best for international content lovers.' 
  },
]

export const getServerById = (id) => {
  return servers.find(server => server.id === id)
}

