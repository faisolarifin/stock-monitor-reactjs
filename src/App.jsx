import { useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Login from './Login';
import TradingViewWidget from './TradingViewWidget';
import MarketOverviewWidget from './MarketOverviewWidget';
import TickerTapeWidget from './TickerTapeWidget';
import { Settings } from 'lucide-react';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showMarketOverview, setShowMarketOverview] = useState(true);

  const symbols = ['IDX:BBCA', 'IDX:TLKM', 'IDX:BBRI', 'IDX:BMRI'];
  const allowedEmails = ['faisolofficial99@gmail.com', 'faisolkaztelo69@gmail.com'];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (allowedEmails.includes(user.email)) {
          setUser(user);
        } else {
          alert('Login Denied. Logging out...');
          signOut(auth);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="app-container">
      <TickerTapeWidget />

      <div className="settings-icon" onClick={() => setShowSettings(!showSettings)}>
        <Settings size={24} />
      </div>

      <div className="logout-button" onClick={handleLogout}>
        Logout
      </div>

      <div className={`offcanvas ${showSettings ? 'open' : ''}`}>
        <h3>Settings</h3>
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showMarketOverview}
            onChange={() => setShowMarketOverview(!showMarketOverview)}
          />
          Show Market Overview
        </label>
        <button onClick={() => setShowSettings(false)} className="close-btn">Close</button>
      </div>

      <div className="main-content">
        <div className="chart-grid">
          {symbols.map((symbol, idx) => (
            <TradingViewWidget key={idx} symbol={symbol} />
          ))}
        </div>
        {showMarketOverview && <MarketOverviewWidget />}
      </div>
    </div>
  );
}

export default App;
