import { useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem";
import { api } from "../../services/api";
import {
  Container,
  ItemsContent,
  OrderConfirmation,
  Totalizer,
} from "./styles";

interface ItemsProps {
  name: string;
  id: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export const Cart = () => {
  const [products, setProducts] = useState<ItemsProps[]>();
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFreeShipping(!freeShipping);
    }, 3000);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get("/items");

      setProducts(response.data);
    };

    loadProducts();
  }, []);

  console.log(products);

  return (
    <Container>
      <header>
        <h2>Meu Carrinho</h2>
      </header>

      <ItemsContent>
        <section>
          {products?.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              sellingPrice={item.sellingPrice}
            />
          ))}
        </section>
      </ItemsContent>

      <Totalizer>
        <div className="total">
          <span>Total</span>
          <span>R$ 9,55</span>
        </div>
        {freeShipping && (
          <div className="free-shipping">
            <span>Parabéns, sua compra tem frete grátis!</span>
          </div>
        )}
      </Totalizer>

      <OrderConfirmation>
        <button>Finalizar compra</button>
      </OrderConfirmation>
    </Container>
  );
};
