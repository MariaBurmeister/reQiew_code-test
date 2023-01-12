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

export const DropdownSelect : FunctionComponent<DropdownSelectProps> = ({label, iconBefore, iconOnly, variant, children, ...rest}) => {

    return (
        <label className={`dropdown-select ${variant}${iconOnly ? ' icon-only' : ''}`}>
            {iconBefore && <Icon inline icon={iconBefore}/>}
            <span className={`collapsable${iconOnly ? ' icon-only' : ''}`}>
                <span className="mandatory-label">
                    {label}
                </span>
                <Icon inline icon='carbon:caret-down'/>
            </span>
            
            <select className="dropdown-select__select-input expanded-button" {...rest}>
                {children}
            </select>
      </label>
    );
};