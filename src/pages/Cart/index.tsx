import { useEffect, useState } from "react";
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
  const { cart, removeProduct } = useCart();
  const [freeShipping, setFreeShipping] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalizer = cart?.reduce((sumTotal, product) => {
      return sumTotal + product.sellingPrice;
    }, 0);

    if (totalizer <= 1000) {
      setFreeShipping(false);
      setTotal(Number(totalizer));
      return;
    }
    setFreeShipping(true);
    setTotal(Number(totalizer));
  }, [cart]);

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
          <span>R$ {total ? formatCurrency(total) : 0}</span>
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
