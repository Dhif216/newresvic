import React from 'react';
import GooeyNav from "./components/GooeyNav.tsx";
import HeroSection from './components/HeroSection.tsx';
import FeaturedMenu from './components/FeaturedMenu.tsx';
import FullMenu from './components/FullMenu.tsx';
import ReviewSection from './components/ReviewSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx'; // <-- FINAL IMPORT

const pizzaNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
];

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="sticky-nav-wrapper"> 
              <div className="goo-filter-wrap"> 
                <GooeyNav items={pizzaNavItems} /> 
              </div>
            </header>
            
            <HeroSection /> 
            <FeaturedMenu />
            <FullMenu />
            <ReviewSection />
            <ContactSection />
            
            {/* FINAL COMPONENT: FOOTER */}
            <Footer />
        </div>
    );
};

export default App;