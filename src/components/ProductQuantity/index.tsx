import { useCart } from "../../hooks/useCart";
import { Button } from "./styles";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";

interface ProductQuantityProps {
  addProductToCart: (id: number) => void;
  removeProductFromCart: (id: number) => void;
  id: number;
}

export const ProductQuantity = ({
  addProductToCart,
  removeProductFromCart,
  id,
}: ProductQuantityProps) => {
  const { cart, productAlreadyInCart, updateProductQuantity } = useCart();

  const productQuantity = cart.find((item) => item.id === id)?.quantity;

  if (productAlreadyInCart(id)) {
    return (
      <Button>
        <div className="input-quantity">
          <label htmlFor="quantity">
            <input
              id="quantity"
              type="number"
              min="1"
              value={productQuantity}
              onChange={(event) => {
                updateProductQuantity(id, Number(event.target.value));
              }}
            />
          </label>
          <span>
            <FiTrash
              onClick={() => removeProductFromCart(id)}
              color="#000"
              size={20}
            />
          </span>
        </div>
      </Button>
    );
  }

  return (
    <Button>
      <button className="product-add" onClick={() => addProductToCart(id)}>
        Adicionar
      </button>
    </Button>
  );
};
