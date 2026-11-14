import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';
import GuidePage from './pages/GuidePage/GuidePage';
import ReportPage from './pages/ReportPage/ReportPage';
import WizardPage from './pages/WizardPage/WizardPage';
import ResultPage from './pages/ResultPage/ResultPage';

// Route definition mapping
const ROUTES = {
  BERANDA: {
    hash: '#/beranda',
    label: 'Beranda'
  },
  KATALOG: {
    hash: '#/katalog',
    label: 'Katalog Layanan'
  },
  WIZARD: {
    hash: '#/wizard',
    label: 'Panduan Pintar'
  },
  HASIL: {
    hash: '#/hasil',
    label: 'Halaman Hasil'
  },
  PANDUAN: {
    hash: '#/panduan',
    label: 'Panduan'
  },
  LAPORAN_PUNGLI: {
    hash: '#/laporan-pungli',
    label: 'Laporan Pungli'
  }
};

function getRouteFromHash(hash) {
  // Potong query parameters jika ada (misal: #/hasil?cat=...)
  const cleanHash = (hash || '').split('?')[0];

  switch (cleanHash) {
    case '#/beranda':
      return 'Beranda';
    case '#/wizard':
      return 'Panduan Pintar';
    case '#/hasil':
      return 'Halaman Hasil';
    case '#/panduan':
      return 'Panduan';
    case '#/laporan-pungli':
      return 'Laporan Pungli';
    case '#/katalog':
    default:
      return 'Katalog Layanan';
  }
}

function getHashFromLabel(label) {
  switch (label) {
    case 'Beranda':
      return '#/beranda';
    case 'Panduan Pintar':
      return '#/wizard';
    case 'Halaman Hasil':
      return '#/hasil';
    case 'Panduan':
      return '#/panduan';
    case 'Laporan Pungli':
      return '#/laporan-pungli';
    case 'Katalog Layanan':
    default:
      return '#/katalog';
  }
}

/**
 * App Router Component
 * Coordinates routing and renders the active page view while maintaining global layout framing.
 */
function App() {
  const [activeNav, setActiveNav] = useState(() => {
    return getRouteFromHash(window.location.hash);
  });
  const [catalogSearchQuery, setCatalogSearchQuery] = useState('');

  // Listen to browser navigation changes (Back/Forward / Hash change)
  useEffect(() => {
    const handleHashChange = () => {
      const currentRoute = getRouteFromHash(window.location.hash);
      setActiveNav(currentRoute);
    };

    // If initial load has no hash or invalid hash, default to Beranda
    if (!window.location.hash) {
      window.location.hash = '#/beranda';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic navigation handler
  const handleNavigate = (pageLabel, queryParam = '') => {
    if (pageLabel === 'Katalog Layanan' && queryParam) {
      setCatalogSearchQuery(queryParam);
    }
    const baseHash = getHashFromLabel(pageLabel);
    const targetHash = queryParam && pageLabel === 'Halaman Hasil' ? `${baseHash}?${queryParam}` : baseHash;

    if (window.location.hash === targetHash) {
      setActiveNav(pageLabel);
    } else {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route View Switcher
  const renderPage = () => {
    switch (activeNav) {
      case 'Beranda':
        return <HomePage onNavigate={handleNavigate} />;
      case 'Panduan Pintar':
        return <WizardPage onNavigate={handleNavigate} />;
      case 'Halaman Hasil':
        return <ResultPage onNavigate={handleNavigate} />;
      case 'Panduan':
        return <GuidePage onNavigate={handleNavigate} />;
      case 'Laporan Pungli':
        return <ReportPage />;
      case 'Katalog Layanan':
      default:
        return <CatalogPage initialSearch={catalogSearchQuery} />;
    }
  };

  return (
    <div className="app-shell">
      {/* Top Navigation Bar */}
      <Header activeNav={activeNav} onNavClick={handleNavigate} />

      {/* Dynamic Page Content View */}
      <main className="app-main-view" role="main">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
