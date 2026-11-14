import { useState } from 'react';
import './HomePage.css';
import SearchIcon from '../../components/icons/SearchIcon';
import WizardModal from '../../components/wizard/WizardModal';

export default function HomePage({ onNavigate }) {
  const [searchInput, setSearchInput] = useState('');
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const popularKeywords = [
    'KTP Baru',
    'Pindah Domisili',
    'BPJS Mandiri',
    'Izin Usaha UMK',
    'Kartu Keluarga'
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('Katalog Layanan', searchInput);
    }
  };

  const handleQuickTagClick = (tag) => {
    if (onNavigate) {
      onNavigate('Katalog Layanan', tag);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (onNavigate) {
      onNavigate('Katalog Layanan', categoryName);
    }
  };

  return (
    <div className="home-page-container">
      {/* 1. HERO SECTION */}
      <section className="home-hero-section" aria-label="Hero Utama">
        <div className="home-hero-content">
          {/* Top Pill Badge */}
          <div className="hero-top-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>PORTAL RESMI PELAYANAN TERPADU</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title">
            Urus Semua Layanan Administrasi Publik Lebih Mudah & Cepat
          </h1>

          {/* Subtitle */}
          <p className="hero-main-desc">
            Temukan informasi resmi persyaratan, prosedur, estimasi waktu, serta panduan pintar langkah demi langkah untuk setiap kebutuhan dokumen kependudukan, kesehatan, perizinan, dan bantuan sosial Anda.
          </p>

          {/* Search Box */}
          <form className="hero-search-box" onSubmit={handleSearchSubmit} role="search">
            <span className="hero-search-icon" aria-hidden="true">
              <SearchIcon size={20} color="#94a3b8" />
            </span>
            <input
              type="text"
              className="hero-search-input"
              placeholder="Cari layanan (contoh: KTP, BPJS, NIB, Akta Kelahiran)..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Cari layanan administrasi publik"
            />
            <button type="submit" className="hero-search-submit-btn">
              <span>Cari Layanan</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </form>

          {/* Frequently Searched Tags */}
          <div className="hero-tags-wrapper">
            <div className="tags-label">
              <span className="trend-icon" aria-hidden="true">📈</span>
              <span>Sering Dicari:</span>
            </div>
            <div className="tags-list">
              {popularKeywords.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="quick-tag-btn"
                  onClick={() => handleQuickTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WIZARD BANNER */}
      <section className="wizard-banner-section" aria-label="Panduan Pintar">
        <div className="wizard-banner-card">
          <div className="wizard-banner-left">
            <div className="wizard-icon-box" aria-hidden="true">
              <span>✨</span>
            </div>
            <div className="wizard-text-group">
              <span className="wizard-tag">FITUR BANTUAN RAKYAT</span>
              <h2 className="wizard-title">
                Bingung mulai dari mana? Gunakan Panduan Pintar (Wizard)
              </h2>
              <p className="wizard-description">
                Cukup jawab beberapa pertanyaan singkat, sistem kami akan langsung menunjukkan jenis dokumen dan loket layanan publik yang tepat untuk kebutuhan Anda.
              </p>
            </div>
          </div>
          <div className="wizard-banner-right">
            <button
              type="button"
              className="wizard-cta-btn"
              onClick={() => onNavigate && onNavigate('Panduan Pintar')}
            >
              <span>Mulai Panduan Pintar (Wizard Rekomendasi)</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS SECTION */}
      <section className="home-values-section" aria-label="Jaminan Layanan">
        <div className="values-header text-center">
          <div className="values-badge">
            <span aria-hidden="true">📍</span>
            <span>Menjaga Integritas Negeri</span>
          </div>
          <h2 className="values-main-title">
            Hak Anda Mengurus Izin Tanpa Hambatan & Tanpa Pungli
          </h2>
          <p className="values-main-desc">
            Dirancang dari observasi lapangan terhadap tantangan UMKM Surabaya dalam menavigasi birokrasi perizinan.
          </p>
        </div>

        <div className="values-grid">
          {/* Card 1 */}
          <div className="value-card">
            <div className="value-card-icon-box icon-orange" aria-hidden="true">
              <span>🧭</span>
            </div>
            <span className="value-step-tag tag-orange">01. ALUR TERPADU</span>
            <h3 className="value-card-title">Wizard Penentu Izin Otomatis</h3>
            <p className="value-card-desc">
              Jawab 3-4 pertanyaan sederhana mengenai jenis usaha atau bangunan untuk mengetahui izin yang tepat sesuai skala tanpa tersesat birokrasi berbelit.
            </p>
            <button
              type="button"
              className="value-card-link"
              onClick={() => onNavigate && onNavigate('Panduan Pintar')}
            >
              <span>Coba Wizard Otomatis</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="value-card">
            <div className="value-card-icon-box icon-blue" aria-hidden="true">
              <span>📖</span>
            </div>
            <span className="value-step-tag tag-blue">02. BEBAS BIAYA CALO</span>
            <h3 className="value-card-title">Panduan Alur Resmi & SOP Mandiri</h3>
            <p className="value-card-desc">
              Langkah demi langkah mengurus NIB, PBG, Sertifikat Halal, dan P-IRT langsung ke portal resmi pemerintah tanpa perantara berbayar dan bebas pungutan liar.
            </p>
            <button
              type="button"
              className="value-card-link"
              onClick={() => onNavigate && onNavigate('Panduan')}
            >
              <span>Pelajari SOP Mandiri</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="value-card">
            <div className="value-card-icon-box icon-green" aria-hidden="true">
              <span>🛡️</span>
            </div>
            <span className="value-step-tag tag-green">03. KEAMANAN TOTAL</span>
            <h3 className="value-card-title">Pengawasan Warga & Aman</h3>
            <p className="value-card-desc">
              Laporkan pungutan liar atau calo berkedok 'biaya map' dengan enkripsi penuh tanpa identitas dan pantau progres validasi data lewat tracking ID unik.
            </p>
            <button
              type="button"
              className="value-card-link"
              onClick={() => onNavigate && onNavigate('Laporan Pungli')}
            >
              <span>Pelajari SOP Mandiri</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="how-it-works-section" aria-label="Cara Menggunakan Portal">
        <div className="how-header text-center">
          <span className="how-tag">PANDUAN RINGKAS</span>
          <h2 className="how-title">Cara Mudah Menggunakan Portal Ini</h2>
          <p className="how-subtitle">
            Ikuti tiga langkah sederhana berikut untuk menyelesaikan pengurusan dokumen Anda tanpa repot.
          </p>
        </div>

        <div className="how-steps-grid">
          {/* Step 1 */}
          <div className="how-step-card">
            <div className="how-card-top">
              <span className="step-number-box num-blue">1</span>
              <span className="step-icon-corner" aria-hidden="true">🔍</span>
            </div>
            <h3 className="step-card-title">Pilih Layanan Anda</h3>
            <p className="step-card-desc">
              Cari nama berkas langsung di kotak pencarian atau gunakan wizard rekomendasi jika Anda belum tahu jenis dokumen resmi yang dibutuhkan.
            </p>
            <div className="step-card-status">
              <span className="status-bullet bullet-blue" aria-hidden="true" />
              <span>Tahap Penentuan Cepat</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="how-step-card">
            <div className="how-card-top">
              <span className="step-number-box num-orange">2</span>
              <span className="step-icon-corner" aria-hidden="true">⚖️</span>
            </div>
            <h3 className="step-card-title">Pelajari Syarat & Waktu</h3>
            <p className="step-card-desc">
              Lihat dokumen persyaratan lengkap, estimasi jam kerja, biaya resmi (sebagian besar Rp0), serta lokasi kantor atau loket terdekat.
            </p>
            <div className="step-card-status">
              <span className="status-bullet bullet-orange" aria-hidden="true" />
              <span>Pemeriksaan Persyaratan</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="how-step-card">
            <div className="how-card-top">
              <span className="step-number-box num-blue">3</span>
              <span className="step-icon-corner" aria-hidden="true">💳</span>
            </div>
            <h3 className="step-card-title">Ajukan atau Kunjungi</h3>
            <p className="step-card-desc">
              Dapatkan panduan prosedur resmi online mandiri atau unduh nomor antrean loket pelayanan agar waktu Anda di kantor dinas lebih efisien.
            </p>
            <div className="step-card-status">
              <span className="status-bullet bullet-blue" aria-hidden="true" />
              <span>Selesai Tanpa Hambatan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR CATEGORIES SECTION */}
      <section className="categories-section" aria-label="Kategori Populer">
        <div className="categories-header">
          <div className="categories-header-left">
            <span className="categories-tag">KATEGORI UTAMA</span>
            <h2 className="categories-title">Kategori Layanan Publik Populer</h2>
          </div>
          <button
            type="button"
            className="categories-all-link"
            onClick={() => onNavigate && onNavigate('Katalog Layanan')}
          >
            <span>Lihat Semua 120+ Layanan</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="categories-grid">
          {/* Category 1 */}
          <div className="category-card">
            <div className="cat-icon-square icon-square-navy" aria-hidden="true">
              <span>🏛️</span>
            </div>
            <h3 className="cat-card-title">Kependudukan & Catatan Sipil</h3>
            <p className="cat-card-desc">
              Pengurusan KTP-el baru, Kartu Keluarga, Akta Kelahiran, hingga Kartu Identitas Anak resmi dari Disdukcapil.
            </p>
            <div className="cat-tags">
              <span className="cat-pill">KTP-el</span>
              <span className="cat-pill">Kartu Keluarga</span>
              <span className="cat-pill">KIA</span>
            </div>
            <button
              type="button"
              className="cat-card-link"
              onClick={() => handleCategoryClick('Kependudukan')}
            >
              <span>Lihat Layanan</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Category 2 */}
          <div className="category-card">
            <div className="cat-icon-square icon-square-orange" aria-hidden="true">
              <span>🛡️</span>
            </div>
            <h3 className="cat-card-title">Kesehatan & Jaminan Sosial</h3>
            <p className="cat-card-desc">
              Pendaftaran BPJS Kesehatan mandiri, pengaktifan Kartu Indonesia Sehat (KIS), dan program bantuan iuran daerah.
            </p>
            <div className="cat-tags">
              <span className="cat-pill">BPJS Kesehatan</span>
              <span className="cat-pill">KIS PBI</span>
            </div>
            <button
              type="button"
              className="cat-card-link"
              onClick={() => handleCategoryClick('BPJS')}
            >
              <span>Lihat Layanan</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Category 3 */}
          <div className="category-card">
            <div className="cat-icon-square icon-square-navy" aria-hidden="true">
              <span>🏪</span>
            </div>
            <h3 className="cat-card-title">Izin Usaha & Investasi</h3>
            <p className="cat-card-desc">
              Pembuatan NIB Instan melalui OSS, legalitas usaha mikro kecil (UMKM), pendaftaran sertifikasi halal dan izin edar.
            </p>
            <div className="cat-tags">
              <span className="cat-pill">NIB OSS</span>
              <span className="cat-pill">UMKM</span>
              <span className="cat-pill">P-IRT</span>
            </div>
            <button
              type="button"
              className="cat-card-link"
              onClick={() => handleCategoryClick('OSS')}
            >
              <span>Lihat Layanan</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Category 4 */}
          <div className="category-card">
            <div className="cat-icon-square icon-square-slate" aria-hidden="true">
              <span>🎓</span>
            </div>
            <h3 className="cat-card-title">Pendidikan & Fasilitas Publik</h3>
            <p className="cat-card-desc">
              Informasi beasiswa pemerintah, mutasi sekolah anak, bantuan pendidikan Kartu Indonesia Pintar, dan fasilitas difabel.
            </p>
            <div className="cat-tags">
              <span className="cat-pill">KIP Sekolah</span>
              <span className="cat-pill">Mutasi</span>
              <span className="cat-pill">Akses Difabel</span>
            </div>
            <button
              type="button"
              className="cat-card-link"
              onClick={() => handleCategoryClick('Pendidikan')}
            >
              <span>Lihat Layanan</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. ESTIMATION & GUARANTEE SECTION */}
      <section className="estimation-section" aria-label="Standar Estimasi Waktu">
        <div className="estimation-container-box">
          <div className="estimation-left">
            <span className="estimation-tag">KEPASTIAN WAKTU</span>
            <h3 className="estimation-title">Standar Estimasi Penyelesaian</h3>
            <p className="estimation-desc">
              Setiap loket layanan memiliki batas waktu pelayanan resmi yang diawasi oleh Ombudsman Republik Indonesia.
            </p>
          </div>

          <div className="estimation-right-grid">
            {/* Stat 1 */}
            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <span>⏱️</span>
              </div>
              <div className="stat-info">
                <span className="stat-highlight">15 Menit</span>
                <span className="stat-sub">Cetak KTP Rusak/Hilang</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <span>⚡</span>
              </div>
              <div className="stat-info">
                <span className="stat-highlight">1 Jam Selesai</span>
                <span className="stat-sub">Penerbitan NIB UMKM</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <span>🏷️</span>
              </div>
              <div className="stat-info">
                <span className="stat-highlight highlight-orange">Rp 0,- (Gratis)</span>
                <span className="stat-sub">Semua Dokumen Dukcapil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUPPORT & REPORT BANNER */}
      <section className="support-section" aria-label="Pusat Bantuan Rakyat">
        <div className="support-card">
          <div className="support-card-content">
            <div className="support-card-left">
              <div className="support-icon-box" aria-hidden="true">
                <span>🎧</span>
              </div>
              <div className="support-text">
                <h3 className="support-title">Pusat Bantuan & Pengaduan Rakyat</h3>
                <p className="support-desc">
                  Butuh panduan bicara langsung atau ingin melaporkan kendala pungutan liar? Petugas siap mendampingi.
                </p>
              </div>
            </div>

            <div className="support-card-right">
              <a
                href="https://wa.me/628111900112"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-pill"
              >
                <span className="wa-icon" aria-hidden="true">💬</span>
                <span>WhatsApp Resmi: 0811-1900-112</span>
              </a>

              <a
                href="tel:159"
                className="btn-hotline-navy"
              >
                <span className="phone-icon" aria-hidden="true">📞</span>
                <span>Hotline 159 (Bebas Pulsa)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer disclaimer */}
        <div className="support-subbar">
          <div className="subbar-item">
            <span aria-hidden="true">🕒</span>
            <span>Jam Layanan Petugas Call Center: Senin – Jumat, 08.00 – 16.00 WIB</span>
          </div>
          <div className="subbar-item">
            <span aria-hidden="true">🛡️</span>
            <span>Terhubung dengan SP4N-LAPOR! & Ombudsman RI</span>
          </div>
        </div>
      </section>

      {/* Interactive Wizard Modal */}
      <WizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onSelectService={(serviceId) => {
          if (onNavigate) {
            onNavigate('Katalog Layanan', serviceId);
          }
        }}
      />
    </div>
  );
}
