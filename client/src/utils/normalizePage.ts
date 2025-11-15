export const normalizePage = (raw: unknown): number => {
  const num = Number(raw);
  if (isNaN(num)) return 1;
  if (num < 1) return 1;
  return Math.floor(num);
};
