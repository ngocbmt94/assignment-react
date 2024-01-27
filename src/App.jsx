import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsProvider } from "./context/ProductsProvider";

import Header from "./components/Header";
import ListProducts from "./components/ListProduct";
import Error from "./components/Error";
import ProductItemDetail from "./components/ProductItemDetail";
import Main from './components/Main';
import { ProductDetailProvider } from './context/ProductDetailProvider';

const router = createBrowserRouter([{
  path: "/",
  element: <ListProducts/>,
  errorElement: <Error />,
}, {
  path: "/:productId",
  element: <ProductDetailProvider><ProductItemDetail /></ProductDetailProvider>,
  errorElement: <Error />,
}
])

function App() {
  return (
    <ProductsProvider>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
    </ProductsProvider>
  )
}

export default App
