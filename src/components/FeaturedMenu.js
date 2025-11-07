"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./FeaturedMenu.css");
// 2. Define the static data for featured items
const FEATURED_ITEMS = [
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
const FeaturedMenu = () => {
    return ((0, jsx_runtime_1.jsxs)("section", { className: "featured-menu-section", id: "menu", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-heading", children: "Our Featured Masterpieces" }), (0, jsx_runtime_1.jsx)("p", { className: "section-subheading", children: "Hand-picked favorites for the authentic Italian experience." }), (0, jsx_runtime_1.jsx)("div", { className: "menu-grid", children: FEATURED_ITEMS.map((item) => ((0, jsx_runtime_1.jsxs)("div", { className: "menu-card", children: [(0, jsx_runtime_1.jsx)("img", { src: item.imagePath, alt: item.name, className: "menu-image" }), (0, jsx_runtime_1.jsxs)("div", { className: "card-content", children: [(0, jsx_runtime_1.jsx)("h3", { className: "item-title", children: item.name }), (0, jsx_runtime_1.jsx)("p", { className: "item-description", children: item.description }), (0, jsx_runtime_1.jsx)("span", { className: "item-price", children: item.price }), (0, jsx_runtime_1.jsx)("a", { href: "#order", className: "btn btn-primary-small", children: "Order Now" })] })] }, item.id))) })] }));
};
exports.default = FeaturedMenu;
//# sourceMappingURL=FeaturedMenu.js.map