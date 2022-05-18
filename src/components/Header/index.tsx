import { Link } from "react-router-dom";
import { Cart, Container } from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { cart } = useCart();
  const cartSize = cart.length;
  return (
    <Container>
      <Link to="/">
        <span>Home</span>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} items`}
          </span>
        </div>
        <FiShoppingCart size={36} color="#f1f3f1" />
      </Cart>
    </Container>
  );
};
