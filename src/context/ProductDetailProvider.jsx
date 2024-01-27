import { createContext, useCallback, useContext, useState } from "react";

import { BASE_URL } from "../helper/helper";
const ProductDetailContext = createContext();

function ProductDetailProvider({children}) {
    const [productDetail, setProductDetail] = useState({});

    const getProductDetail = useCallback(
        async function(id) {
            try {
             const res = await fetch(`${BASE_URL}/${id}`);
             if(!res.ok) throw new Error("CAN NOT FETCHING DATA...");
     
             const data = await res.json();
    
             setProductDetail(productDetail => {return {...productDetail, ...data}})
            }catch (err) {
                 console.error(err.message);
            }
        },[setProductDetail]
    )

    return (
        <ProductDetailContext.Provider value ={{productDetail, getProductDetail}}>
            {children}
        </ProductDetailContext.Provider>
    )
}

function useProductDetail() {
    const valueContext = useContext(ProductDetailContext);
    if (valueContext === undefined) throw new Error("ProductDetailContext value was used outside of ProductDetailContext");
    return valueContext;
}

export { ProductDetailProvider, useProductDetail}
