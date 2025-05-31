import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
export default function Footer() {
    const upToMenu = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='Footer'>
            <div className="footer-container">
                <div className="footer-about">
                    <h3>Luxera</h3>
                    <p>Luxera is a premium online shopping platform offering high-quality, stylish products at affordable prices. Shop with confidence and ease!</p>
                </div>

                <div className="footer-links">
                    <h4>Menu</h4>
                    <ul>
                        <li>
                            <div onClick={upToMenu} className="up-to-menu">
                                Up to menu ↑
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>📞 +994 70 870 71 79</p>
                    <p>✉️ support@luxera.az</p>
                    <p>📍 Baku, Azerbaijan</p>

                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebook className="fb"  /></a>
                        <a href="#"><FaInstagram className="insta"  /></a>
                        <a href="#"><FaLinkedin className="in"   /></a>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>© 2025 Luxera. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Terms of Use</a> |
                        <a href="#">Privacy Policy</a> |
                        <a href="#">Return Policy</a>
                    </div>
                </div>
            </div>

        </div>
    );
}
