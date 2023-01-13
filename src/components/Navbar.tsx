import {DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement, Children, isValidElement, cloneElement} from "react";
import { NavItem, NavItemProps } from "./NavItem";
import './Navbar.scss';

interface NavBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    navName?: string;
    variant?: 'main-nav' | 'secondary-nav';
    children: ReactElement<NavItemProps> | ReactElement<NavItemProps>[];
}

interface ItemComposition {
    Item: FunctionComponent<NavItemProps>;
}

export const Navbar: FunctionComponent<NavBarProps> & ItemComposition = ({navName, variant='secondary-nav', children, ...rest}) => {

    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {variant: "main-nav__item"});
        }
        return child;
    });
    return (
        <nav className={`navbar ${variant}`} role='navigation' aria-label={navName} {...rest}>
            <ul>
                {childrenWithProps}
            </ul>
        </nav>
    );
};

Navbar.Item = NavItem;
