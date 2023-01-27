import { FunctionComponent, useState } from "react";
import { Button } from "../Button";
import { useReviewsData } from "../hooks&types";
import { InDepthReviews } from "../InDepthReviews";
import { ProAccountCta } from "../ProAccountCta";

import './AspectScores.scss';
import { DropdownSelect } from "../DropdownSelect";
import { Score } from "../Score";
import { FilterGroup } from "../FilterGroup";

export const AspectScores: FunctionComponent = () => {
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
                        alignItems: 'stretch',
                        justifyContent: 'flex-start',
                        background: 'white', 
                        border: '1px solid lightgray', 
                        borderRadius: '8px 0 0 8px',
                        marginRight: '.5rem',
                        padding: '0rem 1rem 0rem 2rem',
                        gap: '.5rem',
                        maxHeight: 'min-content',
                        overflow: 'scroll',   
                    }}>
                        <FilterGroup groupName="Filter Group 1">
                            <DropdownSelect label="Device Type" variant="filter" iconBefore="carbon:mobile" disabled>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter" >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Date" variant="filter" iconBefore="carbon:calendar" >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Price" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                        </FilterGroup>
                        <FilterGroup groupName="Filter Group 2">
                            <DropdownSelect label="Device Type" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>
                            <DropdownSelect label="Brand" variant="filter">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </DropdownSelect>                     
                        </FilterGroup>

                    </form>
                    }
                </div>
            </section>
            {/* CONTENT */}
            <section className="results">
                    <ProAccountCta />
                    <InDepthReviews className="in-depth-reviews" gradient="bottom" title="Reliable Reviews" titleHelp="Anti-spam filtered Reviews" averageRating={averageRating} amountOfReviews={amountOfReviews} reviewsByRate={reviewsByRate}/>
                    {aspectScores.map(({aspect, score, trend }, index) => (
                        <Score key={index} aspect={aspect} score={score} trend={trend}/>
                    ))}
            </section>
        </>
    );
};