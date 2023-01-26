import { FunctionComponent, ReactElement, SelectHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";

import './DropdownSelect.scss';

interface DropdownSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    iconBefore?: string;
    iconOnly?: boolean;
    variant?: 'main-nav' | 'filter';
    children: ReactElement<DropdownSelectProps> | ReactElement<DropdownSelectProps>[];
}


export const DropdownSelect : FunctionComponent<DropdownSelectProps> = ({label, iconBefore, iconOnly, variant, children, disabled, ...rest}) => {


    return (
        <label className={`button-face__container dropdown-select ${variant} ${iconOnly ? 'icon-only' : ''} ${disabled ? 'disabled' : ''}`}>
            {iconBefore && <Icon aria-hidden inline icon={iconBefore}/>}

            <span className={`button-face__mandatory-label ${iconOnly && 'icon-only'}`}>{label}</span>

            <Icon aria-hidden inline icon='carbon:caret-down'/>
            
            <select className="button-face__adjacent expanded" disabled={disabled} {...rest}>
                {children}
            </select>
        </label>
                
    );
};