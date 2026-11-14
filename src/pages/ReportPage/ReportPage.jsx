import { useState } from 'react';
import './ReportPage.css';
import Breadcrumb from '../../components/catalog/Breadcrumb/Breadcrumb';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    agency: '',
    location: '',
    date: '',
    description: '',
    isAnonymous: true,
    contact: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agency || !formData.description) {
      alert('Harap isi instansi yang dilaporkan dan uraian kejadian!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <Breadcrumb items={[
          { label: 'BERANDA', href: '#/beranda', active: false },
          { label: 'LAPORAN PUNGLI', href: '#/laporan-pungli', active: true }
        ]} />

        <div className="report-header">
          <div className="report-badge">
            <span>Satgas Saber Pungli</span>
          </div>
          <h2 className="report-main-title">Kanal Pengaduan Pungutan Liar</h2>
          <p className="report-main-subtitle">
            Kerahasiaan identitas pelapor dijamin 100% oleh Undang-Undang Perlindungan Saksi dan Korban (LPSK). Berantas pungli demi pelayanan publik yang bersih dan profesional.
          </p>
        </div>

        {submitted ? (
          <div className="report-success-card">
            <div className="success-icon" aria-hidden="true">✓</div>
            <h3 className="success-title">Laporan Berhasil Terkirim</h3>
            <p className="success-message">
              Terima kasih atas kepedulian Anda. Laporan Anda telah masuk ke sistem pengawasan Saber Pungli RI dengan nomor tiket <strong>#PGL-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>.
            </p>
            <button
              type="button"
              className="btn-report-reset"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  agency: '',
                  location: '',
                  date: '',
                  description: '',
                  isAnonymous: true,
                  contact: ''
                });
              }}
            >
              Kirim Laporan Baru
            </button>
          </div>
        ) : (
          <div className="report-grid">
            {/* Form */}
            <form className="report-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Formulir Pengaduan Insiden</h3>

              <div className="form-group">
                <label htmlFor="agency-input" className="form-label">
                  Instansi / Loket Layanan yang Dilaporkan <span className="req">*</span>
                </label>
                <input
                  id="agency-input"
                  type="text"
                  className="form-input"
                  placeholder="Contoh: Loket KTP Disdukcapil Kota / Puskesmas"
                  value={formData.agency}
                  onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location-input" className="form-label">
                    Lokasi / Kantor Pelayanan
                  </label>
                  <input
                    id="location-input"
                    type="text"
                    className="form-input"
                    placeholder="Contoh: Gedung MPP Lt. 2"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date-input" className="form-label">
                    Waktu / Tanggal Kejadian
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="desc-input" className="form-label">
                  Uraian Kronologis Kejadian & Indikasi Pungli <span className="req">*</span>
                </label>
                <textarea
                  id="desc-input"
                  rows={4}
                  className="form-textarea"
                  placeholder="Jelaskan secara rinci tindakan pungutan, nominal yang diminta, nama oknum (jika mengetahui), dan alur kejadian..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="form-checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  />
                  <span>Kirim laporan secara <strong>Anonim</strong> (Data pribadi tidak akan dicatat)</span>
                </label>
              </div>

              {!formData.isAnonymous && (
                <div className="form-group">
                  <label htmlFor="contact-input" className="form-label">
                    Nomor WhatsApp / Email Pelapor (Untuk update penanganan)
                  </label>
                  <input
                    id="contact-input"
                    type="text"
                    className="form-input"
                    placeholder="0812xxxxxxx atau email@domain.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
              )}

              <button type="submit" className="report-submit-btn">
                Kirim Pengaduan Pungli
              </button>
            </form>

            {/* Sidebar info */}
            <aside className="report-sidebar">
              <div className="sidebar-card">
                <h4 className="sidebar-card-title">Kanal Pengaduan Alternatif</h4>
                <ul className="sidebar-list">
                  <li>
                    <strong>Call Center Saber Pungli:</strong> 193
                  </li>
                  <li>
                    <strong>SMS Hotline:</strong> 1193
                  </li>
                  <li>
                    <strong>Email Satgas:</strong> lapor@saberpungli.id
                  </li>
                  <li>
                    <strong>SP4N-LAPOR!:</strong> lapor.go.id
                  </li>
                </ul>
              </div>

              <div className="sidebar-card warning-card">
                <h4 className="sidebar-card-title">Ketentuan Pelaporan:</h4>
                <p className="sidebar-card-text">
                  Laporan harus memuat fakta yang dapat dipertanggungjawabkan dan bukan merupakan fitnah. Setiap laporan yang valid akan diverifikasi oleh tim inspektorat dalam 3x24 jam.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
