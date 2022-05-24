import { memo } from "react";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Content } from "./styles";

interface ProductProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  id: number;
  addProductToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const Product = ({
  name,
  price,
  sellingPrice,
  imageUrl,
  id,
  addProductToCart,
  removeFromCart,
}: ProductProps) => {
  const { productAlreadyInCart } = useCart();

  const formatedPrice = formatCurrency(price);
  const formatedSellingPrice = formatCurrency(sellingPrice);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />
        <section>
          <span className="name">{name}</span>
          <span className="price">{formatedPrice}</span>
          <span className="selling-price">{formatedSellingPrice}</span>
        </section>
      </Content>
      {productAlreadyInCart(id) ? (
        <button className="product-remove" onClick={() => removeFromCart(id)}>
          Remover
        </button>
      ) : (
        <button className="product-add" onClick={() => addProductToCart(id)}>
          Adicionar
        </button>
      )}
    </Container>
  );
};
