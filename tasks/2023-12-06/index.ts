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
    this.machines.map((machine) => (machine.state = state));
    this.machines.map((machine) => machine.getListOfStates());
  }

  unregisterMachine(machine: any) {
    this.machines = this.machines.filter((m) => m !== machine);
  }
}

export class Machine {
  state: string | null;
  currentListOfStates: string[];
  orderNumber: number;

  constructor() {
    this.state = null;
    this.currentListOfStates = [];
    this.orderNumber = 0;
  }

  getListOfStates() {
    this.orderNumber++;
    this.currentListOfStates.push(`Order #${this.orderNumber} - ${this.state}`);
  }

  performAudit() {
    return this.currentListOfStates;
  }
}
