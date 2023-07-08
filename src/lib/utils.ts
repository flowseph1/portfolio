export const generateCols = (
  arr: any[],
  cols: number,
  colPosition: number = 1
) => {
  return arr.filter((_, id) => (id - colPosition) % cols === 0);
};
