import { FunctionComponent } from "react";
import { AverageRating } from "./AverageRating";
import { ReviewsByRate as ReviewsByRateType, Rate } from "./hooks&types";
import { Card, CardProps } from "./layout";
import { ReviewsByRate } from "./ReviewsByRate";

import "./InDepthReviews.scss";

interface InDepthReviewsProps extends Omit<CardProps, 'children'> {
    averageRating: number;
    amountOfReviews: number;
    reviewsByRate: ReviewsByRateType
}

const rates: Rate[] = [1, 2, 3, 4, 5];

export const InDepthReviews : FunctionComponent<InDepthReviewsProps> = ({averageRating, amountOfReviews, reviewsByRate, ...props}) => {


    return (
        <Card {...props}>
            <AverageRating rating={averageRating} amountOfReviews={amountOfReviews}/>
            {rates.map((rate) => <ReviewsByRate key={rate} rate={rate} amount={reviewsByRate[rate]} />)}
        </Card>
    )
}