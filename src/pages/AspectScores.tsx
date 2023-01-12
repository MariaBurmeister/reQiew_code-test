import { FunctionComponent } from "react";
import { Page } from "../components/layout";
import { AspectScoresComposite } from "../components/composites";

const AspectScores: FunctionComponent = () => {
    return (
        <Page title="Aspect Scores" variant="header-content">
            <AspectScoresComposite/>
        </Page>
    );
};

export default AspectScores;