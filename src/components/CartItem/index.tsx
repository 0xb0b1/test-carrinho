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

  const formatedPrice = formatCurrency(price);
  const formatedSellingPrice = formatCurrency(sellingPrice);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />

        <section className="product-details">
          <p className="name">{name}</p>
          <p className="price">{formatedPrice}</p>
          <p className="selling-price">{formatedSellingPrice}</p>
        </section>
      </Content>

      <button type="button" onClick={() => handleRemoveFromCart(id)}>
        <FiTrash size={18} color="white" />
        <span>Remover</span>
      </button>
    </Container>
  );
};
