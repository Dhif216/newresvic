import React from 'react';
import './FullMenu.css'; 

// --- CONSTANTS ---
// FIX: Using one single generic URL placeholder that you can easily swap out
// This will be the URL for any item you haven't specified a unique image for.
const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1574936453000-811c75b02664?q=80&w=250&auto=format&fit=cover'; 

// --- INTERFACES ---
interface MenuItem {
    name: string;
    description: string;
    price: string;
    // The key that makes it easy to paste your custom URL
    imageUrl: string; 
}

interface MenuCategory {
    title: string;
    icon: string;
    items: MenuItem[];
}

// --- DATA STRUCTURE (Ready for direct URL pasting) ---
const FULL_MENU: MenuCategory[] = [
    {
        title: "PIZZA",
        icon: "🍕",
        items: [
            // PIZZA: All items have specific image URLs already pasted for you to replace
            { name: "Juustopizza", description: "Feta, mozzarella, cheddarjuusto", price: "11,50 €", imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=250&auto=format&fit=crop' },
            { name: "Margarita Pizza", description: "Tuoretta tomaattia, juusto", price: "10,50 €", imageUrl: 'https://www.rakijagrill.com/wp-content/uploads/2020/07/Margherita-.jpg' },
            { name: "Kinkku Pizza", description: "Kinkku, ananas, aurajuusto", price: "12,50 €", imageUrl: 'https://media.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/classic-ham-pizza-6955de43.jpg' },
            { name: "Kana Pizza", description: "Kana, ananas, juusto", price: "12,50 €", imageUrl: 'https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-9.jpg' },
            { name: "Tunnikala Pizza", description: "Tonnikala, juusto, tomaatti, sipuli", price: "12,50 €", imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuILHCz0KrBltZztrtQsYv2sZLgBwIzspO-hIYqnxYqlVlGepIMJ-jwAQjBUeb814GTjcZ_wI12VN6zLb0K94eSdYUTteZjvl3hHaCO-UAQ4ej4pa6GVN6ZdOlsftbUeWOjxsXwdTc0EY/s1600/alkirjaga+pitsa+tuuna.jpg' },
            { name: "Mexicano", description: "Pepperoni, ananas, juusto", price: "13,00 €", imageUrl: 'https://images.raasakarts.com/insecure/fit/1000/1000/ce/0/plain/https://rasakart-assets.s3.ap-south-1.amazonaws.com/3fa229/prods/zhxwqe4XFxUGlhZMNghrOzjdjps6TG3zp3V11tYV.jpg@webp' },
            { name: "Victory Specail", description: "tomaattikastike, juusto, poro, paprika, jalapeño, punasipuli", price: "14,50 €", imageUrl: 'https://i0.wp.com/sulemansweets.com/wp-content/uploads/2024/10/Sulemani-Special-Pizza.jpg?fit=1000%2C1000&ssl=1' },
            { name: "Remeo Pizza", description: "Salami, ananas, katkarapu, juusto", price: "13,50 €", imageUrl: 'https://png.pngtree.com/png-clipart/20240809/original/pngtree-a-pepperoni-pizza-png-image_15735946.png' },
            { name: "Kebab pizza", description: "Tomgatti, kebab, jalapeña, punasipuli", price: "12,50 €", imageUrl: 'https://cdn.sanity.io/images/dycwrm08/production/261e6458a058af0ee1ee3af3d94d5c97b0e41dbd-1000x997.png' },
        ]
    },
    {
        title: "BURGER / RULLAT",
        icon: "🍔",
        items: [
            // BURGERS/ROLLS: Ready for URL paste, currently using default placeholder
            { name: "Hampurilainen", description: "Naudan täyslihapihvi, salaatti, tomaatti, sipuli ja majoneesi", price: "7,50 €", imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000' },
            { name: "Juustohampurilainen", description: "Klassikko cheddarjuustolla, pihvi, salaatti, tomaatti ja kastike", price: "9,00 €", imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8' },
            { name: "Tuplajuusto", description: "Kaksi naudan täyslihapihviä ja tuplasti cheddarjuustoa", price: "8,50 €", imageUrl: 'https://media.istockphoto.com/id/117150229/photo/double-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=t8uhCixK5x80rV6CE3PBx3POekCea2Z7Gkvonzm8_tU=' },
            { name: "Falafel rulla", description: "Rapeat falafel-pyörykät, tuoreet kasvikset ja talon kastike tortillassa", price: "11,50 €", imageUrl: 'https://foodandmuchmore.com/wp-content/uploads/2024/05/image_editor_output_image877595737-17161317176393499735686903868111.jpg' },
            { name: "Kanarulla", description: "Grillattua kanaa, raikas salaatti, tomaatti ja chilimajoneesi", price: "12,50 €", imageUrl: 'https://siltakebab.fi/65/kebab-rulla.jpg' },
            { name: "Kebabrulla", description: "Maukasta kebablihaa, jäävuorisalaatti, kurkku, tomaatti ja valkosipulikastike", price: "12,50 €", imageUrl: 'https://siltakebab.fi/159/d%C3%B6ner-rulla.jpg' },
        ]
    },
    {
        title: "SALAATIT",
        icon: "🥗",
        items: [
            // SALADS: Ready for URL paste, currently using default placeholder
            { name: "Caesarsalaatti", description: "Romainesalaatti, parmesaani, krutongit ja aito Caesar-kastike", price: "11,50 €", imageUrl: 'https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg' },
            { name: "Tonnikalasalaatti", description: "Tonnikalaa, kananmunaa, oliiveja, tomaattia ja sitrusvinaigrette", price: "10,50 €", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVFgT9zi-XQkVEYvFL-Bld2FkGhqwbiq9HQ&s' },
            { name: "Vuohenjuustosalaatti", description: "Paahdettua vuohenjuustoa, punajuurta, pähkinöitä ja hunajakastike", price: "11,50 €",imageUrl: 'https://www.popravintola.fi/wp-content/uploads/salaatti.jpg' },
            { name: "Talon Pieni Salaatti", description: "Raikas pieni salaatti lisukkeeksi, talon kastikkeella", price: "4,50 €", imageUrl: 'https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/bltab5883aa7c01bc07/60ca61d8e1b3f7481347cc1f/Garden_Side_Salad.jpg' },
        ]
    },
    {
        title: "JUOMAT",
        icon: "🥤",
        items: [
            // DRINKS: Ready for URL paste, currently using default placeholder
            { name: "Limu / Juomat", description: "Coca-Cola, Coca-Cola Zero, Fanta, Sprite.", price: "3,00 €", imageUrl: 'https://jyocean.tv/cdn/shop/products/49A6_XRVALETRBP3_C_F2_341x.png?v=1624771988' },
            { name: "Kahvi / Teet", description: "Tuore kahvi tai valikoima erikoisteelaatuja", price: "2,50 €", imageUrl: 'https://juoksija.fi/wp-content/uploads/2023/10/kahvia-vai-teeta-shutterstock_704295619.jpg' },
            { name: "Mehut", description: "Kausittain vaihtuva valikoima tuoremehuja", price: "3,00 €", imageUrl: 'https://www.fastmailnews.com/upload/news/cover_pic/1683367646_juce.jpg' },
        ]
    }
];

// --- COMPONENT ---
const FullMenu: React.FC = () => {
    return (
        <section className="full-menu-section" id="full-menu">
            <h2 className="section-heading">Full Menu & Prices</h2>
            <p className="section-subheading">All your authentic Italian dishes in one place.</p>

            <div className="menu-container-wrap">
                {FULL_MENU.map((category) => (
                    <div key={category.title} className="menu-category">
                        <h3 className="category-title">
                            <span className="icon">{category.icon}</span> {category.title}
                        </h3>
                        
                        <div className="item-list">
                            {category.items.map((item) => (
                                <div key={item.name} className={`menu-item-wrapper`}>
                                    
                                    {/* Small Image Thumbnail: Renders for ALL items */}
                                    <div className="item-thumb">
                                        <img 
                                            // Uses item.imageUrl, which is always present now.
                                            src={item.imageUrl} 
                                            alt={item.name} 
                                            className="item-image-thumb" 
                                        />
                                    </div>

                                    {/* Dynamic Menu Row for all items */}
                                    <div className="menu-item-row">
                                        <div className="item-details">
                                            <div className="item-name">{item.name}</div>
                                            {/* Only render description if it's not empty */}
                                            {item.description && (
                                                <div className="item-description-small">{item.description}</div>
                                            )}
                                        </div>
                                        
                                        <div className="item-price-small">{item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FullMenu;