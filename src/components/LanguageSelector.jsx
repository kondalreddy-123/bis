const languages=['English','हिन्दी','తెలుగు','தமிழ்','ಕನ್ನಡ','മലയാളം','मराठी','বাংলা','ગુજરાતી','ਪੰਜਾਬੀ','ଓଡ଼ିଆ','অসমীয়া','اردو','संस्कृतम्','कॉशुर','कोंकणी','मैथिली','नेपाली','মৈতৈলোন্','سنڌي','बड़ो','संताली'];
export const languageOptions=languages;
export default function LanguageSelector({value,onChange}){return <label className="language-button">🌐 <select value={value} onChange={e=>onChange(e.target.value)} aria-label="Change language">{languages.map(x=><option key={x}>{x}</option>)}</select><span>▾</span></label>}
