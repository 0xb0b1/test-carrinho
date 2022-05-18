import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

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

  const [alreadyInCart, setAlreadyInCart] = useState({});

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
      toast("Adicionado");
    } catch {
      toast.error("Erro ao adicionar o produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(
        (cartProduct) => cartProduct.id === productId
      );

      if (!productExists) {
        toast.error("Erro ao remover produto");
        return;
      }

      const updatedCart = cart.filter(
        (productCart) => productCart.id !== productId
      );

      setCart(updatedCart);
      localStorage.setItem("@testeCart:cart", JSON.stringify(updatedCart));
      toast("Removido");
    } catch {}
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  return context;
};
