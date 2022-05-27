import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Totalizer } from "./styles";

export const CartTotalizer = () => {
  const { totalPrice } = useCart();
  const formattedPrice = formatCurrency(totalPrice);

  const freeShipping = totalPrice >= 500 ? true : false;

  return (
    <Totalizer>
      <div className="total">
        <span>Total</span>
        <span>{formattedPrice}</span>
      </div>
      {freeShipping && (
        <div className="free-shipping">
          <span>Parabéns, sua compra tem frete grátis!</span>
        </div>
      )}
    </Totalizer>
  );
};
