export type Rate = 1 | 2 | 3 | 4 | 5;
export type ReviewsByRate = Record<Rate, number>;

export interface ReviewsData {
    averageRating: number;
    amountOfReviews: number;
    reviewsByRate: ReviewsByRate
}


export const useReviews = (): ReviewsData => {
    return {
        averageRating: 3.5,
        amountOfReviews: 100,
        reviewsByRate: {
            1: 10,
            2: 20,
            3: 30,
            4: 40,
            5: 50
        }
    } ;
}