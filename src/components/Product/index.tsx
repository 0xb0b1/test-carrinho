import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
import { Container, Content } from "./styles";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  id: number;
}

export const Product = ({ title, price, image, id }: ProductProps) => {
  const formattedPrice = formatCurrency(price);

  return (
    <Container>
      <Content>
        <section className="image">
          <img src={image} alt={title} loading="lazy" />
        </section>
        <section>
          <span className="name">{title}</span>
          <span className="price">{formattedPrice}</span>
        </section>
      </Content>

      <ProductQuantity id={id} />
    </Container>
  );
};
