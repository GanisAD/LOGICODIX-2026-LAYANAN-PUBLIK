import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface DisclaimerFooterProps {
  links?: FooterLink[];
  copyrightText?: string;
}

export const DisclaimerFooter: React.FC<DisclaimerFooterProps> = ({
  links = [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Ketentuan Layanan', href: '#' },
    { label: 'Kontak Kami', href: '#' },
  ],
  copyrightText,
}) => {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} Layanan Publik Republik Indonesia. Hak Cipta Dilindungi.`;

  return (
    <footer className="site-footer">
      <div className="content-container footer-container">
        <div className="footer-left">
          <div className="footer-logo" aria-hidden="true">
            <span>LP</span>
          </div>
          <p className="footer-copyright">
            {copyrightText || defaultCopyright}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navigasi Tambahan">
          <ul className="footer-link-list">
            {links.map((link, index) => (
              <li key={index} className="footer-link-item">
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default DisclaimerFooter;
