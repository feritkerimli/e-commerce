import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function Favorite() {
  const favorites = useSelector(state => state.myFavorite.favorites);
  const title = favorites.map(elem => elem.title);
  const rating = favorites.map(elem => elem.rating);
  const price = favorites.map(elem => elem.price);
  const pic = favorites.map(elem => elem.pic);
  const brand = favorites.map(elem => elem.brand);
  const desc = favorites.map(elem => elem.desc);
  const category = favorites.map(elem => elem.category);
  const stock = favorites.map(elem => elem.stock);
  const shippingInfo= favorites.map(elem => elem.shippingInfo);
  const reviews = favorites.map(elem => elem.reviews);





  return (
    <div className="Favorite">
      {title.length=== 0 ? <h1>Looks like you haven’t added any favorites yet. Click the heart icon to save your favorites!</h1> : <Card title={title} rating={rating}  price ={price} pic={pic}  brand={brand} desc={desc} category={category} shippingInfo={shippingInfo} reviews={reviews} stock={stock}/> } 
    </div>
  );
}
