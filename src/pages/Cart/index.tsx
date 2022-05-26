import { CartItem } from "../../components/CartItem";
import { CartTotalizer } from "../../components/CartTotalizer";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, ItemsContent, OrderConfirmation } from "./styles";

export const Cart = () => {
  const { cart, totalPrice } = useCart();

  const formattedPrice = formatCurrency(totalPrice);

  const freeShipping = totalPrice >= 500 ? true : false;

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
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </section>
      </ItemsContent>

      <CartTotalizer
        formattedPrice={formattedPrice}
        freeShipping={freeShipping}
      />

      <OrderConfirmation>
        <button>Finalizar compra</button>
      </OrderConfirmation>
    </Container>
  );
};
