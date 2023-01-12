import { FunctionComponent, useEffect, useRef } from "react";
import "./StarRating.scss";

export const StarRating : FunctionComponent<{rating: number}> = ({rating}) => {
    const starRating = useRef<HTMLParagraphElement>(null);

    const colorClass = rating >= 4 ? "good" : rating >= 3 ? "neutral" : "critical";
    
    useEffect(() => {
        if(starRating.current) {
            starRating.current.style.setProperty('--star-rating', (rating*100 /5).toString()+"%");
        }
    }, [starRating]);

    return (
        <p className={`star-rating ${colorClass}`} ref={starRating} aria-hidden="true">
           ★★★★★
        </p>
        );
};

