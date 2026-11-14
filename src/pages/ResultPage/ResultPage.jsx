import { useState, useEffect } from 'react';
import './ResultPage.css';
import { resolveWizardResult } from '../../data/services'; // Sesuaikan path folder data kamu

export default function ResultPage({ onNavigate, serviceIdProp, resultIdProp }) {
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

  // Ambil data layanan & hasil spesifik berdasarkan parameter URL (?service=...&res=...)
 const serviceId =
    serviceIdProp || params.get('service') || 'permits-microbusiness-03';
  const resultId = resultIdProp || params.get('res');

  let parsedAnswers = {};
  const encodedAns = params.get('ans');
  if (encodedAns) {
    try {
      parsedAnswers = JSON.parse(decodeURIComponent(atob(encodedAns)));
    } catch {
      parsedAnswers = {};
    }
  }

  const { service: currentService, result: currentResult } = resolveWizardResult(
    serviceId,
    resultId,
    parsedAnswers
  );

  const regNumber = `#SPK-SBY-${currentResult.id.toUpperCase().slice(-6)}`;

  const storageKey = `checklist_${currentService.id}_${currentResult.id}`;
  const [checkedDocs, setCheckedDocs] = useState({});

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      setCheckedDocs(saved ? JSON.parse(saved) : {});
    } catch {
      setCheckedDocs({});
    }
  }, [storageKey]);

  const toggleCheck = (docId) => {
    setCheckedDocs((prev) => {
      const updated = { ...prev, [docId]: !prev[docId] };
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(updated));
      } catch {
        // Ignore storage error
      }
      return updated;
    });
  };

  const docsList = currentResult.documents || [];
  const stepsList = currentResult.steps || [];
  const channelsList = currentResult.officialChannels || [];
  const locationsList = currentService.locations || [];
  const primaryChannel = channelsList[0] || {
    name: currentService.agency,
    url: currentResult.sourceUrl || currentService.sourceUrl,
    type: 'online'
  };

  const completedCount = docsList.filter((d) => checkedDocs[d.id]).length;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textLines = [
      `=== RINGKASAN REKOMENDASI LAYANAN PUBLIK SURABAYA ===`,
      `Layanan: ${currentResult.title}`,
      `Kategori: ${currentService.category}`,
      `Instansi: ${currentService.agency}`,
      `No. Registrasi: ${regNumber}`,
      `Biaya: ${currentResult.officialFeeLabel}`,
      `Estimasi Waktu: ${currentResult.estimatedTime}`,
      `Kanal Pengajuan: ${primaryChannel.name} (${primaryChannel.url})`,
      ``,
      `Daftar Dokumen yang Perlu Disiapkan:`,
      ...docsList.map(
        (d, idx) =>
          `[${checkedDocs[d.id] ? 'V' : ' '}] ${idx + 1}. ${d.name} (${
            d.required ? 'Wajib' : 'Opsional'
          })`
      ),
      ``,
      `Alur Pengurusan:`,
      ...stepsList.map((s, idx) => `${idx + 1}. ${s}`),
      ``,
      `${currentService.antiExtortionBanner?.message || ''}`,
      `Tautan Panduan: ${window.location.href}`
    ];

    navigator.clipboard
      .writeText(textLines.join('\n'))
      .then(() => showToast('Checklist & panduan berhasil disalin ke clipboard!'))
      .catch(() => showToast('Gagal menyalin teks.'));
  };

  const handleShareWA = () => {
    const message = encodeURIComponent(
      `*Panduan Layanan Publik Resmi Kota Surabaya*\n\n` +
        `*Layanan:* ${currentResult.title}\n` +
        `*Instansi:* ${currentService.agency}\n` +
        `*Biaya:* ${currentResult.officialFeeLabel}\n` +
        `*Estimasi:* ${currentResult.estimatedTime}\n\n` +
        `Buka panduan lengkap dan checklist berkas di tautan berikut:\n` +
        `${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <div className="result-page">
      <div className="result-container">
        {/* Nav Back & Category Tag (Web Only) */}
        <div className="result-back-bar screen-only">
          <button
            type="button"
            className="btn-back-link"
            onClick={() => onNavigate && onNavigate('Katalog Layanan')}
          >
            ← Kembali ke Pilihan Kategori
          </button>
          <div className="category-badge-pill">
            Kategori: <strong>{currentService.category}</strong>
          </div>
        </div>

        {/* 1. Official Government Header (Print A4 Only) */}
        <header className="official-gov-header print-only" aria-label="Kop Resmi Rekomendasi">
          <div className="gov-top-row">
            <div className="gov-emblem-group">
              <div className="gov-shield-icon" aria-hidden="true">
                <span>🛡️</span>
              </div>
              <div>
                <div className="gov-subheading">
                  PEMERINTAH KOTA SURABAYA • {currentService.agency}
                </div>
                <h1 className="gov-main-title">PANDUAN LAYANAN PUBLIK SURABAYA</h1>
                <p className="gov-desc">{currentService.shortDescription}</p>
              </div>
            </div>
            <div className="gov-verify-badge">
              <span className="verify-dot" aria-hidden="true" />
              <span>Dokumen Resmi Terverifikasi</span>
            </div>
          </div>

          <div className="gov-doc-title-box">
            <h2 className="doc-sheet-title">{currentResult.title}</h2>
            <p className="doc-sheet-subtitle">
              Panduan Mandiri Bebas Calo • Terintegrasi Regulasi Resmi Pemerintah Kota Surabaya
            </p>
          </div>

          <div className="gov-metadata-grid">
            <div className="meta-item">
              <div className="meta-label">No. Registrasi:</div>
              <div className="meta-val">{regNumber}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Terakhir Diverifikasi:</div>
              <div className="meta-val">
                {currentResult.lastVerified || currentService.lastVerified}
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Kategori Layanan:</div>
              <div className="meta-val">{currentService.category}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Status Biaya:</div>
              <div className="meta-val text-green">{currentResult.officialFeeLabel}</div>
            </div>
          </div>
        </header>

        {/* 2. Hero Summary Banner & Highlight Metrics */}
        <section className="result-hero-card" aria-label="Rincian Rekomendasi">
          <div className="hero-pill-tags screen-only">
            <span className="tag-badge tag-orange">HASIL REKOMENDASI RESMI</span>
            <span className="tag-badge tag-navy">{currentService.agency}</span>
          </div>
          <h2 className="result-main-heading screen-only">{currentResult.title}</h2>
          <p className="result-lead-desc screen-only">{currentService.shortDescription}</p>

          <div className="result-metrics-grid">
            {/* Kartu 1: Biaya */}
            <div className="metric-card card-green">
              <div className="metric-top">
                <span>BIAYA PENGURUSAN</span>
                <span className="metric-icon-badge green" aria-hidden="true">
                  Rp
                </span>
              </div>
              <div className="metric-value">
                {currentResult.officialFee === 0 ? 'Rp 0' : currentResult.officialFeeLabel}
              </div>
              <span className="metric-subpill">{currentResult.officialFeeLabel}</span>
              <p className="metric-footer-note">
                Layanan resmi Pemerintah Kota Surabaya bebas pungutan liar.
              </p>
            </div>

            {/* Kartu 2: Waktu */}
            <div className="metric-card card-blue">
              <div className="metric-top">
                <span>ESTIMASI LAMA PROSES</span>
                <span className="metric-icon-badge blue" aria-hidden="true">
                  🕒
                </span>
              </div>
              <div className="metric-value" style={{ fontSize: '20px' }}>
                {currentResult.estimatedTime}
              </div>
              <span className="metric-subpill">STANDAR PELAYANAN PUBLIK</span>
              <p className="metric-footer-note">
                Terhitung setelah seluruh berkas persyaratan dinyatakan lengkap.
              </p>
            </div>

            {/* Kartu 3: Kanal Pengajuan */}
            <div className="metric-card card-orange">
              <div className="metric-top">
                <span>KANAL PENGAJUAN RESMI</span>
                <span className="metric-icon-badge orange" aria-hidden="true">
                  🏢
                </span>
              </div>
              <div className="metric-value" style={{ fontSize: '18px' }}>
                {primaryChannel.name}
              </div>
              <span className="metric-subpill">
                {primaryChannel.type === 'online'
                  ? 'LAYANAN DARING (ONLINE)'
                  : 'LOKET TATAP MUKA (OFFLINE)'}
              </span>
              <p className="metric-footer-note">
                Portal resmi:{' '}
                <a href={primaryChannel.url} target="_blank" rel="noreferrer">
                  {primaryChannel.url.replace(/^https?:\/\//, '')}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 3. Anti-Pungli Reminder Banner */}
        {currentService.antiExtortionBanner && (
          <section className="anti-pungli-banner" aria-label="Peringatan Resmi Bebas Calo">
            <div className="pungli-content-left">
              <div className="pungli-icon-box" aria-hidden="true">
                <span>⚠️</span>
              </div>
              <div>
                <div className="pungli-heading">
                  <span className="screen-only">
                    Peringatan Hak Warga: Pengurusan Ini Bebas Pungli
                  </span>
                  <span className="print-only">
                    PERINGATAN RESMI: HAK WARGA BEBAS CALO &amp; TOLAK PUNGLI
                  </span>
                  <span className="pungli-stop-tag print-only">STOP PUNGLI</span>
                </div>
                <p className="pungli-desc">{currentService.antiExtortionBanner.message}</p>
              </div>
            </div>
            <div className="pungli-buttons screen-only">
              {currentService.antiExtortionBanner.channels?.map((ch, idx) => (
                <a
                  key={idx}
                  href={ch.url}
                  target="_blank"
                  rel="noreferrer"
                  className={idx === 0 ? 'btn-report-orange' : 'btn-report-white'}
                >
                  <span>
                    {idx === 0 ? '📢' : '🔒'} {ch.name.split('/')[0].trim()}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* 4. Action Bar: Print / WhatsApp / Copy (Web Only) */}
        <section className="action-share-bar screen-only" aria-label="Simpan dan Cetak Dokumen">
          <div className="share-bar-left">
            <span className="share-bookmark-icon" aria-hidden="true">
              🔖
            </span>
            <div>
              <div className="share-bar-title">Simpan atau Cetak Halaman Ini</div>
              <div className="share-bar-subtitle">
                Gunakan sebagai panduan checklist saat mengurus sendiri atau di loket.
              </div>
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
            {/* Checklist Dokumen */}
            <section className="result-section-box" aria-label="Checklist Berkas">
              <div className="section-head-row">
                <h3 className="section-title">
                  <span>Dokumen yang Perlu Disiapkan</span>
                </h3>
                <span className="checklist-counter-badge screen-only">
                  {completedCount} / {docsList.length} Siap
                </span>
              </div>
              <p className="section-subtitle screen-only">
                Klik pada item di bawah ini untuk menandai berkas yang sudah Anda siapkan:
              </p>
              <p className="section-subtitle print-only">
                Beri tanda centang (✓) pada kotak jika berkas sudah lengkap di depan Anda:
              </p>

              <div className="checklist-group">
                {docsList.map((doc, idx) => {
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
                          <span className="item-title">
                            {idx + 1}. {doc.name}
                          </span>
                          <span
                            className="item-badge-free"
                            style={
                              doc.required
                                ? { background: '#eff6ff', color: '#1d4ed8' }
                                : { background: '#f1f5f9', color: '#475569' }
                            }
                          >
                            {doc.required ? 'Wajib' : 'Opsional'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="checklist-officer-tips print-only">
                <strong>💡 Tips Petugas:</strong> Pastikan dokumen asli dibawa untuk verifikasi apabila mengajukan secara tatap muka di loket.
              </div>
            </section>

            {/* Alur Pengurusan Mandiri */}
            <section className="result-section-box steps-box" aria-label="Alur Pengurusan">
              <div className="section-head-row">
                <h3 className="section-title">
                  <span>Alur {stepsList.length} Langkah Pengurusan</span>
                </h3>
                <a
                  href={primaryChannel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="screen-only"
                  style={{ fontSize: '12px', color: '#ff5f00', fontWeight: '700' }}
                >
                  Buka Portal Resmi ↗
                </a>
              </div>
              <p className="section-subtitle">
                Ikuti tahapan resmi berikut sesuai hasil pilihan panduan Anda:
              </p>

              <div className="steps-timeline-list">
                {stepsList.map((stepText, idx) => {
                  const isLast = idx === stepsList.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`step-row-item ${isLast ? 'step-highlight-card' : ''}`}
                    >
                      <div className={`step-num-bubble ${isLast ? 'step-active' : ''}`}>
                        {idx + 1}
                      </div>
                      <div className="step-body-content">
                        <p className="step-item-desc" style={{ marginTop: 0, color: '#0f172a' }}>
                          {stepText}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bottom-oss-cta-row screen-only">
                <a
                  href={primaryChannel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-oss-giant"
                >
                  <span>Akses {primaryChannel.name}</span>
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
                  <span>Titik Layanan &amp; Bantuan Tatap Muka</span>
                </h3>
              </div>
              <div className="siola-sub-badge screen-only">Disediakan Petugas Resmi Gratis</div>
              <p className="siola-desc screen-only">
                Apabila membutuhkan pendampingan langsung atau layanan tatap muka, silakan kunjungi lokasi resmi berikut:
              </p>

              <div className="siola-info-list">
                {locationsList.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      marginBottom: '8px'
                    }}
                  >
                    <div className="siola-info-item">
                      <span>📍</span>
                      <div>
                        <strong>{loc.name}</strong>
                        <div>{loc.address}</div>
                      </div>
                    </div>
                    <div className="siola-info-item" style={{ marginTop: '6px' }}>
                      <span>🕒</span>
                      <div>
                        <strong>Jam Operasional:</strong> {loc.operatingHours}
                      </div>
                    </div>
                    {loc.lat && loc.lng && (
                      <div style={{ marginTop: '8px' }} className="screen-only">
                        <a
                          href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-gmaps"
                          style={{ width: '100%' }}
                        >
                          <span>🗺️ Buka Titik Lokasi di Google Maps</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Hotline Call Center 112 (Web Only) */}
            <div className="callcenter-emergency-card screen-only">
              <div className="cc-left">
                <div className="cc-phone-bubble" aria-hidden="true">
                  📞
                </div>
                <div>
                  <div className="cc-small-title">PANGGILAN DARURAT &amp; TANYA JAWAB</div>
                  <div className="cc-main-number">Call Center 112</div>
                  <div className="cc-subtext">Gratis Pulsa 24 Jam Nonstop Kota Surabaya</div>
                </div>
              </div>
              <a href="tel:112" className="btn-telepon-cta">
                Telepon
              </a>
            </div>
          </div>
        </div>

        {/* 6. Official Print Footer (Print A4 Only) */}
        <footer className="official-print-footer print-only">
          <div className="qr-verification-group">
            <div className="qr-code-box" aria-hidden="true">
              ▦
            </div>
            <div>
              <div className="qr-title">Pindai QR untuk Verifikasi Keaslian Dokumen</div>
              <div className="qr-sub">
                Kode Registrasi Elektronik: <strong>{regNumber}</strong>
                <br />
                <em>
                  Dokumen sah diterbitkan oleh sistem panduan digital {currentService.agency} tanpa memerlukan cap basah.
                </em>
              </div>
            </div>
          </div>
          <div className="iso-verify-badge">
            TERVERIFIKASI RESMI
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