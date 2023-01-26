import { FunctionComponent } from "react";
import { Card } from "./layout";
import { Icon } from "@iconify/react";

import './Score.scss';

type Trend = 'increasing' | 'decreasing' | 'stable';

interface Score {
    aspect: string;
    description?: string;
    score: number;
    trend: Trend;
    stableRange?: [number, number];
}

export const Score: FunctionComponent<Score> = ({aspect, description, score, trend, stableRange}) => {
    const [min, max] = stableRange || [33, 66];
    const scoreQuality = score < min ? 'low' : score > max ? 'high' : 'medium';
    return (
        <Card className={`score__card score__quality__${scoreQuality}`} title={aspect} titleHelp={description || `Score out of 100`}>
            <div className="score__content">
                <p className={`h1 score__score score__quality__${scoreQuality}`}>{score} %</p>
                <div>
                    {trend === 'increasing' && <Icon inline width={45} className="h1 score__trend trend-increasing" icon="carbon:previous-filled" rotate={45}/>}
                    {trend === 'stable' && <Icon inline width={45} className="h1 score__trend trend-stable" icon="carbon:previous-filled" rotate={90}/>}
                    {trend === 'decreasing' && <Icon inline width={45} className="h1 score__trend trend-decreasing" icon="carbon:previous-filled" rotate={135}/>}
                </div>
            </div>
            <p className="score__transcript">{trend}</p>
        </Card>
    );
}; 