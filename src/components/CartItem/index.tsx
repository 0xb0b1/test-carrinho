import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Content } from "./styles";

interface CartItemProps {
  name: string;
  id: number;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export const CartItem = ({
  name,
  price,
  id,
  sellingPrice,
  imageUrl,
}: CartItemProps) => {
  const { removeProduct } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeProduct(productId);
  };

  const formattedPrice = formatCurrency(price);
  const formattedSellingPrice = formatCurrency(sellingPrice);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />

        <section className="product-details">
          <p className="name">{name}</p>
          <p className="price">{formattedPrice}</p>
          <p className="selling-price">{formattedSellingPrice}</p>
        </section>
      </Content>

      <button type="button" onClick={() => handleRemoveFromCart(id)}>
        <span>Remover</span>
      </button>
    </Container>
  );
};
