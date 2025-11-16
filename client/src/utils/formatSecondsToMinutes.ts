export const formatSecondsToMinutes = (seconds: number): string => {
  if (!seconds || seconds <= 0) return '0';
  const minutes = seconds / 60;
  return minutes.toFixed(1);
};
