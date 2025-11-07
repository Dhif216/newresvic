import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>VICTORY PIZZA</h3>
                    <p className="tagline">Authentic Italian taste in Finland.</p>
                </div>

                <div className="footer-info">
                    <h4>Contact & Find Us</h4>
                    <p>Puustellinpolku 25</p>
                    <p>00410 Helsinki, Finland</p>
                    <p>Phone: 046 8420302</p>
                    <a href="victory.pizza.fi@gmail.com">info@victorypizza.fi</a>
                </div>
            </div>
            
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Victory Pizza. All rights reserved This site do not collect data or cockies.</p>
            </div>
        </footer>
    );
};

export default Footer;