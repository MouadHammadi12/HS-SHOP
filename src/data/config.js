// Configuration WhatsApp
export const WHATSAPP_NUMBER = '212688283625'

// Custom WhatsApp message
export const getWhatsAppMessage = (server, duration, price) => {
  return `Hello! I want to purchase a package:\n\n` +
    `📦 Server: ${server.name}\n` +
    `🌍 Region: ${server.region}\n` +
    `⏱️ Duration: ${duration.months} ${duration.months === 1 ? 'month' : 'months'}\n` +
    `💰 Price: $${price.discounted.toFixed(2)}` +
    (price.discount > 0 ? ` (${price.discount}% discount)` : '') +
    `\n\n${server.description}\n\nThank you! 🙏`
}

