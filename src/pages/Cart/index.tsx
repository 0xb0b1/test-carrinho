import { useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem";
import { api } from "../../services/api";
import { formatCurrency } from "../../utils/formatCurrency";
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

interface TotalProps {
  total: number | undefined;
}

export const Cart = () => {
  const [products, setProducts] = useState<ItemsProps[]>();
  const [freeShipping, setFreeShipping] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get("/items");

      setProducts(response.data);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const totalizer = products?.reduce((sumTotal, product) => {
      return sumTotal + product.sellingPrice;
    }, 0);

    if (totalizer >= 1000) {
      setFreeShipping(true);
    }
    setTotal(totalizer);
    console.log(totalizer);
  }, [products]);

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
          <span>R$ {formatCurrency(total)}</span>
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
