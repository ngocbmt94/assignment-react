import { useProducts } from "../context/ProductsProvider"

function Error() {
    const {error} = useProducts()
    return (
        <div>
            <h2 className="uppercase text-red-600">Something is wrong. <span className="font-bold">{error}</span></h2>
        </div>
    )
}

export default Error
