import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left: Copyright and Logo */}
        <div className="footer-left">
          <div className="footer-logo" aria-hidden="true">
            <span>LP</span>
          </div>
          <p className="footer-copyright">
            © 2023 Layanan Publik Republik Indonesia. Hak Cipta Dilindungi.
          </p>
        </div>

        {/* Right: Footer Links */}
        <nav className="footer-right" aria-label="Navigasi Informasi Legal">
          <ul className="footer-links">
            <li>
              <a href="#kebijakan-privasi" className="footer-link">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#ketentuan-layanan" className="footer-link">
                Ketentuan Layanan
              </a>
            </li>
            <li>
              <a href="#kontak-kami" className="footer-link">
                Kontak Kami
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
