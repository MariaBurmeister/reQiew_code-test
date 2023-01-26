export type Rate = 1 | 2 | 3 | 4 | 5;
export type ReviewsByRate = Record<Rate, number>;

export interface ReviewsData {
    averageRating: number;
    amountOfReviews: number;
    reviewsByRate: ReviewsByRate
    aspectScores: AspectScore[]
}

export interface AspectScore {
    aspect: string;
    description?: string;
    score: number;
    trend: Trend;
}

type Trend = 'increasing' | 'decreasing' | 'stable';

export const useReviewsData = (): ReviewsData => {
    return {
        averageRating: 3.5,
        amountOfReviews: 100,
        reviewsByRate: {
            1: 10,
            2: 20,
            3: 30,
            4: 40,
            5: 50
        },
        aspectScores : [
            {
                aspect: 'Overall',
                score: 80,  
                trend: 'increasing'
            },
            {
                aspect: 'Content',
                score: 60,
                trend: 'stable'
            },
            {
                aspect: 'Design',
                score: 90,
                trend: 'increasing'
            },
            {
                aspect: 'Usability',
                score: 80,
                trend: 'stable'
            },
            {
                aspect: 'SEO',
                score: 70,
                trend: 'stable'
            },
            {
                aspect: 'Performance',
                score: 75,
                trend: 'decreasing'
            },
            {
                aspect: 'Security',
                score: 80,
                trend: 'stable'
            },
            {
                aspect: 'Mobile',
                score: 95,
                trend: 'increasing'
            },
            {
                aspect: 'Accessibility',
                score: 50,
                trend: 'increasing'
            },
            {
                aspect: 'Privacy',
                score: 100,
                trend: 'stable'
            },
            {
                aspect: 'Social',
                score: 10,
                trend: 'decreasing'
            }
        ]
    } ;
}