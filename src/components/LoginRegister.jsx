import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { change } from '../redux/loginRegisterSlice';

export default function LoginRegister() {
  const dispatch = useDispatch();
  const isActive = useSelector(state => state.myLoginRegister.isActive);
  const cardRef = useRef(null);
  const [formSwitch, setFormSwitch] = useState(true);

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`LoginRegister  ${isActive ? 'active' : 'deactive'}`}
    >
      <div className="container">
        <button className="close-btn" onClick={() => dispatch(change(isActive))}>✖</button>

        <div className="button-container">
          <button className={`login-switch-btn ${formSwitch ? 'formActive' : 'formDeactive'}`} onClick={() => setFormSwitch(true)}>
            Login
          </button>
          <button className={`register-switch-btn ${!formSwitch ? 'formActive' : 'formDeactive'}`} onClick={() => setFormSwitch(false)}>
            Register
          </button>
        </div>

        <div className={`login form-container ${formSwitch ? 'active' : 'deactive'}`}>
          <form className="form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your email" required />
            <input type="password" placeholder="Your password" required />
            <button type="submit" className="submit-btn main-btn ">Login</button>
          </form>
        </div>

        <div className={`register form-container ${!formSwitch ? 'active' : 'deactive'}`}>
          <form className="form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Your password" required />
            <button type="submit" className="submit-btn main-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
