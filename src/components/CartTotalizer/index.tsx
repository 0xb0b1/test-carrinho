import { Totalizer } from "./styles";

interface TotalizerProps {
  formattedPrice: string;
  freeShipping: boolean;
}

export const CartTotalizer = ({
  formattedPrice: formattedPrice,
  freeShipping,
}: TotalizerProps) => {
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
