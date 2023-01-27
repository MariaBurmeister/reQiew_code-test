import { FunctionComponent } from "react"
import { Rate } from "./hooks&types";

import "./ReviewsByRate.scss";

export const ReviewsByRate: FunctionComponent<{rate: Rate; amount: number}> = ({rate, amount}) => {
    const colorClass = rateMap[rate].range;

    return (
        <article className={`reviews-by-rate ${colorClass}`} aria-labelledby="rate">
            <p aria-label={`Amount of ${rate} reviews`} className="by-rate__review-amount__highlight">{amount}</p>
            <div className={`by-rate__progress ${colorClass}`}>
                <progress aria-label={`Percentage of ${rate} stars reviews`} value={amount} max="100"/>
                <p>{rateMap[rate].stars}</p>
            </div>
            <p id="rate" className={`by-rate__rating-ratio ${colorClass}`}>
                <strong className="by-rate__rating-ratio__highlight">{rate}</strong>
                {rate > 1 ? ' stars' : ' star'}
            </p>
            <p aria-hidden>Reviews</p>
        </article>
    );
}

type RateRange = 'good' | 'neutral-good' | 'neutral' | 'neutral-bad' | 'critical';
const rateMap: Record<Rate , {range: RateRange, stars: string}> = {
    1: {range: 'critical', stars: '★'},
    2: {range: 'neutral-bad', stars: '★★'},
    3: {range: 'neutral', stars: '★★★'},
    4: {range: 'neutral-good', stars: '★★★★'},
    5: {range: 'good', stars: '★★★★★'}
};

