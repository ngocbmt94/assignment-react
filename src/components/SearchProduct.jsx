import { useState } from "react";
import { useProducts } from "../context/ProductsProvider";


function SearchProduct() {
    const {handleSearchSubmit, products} = useProducts();
    const [searchValue, setSearchValue] = useState("");
    
    return (
        <form className="flex gap-x-5 items-center" onSubmit={(e) => handleSearchSubmit(e, searchValue)}>
            <h2 className="text-xl font-semibold">🚀 {products.length} products found</h2>
            <input className="w-full md:w-72 px-4 py-2 border border-slate-300 bg-slate-100/50" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search posts..." />
        </form>
    )
}

export default SearchProduct
