import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { toastConfig } from "../config/toast";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  productAlreadyInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storageCart = localStorage.getItem("@testeCart:cart");

    if (storageCart) {
      return JSON.parse(storageCart);
    }

    return [];
  });

  // const [alreadyInCart, setAlreadyInCart] = useState();

  const productAlreadyInCart = (productId: number) => {
    if (cart.find((product) => product.id === productId)) {
      return true;
    }
    return false;
  };

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(
        (product) => product.id === productId
      );

      if (productAlreadyInCart) {
        toast("Produto já adicionado ao carrinho!");

        return;
      }

      const { data: product } = await api.get(`/items/${productId}`);

      setCart([...cart, { ...product }]);
      localStorage.setItem(
        "@testeCart:cart",
        JSON.stringify([...cart, { ...product }])
      );
      toast.success("Adicionado", toastConfig);
    } catch {
      toast.error("Erro ao adicionar o produto", toastConfig);
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(
        (cartProduct) => cartProduct.id === productId
      );

      if (!productExists) {
        toast.error("Erro ao remover produto", toastConfig);
        return;
      }

      const updatedCart = cart.filter(
        (productCart) => productCart.id !== productId
      );

      setCart(updatedCart);
      localStorage.setItem("@testeCart:cart", JSON.stringify(updatedCart));
      toast.warning("Removido", toastConfig);
    } catch {
      toast.warning("Erro ao removir produto do carrinho!", toastConfig);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, productAlreadyInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  return context;
};
