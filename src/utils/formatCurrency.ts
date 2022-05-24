export const formatCurrency = (value: number) => {
  return `R$ ${(Math.round(value) / 100).toFixed(2)}`;
};
