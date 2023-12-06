export type Lokalizacja = {
  x: number;
  y: number;
  z: number;
  czas: number;
};

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
  if (lokalizacje.length === 0) return null;
  const wyniki: number[] = [];
  lokalizacje.forEach((lok) => {
    const wynik = mapa(lok.x, lok.y, lok.z, lok.czas);
    wyniki.push(wynik);
  });

  const hasNotCorrectNumber = wyniki.includes(NaN);
  if (hasNotCorrectNumber) return null;

  const sortedArr = [...wyniki];
  sortedArr.sort();
  const index = wyniki.indexOf(sortedArr[sortedArr.length - 1]);

  return lokalizacje[index];
}
