import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
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
  const formattedPrice = formatCurrency(price);
  const formattedSellingPrice = formatCurrency(sellingPrice);

  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={name} />
        <section>
          <span className="name">{name}</span>
          <span className="price">{formattedPrice}</span>
          <span className="selling-price">{formattedSellingPrice}</span>
        </section>
      </Content>

      <ProductQuantity
        removeProductFromCart={removeFromCart}
        addProductToCart={addProductToCart}
        id={id}
      />
    </Container>
  );
};
