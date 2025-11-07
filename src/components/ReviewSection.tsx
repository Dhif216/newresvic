import React, { useState, useEffect } from 'react';
import './ReviewSection.css'; 

// TypeScript Interfaces for Review Data
interface Review {
    id: number;
    author: string;
    rating: number;
    text: string;
}

// Simulated Review Data (Pre-fetched from Google)
const MOCK_REVIEWS: Review[] = [
    { id: 1, author: "Mikael K.", rating: 5, text: "Best Neapolitan pizza in Helsinki! The crust is perfect, and the service is always quick and friendly. A true taste of Italy." },
    { id: 2, author: "Sofia A.", rating: 5, text: "The Victory Special is a game-changer. Loved the fresh toppings and the spicy kick. The atmosphere is warm and welcoming." },
    { id: 3, author: "Elias V.", rating: 4, text: "Great burgers and the prices are reasonable. Delivery was fast. Would definitely recommend the Caesar salad too!" },
    { id: 4, author: "Jenni M.", rating: 5, text: "Five stars! High quality ingredients make all the difference. This is our new go-to pizza place in Puistola." },
];

const ReviewSection: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState<Review[]>([]);
    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

    // Simulate fetching data from a service (like a Google Reviews API/Widget)
    useEffect(() => {
        const timer = setTimeout(() => {
            setReviews(MOCK_REVIEWS);
            setLoading(false);
        }, 1000); // 1 second loading delay

        return () => clearTimeout(timer);
    }, []);

    const renderStars = (rating: number) => {
        const fullStar = '★';
        const emptyStar = '☆';
        return Array(5).fill(null).map((_, i) => (
            <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
                {i < rating ? fullStar : emptyStar}
            </span>
        ));
    };

    return (
        <section className="review-section" id="reviews">
            <h2 className="section-heading">Customer Love</h2>
            <p className="section-subheading">Straight from Google: Our latest reviews.</p>

            {loading ? (
                <div className="loader">Loading Google Reviews...</div>
            ) : (
                <>
                    {/* Average Score Display */}
                    <div className="average-rating-box">
                        <p className="rating-score">{averageRating}</p>
                        <div className="rating-details">
                            <div className="stars-container">
                                {renderStars(Math.round(parseFloat(averageRating)))}
                            </div>
                            <p>{reviews.length} reviews on Google</p>
                        </div>
                    </div>
                    
                    {/* Reviews Carousel/Grid */}
                    <div className="reviews-grid">
                        {reviews.map(review => (
                            <div key={review.id} className="review-card">
                                <div className="card-header">
                                    <span className="review-author">{review.author}</span>
                                    <div className="stars">{renderStars(review.rating)}</div>
                                </div>
                                <p className="review-text">"{review.text}"</p>
                                <span className="google-source">Source: Google</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default ReviewSection;