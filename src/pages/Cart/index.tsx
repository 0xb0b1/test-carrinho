import { CartItem } from "../../components/CartItem";
import { CartTotalizer } from "../../components/CartTotalizer";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, ItemsContent, OrderConfirmation } from "./styles";

export const Cart = () => {
  const { cart, totalPrice } = useCart();

  const formatedPrice = formatCurrency(totalPrice);

  const freeShipping = totalPrice >= 1000 ? true : false;

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

      <CartTotalizer
        formatedPrice={formatedPrice}
        freeShipping={freeShipping}
      />

      <OrderConfirmation>
        <button>Finalizar compra</button>
      </OrderConfirmation>
    </Container>
  );
};
