import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/favoriteSlice';
import { addShoppingCart } from '../redux/shoppingSlice';
import { change } from '../redux/moreInfoSlice';
import CardInfo from './CardInfo';
import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaDollarSign,FaRegHeart,FaHeart,FaCartPlus,FaShoppingCart } from 'react-icons/fa';
export default function Card(props) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.myFavorite.favorites);
    const shoppingProducts = useSelector(state => state.myShoppingCart.shoppingProducts);
    

    const toggleFavorite = (index) => {
        const cardFavorite = {
            title: props.title[index],
            rating: props.rating[index],
            price: props.price[index],
            brand: props.brand[index],
            pic: props.pic[index],
            desc:props.desc[index],
            category : props.category[index],
            stock : props.category[index],
            shippingInfo : props.shippingInfo[index],
            reviews: props.reviews[index]
        };
        const isFavorite = favorites.some(elem => elem.title === cardFavorite.title);
        if (isFavorite) {
            dispatch(deleteFavorite(cardFavorite));
        } else {
            dispatch(addFavorite(cardFavorite));
        }
    };
    const isActive = useSelector(state => state.myMoreInfo.isActive);
    const [cardIndex, setCardIndex] = useState(null);
    function moreInfo(index) {
        setCardIndex(index);
        dispatch(change(isActive))
    }
    //
    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    }
    const stars = Array(5).fill(0)
    return (
        <div className='Card'>
            {props.pic.map((elem, index) => {
                const isFavorite = favorites.some(elem => elem.title === props.title[index]);
                return (
                    <div className='card-elem' key={props.title[index]}>
                        <img src={elem} alt="picture" />
                        <p className='title'><b>{props.title[index]}</b> | {props.brand[index]}</p>
                        <div className='rating'>
                            <p>{props.rating[index]}</p>
                            {stars.map((_, starIndex) => {
                                const ratingValue = props.rating[index];
                                if (ratingValue >= starIndex + 1) {
                                    return <FaStar key={starIndex} size={24} color={colors.orange} />;
                                } else if (ratingValue >= starIndex + 0.5) {
                                    return <FaStarHalfAlt key={starIndex} size={24} color={colors.orange} />;
                                } else {
                                    return <FaRegStar key={starIndex} size={24} color={colors.grey} />;
                                }
                            })}

                        </div>
                        <div className='price'>
                            <p >{props.price[index]}</p>
                            <FaDollarSign size={24} color="#00ADB5" />
                        </div>


                        <div className='button-container'>
                            <button className='more-info-btn main-btn' onClick={() => moreInfo(index)}>More info</button>
                            <button className='favorite-btn' onClick={() => toggleFavorite(index)}>
                                {isFavorite ?  <FaHeart className='favorite-icon'/>: <FaRegHeart FaHeart className='favorite-icon'/>}
                            </button>
                            <button className='add-shopping-btn' onClick={() => dispatch(addShoppingCart({
                                title: props.title[index],
                                rating: props.rating[index],
                                price: props.price[index],
                                brand: props.brand[index],
                                pic: props.pic[index],
                                stock : props.stock[index]
                            }))}>{shoppingProducts.find(elem => elem.title === props.title[index]) ? <FaShoppingCart className='shopping-icon'/> : <FaCartPlus className='shopping-icon'/> }</button>

                        </div>
                    </div>
                );
            })}
            {isActive ?( <CardInfo title={props.title[cardIndex]} 
            pic={props.pic[cardIndex]} rating={props.rating[cardIndex]} 
            price={props.price[cardIndex]} brand={props.brand[cardIndex]} 
            desc={props.desc[cardIndex]} stock={props.stock[cardIndex]} 
            shippingInfo={props.shippingInfo[cardIndex]} 
            reviews={props.reviews[cardIndex]} />) : null}
        </div>
    );
}
