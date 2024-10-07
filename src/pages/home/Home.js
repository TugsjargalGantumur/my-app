import React from "react";
import { Footer, Header, ProductCart, ProductList } from "../../components";
import { products } from "../../data";
import { useUserContext } from "../../context";

export const Home = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};
