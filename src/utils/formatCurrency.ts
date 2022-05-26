export const formatCurrency = (value: number) => {
  // return `R$ ${(Math.round(value) / 100).toFixed(2)}`;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
