export class OrderController {
  machines: any[];

  constructor() {
    this.machines = [];
  }

  registerMachine(machine: any) {
    this.machines.push(machine);
  }

  setState(state: string) {
    if (state === 'unknown') throw new Error('Invalid state provided');
    this.machines.map((machine) => machine.updateState(state));
  }

  unregisterMachine(machine: any) {
    this.machines = this.machines.filter((m) => m !== machine);
  }
}

export class Machine {
  state: string | null;
  orderHistory: string[];

  constructor() {
    this.state = null;
    this.orderHistory = [];
  }

  updateState(state: string) {
    this.state = state;
    this.orderHistory.push(`Order #${this.orderHistory.length + 1} - ${this.state}`);
  }

  performAudit() {
    return this.orderHistory;
  }
}
