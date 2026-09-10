import { PageTitle, RecommendationsBlock } from './shared';
export default function Recommendations(props){return <><PageTitle eyebrow="RANKED MATCHING" title="Recommendations" text="Standards are ranked using deterministic keyword and category overlap." right={<span className="badge amber">DEMO DATA — NOT LIVE BIS DATA</span>} /><RecommendationsBlock {...props}/></>}
