import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { Icon } from '@iconify/react';

import './Button.scss';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: ReactNode;
    variant?: 'primary' | 'secondary' | 'main-nav' | 'header-toggle' | 'sidebar-toggle';
    iconBefore?: string;
    iconOnly?: boolean;
    onClick: (e?: React.MouseEvent) => void
  } ;

export const Button: FunctionComponent<ButtonProps> = ({label, variant='primary', iconBefore, iconOnly, children, onClick, ...rest}) => {
  return (
        <button {...rest} className={`${variant}${iconOnly ? ' icon-only' : ''}` } onClick={onClick}>
            {iconBefore && <Icon inline icon={iconBefore} />}
            {label && <span className={`mandatory-label${iconOnly ? ' icon-only' : ''}`}>{label}</span>}
        </button>
    );
}
