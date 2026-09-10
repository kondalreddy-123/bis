import { PageTitle, KnowledgeGraph } from './shared';
export default function KnowledgeGraphPage({analysis}){return <><PageTitle eyebrow="RELATIONSHIP EXPLORER" title="Knowledge Graph" text="Visualize Product → Category → Standard → Safety → Testing relationships." /><div className="panel"><KnowledgeGraph analysis={analysis}/></div></>}
