export const servers = [
  { 
    id: 1, 
    name: 'Strong 8K server', 
    color: '#6366f1', 
    image: '/strong8k.png', 
    description: 'Premium IPTV streaming with 4K quality, 20,000+ channels, VOD library, and 99.9% uptime. Perfect for European viewers with low latency and buffer-free streaming.' 
  },
  { 
    id: 2, 
    name: 'Cristal Server', 
    color: '#10b981', 
    image: '/cristal.png', 
    description: 'Elite IPTV service with HD/4K channels, sports packages, premium movie library, and multi-device support. Optimized for US content and sports events.' 
  },
  { 
    id: 3, 
    name: 'Dino Server', 
    color: '#f59e0b', 
    image: '/dino.png',
    description: 'Professional IPTV streaming with Asian channels, K-dramas, anime, and live sports. Fast servers with anti-freeze technology for smooth viewing experience.' 
  },
]

export const getServerById = (id) => {
  return servers.find(server => server.id === id)
}

