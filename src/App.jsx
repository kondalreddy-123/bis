import { useEffect, useMemo, useState } from 'react';
import { Search, FileDown, Printer, Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Toast from './components/Toast';
import Modal from './components/Modal';
import { analyze, examples } from './services/analysisService';
import { makeReport } from './services/reportService';
import { buildProcurementSpec } from './services/procurementService';
import { get, set, clear } from './services/storageService';
import { standards } from './data/standards';
import Dashboard from './pages/Dashboard';
import Analyze from './pages/Analyze';
import Recommendations from './pages/Recommendations';
import Compare from './pages/Compare';
import Compliance from './pages/Compliance';
import KnowledgeGraphPage from './pages/KnowledgeGraphPage';
import AIAssistant from './pages/AIAssistant';
import TenderDocuments from './pages/TenderDocuments';
import Reports from './pages/Reports';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';

const speechLanguages = {
  English: 'en-IN', हिन्दी: 'hi-IN', తెలుగు: 'te-IN', தமிழ்: 'ta-IN', ಕನ್ನಡ: 'kn-IN',
  മലയാളം: 'ml-IN', मराठी: 'mr-IN', বাংলা: 'bn-IN', ગુજરાતી: 'gu-IN', ਪੰਜਾਬੀ: 'pa-IN', 'ଓଡ଼ିଆ':'or-IN', 'অসমীয়া':'as-IN', 'اردو':'ur-IN', 'संस्कृतम्':'sa-IN', 'कॉशुर':'ks-IN', 'कोंकणी':'kok-IN', 'मैथिली':'mai-IN', 'नेपाली':'ne-NP', 'মৈতৈলোন্':'mni-IN', 'سنڌي':'sd-IN', 'बड़ो':'brx-IN', 'संताली':'sat-IN'
};

function App() {
  const [page, setPage] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(get('lang', 'English'));
  const [theme, setTheme] = useState(get('theme', 'light'));
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState(() => get('analysis', null));
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(get('favorites', []));
  const [checks, setChecks] = useState(get('checks', [
    { text: 'Electrical safety', done: true },
    { text: 'Installation safety', done: true },
    { text: 'Environmental protection', done: false },
    { text: 'Testing requirements', done: true },
    { text: 'Maintenance requirements', done: false }
  ]));
  const [alerts, setAlerts] = useState(get('alerts', [
    { id: 1, type: 'Outdated Standard', text: 'Review selected standard status before final procurement.', read: false },
    { id: 2, type: 'Missing Requirement', text: 'Installation requirement has not been specified.', read: false },
    { id: 3, type: 'Safety Warning', text: 'Environmental protection needs review.', read: false }
  ]));

  useEffect(() => { set('lang', lang); }, [lang]);
  useEffect(() => { set('theme', theme); document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { set('favorites', favorites); }, [favorites]);
  useEffect(() => { set('checks', checks); }, [checks]);
  useEffect(() => { set('alerts', alerts); }, [alerts]);
  useEffect(() => { if (analysis) set('analysis', analysis); }, [analysis]);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  };

  const runAnalysis = (input = text) => {
    if (!input.trim()) {
      showToast('Enter a requirement first');
      return;
    }
    setText(input);
    setLoading(true);
    window.setTimeout(() => {
      const result = analyze(input);
      setAnalysis(result);
      setLoading(false);
      set('recentAnalyses', [{ id: Date.now(), text: input, product: result.product, confidence: result.confidence }, ...get('recentAnalyses', [])].slice(0, 10));
      setPage('Recommendations');
      showToast('Analysis completed');
    }, 650);
  };

  const toggleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  };

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return standards;
    return standards.filter((s) => [s.standardNumber, s.title, s.category, s.domain, ...s.products, ...s.technicalKeywords]
      .join(' ').toLowerCase().includes(q));
  }, [query]);

  const report = analysis ? makeReport(analysis, checks) : '';
  const procurementSpec = analysis ? buildProcurementSpec(analysis) : '';

  const download = (name, body) => {
    const blob = new Blob([body], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  };

  const pageProps = {
    analysis, text, setText, loading, runAnalysis, examples,
    favorites, toggleFavorite, setPage, setModal, checks, setChecks,
    alerts, setAlerts, report, procurementSpec, download, showToast,
    lang, speechLang: speechLanguages[lang] || 'en-IN',
    query, setQuery, searchResults, theme, setTheme, setLang,
    clearLocal: () => { clear(); window.location.reload(); }
  };

  let content;
  if (page === 'Dashboard') content = <Dashboard {...pageProps} />;
  else if (page === 'Analyze Requirement') content = <Analyze {...pageProps} />;
  else if (page === 'Recommendations') content = <Recommendations {...pageProps} />;
  else if (page === 'Compare Standards') content = <Compare {...pageProps} />;
  else if (page === 'Compliance') content = <Compliance {...pageProps} />;
  else if (page === 'Knowledge Graph') content = <KnowledgeGraphPage {...pageProps} />;
  else if (page === 'AI Assistant') content = <AIAssistant {...pageProps} />;
  else if (page === 'Tender Documents') content = <TenderDocuments {...pageProps} />;
  else if (page === 'Reports') content = <Reports {...pageProps} />;
  else if (page === 'Alerts') content = <Alerts {...pageProps} />;
  else if (page === 'Settings') content = <Settings {...pageProps} />;
  else content = <SearchPage {...pageProps} />;

  return (
    <div className="app">
      <Sidebar page={page} setPage={(p) => { setPage(p); setMenuOpen(false); }} open={menuOpen} setOpen={setMenuOpen} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <div className="main">
        <Header lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} onSearch={(q) => { setQuery(q); set('recentSearches', [q, ...get('recentSearches', [])].filter(Boolean).slice(0, 10)); setPage('Search'); }} />
        <main>{content}</main>
      </div>
      {modal && (
        <Modal title="Why recommended?" onClose={() => setModal(null)}>
          <div className="why">
            <div className="why-score"><b>{modal.score}%</b><span>overall match</span></div>
            {[['Product Match', 95], ['Technical Match', 91], ['Application Match', 94], ['Safety Match', 89]].map(([label, value]) => (
              <div key={label}><span>{label}</span><strong>{value}%</strong><div className="bar"><i style={{ width: `${value}%` }} /></div></div>
            ))}
            <p>The recommendation uses explainable prototype scoring across product, technical, application and safety concepts. It is not a certification or official BIS determination.</p>
          </div>
        </Modal>
      )}
      <Toast message={toast} />
    </div>
  );
}

function SearchPage({ query, setQuery, searchResults, analysis }) {
  return (
    <>
      <div className="page-title"><div><span className="eyebrow">GLOBAL SEARCH</span><h1>Standards Search</h1><p>Search the local prototype dataset by standard, product, category or keyword.</p></div></div>
      <div className="panel">
        <div className="search-line"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search LED, cable, cement, helmet..." /></div>
        <div className="table-wrap"><table><thead><tr><th>Standard</th><th>Title</th><th>Latest version</th><th>Domain</th><th>Match</th></tr></thead><tbody>
          {searchResults.map((s) => <tr key={s.id}><td><b>{s.standardNumber}</b></td><td>{s.title}</td><td>{s.latestVersion}<br/><small>{s.latestAmendment}</small></td><td>{s.domain}</td><td><strong>{analysis?.recommendations?.find((x) => x.id === s.id)?.score || '—'}%</strong></td></tr>)}
        </tbody></table></div>
      </div>
    </>
  );
}

export default App;
