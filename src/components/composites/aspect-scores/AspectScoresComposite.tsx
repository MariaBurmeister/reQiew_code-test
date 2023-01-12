import { FunctionComponent, useState } from "react";
import { Button } from "../../Button";
import { useReviews } from "../../hooks&types";
import { InDepthReviews } from "../../InDepthReviews";
import { Card } from "../../layout";
import { ProAccountCta } from "../../ProAccountCta";
import { Icon } from "@iconify/react";

import './AspectScoresComposite.scss';

export const AspectScoresComposite: FunctionComponent = () => {
    const {averageRating, amountOfReviews, reviewsByRate} = useReviews();
    const [showFilters, setShowFilters] = useState(false);
    const [positionFilters, setPositionFilters] = useState<'header' | 'sidebar'>('sidebar');


    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    }

    return (
        <>
            {/* FILTERS */}
            <section className="page__header">
                <div className={`filters__${positionFilters}-container`}>
                    <Button variant={`${positionFilters}-toggle`} label="show filters" iconOnly iconBefore="carbon:settings-adjust" onClick={toggleFilters}/>
                    {showFilters && 
                    <div className="filters" style={{background: 'white', borderRadius: '8px 0 0 8px', border: '1px solid lightgray', marginRight: '.5rem'}}></div>}
                </div>
            </section>
            {/* CONTENT */}
            <section className="results">
                <div className="column-1">
                <ProAccountCta/>
                <InDepthReviews title="Reliable Reviews" titleHelp="Anti-spam filtered Reviews" averageRating={averageRating} amountOfReviews={amountOfReviews} reviewsByRate={reviewsByRate}/>
                <InDepthReviews title="Reliable Reviews" titleHelp="Anti-spam filtered Reviews" averageRating={averageRating} amountOfReviews={amountOfReviews} reviewsByRate={reviewsByRate}/>
                </div>
                <div className="scores__container">
                    <Card title="Quality" titleHelp="Score out of 100">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                    <Card title="Quality" titleHelp="Score out of 100" className="score__card">
                        <div className="score__content">
                            <p className="h1">90%</p>
                            <Icon inline className="h1" icon="carbon:arrow-up"/>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    );
};