import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { ProductQuantity } from "../ProductQuantity";
import { Container, Content } from "./styles";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  id: number;
  addProductToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const Product = ({
  title,
  price,
  image,
  id,
  addProductToCart,
  removeFromCart,
}: ProductProps) => {
  const formattedPrice = formatCurrency(price);

  return (
    <Container>
      <Content>
        <section className="image">
          <img src={image} alt={title} />
        </section>
        <section>
          <span className="name">{title}</span>
          <span className="price">{formattedPrice}</span>
        </section>
      </Content>

      <ProductQuantity id={id} />
    </Container>
  );
};
