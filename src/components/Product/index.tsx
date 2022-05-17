import { Container, Content } from "./styles";

interface ProductProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export const Product = ({
  name,
  price,
  sellingPrice,
  imageUrl,
}: ProductProps) => {
  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />
        <section>
          <span className="name">{name}</span>
          <span className="price">R$ {price}</span>
          <span className="selling-price">R$ {sellingPrice}</span>
        </section>
      </Content>

      <button>Adicionar</button>
    </Container>
  );
};
