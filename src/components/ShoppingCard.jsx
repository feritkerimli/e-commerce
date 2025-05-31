import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteShoppingCart, increaseCount, decreaseCount } from '../redux/shoppingSlice';
import { FaStar, FaStarHalfAlt, FaRegStar, FaDollarSign } from 'react-icons/fa';
import { change } from '../redux/buySlice';
import Buy from './Buy';
export default function ShoppingCard() {
    const dispatch = useDispatch();
    const shoppingProducts = useSelector(state => state.myShoppingCart.shoppingProducts);

    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    };
    const stars = Array(5).fill(0);
    let totalPrice = 0;
    shoppingProducts.forEach(elem => {
        totalPrice += elem.price * elem.count;
    });
    return (
        <div className="ShoppingCard">
            <div className='card-container'>
                {shoppingProducts.map((elem) => (
                    <div className='card-elem' key={elem.title}>
                        <img src={elem.pic} alt="picture" />
                        <div className="info">
                            <p className='title'><b>{elem.title}</b> | {elem.brand}</p>

                            <div className='rating'>
                                <p>{elem.rating}</p>
                                {stars.map((_, starIndex) => {
                                    if (elem.rating >= starIndex + 1) {
                                        return <FaStar key={starIndex} size={24} color={colors.orange} />;
                                    } else if (elem.rating >= starIndex + 0.5) {
                                        return <FaStarHalfAlt key={starIndex} size={24} color={colors.orange} />;
                                    } else {
                                        return <FaRegStar key={starIndex} size={24} color={colors.grey} />;
                                    }
                                })}
                            </div>

                            <div className='price'>
                                <p>{elem.price}</p>
                                <FaDollarSign size={24} color="#00ADB5" />
                            </div>
                        </div>

                        <div className='counter'>
                            <p>{elem.count}</p>
                            <button className='main-btn' onClick={() => dispatch(increaseCount({ title: elem.title }))}>+</button>
                            <button className='main-btn' onClick={() => dispatch(decreaseCount({ title: elem.title }))}>-</button>
                        </div>

                        <div>
                            <button className='main-btn' onClick={() => dispatch(deleteShoppingCart({ title: elem.title }))}>delete</button>
                        </div>
                    </div>
                ))}

                
            </div>
            <div className='buy'>
                
                <p>Total price : {totalPrice.toFixed(2)}</p>
                <button className='main-btn' onClick={() => dispatch(change())}>Buy</button>
            </div>
        <Buy />    
        </div>
    );
}
