import { useSelector} from 'react-redux';
import ShoppingCard from '../components/ShoppingCard';
export default function ShoppingCart() {
  const shoppingProducts = useSelector(state => state.myShoppingCart.shoppingProducts);
  const title = shoppingProducts.map(elem => elem.title);
  // const desc = shoppingProducts.map(elem => elem.desc);
  const pic = shoppingProducts.map(elem => elem.pic);
  const price = shoppingProducts.map(elem => elem.price);
  const brand = shoppingProducts.map(elem => elem.brand);
  const rating = shoppingProducts.map(elem => elem.rating);
  const stock = shoppingProducts.map(elem => elem.stock);
  return (
    <div className="ShoppingCart">
            {title.length=== 0 ? <h1>No items in your cart yet! Find your favorites and add them to your shopping cart.</h1> : <ShoppingCard title={title}  pic={pic} price={price} brand={brand} rating={rating} stock={stock} /> }     
    </div>
  );
}
