export class ChristmasQueue<T> {
  letters: T[];
  highPriority: T[];
  mediumPriority: T[];
  lowPriority: T[];

  constructor() {
    this.letters = [];
    this.highPriority = [];
    this.mediumPriority = [];
    this.lowPriority = [];
  }

  enqueue(priorityType: T, priority: number) {
    switch (priority) {
      case 3:
        this.highPriority.push(priorityType);
        break;

      case 2:
        this.mediumPriority.push(priorityType);
        break;

      case 1:
        this.lowPriority.push(priorityType);
        break;
    }
    const allItems = [...this.highPriority, ...this.mediumPriority, ...this.lowPriority];
    this.letters.splice(0, this.letters.length);
    allItems.forEach((item) => this.letters.push(item));

    return this.letters;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('There are no letters in the queue!');
    const item = this.letters.shift();
    return item;
  }

  isEmpty() {
    return this.letters.length === 0;
  }
}
