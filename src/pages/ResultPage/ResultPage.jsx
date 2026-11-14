import { useState, useEffect } from 'react';
import './ResultPage.css';

export default function ResultPage({ onNavigate }) {
  // Parse data dari URL query parameter & dengarkan perubahan hash
  const getSearchParams = () => {
    const hash = window.location.hash || '';
    const queryIndex = hash.indexOf('?');
    const search = queryIndex !== -1 ? hash.substring(queryIndex) : '';
    return new URLSearchParams(search);
  };

  const [params, setParams] = useState(getSearchParams);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const handleHashUpdate = () => setParams(getSearchParams());
    window.addEventListener('hashchange', handleHashUpdate);
    return () => window.removeEventListener('hashchange', handleHashUpdate);
  }, []);

  // Default hasil dari simulasi wizard (misal: Usaha Mikro KBLI 56303)
  const categoryName = params.get('cat') || 'Kedai Kopi / Kafe / Warung Makan';
  const serviceTitle = params.get('title') || 'Izin Usaha Anda: NIB Usaha Mikro (Gratis)';
  const regNumber = params.get('reg') || '#SPK-SUB-2025-8849';
  const kbliCode = params.get('kbli') || '56303 (Kedai Minuman/Kopi)';

  // Persyaratan Dokumen
  const initialDocs = [
    {
      id: 'doc-ktp',
      shortTitle: 'KTP Elektronik (e-KTP) Pemilik Usaha',
      title: '1. KTP Pemilik Usaha (Nomor NIK)',
      desc: 'Pastikan NIK sudah aktif di Dukcapil. Cukup ingat atau siapkan foto KTP fisik.',
      printDesc: 'NIK aktif dan terdaftar di Dispendukcapil Surabaya.',
      tag: 'Gratis',
      sourceUrl: 'https://peraturan.go.id/id/uu-no-24-tahun-2013',
      verifiedDate: '12 Maret 2025'
    },
    {
      id: 'doc-wa',
      shortTitle: 'Nomor HP / WhatsApp Aktif',
      title: '2. Nomor WhatsApp / No. HP Aktif',
      desc: 'Digunakan untuk menerima kode SMS/WhatsApp pendaftaran dari sistem pusat.',
      printDesc: 'Wajib untuk menerima kode verifikasi OTP saat masuk akun.',
      tag: 'Gratis',
      sourceUrl: 'https://oss.go.id',
      verifiedDate: '12 Maret 2025'
    },
    {
      id: 'doc-loc',
      shortTitle: 'Alamat Lengkap Lokasi Usaha',
      title: '3. Alamat Lokasi Usaha di Surabaya',
      desc: 'Catat nama jalan, RT/RW, Kelurahan, dan Kecamatan tempat usaha Anda beroperasi.',
      printDesc: 'Jalan/gang, RT/RW, Kelurahan, & Kecamatan di Surabaya.',
      tag: 'Gratis',
      sourceUrl: 'https://dpmptsp.surabaya.go.id',
      verifiedDate: '12 Maret 2025'
    },
    {
      id: 'doc-modal',
      shortTitle: 'Estimasi Modal Usaha Sederhana',
      title: '4. Estimasi Modal Usaha Sederhana',
      desc: 'Perkiraan modal awal untuk alat, gerobak, atau bahan (tidak termasuk tanah & bangunan).',
      printDesc: 'Perkiraan modal alat & bahan (di luar nilai tanah/bangunan).',
      tag: 'Gratis',
      sourceUrl: 'https://jdih.surabaya.go.id',
      verifiedDate: '12 Maret 2025'
    }
  ];

  // Transient Checklist State (tersimpan di sessionStorage selama sesi)
  const [checkedDocs, setCheckedDocs] = useState(() => {
    try {
      const saved = sessionStorage.getItem('result_checklist_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id) => {
    setCheckedDocs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        sessionStorage.setItem('result_checklist_state', JSON.stringify(updated));
      } catch {
        // Ignore storage limit
      }
      return updated;
    });
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textLines = [
      `=== RINGKASAN REKOMENDASI PERIZINAN MANDIRI ===`,
      `Layanan: ${serviceTitle}`,
      `Kategori: ${categoryName}`,
      `No. Registrasi: ${regNumber}`,
      `Biaya: Rp 0,- (100% GRATIS TANPA RETRIBUSI)`,
      `Estimasi Waktu: 15 - 30 Menit (Langsung Terbit di Sistem)`,
      `Kanal Pengajuan: oss.go.id / Mal Pelayanan Publik (MPP) Siola`,
      ``,
      `Daftar Dokumen yang Perlu Disiapkan:`,
      ...initialDocs.map(
        (d) => `[${checkedDocs[d.id] ? 'V' : ' '}] ${d.title} (${d.desc})`
      ),
      ``,
      `Dasar Hukum & Anti-Pungli: PP No. 5/2021 & Perda Kota Surabaya No. 1/2024.`,
      `Kanal Aduan Resmi: Call Center 112 / wargaku.surabaya.go.id`,
      `Tautan Hasil: ${window.location.href}`
    ];

    navigator.clipboard.writeText(textLines.join('\n')).then(() => {
      showToast('Checklist berhasil disalin ke clipboard!');
    }).catch(() => {
      showToast('Gagal menyalin teks.');
    });
  };

  const handleShareWA = () => {
    const message = encodeURIComponent(
      `*Panduan Rekomendasi Izin Usaha Mandiri Warga Surabaya*\n\n` +
      `*Layanan:* ${serviceTitle}\n` +
      `*Biaya:* Rp 0,- (100% GRATIS BEBAS PUNGLI)\n` +
      `*Estimasi:* 15 - 30 Menit di oss.go.id\n\n` +
      `Buka panduan lengkap dan checklist berkas di tautan resmi berikut:\n` +
      `${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <div className="result-page">
      <div className="result-container">
        {/* Nav Back & Category Tag (Hanya Tampil di Web) */}
        <div className="result-back-bar screen-only">
          <button
            type="button"
            className="btn-back-link"
            onClick={() => onNavigate && onNavigate('Katalog Layanan')}
          >
            ← Kembali ke Pilihan Kategori
          </button>
          <div className="category-badge-pill">
            Kategori: <strong>{categoryName}</strong>
          </div>
        </div>

        {/* 1. Official Government Header (Hanya Tampil Saat Cetak / Print A4 - Sesuai Hasil Cetak.jpg) */}
        <header className="official-gov-header print-only" aria-label="Kop Resmi Rekomendasi">
          <div className="gov-top-row">
            <div className="gov-emblem-group">
              <div className="gov-shield-icon" aria-hidden="true">
                <span>🛡️</span>
              </div>
              <div>
                <div className="gov-subheading">PEMERINTAH KOTA SURABAYA • Dinas Penanaman Modal &amp; PTSP</div>
                <h1 className="gov-main-title">SIPERIKSA KOTA SURABAYA</h1>
                <p className="gov-desc">Sistem Pemeriksaan &amp; Panduan Rekomendasi Izin Usaha Mandiri Warga Kota Surabaya</p>
              </div>
            </div>
            <div className="gov-verify-badge">
              <span className="verify-dot" aria-hidden="true" />
              <span>Dokumen Resmi Terverifikasi</span>
            </div>
          </div>

          <div className="gov-doc-title-box">
            <h2 className="doc-sheet-title">LEMBAR PANDUAN &amp; REKOMENDASI PERIZINAN MANDIRI WARGA</h2>
            <p className="doc-sheet-subtitle">Panduan Mandiri Bebas Calo • Terintegrasi Regulasi Pemkot Surabaya &amp; OSS-RBA Kementerian Investasi/BKPM</p>
          </div>

          <div className="gov-metadata-grid">
            <div className="meta-item">
              <div className="meta-label">No. Registrasi:</div>
              <div className="meta-val">{regNumber}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Tanggal Penerbitan:</div>
              <div className="meta-val">12 Maret 2025</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Klasifikasi KBLI:</div>
              <div className="meta-val">{kbliCode}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Tingkat Risiko:</div>
              <div className="meta-val text-green">Rendah (NIB Otomatis)</div>
            </div>
          </div>
        </header>

        {/* 2. Hero Summary Banner & Highlight Metrics */}
        <section className="result-hero-card" aria-label="Rincian Rekomendasi">
          <div className="hero-pill-tags screen-only">
            <span className="tag-badge tag-orange">HASIL REKOMENDASI RESMI</span>
            <span className="tag-badge tag-navy">Skala Usaha Mikro</span>
          </div>
          <h2 className="result-main-heading screen-only">{serviceTitle}</h2>
          <p className="result-lead-desc screen-only">
            Untuk usaha mikro dan kecil (seperti kedai, kafe, atau warung makan), Anda <strong>hanya membutuhkan 1 dokumen resmi</strong> yaitu Nomor Induk Berusaha (NIB). NIB sudah berlaku sebagai izin edar operasional dan komitmen lingkungan tanpa perlu izin tambahan.
          </p>

          <div className="result-metrics-grid">
            {/* Kartu 1: Biaya */}
            <div className="metric-card card-green">
              <div className="metric-top">
                <span>BIAYA PENGURUSAN</span>
                <span className="metric-icon-badge green" aria-hidden="true">Rp</span>
              </div>
              <div className="metric-value">
                <span className="screen-only">Rp 0</span>
                <span className="print-only">Rp 0,-</span>
              </div>
              <span className="metric-subpill">
                <span className="screen-only">100% GRATIS TANPA BIAYA</span>
                <span className="print-only">100% GRATIS TANPA RETRIBUSI</span>
              </span>
              <p className="metric-footer-note screen-only">
                Tidak ada retribusi daerah atau biaya map/cetak.
              </p>
              <p className="metric-footer-note print-only">
                Dijamin PP No. 5/2021 &amp; Perda Kota Surabaya No. 1/2024. Warga dilarang membayar apa pun.
              </p>
            </div>

            {/* Kartu 2: Waktu */}
            <div className="metric-card card-blue">
              <div className="metric-top">
                <span>LAMA PROSES</span>
                <span className="metric-icon-badge blue" aria-hidden="true">🕒</span>
              </div>
              <div className="metric-value">
                <span className="screen-only">15 – 30 Menit</span>
                <span className="print-only">15 – 30 Mnt</span>
              </div>
              <span className="metric-subpill">
                <span className="screen-only">Langsung Jadi Hari Ini</span>
                <span className="print-only">LANGSUNG TERBIT DI SISTEM</span>
              </span>
              <p className="metric-footer-note screen-only">
                Otomatis terbit tanpa menunggu survei lapangan.
              </p>
              <p className="metric-footer-note print-only">
                Kategori risiko rendah langsung terbit seketika tanpa memerlukan survei atau peninjauan lapangan.
              </p>
            </div>

            {/* Kartu 3: Tempat Mengurus / Kanal */}
            <div className="metric-card card-orange">
              <div className="metric-top">
                <span className="screen-only">TEMPAT MENGURUS</span>
                <span className="print-only">KANAL PENGAJUAN</span>
                <span className="metric-icon-badge orange" aria-hidden="true">🏢</span>
              </div>
              <div className="metric-value">
                <span className="screen-only">Mandiri / Bantuan</span>
                <span className="print-only">oss.go.id / Siola</span>
              </div>
              <span className="metric-subpill print-only">ONLINE &amp; LOKET TATAP MUKA</span>
              <p className="metric-footer-note screen-only">
                <strong>Online di oss.go.id</strong><br />
                Atau dibantu petugas di MPP Siola Lt. 3
              </p>
              <p className="metric-footer-note print-only">
                Dapat diakses mandiri dari HP, atau didampingi gratis oleh staf resmi di Mall Pelayanan Publik (MPP) Siola.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Anti-Pungli Reminder Banner (Kuning di Web, Oranye Tegas di Cetak) */}
        <section className="anti-pungli-banner" aria-label="Peringatan Resmi Bebas Calo">
          <div className="pungli-content-left">
            <div className="pungli-icon-box" aria-hidden="true">
              <span>⚠️</span>
            </div>
            <div>
              <div className="pungli-heading">
                <span className="screen-only">Peringatan Hak Warga: Pengurusan Ini 100% Bebas Pungli</span>
                <span className="print-only">PERINGATAN RESMI: HAK WARGA BEBAS CALO &amp; TOLAK PUNGLI</span>
                <span className="pungli-stop-tag print-only">STOP PUNGLI</span>
              </div>
              <p className="pungli-desc screen-only">
                Jika ada oknum petugas, calo, atau perantara yang meminta uang administrasi, jasa cetak, atau titip berkas — <strong>Segera tolak dan laporkan!</strong> Identitas pelapor dijamin aman.
              </p>
              <p className="pungli-desc print-only">
                Seluruh penerbitan NIB Usaha Mikro adalah <strong>100% GRATIS</strong>. Dilarang keras memberikan imbalan uang rokok, map berbayar, ataupun menggunakan jasa perantara calo. Tolak dengan tegas oknum yang meminta imbalan dan segera laporkan via <strong>Call Center 112</strong> (24 Jam) atau aplikasi <strong>Wargaku Surabaya</strong>.
              </p>
            </div>
          </div>
          <div className="pungli-buttons screen-only">
            <a href="https://wargaku.surabaya.go.id" target="_blank" rel="noreferrer" className="btn-report-orange">
              <span>📢 Lapor ke Wargaku</span>
            </a>
            <button
              type="button"
              className="btn-report-white"
              onClick={() => onNavigate && onNavigate('Laporan Pungli')}
            >
              <span>🔒 Lapor Anonim</span>
            </button>
          </div>
        </section>

        {/* 4. Action Bar: Save / Print A4 / WhatsApp / Copy (Hanya Web) */}
        <section className="action-share-bar screen-only" aria-label="Simpan dan Cetak Dokumen">
          <div className="share-bar-left">
            <span className="share-bookmark-icon" aria-hidden="true">🔖</span>
            <div>
              <div className="share-bar-title">Simpan atau Cetak Halaman Ini</div>
              <div className="share-bar-subtitle">Gunakan sebagai panduan saat mengurus sendiri atau di loket.</div>
            </div>
          </div>
          <div className="share-bar-actions">
            <button type="button" className="btn-action-print" onClick={handlePrint}>
              <span>🖨️ Cetak / Simpan PDF (A4)</span>
            </button>
            <button type="button" className="btn-action-wa" onClick={handleShareWA}>
              <span>💬 Kirim WhatsApp</span>
            </button>
            <button type="button" className="btn-action-copy" onClick={handleCopyText}>
              <span>📋 Salin</span>
            </button>
          </div>
        </section>

        {/* 5. Two Columns: Checklist Dokumen vs Alur & Loket */}
        <div className="result-content-split">
          {/* Kolom Kiri */}
          <div className="result-left-column">
            {/* Dokumen yang Perlu Disiapkan */}
            <section className="result-section-box" aria-label="Checklist Berkas">
              <div className="section-head-row">
                <h3 className="section-title">
                  <span>Dokumen yang Perlu Disiapkan</span>
                </h3>
                <span className="checklist-counter-badge screen-only">
                  {completedCount} / {initialDocs.length} Siap
                </span>
              </div>
              <p className="section-subtitle screen-only">
                Cukup siapkan 4 hal sederhana ini dari rumah:
              </p>
              <p className="section-subtitle print-only">
                Beri tanda centang (✓) pada kotak jika berkas sudah lengkap di depan Anda:
              </p>

              <div className="checklist-group">
                {initialDocs.map((doc) => {
                  const isChecked = !!checkedDocs[doc.id];
                  return (
                    <div
                      key={doc.id}
                      className={`checklist-item-card ${isChecked ? 'is-checked' : ''}`}
                      onClick={() => toggleCheck(doc.id)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          toggleCheck(doc.id);
                        }
                      }}
                    >
                      <div className="custom-checkbox" aria-hidden="true">
                        {isChecked && <span>✓</span>}
                      </div>
                      <div className="item-info">
                        <div className="item-title-row">
                          <span className="item-title screen-only">{doc.title}</span>
                          <span className="item-title print-only">{doc.shortTitle}</span>
                          <span className="item-badge-free screen-only">{doc.tag}</span>
                        </div>
                        <p className="item-desc screen-only">{doc.desc}</p>
                        <p className="item-desc print-only">{doc.printDesc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="checklist-officer-tips print-only">
                <strong>💡 Tips Petugas:</strong> Siapkan foto e-KTP di ponsel untuk memudahkan upload di sistem OSS.
              </div>
            </section>

            {/* 3 Langkah Pengurusan Mandiri (Di Web ada di bawah checklist sesuai Halaman Hasil.jpg, saat print pindah ke kanan) */}
            <section className="result-section-box steps-box" aria-label="Alur Pengurusan">
              <div className="section-head-row">
                <h3 className="section-title">
                  <span className="screen-only">Alur 3 Langkah Mudah</span>
                  <span className="print-only">3 Langkah Pengurusan Mandiri</span>
                </h3>
                <a
                  href="https://oss.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="screen-only"
                  style={{ fontSize: '12px', color: '#ff5f00', fontWeight: '700' }}
                >
                  Buka OSS.go.id ↗
                </a>
              </div>
              <p className="section-subtitle screen-only">
                Hanya butuh tiga langkah tanpa surat rekomendasi:
              </p>
              <p className="section-subtitle print-only">
                Bisa langsung diakses melalui browser Google Chrome di HP atau Laptop:
              </p>

              <div className="steps-timeline-list">
                <div className="step-row-item">
                  <div className="step-num-bubble">1</div>
                  <div className="step-body-content">
                    <div className="step-item-title">
                      <span className="screen-only">Buka Situs Resmi OSS.go.id</span>
                      <span className="print-only">Buka Portal Resmi oss.go.id</span>
                    </div>
                    <p className="step-item-desc">
                      Buka website <strong>oss.go.id</strong> lewat HP atau laptop. Klik tombol <strong>"Daftar"</strong> lalu pilih kelompok <strong>Usaha Mikro &amp; Kecil (UMK)</strong>.
                    </p>
                  </div>
                </div>

                <div className="step-row-item">
                  <div className="step-num-bubble">2</div>
                  <div className="step-body-content">
                    <div className="step-item-title">
                      <span className="screen-only">Isi NIK KTP &amp; Data Usaha Anda</span>
                      <span className="print-only">Input NIK &amp; Pilih Bidang Usaha</span>
                    </div>
                    <p className="step-item-desc screen-only">
                      Masukkan NIK, nama usaha, serta alamat. Sistem otomatis mengenali jenis usaha kafe/kedai kopi Anda (KBLI <code>56303</code>).
                    </p>
                    <p className="step-item-desc print-only">
                      Masukkan kode KBLI <code>56303</code> untuk kedai kopi, minuman, dan kafe mini.
                    </p>
                  </div>
                </div>

                <div className="step-row-item step-highlight-card">
                  <div className="step-num-bubble step-active">3</div>
                  <div className="step-body-content">
                    <div className="step-item-title">
                      <span className="screen-only">NIB Langsung Terbit &amp; Siap Dicetak</span>
                      <span className="print-only">NIB Terbit Seketika &amp; Berlaku Selamanya</span>
                    </div>
                    <p className="step-item-desc screen-only">
                      Surat izin NIB resmi ber-barcode langsung muncul di layar. Anda dapat mengunduh berkas PDF dan mencetaknya di kertas biasa.
                    </p>
                    <p className="step-item-desc print-only">
                      Sistem langsung mengeluarkan dokumen NIB ber-barcode resmi BSSN tanpa masa kedaluwarsa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="regulation-alert-box print-only">
                <span aria-hidden="true">ℹ️</span>
                <span><strong>Catatan Regulasi:</strong> Tidak perlu lagi meminta surat pengantar dari RT/RW atau Kelurahan!</span>
              </div>

              {/* Tombol CTA OSS di dalam kartu langkah (Sesuai Halaman Hasil.jpg) */}
              <div className="bottom-oss-cta-row screen-only">
                <a
                  href="https://oss.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-oss-giant"
                >
                  <span>Mulai Buat Izin Sekarang di OSS</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          </div>

          {/* Kolom Kanan: Loket Fisik & Call Center */}
          <div className="result-right-column">
            <section className="result-section-box siola-box" aria-label="Loket Layanan Fisik">
              <div className="section-head-row">
                <h3 className="section-title">
                  <span>🏢</span>
                  <span>Butuh Bantuan Tatap Muka?</span>
                </h3>
              </div>
              <div className="siola-sub-badge screen-only">Disediakan Petugas Resmi Gratis</div>
              <p className="siola-desc screen-only">
                Jika kesulitan mendaftar lewat internet atau merasa kurang paham teknologi, warga lansia dan umum dipersilakan datang langsung ke loket resmi Pemkot Surabaya:
              </p>

              {/* Mini Leaflet / OSM Mock (Hanya Web) */}
              <div className="map-canvas-container screen-only" aria-label="Peta Lokasi MPP Siola">
                <div className="map-bg-pattern" />
                <div className="map-marker-pin">
                  <div className="marker-label-tooltip">Mall Pelayanan Publik Siola Lt. 3</div>
                  <div className="marker-icon">📍</div>
                </div>
                <div className="map-controls-mock">
                  <span>+</span>
                  <span>-</span>
                </div>
              </div>

              <div className="siola-info-list">
                <div className="siola-info-item">
                  <span>📍</span>
                  <div>
                    <strong>Mall Pelayanan Publik (MPP) Siola</strong>
                    <div>Gedung Siola Lantai 3, Jl. Tunjungan No. 1-3, Surabaya</div>
                  </div>
                </div>
                <div className="siola-info-item">
                  <span>🕒</span>
                  <div>
                    <strong>Jam Operasional Pelayanan:</strong>
                    <div>Senin – Jumat: 07.30 – 16.00 WIB</div>
                    <div>Sabtu: 08.00 – 12.00 WIB (Terbatas)</div>
                  </div>
                </div>
                <div className="siola-info-item screen-only">
                  <span>🚶</span>
                  <div>
                    <strong>Cara Datang:</strong>
                    <div>Bisa langsung datang (tanpa calo) membawa KTP asli dan HP aktif. Petugas akan memandu Anda sampai NIB selesai dicetak.</div>
                  </div>
                </div>
              </div>

              <div className="siola-btn-group screen-only">
                <a
                  href="https://maps.google.com/?q=Mall+Pelayanan+Publik+Siola+Surabaya"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gmaps"
                >
                  <span>🗺️ Buka Google Maps</span>
                </a>
                <a href="tel:112" className="btn-call-center">
                  <span>📞 Hubungi 112</span>
                </a>
              </div>
            </section>

            {/* Emergency Hotline Call Center 112 (Hanya Web) */}
            <div className="callcenter-emergency-card screen-only">
              <div className="cc-left">
                <div className="cc-phone-bubble" aria-hidden="true">📞</div>
                <div>
                  <div className="cc-small-title">PANGGILAN DARURAT &amp; TANYA JAWAB</div>
                  <div className="cc-main-number">Call Center 112</div>
                  <div className="cc-subtext">Gratis Pulsa 24 Jam Nonstop Kota Surabaya</div>
                </div>
              </div>
              <a href="tel:112" className="btn-telepon-cta">Telepon</a>
            </div>
          </div>
        </div>

        {/* 6. Official Print Footer (Hanya Tampil Saat Cetak A4 - Sesuai Hasil Cetak.jpg) */}
        <footer className="official-print-footer print-only">
          <div className="qr-verification-group">
            <div className="qr-code-box" aria-hidden="true">▦</div>
            <div>
              <div className="qr-title">Pindai QR untuk Verifikasi Keaslian Dokumen</div>
              <div className="qr-sub">
                Kode Registrasi Elektronik: <strong>{regNumber}</strong>
                <br />
                <em>Dokumen sah diterbitkan oleh sistem digital DPMPTSP Kota Surabaya tanpa memerlukan cap basah.</em>
              </div>
            </div>
          </div>
          <div className="iso-verify-badge">
            TERVERIFIKASI RESMI 2025
            <span>Standar ISO Pelayanan Publik</span>
          </div>
        </footer>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="copy-toast screen-only" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
    </div>
  );
}