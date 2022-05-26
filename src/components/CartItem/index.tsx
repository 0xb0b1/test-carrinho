import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
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
  const { removeProduct, addProduct } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeProduct(productId);
  };

  const formattedPrice = formatCurrency(sellingPrice);
  const totalProductPrice = formatCurrency(sellingPrice * quantity);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />

        <section className="product-details">
          <p className="name">{name}</p>
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
