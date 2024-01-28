import { useContext, useEffect, useCallback, useState, createContext} from "react";
import {BASE_URL, LIMIT_PRODUCTS, scrollToTop} from "../helper/helper";

const ProductsContext = createContext();

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [indexScroll, setIndexScroll] = useState(0);
    const [query, setQuery]= useState("");
   

    const getProducts = useCallback(
        async function() {
        setError("")
        try {
            const res = await fetch(`${BASE_URL}/search?q=${query}&limit=${LIMIT_PRODUCTS}&skip=${indexScroll * LIMIT_PRODUCTS}`);
            if (!res.ok) throw new Error("CAN NOT FETCHING DATA...");
    
            const data = await res.json();

            // if there is no product that be found in the page 0
            // should throw exception in this case
            if(indexScroll === 0 && data.products.length === 0) throw new Error(`CAN NOT FOUND WITH %${query}%`);
    
            setProducts((products) => [...products, ...data.products]);

            // hasmore state should be true when there still have available productions in the next page
            // otherwise it should be false
            setIsLoading(data.skip + data.limit < data.total)
          } catch (err) {
            console.error(err.message);
            setError(err.message);
    
          }
    }, [indexScroll, query])

    useEffect(()=> {
        getProducts();
    }, [indexScroll, getProducts]);

    function getMoreProduct () {
        setIndexScroll(i => i + 1)
    }

    useEffect(() => {
        setProducts([])
    },[query])
   
    function handleSearchSubmit(e, valueQuery) {
        e.preventDefault();
        
        if(valueQuery.length < 2) return;

        scrollToTop();
        setIndexScroll(0);
        setQuery(valueQuery);
    }

    return (
        <ProductsContext.Provider value= {{products, error, indexScroll, isLoading, getMoreProduct,handleSearchSubmit}}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProducts() {
    const valueContext = useContext(ProductsContext);
    if (valueContext === undefined) throw new Error("ProductsContext value was used outside of ProductsProvider");
    return valueContext;
  }
export {ProductsProvider, useProducts};
