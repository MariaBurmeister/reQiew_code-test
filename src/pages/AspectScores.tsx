import { FunctionComponent } from "react";
import { Page } from "../components/layout";
import { AspectScores as AspectScoresComposite } from "../components/composites";

const AspectScores: FunctionComponent = () => {
    return (
        <Page title="Aspect Scores" variant="sidebar-content">
            <AspectScoresComposite/>
        </Page>
    );
};

export default AspectScores;