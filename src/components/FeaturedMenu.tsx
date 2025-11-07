import React from 'react';
import './FeaturedMenu.css'; 

// Removed the IMAGE_PLACEHOLDER_URL constant as requested.

// 1. Define the TypeScript interface for a single menu item (No Change)
interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    imagePath: string; 
}

// 2. Define the static data for featured items
const FEATURED_ITEMS: MenuItem[] = [
    {
        id: 1,
        name: "Margherita Classic",
        description: "The timeless classic: fresh mozzarella, San Marzano tomatoes, basil, and a drizzle of olive oil.",
        price: "12.50 €",
        // DIRECTLY inserting the URL here:
        imagePath: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    {
        id: 2,
        name: "Victory special",
        description: "A fiery mix of spicy chorizo sausage, jalapeños, red onion, and extra pepper jack cheese.",
        price: "14.90 €",
        // DIRECTLY inserting the URL here:
        imagePath: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=781',
    },
    {
        id: 3,
        name: "Finlandia Deluxe",
        description: "Our Finnish tribute: reindeer meat, fresh forest mushrooms, blue cheese, and lingonberry glaze.",
        price: "16.90 €",
        // DIRECTLY inserting the URL here:
        imagePath: 'https://images.unsplash.com/photo-1751026044631-2aa676914b1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
];

const FeaturedMenu: React.FC = () => {
    return (
        <section className="featured-menu-section" id="menu">
            <h2 className="section-heading">Our Featured Masterpieces</h2>
            <p className="section-subheading">Hand-picked favorites for the authentic Italian experience.</p>

            <div className="menu-grid">
                {FEATURED_ITEMS.map((item) => (
                    <div key={item.id} className="menu-card">
                        <img 
                            src={item.imagePath} 
                            alt={item.name} 
                            className="menu-image" 
                        />
                        <div className="card-content">
                            <h3 className="item-title">{item.name}</h3>
                            <p className="item-description">{item.description}</p>
                            <span className="item-price">{item.price}</span>
                            <a href="#order" className="btn btn-primary-small">Order Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedMenu;