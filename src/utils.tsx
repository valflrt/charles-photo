export let omit = <T extends { [key: string]: any }, K extends string>(
  obj: T,
  key: K
): Omit<T, K> => {
  let { [key]: omitted, ...rest } = obj;
  return rest;
};

export let css = {
  /**
   * Joins class names
   * @param cns class names to join
   */
  join: (...cns: (string | null | undefined | false)[]) =>
    cns.filter((cn) => !!cn).join(" "),
};

export let randomizeArray = <T,>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    let newI = Math.floor(Math.random() * (i + 1));
    [array[i], array[newI]] = [array[newI], array[i]];
  }
  return array;
};
