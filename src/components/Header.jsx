import { Menu, Search, Command, Globe2 } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Header({ onMenu, onSearch, lang, setLang }) {
  return (
    <header>
      <button className="icon mobile" onClick={onMenu} aria-label="Open menu"><Menu /></button>
      <div className="top-search">
        <Search size={17} />
        <input
          placeholder="Search standards, products, applications..."
          onKeyDown={e => e.key === 'Enter' && onSearch(e.target.value)}
          aria-label="Global search"
        />
        <kbd>Ctrl K</kbd>
      </div>
      <div className="header-actions">
        <div className="language-control" title="Change language">
          <Globe2 size={16} />
          <span className="language-label">Language</span>
          <LanguageSelector value={lang} onChange={setLang} />
        </div>
        <div className="header-note"><Command size={15}/> Local Intelligence</div>
      </div>
    </header>
  );
}
