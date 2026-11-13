import React from 'react';

export interface QuestionOption {
  id: string;
  title: string;
  description: string;
  nextId?: string;
}

export interface HelpBoxConfig {
  text: string;
  linkText: string;
  href: string;
}

export interface QuestionCardProps {
  currentStep: number;
  stepLabel: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
  onContinue: () => void;
  onBack?: () => void;
  onSaveDraft?: () => void;
  canGoBack?: boolean;
  isContinueDisabled?: boolean;
  helpBox?: HelpBoxConfig | null;
  showHelpBox?: boolean;
  headingRef?: React.RefObject<HTMLHeadingElement | null>;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  currentStep,
  stepLabel,
  title,
  subtitle,
  options,
  selectedOptionId,
  onSelectOption,
  onContinue,
  onBack,
  onSaveDraft,
  canGoBack = false,
  isContinueDisabled = true,
  helpBox,
  showHelpBox = true,
  headingRef,
}) => {
  const headingId = 'wizard-question-title';
  const badgeText = `LANGKAH ${currentStep}: ${stepLabel.toUpperCase()}`;

  return (
    <div className="question-card" role="region" aria-labelledby={headingId}>
      {/* Badge langkah */}
      <div className="step-badge" aria-label={badgeText}>
        <span>{badgeText}</span>
      </div>

      {/* Judul & Subjudul */}
      <h1
        id={headingId}
        ref={headingRef as React.RefObject<HTMLHeadingElement>}
        tabIndex={-1}
        className="question-heading"
      >
        {title}
      </h1>
      <p className="question-subtitle">{subtitle}</p>

      {/* Daftar Radio-card */}
      <div
        className="options-radiogroup"
        role="radiogroup"
        aria-labelledby={headingId}
      >
        {options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          return (
            <label
              key={opt.id}
              className={`radio-card ${isSelected ? 'is-selected' : ''}`}
            >
              <input
                type="radio"
                name="wizard-option-selection"
                value={opt.id}
                checked={isSelected}
                onChange={() => onSelectOption(opt.id)}
                className="sr-only"
              />
              <span className="radio-circle" aria-hidden="true">
                <span className="radio-circle-dot" />
              </span>
              <div className="radio-content">
                <span className="radio-title">{opt.title}</span>
                <span className="radio-desc">{opt.description}</span>
              </div>
              <span className="radio-chip" aria-hidden={!isSelected}>
                Dipilih
              </span>
            </label>
          );
        })}
      </div>

      {/* Kotak Bantuan */}
      {showHelpBox && helpBox && (
        <aside className="help-box" aria-label="Bantuan Pemilihan Opsi">
          <div className="help-box-left">
            <svg
              className="help-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="help-box-text">{helpBox.text}</span>
          </div>
          <a href={helpBox.href} className="help-box-link">
            <span>{helpBox.linkText}</span>
            <span aria-hidden="true"> →</span>
          </a>
        </aside>
      )}

      {/* Garis Pemisah Aksi & Baris Aksi */}
      <div className="action-divider" />
      <div className="action-row">
        <div className="action-buttons-group">
          {canGoBack && onBack && (
            <button
              type="button"
              className="btn-secondary btn-back"
              onClick={onBack}
            >
              Kembali
            </button>
          )}

          {onSaveDraft && (
            <button
              type="button"
              className="btn-secondary btn-save-draft"
              onClick={onSaveDraft}
            >
              <svg
                className="btn-icon-bookmark"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>Simpan Draf Sesi</span>
            </button>
          )}
        </div>

        <div className="action-right-group">
          <div className="secure-badge">
            <svg
              className="secure-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Data jawaban Anda aman &amp; terlindungi</span>
          </div>

          <button
            type="button"
            className="btn-primary"
            disabled={isContinueDisabled}
            onClick={onContinue}
            aria-disabled={isContinueDisabled}
          >
            Lanjutkan →
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
