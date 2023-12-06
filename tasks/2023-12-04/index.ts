type MemoFunction = (arg: string | number) => string | number;

export function memoize(func: MemoFunction) {
  if (typeof func !== 'function') throw new Error('Function to be memoized must be a function.');
  const cache: any = {};

  return function (arg: number | string) {
    const key = arg.toString();
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(arg);
      cache[key] = result;
      return result;
    }
  };
}
