import { useState, useEffect } from 'react';
import './WizardModal.css';
import CloseIcon from '../icons/CloseIcon';
import CheckIcon from '../icons/CheckIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

export default function WizardModal({ isOpen, onClose, onSelectService }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    category: '',
    purpose: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAnswers({ category: '', purpose: '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCategorySelect = (categoryKey) => {
    setAnswers((prev) => ({ ...prev, category: categoryKey }));
    setStep(2);
  };

  const handlePurposeSelect = (purposeKey) => {
    setAnswers((prev) => ({ ...prev, purpose: purposeKey }));
    setStep(3);
  };

  // Determine recommendation
  const getRecommendation = () => {
    if (answers.category === 'kesehatan') {
      return {
        id: 'bp-02',
        title: 'Pendaftaran & Mutasi Kepesertaan BPJS Kesehatan',
        desc: 'Layanan pendaftaran peserta baru, perubahan faskes pertama, dan cetak kartu digital.',
        time: 'Instan - 1 Hari',
        cost: 'Gratis biaya pendaftaran'
      };
    }
    if (answers.category === 'usaha') {
      return {
        id: 'iu-03',
        title: 'Penerbitan NIB & Izin Usaha Mikro Kecil (OSS-RBA)',
        desc: 'Pembuatan NIB online, legalitas UMKM, izin edar produk, dan sertifikasi standar.',
        time: '1-3 Hari Kerja',
        cost: 'Gratis (Rp 0)'
      };
    }
    return {
      id: 'dk-01',
      title: 'Administrasi Kependudukan (KTP-el & Kartu Keluarga)',
      desc: 'Penerbitan dan pembaruan dokumen kependudukan resmi Disdukcapil bebas pungutan.',
      time: '1–2 Hari Kerja',
      cost: 'Gratis (Rp 0)'
    };
  };

  const rec = getRecommendation();

  return (
    <div
      className="wizard-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="wizard-modal">
        {/* Header */}
        <div className="wizard-header">
          <div className="wizard-header-title">
            <span className="wizard-badge">Panduan Pintar Rakyat</span>
            <h2>Penentu Layanan Publik Otomatis</h2>
          </div>
          <button
            type="button"
            className="wizard-close-btn"
            onClick={onClose}
            aria-label="Tutup panduan pintar"
          >
            <CloseIcon size={20} color="#64748b" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="wizard-progress-bar">
          <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
          <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`step-line ${step >= 3 ? 'active' : ''}`} />
          <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>

        {/* Content */}
        <div className="wizard-content">
          {step === 1 && (
            <div className="wizard-step">
              <h3>Langkah 1: Apa kebutuhan administrasi Anda hari ini?</h3>
              <p className="wizard-hint">Pilih salah satu sektor layanan publik berikut:</p>
              <div className="wizard-options">
                <button
                  type="button"
                  className="wizard-option-card"
                  onClick={() => handleCategorySelect('kependudukan')}
                >
                  <span className="option-icon">📋</span>
                  <div className="option-text">
                    <strong>Administrasi Kependudukan</strong>
                    <span>KTP elektronik, Kartu Keluarga, Akta Kelahiran, Surat Pindah</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="wizard-option-card"
                  onClick={() => handleCategorySelect('kesehatan')}
                >
                  <span className="option-icon">🏥</span>
                  <div className="option-text">
                    <strong>Kesehatan & BPJS</strong>
                    <span>Pendaftaran KIS/BPJS Kesehatan, Pindah Faskes, Kartu Digital</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="wizard-option-card"
                  onClick={() => handleCategorySelect('usaha')}
                >
                  <span className="option-icon">💼</span>
                  <div className="option-text">
                    <strong>Legalitas Usaha / UMKM</strong>
                    <span>Nomor Induk Berusaha (NIB), Izin Edar P-IRT, Sertifikat Halal</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-step">
              <h3>Langkah 2: Apa jenis permohonan spesifik Anda?</h3>
              <p className="wizard-hint">Pilih kondisi berkas Anda:</p>
              <div className="wizard-options">
                <button
                  type="button"
                  className="wizard-option-card"
                  onClick={() => handlePurposeSelect('baru')}
                >
                  <span className="option-icon">✨</span>
                  <div className="option-text">
                    <strong>Permohonan Baru</strong>
                    <span>Belum pernah memiliki atau baru pertama kali mendaftar</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="wizard-option-card"
                  onClick={() => handlePurposeSelect('rusak_hilang')}
                >
                  <span className="option-icon">🔄</span>
                  <div className="option-text">
                    <strong>Pembaruan / Ganti Rusak / Hilang</strong>
                    <span>Dokumen fisik rusak, hilang, atau terjadi perubahan elemen data</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="wizard-step">
              <div className="recommendation-badge">
                <CheckIcon size={16} color="#16a34a" />
                <span>Rekomendasi Layanan Resmi Ditemukan!</span>
              </div>
              <div className="recommendation-card">
                <h4>{rec.title}</h4>
                <p>{rec.desc}</p>
                <div className="rec-meta">
                  <span>⏱️ <strong>Estimasi:</strong> {rec.time}</span>
                  <span>💰 <strong>Biaya:</strong> {rec.cost}</span>
                </div>
              </div>
              <div className="rec-actions">
                <button
                  type="button"
                  className="btn-open-catalog"
                  onClick={() => {
                    onClose();
                    if (onSelectService) {
                      onSelectService(rec.id);
                    }
                  }}
                >
                  <span>Buka di Katalog & Lihat Persyaratan Lengkap</span>
                  <ChevronRightIcon size={16} color="#ffffff" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
