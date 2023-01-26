import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import './Card.scss';



export interface CardProps {
    title?: string;
    titleHelp?: string;
    linkTo?: string;
    onClick?: () => void;
    className?: string;
    children: ReactNode;
    //to refine:
    variant?: 'base' | 'pink' | 'blue' | 'green' | 'yellow' | 'orange';
}

export const Card : FunctionComponent<CardProps> = ({title, titleHelp, linkTo, onClick, className, children, variant = 'base'}) => {   
    return (
            <article className={`card ${variant}${linkTo || onClick ? ' clickable' : ''}${className ? ' ' + className : ''}`}>
                <header>
                    <h4 className="h2">{title}</h4>
                    <p className="help-text">{titleHelp}</p>
                </header>
                <main className="card-content">
                    {children}
                    {onClick && <button className="expanded-button" onClick={onClick}>Click me</button>}
                    {linkTo && <Link id={linkTo} className="expanded-button" to={linkTo} />}
                </main>
            </article>
    )
}