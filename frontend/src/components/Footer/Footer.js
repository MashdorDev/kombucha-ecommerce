import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact-info">
                <p>Email: info@kombucha.com</p>
                <p>Phone: +1 123-456-7890</p>
            </div>
            <div className="social-media">
                {/* Add social media icons and links here */}
                <a href="/facebook-link"><img src="/path-to-facebook-icon.png" alt="Facebook" /></a>
                <a href="/twitter-link"><img src="/path-to-twitter-icon.png" alt="Twitter" /></a>
                {/* More icons can be added as needed */}
            </div>
        </footer>
    );
}

export default Footer;
