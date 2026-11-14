import { useState, useEffect } from 'react';
import './WizardModal.css';
import CloseIcon from '../icons/CloseIcon';
import CheckIcon from '../icons/CheckIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import { servicesData } from '../../data/servicesData'; // Sesuaikan path folder data kamu

export default function WizardModal({
  isOpen,
  onClose,
  onSelectService,
  initialServiceId = null
}) {
  // Filter hanya layanan yang memiliki struktur decision tree dari temanmu
  const wizardServices = servicesData.filter(
    (s) => s.startQuestionId && s.questions
  );

  const [selectedService, setSelectedService] = useState(null);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [history, setHistory] = useState([]);
  const [explanationNote, setExplanationNote] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initialServiceId) {
        const found = wizardServices.find((s) => s.id === initialServiceId);
        if (found) {
          setSelectedService(found);
          setCurrentNodeId(found.startQuestionId);
        }
      } else {
        setSelectedService(null);
        setCurrentNodeId(null);
      }
      setHistory([]);
      setExplanationNote('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialServiceId]);

  if (!isOpen) return null;

  const getServiceIcon = (id) => {
    if (id.includes('ktp') || id.includes('adminduk')) return '📋';
    if (id.includes('bpjs') || id.includes('health')) return '🏥';
    if (id.includes('umkm') || id.includes('permits')) return '💼';
    return '🏛️';
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setCurrentNodeId(service.startQuestionId);
    setHistory([]);
    setExplanationNote('');
  };

  const handleOptionSelect = (option) => {
    setHistory((prev) => [...prev, currentNodeId]);
    setExplanationNote(option.explanation || '');
    setCurrentNodeId(option.nextId);
  };

  const handleBack = () => {
    setExplanationNote('');
    if (history.length > 0) {
      const prevNode = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentNodeId(prevNode);
    } else {
      setSelectedService(null);
      setCurrentNodeId(null);
    }
  };

  const isResultNode =
    selectedService &&
    currentNodeId &&
    selectedService.results &&
    Boolean(selectedService.results[currentNodeId]);

  const currentQuestion =
    selectedService && !isResultNode
      ? selectedService.questions.find((q) => q.id === currentNodeId)
      : null;

  const finalResult = isResultNode
    ? selectedService.results[currentNodeId]
    : null;

  const currentStepNumber = !selectedService
    ? 1
    : isResultNode
    ? 4
    : Math.min((currentQuestion?.step || 1) + 1, 3);

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
            <CloseIcon size={20} color="#ffffff" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="wizard-progress-bar">
          <div className={`step-dot ${currentStepNumber >= 1 ? 'active' : ''}`}>1</div>
          <div className={`step-line ${currentStepNumber >= 2 ? 'active' : ''}`} />
          <div className={`step-dot ${currentStepNumber >= 2 ? 'active' : ''}`}>2</div>
          <div className={`step-line ${currentStepNumber >= 3 ? 'active' : ''}`} />
          <div className={`step-dot ${currentStepNumber >= 3 ? 'active' : ''}`}>3</div>
          <div className={`step-line ${currentStepNumber >= 4 ? 'active' : ''}`} />
          <div className={`step-dot ${currentStepNumber >= 4 ? 'active' : ''}`}>✓</div>
        </div>

        {/* Content */}
        <div className="wizard-content">
          {selectedService && (
            <button
              type="button"
              onClick={handleBack}
              style={{
                background: 'none',
                border: 'none',
                color: '#002379',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '0 0 12px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ← Kembali ke langkah sebelumnya
            </button>
          )}

          {explanationNote && (
            <div
              style={{
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '12.5px',
                color: '#1e40af',
                marginBottom: '14px',
                lineHeight: '1.45'
              }}
            >
              <strong>💡 Info Panduan:</strong> {explanationNote}
            </div>
          )}

          {/* Langkah 1: Pilih Layanan */}
          {!selectedService && (
            <div className="wizard-step">
              <h3>Langkah 1: Apa kebutuhan administrasi Anda hari ini?</h3>
              <p className="wizard-hint">
                Pilih salah satu sektor layanan publik Pemkot Surabaya:
              </p>
              <div className="wizard-options">
                {wizardServices.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    className="wizard-option-card"
                    onClick={() => handleSelectService(srv)}
                  >
                    <span className="option-icon">{getServiceIcon(srv.id)}</span>
                    <div className="option-text">
                      <strong>{srv.title}</strong>
                      <span>{srv.shortDescription}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Langkah 2..N: Pertanyaan Bercabang */}
          {selectedService && currentQuestion && !isResultNode && (
            <div className="wizard-step">
              <h3>{currentQuestion.text}</h3>
              <p className="wizard-hint">
                Layanan: <strong>{selectedService.category}</strong> • Pilih kondisi yang paling sesuai:
              </p>
              <div className="wizard-options">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="wizard-option-card"
                    onClick={() => handleOptionSelect(opt)}
                  >
                    <span className="option-icon">
                      {opt.label.toLowerCase().includes('tidak tahu') ? '❓' : '👉'}
                    </span>
                    <div className="option-text">
                      <strong>{opt.label}</strong>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Langkah Akhir: Ringkasan & Navigasi ke ResultPage */}
          {selectedService && isResultNode && finalResult && (
            <div className="wizard-step">
              <div className="recommendation-badge">
                <CheckIcon size={16} color="#16a34a" />
                <span>Rekomendasi Layanan Resmi Ditemukan!</span>
              </div>
              <div className="recommendation-card">
                <h4>{finalResult.title}</h4>
                <p>{selectedService.shortDescription}</p>
                <div className="rec-meta">
                  <span>
                    ⏱️ <strong>Estimasi:</strong> {finalResult.estimatedTime}
                  </span>
                  <span>
                    💰 <strong>Biaya:</strong> {finalResult.officialFeeLabel}
                  </span>
                </div>
              </div>
              <div className="rec-actions">
                <button
                  type="button"
                  className="btn-open-catalog"
                  onClick={() => {
                    onClose();
                    window.location.hash = `#/hasil?service=${selectedService.id}&res=${finalResult.id}`;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (onSelectService) {
                      onSelectService(selectedService.id, finalResult.id);
                    }
                  }}
                >
                  <span>Buka Panduan Lengkap &amp; Checklist Berkas</span>
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