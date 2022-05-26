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
          <label htmlFor={String(id)}>
            <input
              id={String(id)}
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

  // here the function `addProductToCart` is optional, so
  // we only show this section of code when we pass the function
  // in the component.
  return (
    <Button>
      <button className="product-add" onClick={() => addProductToCart(id)}>
        Adicionar
      </button>
    </Button>
  );
};
