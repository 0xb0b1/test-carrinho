import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
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

  const formattedPrice = formatCurrency(price);
  const formattedSellingPrice = formatCurrency(sellingPrice);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />
        <section>
          <span className="name">{name}</span>
          <span className="price">{formattedPrice}</span>
          <span className="selling-price">{formattedSellingPrice}</span>
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
