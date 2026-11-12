import { useState, useEffect } from 'react';
import './ServiceModal.css';
import CloseIcon from '../../icons/CloseIcon';
import ClockIcon from '../../icons/ClockIcon';
import CheckIcon from '../../icons/CheckIcon';

export default function ServiceModal({ service, onClose }) {
  const [activeTab, setActiveTab] = useState('requirements');

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!service) return null;

  const {
    initials,
    category,
    title,
    description,
    schedule,
    estimatePrefix,
    estimate,
    status,
    details = {}
  } = service;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-avatar" aria-hidden="true">
              <span>{initials}</span>
            </div>
            <div className="modal-title-group">
              <span className="modal-category-badge">{category}</span>
              <h2 id="modal-service-title" className="modal-title">
                {title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup jendela detail layanan"
          >
            <CloseIcon size={20} color="#64748b" />
          </button>
        </div>

        {/* Modal Quick Meta bar */}
        <div className="modal-meta-bar">
          <div className="meta-bar-item">
            <ClockIcon size={16} color="#002379" />
            <span>{schedule}</span>
          </div>
          <div className="meta-bar-item">
            <span className="meta-badge-status">
              <span className="status-dot" /> {status}
            </span>
          </div>
          <div className="meta-bar-item">
            <strong>{estimatePrefix} {estimate}</strong>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'requirements' ? 'modal-tab-active' : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            Persyaratan Berkas
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'procedures' ? 'modal-tab-active' : ''}`}
            onClick={() => setActiveTab('procedures')}
          >
            Alur & Prosedur
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'info' ? 'modal-tab-active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Informasi Instansi & Biaya
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          <p className="modal-description">{description}</p>

          {activeTab === 'requirements' && (
            <div className="tab-pane">
              <h3 className="tab-section-title">Dokumen & Persyaratan yang Wajib Disiapkan:</h3>
              <ul className="modal-checklist">
                {details.requirements?.map((req, idx) => (
                  <li key={idx} className="checklist-item">
                    <span className="check-icon-circle">
                      <CheckIcon size={12} color="#ff5f00" />
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'procedures' && (
            <div className="tab-pane">
              <h3 className="tab-section-title">Tahapan Alur Pengajuan Layanan:</h3>
              <ol className="modal-step-list">
                {details.procedures?.map((proc, idx) => (
                  <li key={idx} className="step-item">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-text">{proc}</div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="tab-pane">
              <h3 className="tab-section-title">Informasi Resmi Pelayanan:</h3>
              <div className="info-grid">
                <div className="info-card">
                  <span className="info-label">Instansi Penyelenggara:</span>
                  <span className="info-value">{details.agency || category}</span>
                </div>
                <div className="info-card">
                  <span className="info-label">Lokasi Pelayanan Fisik:</span>
                  <span className="info-value">{details.location || 'Loket Pelayanan Terpadu'}</span>
                </div>
                <div className="info-card">
                  <span className="info-label">Biaya / Tarif Resmi:</span>
                  <span className="info-value info-cost-free">{details.cost || 'Gratis (Rp 0)'}</span>
                </div>
                <div className="info-card">
                  <span className="info-label">Kontak / Call Center:</span>
                  <span className="info-value">{details.contact || 'Layanan Publik Terpadu 1500-111'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="modal-btn-secondary" onClick={onClose}>
            Kembali ke Katalog
          </button>
          <button
            type="button"
            className="modal-btn-primary"
            onClick={() => {
              alert(`Pengajuan simulasi layanan "${title}" berhasil dibuka!`);
              onClose();
            }}
          >
            Ajukan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
