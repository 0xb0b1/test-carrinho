import { useCart } from "../../hooks/useCart";
import { Container, Content } from "./styles";

interface ProductProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  id: number;
  addProductToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const Product = ({
  name,
  price,
  sellingPrice,
  imageUrl,
  id,
  addProductToCart,
  removeFromCart,
}: ProductProps) => {
  const { productAlreadyInCart } = useCart();

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
      {productAlreadyInCart(id) ? (
        <button className="product-remove" onClick={() => removeFromCart(id)}>
          Remover
        </button>
      ) : (
        <button className="product-add" onClick={() => addProductToCart(id)}>
          Adicionar
        </button>
      )}
    </Container>
  );
};
