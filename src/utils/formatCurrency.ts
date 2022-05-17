export const formatCurrency = (value: number) => {
  return (Math.round(value) / 100).toFixed(2);
};
