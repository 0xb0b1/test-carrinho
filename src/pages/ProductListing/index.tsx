import { useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

interface ProductsProps {
  title: string;
  id: number;
  price: number;
  image: string;
}

export const ProductListing = () => {
  const [products, setProducts] = useState<ProductsProps[]>();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get("/items");

      setProducts(response.data);
    };

    loadProducts();
  }, []);

  return (
    <Container>
      <Content>
        {products?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Content>
    </Container>
  );
};
