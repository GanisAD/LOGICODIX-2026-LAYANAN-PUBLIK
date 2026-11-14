import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  navItems?: Array<{ label: string; href: string }>;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Layanan Publik RI',
  subtitle = 'Portal Informasi & Layanan Terpadu',
  navItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Katalog Layanan', href: '#' },
    { label: 'Panduan', href: '#' },
    { label: 'Laporan Pungli', href: '#' },
  ],
}) => {
  return (
    <header className="site-header">
      <div className="content-container header-container">
        <div className="header-brand">
          <div className="header-logo" aria-hidden="true">
            <span>LP</span>
          </div>
          <div className="header-titles">
            <span className="header-title">{title}</span>
            <span className="header-subtitle">{subtitle}</span>
          </div>
        </div>

        <nav className="header-nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
