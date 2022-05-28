import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
import { Container, Content } from "./styles";

interface CartItemProps {
  title: string;
  id: number;
  price: number;
  image: string;
  quantity: number;
}

export const CartItem = ({
  title,
  price,
  id,
  image,
  quantity,
}: CartItemProps) => {
  const formattedPrice = formatCurrency(price);
  const totalProductPrice = formatCurrency(price * quantity);

  return (
    <Container>
      <Content>
        <section className="image">
          <img src={image} alt={title} width="80" height="100%" />
        </section>

        <section className="product-details">
          <p className="name">{title}</p>
          <p className="price">{formattedPrice}</p>
          <p className="selling-price">{totalProductPrice}</p>
        </section>
      </Content>

      <ProductQuantity id={id} />
    </Container>
  );
};
