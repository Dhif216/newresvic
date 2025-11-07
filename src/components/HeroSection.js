"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./HeroSection.css");
const hero_pizza_mp4_1 = __importDefault(require("/assets/hero.pizza.mp4"));
const TextPressure_tsx_1 = __importDefault(require("./TextPressure.tsx")); // Import the new component
const HeroSection = () => {
    return (
    // FIX: Moved comment outside the JSX return for correct parsing
    (0, jsx_runtime_1.jsxs)("section", { className: "hero-section", id: "home", children: [(0, jsx_runtime_1.jsxs)("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "hero-video-bg", children: [(0, jsx_runtime_1.jsx)("source", { src: hero_pizza_mp4_1.default, type: "video/mp4" }), "Your browser does not support the video tag."] }), (0, jsx_runtime_1.jsxs)("div", { className: "hero-content-overlay", children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-text-pressure-container", children: (0, jsx_runtime_1.jsx)(TextPressure_tsx_1.default, { text: "VICTORY PIZZA", 
                            // Customize properties here: 
                            textColor: "#FFFFFF", strokeColor: "var(--primary-color)" // Use your orange for the stroke effect
                            , stroke: true, alpha: false, flex: true, width: true, weight: true, minFontSize: 50 }) }), (0, jsx_runtime_1.jsx)("p", { className: "hero-tagline", children: "Authentic Italian Taste in the Heart of Finland." }), (0, jsx_runtime_1.jsxs)("div", { className: "hero-buttons", children: [(0, jsx_runtime_1.jsx)("a", { href: "#menu", className: "btn btn-primary", children: "View Our Full Menu" }), (0, jsx_runtime_1.jsx)("a", { href: "#contact", className: "btn btn-secondary", children: "Find Our Location" })] })] })] }));
};
exports.default = HeroSection;
//# sourceMappingURL=HeroSection.js.map