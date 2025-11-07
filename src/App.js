"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const GooeyNav_tsx_1 = __importDefault(require("./components/GooeyNav.tsx"));
const HeroSection_tsx_1 = __importDefault(require("./components/HeroSection.tsx"));
const FeaturedMenu_tsx_1 = __importDefault(require("./components/FeaturedMenu.tsx"));
const FullMenu_tsx_1 = __importDefault(require("./components/FullMenu.tsx"));
const ReviewSection_tsx_1 = __importDefault(require("./components/ReviewSection.tsx"));
const ContactSection_tsx_1 = __importDefault(require("./components/ContactSection.tsx"));
const Footer_tsx_1 = __importDefault(require("./components/Footer.tsx")); // <-- FINAL IMPORT
const pizzaNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
];
const App = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)("header", { className: "sticky-nav-wrapper", children: (0, jsx_runtime_1.jsx)("div", { className: "goo-filter-wrap", children: (0, jsx_runtime_1.jsx)(GooeyNav_tsx_1.default, { items: pizzaNavItems }) }) }), (0, jsx_runtime_1.jsx)(HeroSection_tsx_1.default, {}), (0, jsx_runtime_1.jsx)(FeaturedMenu_tsx_1.default, {}), (0, jsx_runtime_1.jsx)(FullMenu_tsx_1.default, {}), (0, jsx_runtime_1.jsx)(ReviewSection_tsx_1.default, {}), (0, jsx_runtime_1.jsx)(ContactSection_tsx_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_tsx_1.default, {})] }));
};
exports.default = App;
//# sourceMappingURL=App.js.map