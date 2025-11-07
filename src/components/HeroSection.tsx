import React from 'react';
import './HeroSection.css';
import heroVideo from '/assets/hero.pizza.mp4'; 
import TextPressure from './TextPressure.tsx'; // Import the new component

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        // FIX: Moved comment outside the JSX return for correct parsing
        <section className="hero-section" id="home">
            
            {/* VIDEO BACKGROUND ELEMENT */}
            <video autoPlay loop muted playsInline className="hero-video-bg">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* TEXT AND CTA OVERLAY (The actual content) */}
            <div className="hero-content-overlay">
                
                {/* 1. REPLACE STATIC TITLE WITH TEXTPRESSURE */}
                <div className="hero-text-pressure-container">
                    <TextPressure 
                        text="VICTORY PIZZA" 
                        // Customize properties here: 
                        textColor="#FFFFFF" 
                        strokeColor="var(--primary-color)" // Use your orange for the stroke effect
                        stroke={true} 
                        alpha={false}
                        flex={true}
                        width={true}
                        weight={true}
                        minFontSize={50} // Ensure a decent minimum size
                    />
                </div>
                
                {/* 2. Tagline (Moved outside TextPressure for better control) */}
                <p className="hero-tagline">
                    Authentic Italian Taste in the Heart of Finland.
                </p>

                <div className="hero-buttons">
                    <a href="#menu" className="btn btn-primary">
                        View Our Full Menu
                    </a>
                    
                    <a href="#contact" className="btn btn-secondary">
                        Find Our Location
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;