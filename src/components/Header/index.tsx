import { Link } from "react-router-dom";
import { Cart, Container } from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const cart = [1, 2, 3, 4, 5, 6, 7];
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
        <FiShoppingCart size={36} color="#333" />
      </Cart>
    </Container>
  );
};
