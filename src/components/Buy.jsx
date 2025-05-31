import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { change } from '../redux/buySlice';

export default function Buy() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => state.myBuy.isActive);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`Buy ${isActive ? 'active' : 'deactive'}`}
    >
      <div className="container">
        <button className="close-btn" onClick={() => dispatch(change())}>✖</button>

        <div className={`form-container active`}>
          <form className="form" onSubmit={e => e.preventDefault()}>
            <input type="number" placeholder="16 digit number" required />
            <input type="number" placeholder="CVV" required />
            <input type="text" placeholder="Date" required />
            <button type="submit" className="submit-btn main-btn">Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
}
