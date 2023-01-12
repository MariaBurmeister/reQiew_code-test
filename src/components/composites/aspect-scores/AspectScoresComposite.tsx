import { FunctionComponent, useState } from "react";
import { Button } from "../../Button";
import { useReviews } from "../../hooks&types";
import { InDepthReviews } from "../../InDepthReviews";
import { Card } from "../../layout";
import { ProAccountCta } from "../../ProAccountCta";
import { Icon } from "@iconify/react";

import './AspectScoresComposite.scss';
import { DropdownSelect } from "../../DropdownSelect";

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
                    <Button 
                        variant={`${positionFilters}-toggle`} 
                        label="show filters" 
                        iconOnly 
                        iconBefore={
                            positionFilters === "header" ? 
                            showFilters ? "carbon:caret-up" : "carbon:caret-down" : 
                            showFilters ? "carbon:caret-right" : "carbon:caret-left"
                        } 
                        onClick={toggleFilters}
                    />
                    {showFilters && 
                    <form className="filters" id="filters" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        background: 'white', 
                        borderRadius: '8px 0 0 8px', 
                        border: '1px solid lightgray', 
                        marginRight: '.5rem',
                        gap: '1rem',
                        maxHeight: 'min-content'         
                    }}>
                        <fieldset style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            borderRadius: '8px', 
                            padding: '1rem',
                            margin: '1rem 0'
                        }}>

                            <DropdownSelect label="Device Type" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Date" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Price" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                        </fieldset>
                        <fieldset style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            borderRadius: '8px', 
                            padding: '1rem'
                        }}>

                            <DropdownSelect label="Device Type" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>                     
                        </fieldset>

                    </form>
                    }
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