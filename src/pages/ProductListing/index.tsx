import { useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

interface ProductsProps {
  name: string;
  id: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
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

  console.log(products);

  return (
    <Container>
      <Content>
        {products?.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            sellingPrice={product.sellingPrice}
            imageUrl={product.imageUrl}
          />
        ))}
      </Content>
    </Container>
  );
};
