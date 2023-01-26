import { FunctionComponent, useState } from "react";
import { Button } from "../../Button";
import { useReviewsData } from "../../hooks&types";
import { InDepthReviews } from "../../InDepthReviews";
import { ProAccountCta } from "../../ProAccountCta";
import { Icon } from "@iconify/react";

import './AspectScoresComposite.scss';
import { DropdownSelect } from "../../DropdownSelect";
import { Score } from "../../Score";

export const AspectScoresComposite: FunctionComponent = () => {
    const {averageRating, amountOfReviews, reviewsByRate, aspectScores} = useReviewsData();
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
                </div>
                <div className="scores__container">
                    {aspectScores.map(({aspect, score, trend }, index) => (
                        <Score key={index} aspect={aspect} score={score} trend={trend}/>
                    ))}
                </div>
            </section>
        </>
    );
};