export default function Contact() {
    return (
        <div className='Contact'>
            <button className="contact-btn">Contact</button>
            <div className="contact-container">
                {/* <h2>Contact Us</h2> */}
                {/* <p>If you have any questions, feedback or inquiries — reach out to us!</p> */}

                <div className="contact-info">
                    <p>📞 +994 70 8710 71 79</p>
                    <p>✉️ support@luxera.az</p>
                    <p>📍 Baku, Azerbaijan</p>
                    <p>Working hours: 09:00 — 21:00</p>
                 </div>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button className="main-btn" type="submit">Send Message</button>
                </form>

                <div className="map">
                    <iframe src="https://maps.google.com/maps?q=Baku&t=&z=13&ie=UTF8&iwloc=&output=embed"  frameBorder="0"  allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    );
}
