import { FiTrash } from "react-icons/fi";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Content } from "./styles";

interface CartItemProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export const CartItem = ({
  name,
  price,
  sellingPrice,
  imageUrl,
}: CartItemProps) => {
  const handleRemoveFromCart = () => {
    console.log("removed");
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

      <button onClick={() => handleRemoveFromCart()}>
        <FiTrash size={22} color="#000" />
      </button>
    </Container>
  );
};
