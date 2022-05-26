import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
import { Container, Content } from "./styles";

interface CartItemProps {
  title: string;
  id: number;
  price: number;
  image: string;
  quantity: number;
}

export const CartItem = ({
  title,
  price,
  id,
  image,
  quantity,
}: CartItemProps) => {
  const { removeProduct, addProduct } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeProduct(productId);
  };

  const formattedPrice = formatCurrency(price);
  const totalProductPrice = formatCurrency(price * quantity);

  return (
    <Container>
      <Content>
        <img src={image} alt={title} />

        <section className="product-details">
          <p className="name">{title}</p>
          <p className="price">{formattedPrice}</p>
          <p className="selling-price">{totalProductPrice}</p>
        </section>
      </Content>

      <ProductQuantity
        removeProductFromCart={handleRemoveFromCart}
        id={id}
        addProductToCart={addProduct}
      />
    </Container>
  );
};
