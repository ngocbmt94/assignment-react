import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
function ProductItem({product}) {
    const { title, description, images, price, discountPercentage, rating, category,id } = product;
    
    return (
        <li className="my-5 border border-slate-300">
          <Link to={`/${id}`}>
          <Carousel emulateTouch={true}>
            {images.map((img,i) => <img key={i} alt="title" src={`${images[i]}`} className="w-full h-8 object-cover" />)}
          </Carousel>
          <div className="p-4">
            <div className="flex justify-between">
              <span className="font-bold text-xl">{title}</span>
              <span className="text-xs border border-red-700 bg-red-300/50 font-semibold px-2 py-1 rounded-full shadow-md uppercase ">{category}</span>
            </div>
          
            <p className="text-slate-400">{description}</p>
            <p className="font-semibold text-red-500 text-lg">${price}</p>
            <p>Discount: -${discountPercentage}</p>
            <p className="text-yellow-500 font-bold">{rating}<span className="ml-2">★</span></p>
          </div>
          </Link>
        </li>
    );
}

export default ProductItem;
