"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
require("./ReviewSection.css");
// Simulated Review Data (Pre-fetched from Google)
const MOCK_REVIEWS = [
    { id: 1, author: "Mikael K.", rating: 5, text: "Best Neapolitan pizza in Helsinki! The crust is perfect, and the service is always quick and friendly. A true taste of Italy." },
    { id: 2, author: "Sofia A.", rating: 5, text: "The Victory Special is a game-changer. Loved the fresh toppings and the spicy kick. The atmosphere is warm and welcoming." },
    { id: 3, author: "Elias V.", rating: 4, text: "Great burgers and the prices are reasonable. Delivery was fast. Would definitely recommend the Caesar salad too!" },
    { id: 4, author: "Jenni M.", rating: 5, text: "Five stars! High quality ingredients make all the difference. This is our new go-to pizza place in Puistola." },
];
const ReviewSection = () => {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [reviews, setReviews] = (0, react_1.useState)([]);
    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
    // Simulate fetching data from a service (like a Google Reviews API/Widget)
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setReviews(MOCK_REVIEWS);
            setLoading(false);
        }, 1000); // 1 second loading delay
        return () => clearTimeout(timer);
    }, []);
    const renderStars = (rating) => {
        const fullStar = '★';
        const emptyStar = '☆';
        return Array(5).fill(null).map((_, i) => ((0, jsx_runtime_1.jsx)("span", { className: i < rating ? 'star-filled' : 'star-empty', children: i < rating ? fullStar : emptyStar }, i)));
    };
    return ((0, jsx_runtime_1.jsxs)("section", { className: "review-section", id: "reviews", children: [(0, jsx_runtime_1.jsx)("h2", { className: "section-heading", children: "Customer Love" }), (0, jsx_runtime_1.jsx)("p", { className: "section-subheading", children: "Straight from Google: Our latest reviews." }), loading ? ((0, jsx_runtime_1.jsx)("div", { className: "loader", children: "Loading Google Reviews..." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "average-rating-box", children: [(0, jsx_runtime_1.jsx)("p", { className: "rating-score", children: averageRating }), (0, jsx_runtime_1.jsxs)("div", { className: "rating-details", children: [(0, jsx_runtime_1.jsx)("div", { className: "stars-container", children: renderStars(Math.round(parseFloat(averageRating))) }), (0, jsx_runtime_1.jsxs)("p", { children: [reviews.length, " reviews on Google"] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "reviews-grid", children: reviews.map(review => ((0, jsx_runtime_1.jsxs)("div", { className: "review-card", children: [(0, jsx_runtime_1.jsxs)("div", { className: "card-header", children: [(0, jsx_runtime_1.jsx)("span", { className: "review-author", children: review.author }), (0, jsx_runtime_1.jsx)("div", { className: "stars", children: renderStars(review.rating) })] }), (0, jsx_runtime_1.jsxs)("p", { className: "review-text", children: ["\"", review.text, "\""] }), (0, jsx_runtime_1.jsx)("span", { className: "google-source", children: "Source: Google" })] }, review.id))) })] }))] }));
};
exports.default = ReviewSection;
//# sourceMappingURL=ReviewSection.js.map