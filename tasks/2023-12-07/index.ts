type Letter = { [key: string]: number };

export function createTrackedLetter(letter: Letter, changeTracker: (name: string, amount: number) => void): Letter {
  const trackedLetter = new Proxy(letter, {
    set(target: Letter, property: string, value): boolean {
      if (target[property] !== value) {
        changeTracker(property, value);
      }
      target[property] === value;
      return true;
    },
  });
  return trackedLetter as Letter;
}
