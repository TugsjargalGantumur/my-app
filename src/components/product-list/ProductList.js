import "./ProductList.css";

export const ProductList = (props) => {
  const { products } = props;

  if (products.length === 0) return <h2>No products available</h2>;

  return (
    <div>
      {products.map((products, index) => (
        <div key={index}>
          <h2>{products.name}</h2>
          <p>{products.description}</p>
        </div>
      ))}
    </div>
  );
};
