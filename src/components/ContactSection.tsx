import React from 'react';
import './ContactSection.css'; 

const ContactSection: React.FC = () => {
    
    // The working iframe, correctly formatted for JSX.
    const mapIframe = (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.2297486956875!2d24.861562877074032!3d60.243118037544214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df7477f161353%3A0x462865775e083c35!2sVictory%20pizza!5e0!3m2!1sen!2sfi!4v1762531914016!5m2!1sen!2sfi"
            width="100%" // Fills the placeholder width
            height="100%" // Fills the placeholder height
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Victory Pizza Location Map"
        ></iframe>
    );

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-heading">Find Your Slice of Italy</h2>
            <p className="section-subheading">Visit us or call ahead to place your order.</p>

            <div className="contact-grid">
                
                {/* 1. CONTACT INFORMATION CARD (Where the phone/hours live) */}
                <div className="contact-info-card">
                    <h3 className="card-title">Location & Hours</h3>
                    <p>
                        📍 **Address:** Puustellinpolku 25, 00410 Helsinki, Finland
                    </p>
                    <p>
                        📞 **Phone:** 046 8420302 (Call for quick orders!)
                    </p>
                    <p className="hours">
                        ⏰ **Hours:** Mon - Sun: 09:00 - 22:00
                    </p>
                    <a href="victory.pizza.fi@gmail.com" className="btn btn-contact">Email Us</a>
                </div>

                {/* 2. EMBEDDED MAP (Your working iframe) */}
                <div className="map-placeholder">
                    {mapIframe} 
                </div>
            </div>
        </section>
    );
};

export default ContactSection;