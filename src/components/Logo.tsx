import { FunctionComponent } from "react";
import { logo } from "../assets";

import './Logo.scss';

export type SemanticTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'img';
export type StyleTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';



export const Logo: FunctionComponent<{semanticTag: SemanticTag; styleTag?: StyleTag; variant?: 'main-nav'}> = ({ semanticTag, styleTag, variant }) => {
    switch (semanticTag) {
        case 'h1':
            return <h1 className={`logo ${variant ? 'main-nav__logo' : styleTag}`}>ReQiew</h1>;
        case 'h2':
            return <h2 className={`logo ${styleTag}`}>ReQiew</h2>;
        case 'h3':
            return <h3 className={`logo ${styleTag}`}>ReQiew</h3>;
        case 'h4':
            return <h4 className={`logo ${styleTag}`}>ReQiew</h4>;
        case 'h5':
            return <h5 className={`logo ${styleTag}`}>ReQiew</h5>;
        case 'h6':
            return <h6 className={`logo ${styleTag}`}>ReQiew</h6>;
        case 'p':
            return <p className={`logo ${styleTag}`}>ReQiew</p>;
        case 'img':
            return <img className="logo" width={30} height={30} src={logo} alt="ReQiew" />;
    }
};
