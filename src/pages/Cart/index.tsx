import { useEffect, useMemo, useState } from "react";
import { CartItem } from "../../components/CartItem";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Container,
  ItemsContent,
  OrderConfirmation,
  Totalizer,
} from "./styles";

export const Cart = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart?.reduce((sumTotal, product) => {
      return sumTotal + product.sellingPrice;
    }, 0);
  }, [cart]);

  const freeShipping = total >= 1000 ? true : false;

  return (
    <Container>
      <header>
        <h2>Meu Carrinho</h2>
      </header>

      <ItemsContent>
        <section>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              sellingPrice={item.sellingPrice}
            />
          ))}
        </section>
      </ItemsContent>

      <Totalizer>
        <div className="total">
          <span>Total</span>
          <span>{total ? formatCurrency(total) : 0}</span>
        </div>
        {freeShipping && (
          <div className="free-shipping">
            <span>Parabéns, sua compra tem frete grátis!</span>
          </div>
        )}
      </Totalizer>

      <OrderConfirmation>
        <button>Finalizar compra</button>
      </OrderConfirmation>
    </Container>
  );
};
