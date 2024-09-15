import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
const Products = ({ products }) => {
  const [state, setState] = useState(false);
  return (
    <>
      <button onClick={() => setState(!state)}>click me</button>
      <h1>Products</h1>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id} className="mb-1">
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Products;
