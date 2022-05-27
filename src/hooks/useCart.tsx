import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { toastConfig } from "../config/toast";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextData {
  cart: Product[];
  totalPrice: number;
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  productAlreadyInCart: (productId: number) => boolean;
  updateProductQuantity: (productId: number, quantity: number) => void;
  handleQuantity: (productId: number, action: string) => void;
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

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart?.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cart]);

  const productAlreadyInCart = (productId: number) => {
    if (cart.find((product) => product.id === productId)) {
      return true;
    }
    return false;
  };

  const handleQuantity = (productId: number, action: string) => {
    const productQuantity = cart.find(
      (product) => product.id === productId
    )?.quantity;

    if (action === "decrement") {
      if (productQuantity === 1) {
        toast.error("Erro ao alterar quantidade", toastConfig);
        return;
      }

      const updatedCart = cart.map((cartProduct) =>
        cartProduct.id === productId
          ? {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          : cartProduct
      );
      setCart(updatedCart);
      localStorage.setItem("@testeCart:cart", JSON.stringify(updatedCart));
      toast.success("Quantidade alterada", toastConfig);
      return;
    }

    if (action === "increment") {
      const updatedCart = cart.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct
      );
      setCart(updatedCart);
      localStorage.setItem("@testeCart:cart", JSON.stringify(updatedCart));
      toast.success("Quantidade alterada", toastConfig);
      return;
    }
  };

  const updateProductQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((cartProduct) =>
      cartProduct.id === productId
        ? {
            ...cartProduct,
            quantity: Number(newQuantity),
          }
        : cartProduct
    );

    setCart(updatedCart);
    localStorage.setItem("@testeCart:cart", JSON.stringify(updatedCart));
    toast.success("Quantidade alterada", toastConfig);
    return;
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

      setCart([...cart, { ...product, quantity: 1 }]);
      localStorage.setItem(
        "@testeCart:cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
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
      toast.warning("Erro ao remover produto do carrinho!", toastConfig);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addProduct,
        removeProduct,
        productAlreadyInCart,
        updateProductQuantity,
        handleQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  return context;
};
