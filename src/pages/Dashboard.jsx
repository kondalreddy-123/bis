import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageTitle, Analyzer } from './shared';
import ComplianceScore from '../components/ComplianceScore';
export default function Dashboard(props) {
  return <><PageTitle eyebrow="INDIAN STANDARDS INTELLIGENCE PLATFORM" title="AI BIS SENSOR" text="From procurement requirement to explainable standards, compliance and procurement-ready outputs." right={<span className="demo">● Prototype Demo Environment</span>} />
    <div className="hero"><div><span className="eyebrow">AI BIS SENSOR · STANDARDS INTELLIGENCE</span><h1>Turn procurement requirements into <span>explainable standards recommendations.</span></h1><p>Describe a product, tender or technical requirement. The browser-only prototype extracts signals, ranks local demo standards and surfaces compliance gaps.</p></div><div className="hero-orb">AI</div></div>
    <div className="workflow">{['Input','AI Analysis','Standards Matching','Compliance','Procurement Report'].map((x,i)=><div key={x}><b>{i+1}</b><span>{x}</span>{i<4&&<ArrowRight size={16}/>}</div>)}</div>
    <Analyzer {...props} />
    <div className="stat-grid">{[['1,250+','Standards Indexed'],['120+','Product Categories'],['348','Analyses Completed'],['216','Compliance Checks']].map(([n,l])=><div className="stat" key={l}><b>{n}</b><span>{l}</span><small>Demo metric</small></div>)}</div>
    <div className="two-col"><div className="panel"><div className="panel-head"><h2>Recent Analyses</h2><button onClick={()=>props.setPage('Analyze Requirement')}>View all</button></div>{['LED Street Light','Electrical Cable','Water Pump','Office Chair','Cement','Safety Helmet'].map((x,i)=><button className="list-row" key={x} onClick={()=>{props.setText(props.examples[i%4]);props.setPage('Analyze Requirement')}}><span>{x}</span><span className="badge blue">Analyzed</span></button>)}</div><div className="panel"><div className="panel-head"><h2>Compliance Overview</h2><ShieldCheck/></div><ComplianceScore value={87}/><div className="overview"><span>✓ Compliant <b>12</b></span><span>⚠ Needs Review <b>4</b></span><span>✕ Missing <b>2</b></span><span>◌ Outdated <b>1</b></span></div></div></div>
  </>;
}
