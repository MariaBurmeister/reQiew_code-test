import { Card } from "./layout";
import { Icon } from "@iconify/react";

import "./ProAccountCta.scss";

export const ProAccountCta = () => {
    const {isPro} = {isPro: true} // to implement session Context;
    return (
            <Card 
                title={`Pro Version is ${isPro ? 'ON' : 'OFF'}`} 
                titleHelp="You have access to all functions" 
                linkTo="/account"
                variant="blue"
                gradient="top"
                >
                <span className="pro-account-cta__content">
                    <label  htmlFor="/account"> Edit Subscription</label>
                    <Icon className="pro-account-cta__icon" inline icon="carbon:ticket"/>
                </span>
            </Card>
    );
};