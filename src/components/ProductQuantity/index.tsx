import { useCart } from "../../hooks/useCart";
import { Button } from "./styles";

interface ProductQuantityProps {
  id: number;
}

export const ProductQuantity = ({ id }: ProductQuantityProps) => {
  const {
    cart,
    addProduct,
    removeProduct,
    productAlreadyInCart,
    updateProductQuantity,
    handleQuantity,
  } = useCart();

  const productQuantity = cart.find((item) => item.id === id)?.quantity;

  if (productAlreadyInCart(id)) {
    return (
      <Button>
        <div className="input-quantity">
          <label htmlFor={String(id)}>
            <button
              onClick={() => handleQuantity(id, "decrement")}
              type="button"
            >
              <span className="decrement">-</span>
            </button>
            <input
              id={String(id)}
              type="number"
              min="1"
              value={productQuantity}
              onChange={(event) => {
                updateProductQuantity(id, Number(event.target.value));
              }}
            />
            <button
              onClick={() => handleQuantity(id, "increment")}
              type="button"
            >
              <span className="increment">+</span>
            </button>
          </label>
          <span>
            <button onClick={() => removeProduct(id)} color="#000"></button>
          </span>
        </div>
      </Button>
    );
  }

  return (
    <Button>
      <button className="product-add" onClick={() => addProduct(id)}>
        Adicionar
      </button>
    </Button>
  );
};
