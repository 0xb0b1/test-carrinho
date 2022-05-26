import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Content } from "./styles";

interface CartItemProps {
  name: string;
  id: number;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  quantity: number;
}

export const CartItem = ({
  name,
  price,
  id,
  sellingPrice,
  imageUrl,
  quantity,
}: CartItemProps) => {
  const { removeProduct } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeProduct(productId);
  };

  const formattedPrice = formatCurrency(price * quantity);
  const formattedSellingPrice = formatCurrency(sellingPrice * quantity);

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
