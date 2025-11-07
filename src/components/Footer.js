"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./Footer.css");
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "site-footer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-brand", children: [(0, jsx_runtime_1.jsx)("h3", { children: "VICTORY PIZZA" }), (0, jsx_runtime_1.jsx)("p", { className: "tagline", children: "Authentic Italian taste in Finland." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "footer-info", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Contact & Find Us" }), (0, jsx_runtime_1.jsx)("p", { children: "Puustellinpolku 25" }), (0, jsx_runtime_1.jsx)("p", { children: "00410 Helsinki, Finland" }), (0, jsx_runtime_1.jsx)("p", { children: "Phone: 046 8420302" }), (0, jsx_runtime_1.jsx)("a", { href: "victory.pizza.fi@gmail.com", children: "info@victorypizza.fi" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "footer-copyright", children: (0, jsx_runtime_1.jsxs)("p", { children: ["\u00A9 ", new Date().getFullYear(), " Victory Pizza. All rights reserved This site do not collect data or cockies."] }) })] }));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map