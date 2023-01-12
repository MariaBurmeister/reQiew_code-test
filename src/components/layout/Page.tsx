import { FunctionComponent, ReactNode } from "react";

import './Page.scss';

export const Page : FunctionComponent<{title: string; children: ReactNode; variant?: 'header-content' | 'sidebar-content'}> = ({title, children, variant = 'header-content'}) => {
    return (
        <main id="main" className={variant}>
            <h2 className="sr-only">{title}</h2>
            {children}
        </main>
    )
};
