/* eslint-disable @typescript-eslint/no-explicit-any */
type EventCallback = (...args: any[]) => void

class EventBus {
  private listeners: Record<string, EventCallback[]> = {}

  on (event: string, callback: EventCallback): void {
    if (this.listeners[event] === undefined) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  off (event: string, callback: EventCallback): void {
    if (this.listeners[event] === undefined) {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    )
  }

  emit (event: string, ...args: any[]): void {
    if (this.listeners[event] === undefined) {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event].forEach(listener => {
      listener(...args)
    })
  }
}

export { EventBus }
