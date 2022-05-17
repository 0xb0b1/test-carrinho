import { FiTrash } from "react-icons/fi";
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

        <div>
          <p className="name">{name}</p>
          <p className="price">R$ {price}</p>
          <p className="selling-price">R$ {sellingPrice}</p>
        </div>
      </Content>

      <button onClick={() => handleRemoveFromCart()}>
        <FiTrash size={22} color="#000" />
      </button>
    </Container>
  );
};
