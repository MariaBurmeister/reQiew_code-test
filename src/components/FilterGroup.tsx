import { DetailedHTMLProps, FieldsetHTMLAttributes, FunctionComponent, ReactNode } from "react";

interface FilterGroup extends DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> {
    groupName: string;
    children: ReactNode;
}

export const FilterGroup: FunctionComponent<FilterGroup> = ({children, groupName, ...rest}) => {
    return (
        <fieldset style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '.5rem',
            padding: '1rem 1rem 1.5rem 1rem',
            alignItems: 'flex-start',
            borderRadius: '8px', 
            margin: '1rem 0'
        }} 
          {...rest}
        >
            <legend>{groupName}</legend>
            {children}
        </fieldset>
    );
};