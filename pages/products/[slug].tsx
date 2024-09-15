export async function getStaticPaths() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const paths = data.map((product) => ({
      params: { slug: product.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  const { slug: currentId } = params;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${currentId}`
    );
    const data = await response.json();
    return { props: { currentDetails: data } };
  } catch (error) {
    console.error(error);
    return {
      props: { currentDetails: null },
    };
  }
}

const ProductDetails = ({ currentDetails }) => {
  if (!currentDetails) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{currentDetails.title}</h1>
      <p>{currentDetails.description}</p>
      <p>Price: ${currentDetails.price}</p>
    </div>
  );
};

export default ProductDetails;
