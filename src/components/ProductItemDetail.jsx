import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductDetail } from "../context/ProductDetailProvider";


function ProductItemDetail() {
    const { productId } = useParams();
    const { productDetail, getProductDetail} = useProductDetail();

    useEffect(()=> {
        console.log(productId)
        if(!productId) return;
        
        getProductDetail(productId);
    }, [productId, getProductDetail]);


    
    if(!productDetail) return null;
    const { title, description, images, price, discountPercentage, rating, category } = productDetail;
    
    return (
        <div>
            <Link to="/" className="text-blue-300 hover:text-blue-700">BACK TO HOME</Link>
            <div className="flex p-6 border border-slate-300 rounded-lg gap-5 w-1/2 mx-auto">
                <img alt ="" src={`${images?.[0]}`} className="object-cover min-w-52 h-52"/>
                <div>
                    <div className="flex gap-x-10">
                        <h2 className="font-bold text-xl">{title}</h2>
                        <span className="text-xs border border-red-700 bg-red-300/50 font-semibold px-2 py-1 rounded-full shadow-md uppercase ">{category}</span>
                    </div>
                    
                    <p className="text-slate-400">{description}</p>
                    <p className="font-semibold text-red-500 text-lg">${price}</p>
                    <p>Discount: -${discountPercentage}</p>
                    <p className="text-yellow-500 font-bold">{rating}<span className="ml-2">★</span></p>
                </div>
            </div>
        </div>
        
    )
}

export default ProductItemDetail
