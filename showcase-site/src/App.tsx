import { useState } from 'react';
import { Github, ExternalLink, Code2, Copy, ArrowLeft, Check } from 'lucide-react';
import { navbars } from './data';

function App() {
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [codeType, setCodeType] = useState<'html' | 'css' | 'js'>('html');
  const [codeContent, setCodeContent] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const selectedData = navbars.find(n => n.id === selectedNav);

  const fetchCode = async (type: 'html' | 'css' | 'js') => {
    if (!selectedData) return;
    try {
      const ext = type === 'js' ? 'script.js' : type === 'css' ? 'style.css' : 'index.html';
      const res = await fetch(`/navbars/${selectedData.dir}/${ext}`);
      if (res.ok) {
        const text = await res.text();
        setCodeContent(text);
      } else {
        setCodeContent(`/* Could not load ${ext} */`);
      }
    } catch (e) {
      setCodeContent('Error loading code.');
    }
    setCodeType(type);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Preview View
  if (selectedNav && selectedData) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedNav(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-slate-900" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">{selectedData.name}</h1>
              <p className="text-sm text-slate-500">Live Preview & Source Code</p>
            </div>
          </div>
          <div className="flex gap-2">
             <button onClick={() => fetchCode('html')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${codeType === 'html' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}>HTML</button>
             <button onClick={() => fetchCode('css')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${codeType === 'css' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}>CSS</button>
             <button onClick={() => fetchCode('js')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${codeType === 'js' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}>JS</button>
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Iframe Preview */}
          <div className="flex-1 bg-slate-100 relative flex flex-col">
             <div className="p-2 bg-slate-200 border-b border-slate-300 flex items-center justify-center text-xs text-slate-500 font-medium">Browser Preview</div>
             <iframe 
                src={`/navbars/${selectedData.dir}/index.html`}
                className="w-full flex-1 border-none bg-white"
                title={`${selectedData.name} Preview`}
             />
          </div>

          {/* Code Viewer */}
          <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col bg-slate-900 border-l border-slate-800">
             <div className="flex justify-between items-center p-4 border-b border-slate-800">
                <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">{codeType} Code</span>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
             </div>
             <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                <pre className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-wrap">
                   {codeContent || "Loading..."}
                </pre>
             </div>
          </div>
        </main>
      </div>
    );
  }

  // Home View
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Modern Navbars</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/USER/modern-navbar-collection" className="text-slate-500 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Production-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Navigation Bars</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
          A curated collection of 15 fully responsive, accessible, and easily copy-pasteable navbars built with Vanilla HTML, CSS, and JavaScript.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#collection" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
            Browse Collection
          </a>
          <a href="https://github.com" className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm">
            View on GitHub
          </a>
        </div>
      </div>

      {/* Grid */}
      <div id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navbars.map((nav) => (
            <div 
              key={nav.id} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 bg-slate-100 flex items-center justify-center p-6 relative border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
                 {/* Visual placeholder - usually you'd use a screenshot here */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h4 className="font-semibold text-slate-800 mb-1">{nav.name}</h4>
                    <span className="text-xs text-slate-500">View live preview and code</span>
                 </div>
                 
                 <button 
                  onClick={() => {
                    setSelectedNav(nav.id);
                    fetchCode('html'); // Pre-fetch HTML
                  }}
                  className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20"
                 >
                    <span className="flex items-center gap-2 bg-white text-slate-900 px-6 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </span>
                 </button>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{nav.name}</h3>
                <p className="text-slate-500 text-sm flex-1">{nav.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium border border-orange-100 rounded-md">HTML</span>
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 rounded-md">CSS</span>
                  <span className="px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100 rounded-md">JS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500 text-sm">
         <p>Modern Navbar Collection &copy; 2026. Built with Vanilla Web Tech.</p>
      </footer>
    </div>
  );
}

export default App;
