import { FiTrash } from "react-icons/fi";
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

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />

        <section>
          <p className="name">{name}</p>
          <p className="price">R$ {formatCurrency(price)}</p>
          <p className="selling-price">R$ {formatCurrency(sellingPrice)}</p>
        </section>
      </Content>

      <button onClick={() => handleRemoveFromCart(id)}>
        <FiTrash size={22} color="#000" />
      </button>
    </Container>
  );
};
