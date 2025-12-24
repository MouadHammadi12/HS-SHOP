import { servers } from "./servers.js"
export const durations = [
  { id: 1, months: 1, label: '1 Month', discount: 0, popular: false },
  { id: 3, months: 3, label: '3 Months', discount: 10, popular: false },
  { id: 6, months: 6, label: '6 Months', discount: 20, popular: true },
  { id: 12, months: 12, label: '12 Months', discount: 30, popular: false },
]

export const calculatePrice = (serverId, months) => {
  const server = servers.find(s => s.id === serverId)
  const duration = durations.find(d => d.months === months)
  const basePrice = server.price
  const total = basePrice * months
  const discount = total * (duration.discount / 100)
  return {
    original: total,
    discounted: total - discount,
    discount: duration.discount,
    months,
    serverId
  }
}

export const getDurationById = (months) => {
  return durations.find(d => d.months === months)
}

