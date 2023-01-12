import { FunctionComponent } from "react"
import { StarRating } from "./StarRating";

import "./AverageRating.scss";

export const AverageRating : FunctionComponent<{rating: number; amountOfReviews: number}> = ({rating, amountOfReviews}) => {
    const colorClass = rating >= 4 ? "good" : rating >= 3 ? "neutral" : "critical";

    return (
        <article className="average-rating">
            <p aria-label="average rating" className={`average__rating-ratio ${colorClass}`}>
                <strong className="average__rating-ratio__highlight">{rating}</strong>
                /5
            </p>
            <StarRating rating={rating} />
            <p aria-label="total amount of reviews" className="average__review-amount__highlight">{amountOfReviews}</p>
            <p aria-hidden>Reviews</p>
        </article>
    )
}
