import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { change } from '../redux/moreInfoSlice';
import { FaStar, FaStarHalfAlt, FaRegStar, FaDollarSign } from 'react-icons/fa';

export default function CardInfo(props) {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.myMoreInfo.isActive);
    const cardRef = useRef(null);

    useEffect(() => {
        if (isActive && cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isActive]);

    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    }

    const stars = Array(5).fill(0);

    return (
        <div
            ref={cardRef}
            className={`CardInfo ${isActive ? 'active' : 'deactive'}`}
        >
            <div className='info-container'>
                <div className='card-elem' key={props.title}>
                    <img src={props.pic} alt="picture" />
                    <p className='title'><b>{props.title}</b> | {props.brand}</p>
                    <div className='rating'>
                        <p>{props.rating}</p>
                        {stars.map((_, starIndex) => {
                            const ratingValue = props.rating;
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
                        <p>{props.price}</p>
                        <FaDollarSign size={24} color="#00ADB5" />
                    </div>
                    <div className='button-container'>
                        <button className='less-info-btn main-btn' onClick={() => dispatch(change(isActive))}>less info</button>
                    </div>
                </div>
                <div className='more-info-section'>
                    <p>{props.desc}</p>
                    <p>{props.stock} in stock</p>
                    <p>{props.shippingInfo}</p>
                    {
                        props.reviews.map(elem => {
                            return (
                                <div className='review' key={elem.comment}>
                                    <div className='rating'>
                                        <p>{elem.rating}</p>
                                        {stars.map((_, starIndex) => {
                                            const ratingValue = elem.rating;
                                            if (ratingValue >= starIndex + 1) {
                                                return <FaStar key={starIndex} size={24} color={colors.orange} />;
                                            } else if (ratingValue >= starIndex + 0.5) {
                                                return <FaStarHalfAlt key={starIndex} size={24} color={colors.orange} />;
                                            } else {
                                                return <FaRegStar key={starIndex} size={24} color={colors.grey} />;
                                            }
                                        })}
                                    </div>
                                    <p>{elem.reviewerName} | {elem.date.slice(0,10)}</p>
                                    <p>{elem.comment}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

