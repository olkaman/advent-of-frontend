type Child = { id: number; gifts: Gift[] };

type Gift = {
  id: number;
  name: string;
};

const childrenList: Child[] = [
  { id: 1, gifts: [] },
  { id: 2, gifts: [] },
  { id: 3, gifts: [] },
];

export class GiftRegistry {
  childrenList: Child[];
  giftList: string[];

  constructor() {
    this.childrenList = childrenList;
    this.giftList = [];
  }

  getGiftsForChild(childId: number) {
    this.childrenList.forEach((child) => {
      if (child.id === childId) {
        child.gifts.map((gift) => {
          this.giftList.push(gift.name);
        });
      }
    });

    return this.giftList;
  }

  addGift(childId: number, giftName: string) {
    this.childrenList.forEach((child) => {
      if (child.id === childId) {
        const newGift = {
          id: Math.random(),
          name: giftName,
        };
        const addedGift = child.gifts.find((gift) => gift.name === giftName);
        if (!addedGift) {
          child.gifts.push(newGift);
        }
      }
    });

    return this.childrenList;
  }

  removeGift(childId: number, giftName: string) {
    this.childrenList.forEach((child) => {
      if (child.id === childId) {
        const removedGift = child.gifts.find((gift) => gift.name === giftName);
        if (!removedGift) throw Error('Gift not found');
        else child.gifts = child.gifts.filter((gift) => gift.name !== giftName);
      }
    });

    return this.childrenList;
  }
}

const reg = new GiftRegistry();

console.log(reg);
console.log('aaa');
