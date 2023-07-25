export const generateCols = (
  arr: any[],
  cols: number,
  colPosition: number = 1
) => {
  return arr.filter((_, id) => (id - colPosition) % cols === 0);
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

export const getYear = (date: string) => {
  const newDate = new Date(date);
  return newDate.getFullYear();
};
