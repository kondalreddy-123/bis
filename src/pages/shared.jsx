import { ArrowRight, AlertTriangle, Check, FileDown, Printer } from 'lucide-react';
import ConfidenceScore from '../components/ConfidenceScore';
import ComplianceScore from '../components/ComplianceScore';
import SafetyChecklist from '../components/SafetyChecklist';
import FileUpload from '../components/FileUpload';
import StandardCard from '../components/StandardCard';
import StandardTable from '../components/StandardTable';
import KnowledgeGraph from '../components/KnowledgeGraph';
import AIChat from '../components/AIChat';

export function PageTitle({ eyebrow, title, text, right }) {
  return <div className="page-title"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{right}</div>;
}

export function Analyzer({ text, setText, loading, runAnalysis, examples, speechLang, analysis }) {
  const voice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setText('Voice input is not supported in this browser.'); return; }
    const recognition = new SR();
    recognition.lang = speechLang;
    recognition.onresult = (event) => setText(event.results[0][0].transcript);
    recognition.onerror = () => {};
    recognition.start();
  };
  return <>
    <div className="panel"><div className="panel-head"><div><h2>Analyze Requirement</h2><p>Describe a product, tender or technical requirement in natural language.</p></div><span className="badge amber">PROTOTYPE / DEMO DATA</span></div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Example: Need LED street lights for outdoor municipal roads with energy efficiency..." />
      <div className="example-row">{examples.map((e, i) => <button key={i} onClick={() => setText(e)}>Example {i + 1}</button>)}</div>
      <div className="actions"><button className="primary" onClick={() => runAnalysis()} disabled={loading}>{loading ? 'Analyzing…' : <>Analyze <ArrowRight size={17} /></>}</button><button className="secondary" onClick={() => setText('')}>Clear</button><button className="voice" onClick={voice}>🎙 Voice Search</button></div>
    </div>
    {loading && <div className="panel"><div className="analysis-steps">{['Understanding requirement','Extracting specifications','Identifying product category','Matching Indian Standards','Checking compliance','Generating recommendations'].map((x, i) => <div key={x} className="step"><span>{i + 1}</span>{x}<i /></div>)}</div></div>}
    {!loading && analysis && <AnalysisResult analysis={analysis} />}
  </>;
}

export function AnalysisResult({ analysis }) {
  return <div className="analysis-result panel"><div className="panel-head"><div><span className="eyebrow">SYSTEM-GENERATED PROTOTYPE RESULT</span><h2>{analysis.product}</h2><p>{analysis.category} · {analysis.application}</p></div><ConfidenceScore value={analysis.confidence} breakdown={analysis.breakdown} /></div><div className="result-grid"><div><h4>Extracted specifications</h4>{analysis.specifications.map(x => <span className="pill" key={x}>✓ {x}</span>)}</div><div><h4>Safety requirements</h4>{analysis.safety.map(x => <span className="pill" key={x}>◈ {x}</span>)}</div><div><h4>Testing requirements</h4>{analysis.testing.map(x => <span className="pill" key={x}>◌ {x}</span>)}</div></div></div>;
}

export function RecommendationsBlock({ analysis, favorites, toggleFavorite, setPage, setModal }) {
  if (!analysis) return <div className="panel"><h3>No analysis yet</h3><p>Run an analysis to generate ranked recommendations.</p><button className="primary" onClick={() => setPage('Analyze Requirement')}>Analyze requirement</button></div>;
  return <><div className="recommend-grid">{analysis.recommendations.map(s => <StandardCard key={s.id} s={s} fav={favorites.includes(s.id)} onFav={() => toggleFavorite(s.id)} onCompare={() => setPage('Compare Standards')} onWhy={() => setModal(s)} />)}</div><div className="panel disclaimer">This demonstration uses a local prototype standards dataset. Always verify applicable requirements against official BIS publications before procurement.</div></>;
}

export function ComplianceBlock({ analysis, checks, setChecks, score = 87 }) {
  return <div className="two-col"><div className="panel"><ComplianceScore value={analysis ? score : 72} /><div className="compliance-items"><div><Check /> Product category covered</div><div><Check /> Safety requirement identified</div><div><Check /> Testing requirement identified</div><div className="warn"><AlertTriangle /> Installation requirement needs review</div><div className="bad">✕ Maintenance evidence not specified</div></div></div><div className="panel"><h2>Safety Checklist</h2><SafetyChecklist items={checks} onToggle={i => setChecks(c => c.map((x, j) => j === i ? { ...x, done: !x.done } : x))} /></div></div>;
}

export { StandardTable, FileUpload, KnowledgeGraph, AIChat, FileDown, Printer };
