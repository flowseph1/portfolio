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

export function getDomain() {
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";

  const domain = process.env.NEXT_PUBLIC_VERCEL_URL
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : "localhost:3000";

  return `${protocol}://${domain}`;
}
