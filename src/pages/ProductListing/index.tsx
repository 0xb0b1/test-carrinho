import { useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

interface ProductsProps {
  name: string;
  id: number;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export const ProductListing = () => {
  const { addProduct, removeProduct } = useCart();
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
          <>
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              sellingPrice={product.sellingPrice}
              imageUrl={product.imageUrl}
              addProductToCart={addProduct}
              removeFromCart={removeProduct}
            />
          </>
        ))}
      </Content>
    </Container>
  );
};
