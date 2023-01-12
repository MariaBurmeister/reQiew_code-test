import {FunctionComponent, ReactNode} from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Icon } from '@iconify/react';

import './NavItem.scss';


export interface NavItemProps extends Partial<NavLinkProps> {
    label: ReactNode;
    to: string;
    variant?: 'main-nav__item';
    iconBefore?: string;
    iconOnly?: boolean;
}


export const NavItem: FunctionComponent<NavItemProps> = ({label, to, variant, iconBefore, iconOnly, ...rest}) => {
    
    return  (
        <li className={`nav-item${variant? ' ' + variant : ''}`}>
            <NavLink className={`nav-item${variant? ' ' + 'main-nav__link' : ''}${iconOnly ? ' icon-only' : ''}`} to={to} {...rest}>
                {iconBefore && <Icon inline icon={iconBefore} />}
                <span className={`mandatory-label${iconOnly ? ' icon-only' : ''}`}>{label}</span>
            </NavLink>
        </li>);
; 
};