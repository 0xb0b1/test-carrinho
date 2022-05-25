import { Totalizer } from "./styles";

interface TotalizerProps {
  formatedPrice: string;
  freeShipping: boolean;
}

export const CartTotalizer = ({
  formatedPrice,
  freeShipping,
}: TotalizerProps) => {
  return (
    <Totalizer>
      <div className="total">
        <span>Total</span>
        <span>{formatedPrice}</span>
      </div>
      {freeShipping && (
        <div className="free-shipping">
          <span>Parabéns, sua compra tem frete grátis!</span>
        </div>
      )}
    </Totalizer>
  );
};
