"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./ContactSection.css");
const ContactSection = () => {
    // The working iframe, correctly formatted for JSX.
    const mapIframe = ((0, jsx_runtime_1.jsx)("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.2297486956875!2d24.861562877074032!3d60.243118037544214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df7477f161353%3A0x462865775e083c35!2sVictory%20pizza!5e0!3m2!1sen!2sfi!4v1762531914016!5m2!1sen!2sfi", width: "100%" // Fills the placeholder width
        , height: "100%" // Fills the placeholder height
        , style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Victory Pizza Location Map" }));
    return ((0, jsx_runtime_1.jsxs)("section", { className: "contact-section", id: "contact", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-heading", children: "Find Your Slice of Italy" }), (0, jsx_runtime_1.jsx)("p", { className: "section-subheading", children: "Visit us or call ahead to place your order." }), (0, jsx_runtime_1.jsxs)("div", { className: "contact-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "contact-info-card", children: [(0, jsx_runtime_1.jsx)("h3", { className: "card-title", children: "Location & Hours" }), (0, jsx_runtime_1.jsx)("p", { children: "\uD83D\uDCCD **Address:** Puustellinpolku 25, 00410 Helsinki, Finland" }), (0, jsx_runtime_1.jsx)("p", { children: "\uD83D\uDCDE **Phone:** 046 8420302 (Call for quick orders!)" }), (0, jsx_runtime_1.jsx)("p", { className: "hours", children: "\u23F0 **Hours:** Mon - Sun: 09:00 - 22:00" }), (0, jsx_runtime_1.jsx)("a", { href: "victory.pizza.fi@gmail.com", className: "btn btn-contact", children: "Email Us" })] }), (0, jsx_runtime_1.jsx)("div", { className: "map-placeholder", children: mapIframe })] })] }));
};
exports.default = ContactSection;
//# sourceMappingURL=ContactSection.js.map