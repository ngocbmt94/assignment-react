import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsProvider } from "./context/ProductsProvider";

import AppLayout from './AppLayout';
import Error from "./components/Error";
import ProductItemDetail from "./components/ProductItemDetail";
import { ProductDetailProvider } from './context/ProductDetailProvider';


const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
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
      <RouterProvider router={router}>
        <AppLayout/>
      </RouterProvider>
    </ProductsProvider>
  )
}

export default App
