type Events = { [key: string]: Function[] };

export class ChristmasEmitter {
  events: Events;

  constructor() {
    this.events = {};
  }

  on(eventName: string, fn: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }

  emit(eventName: string) {
    const event = this.events[eventName];
    if (event) {
      this.events[eventName].forEach((func) => func());
    }
  }

  off(eventName: string, fn: Function) {
    const event = this.events[eventName];
    if (event) {
      this.events[eventName].splice(this.events[eventName].indexOf(fn), 1);
    }
  }
}
