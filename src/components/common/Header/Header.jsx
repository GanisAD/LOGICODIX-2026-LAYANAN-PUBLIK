import { useState } from 'react';
import './Header.css';
import MenuIcon from '../../icons/MenuIcon';
import CloseIcon from '../../icons/CloseIcon';

export default function Header({ activeNav = 'Katalog Layanan', onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#/beranda' },
    { label: 'Katalog Layanan', href: '#/katalog' },
    { label: 'Panduan', href: '#/panduan' },
    { label: 'Laporan Pungli', href: '#/laporan-pungli' }
  ];

  const handleItemClick = (e, label) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick(label);
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand / Logo */}
        <a href="#" className="header-brand" onClick={(e) => handleItemClick(e, 'Beranda')}>
          <div className="brand-logo" aria-hidden="true">
            <span>LP</span>
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Layanan Publik RI</h1>
            <p className="brand-subtitle">Portal Informasi & Layanan Terpadu</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = item.label === activeNav;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleItemClick(e, item.label)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <CloseIcon size={24} color="#ffffff" /> : <MenuIcon size={24} color="#ffffff" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Navigasi Mobile">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const isActive = item.label === activeNav;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    onClick={(e) => handleItemClick(e, item.label)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
