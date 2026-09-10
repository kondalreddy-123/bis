import { PageTitle, AIChat } from './shared';
export default function AIAssistant({analysis}){return <><PageTitle eyebrow="LOCAL AI" title="AI Assistant" text="BIS Standards Assistant — deterministic local responses, no API or secret key." /><div className="panel"><AIChat analysis={analysis}/></div></>}
