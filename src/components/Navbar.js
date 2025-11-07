"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
// 2. Define the links for the Victory Pizza site
const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
];
// 3. Define the Navbar component
const Navbar = () => {
    // We'll use simple inline styles for now. You can put this in a separate CSS file later.
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        backgroundColor: '#ff6b35', // Your primary-color
        color: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    };
    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        margin: '0 15px',
        fontWeight: '600',
        transition: 'color 0.3s',
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { style: navStyle, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontSize: '1.8rem', fontWeight: '900', letterSpacing: '1px' }, children: "VICTORY PIZZA" }), (0, jsx_runtime_1.jsx)("div", { children: navLinks.map((link) => (
                // In a real app, you would use a 'Link' component from a router library (like react-router-dom) here.
                (0, jsx_runtime_1.jsx)("a", { href: link.path, style: linkStyle, children: link.label }, link.path))) })] }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map