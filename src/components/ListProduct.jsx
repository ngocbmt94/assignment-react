import { useProducts } from "../context/ProductsProvider"
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

function ListProducts() {
  const { products, getMoreProduct, error, isLoading } = useProducts();

  return (
    <InfiniteScroll dataLength={products.length} next={getMoreProduct} hasMore={isLoading} loader={!error && <Loader />}>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-6 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default ListProducts;
