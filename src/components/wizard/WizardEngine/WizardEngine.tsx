import React, { useState, useEffect, useRef, useMemo } from 'react';
import './WizardEngine.css';
import QuestionCard, {
  QuestionOption,
  HelpBoxConfig,
} from '../QuestionCard/QuestionCard';
import { getServiceById } from '../../../data/services';

export interface RawJsonOption {
  label: string;
  nextId: string;
  explanation?: string;
}

export interface RawJsonQuestion {
  id: string;
  step: number;
  text: string;
  helpText?: string;
  options: RawJsonOption[];
}

export interface ServiceSchema {
  id: string;
  slug?: string;
  title: string;
  shortDescription?: string;
  category: string;
  agency?: string;
  startQuestionId: string;
  questions: RawJsonQuestion[];
  results: Record<string, unknown>;
}

interface HistoryEntry {
  questionId: string;
  selectedOptionIndex: number;
}

export interface WizardFinishPayload {
  serviceId: string;
  resultId: string;
  answers: Record<string, string>;
}

export interface WizardEngineProps {
  serviceData?: ServiceSchema;
  onFinish?: (payload: WizardFinishPayload) => void;
}

export const WizardEngine: React.FC<WizardEngineProps> = ({
  serviceData = getServiceById('permits-microbusiness-03') as ServiceSchema,
  onFinish,
}) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    serviceData.startQuestionId
  );
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<Record<string, number>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  // Reset state saat layanan yang dipilih berubah
  useEffect(() => {
    setCurrentQuestionId(serviceData.startQuestionId);
    setHistory([]);
    setSelectedIndices({});
  }, [serviceData.id, serviceData.startQuestionId]);

  // Konversi array questions JSON menjadi lookup map berdasarkan id
  const questionMap = useMemo(() => {
    const map: Record<string, RawJsonQuestion> = {};
    (serviceData.questions || []).forEach((q) => {
      map[q.id] = q;
    });
    return map;
  }, [serviceData.questions]);

  // Hitung total langkah dinamis dari properti `step` tertinggi pada JSON
  const totalSteps = useMemo(() => {
    if (!serviceData.questions || serviceData.questions.length === 0) return 1;
    const maxStep = Math.max(...serviceData.questions.map((q) => q.step || 1));
    return Math.max(1, maxStep);
  }, [serviceData.questions]);

  const stepDefinitions = useMemo(() => {
    return Array.from({ length: totalSteps }, (_, idx) => ({
      step: idx + 1,
      label: `Langkah ${idx + 1}`,
    }));
  }, [totalSteps]);

  const currentQuestion =
    questionMap[currentQuestionId] || questionMap[serviceData.startQuestionId];

  const currentStep = currentQuestion?.step || 1;
  const selectedIndex =
    currentQuestion && selectedIndices[currentQuestion.id] !== undefined
      ? selectedIndices[currentQuestion.id]
      : null;

  // Mapping format opsi JSON -> format QuestionOption milik QuestionCard
  const mappedOptions: QuestionOption[] = useMemo(() => {
    if (!currentQuestion) return [];
    return currentQuestion.options.map((opt, idx) => ({
      id: `opt-${idx}`,
      title: opt.label,
      description: '',
      nextId: opt.nextId,
    }));
  }, [currentQuestion]);

  const selectedOptionId =
    selectedIndex !== null ? `opt-${selectedIndex}` : null;

  const activeRawOption: RawJsonOption | null =
    selectedIndex !== null && currentQuestion
      ? currentQuestion.options[selectedIndex] || null
      : null;

  const helpBoxConfig: HelpBoxConfig | null = currentQuestion?.helpText
    ? {
        text: currentQuestion.helpText,
        linkText: '',
        href: '#panduan-bantuan',
      }
    : null;

  const progressPercent = Math.min(
    100,
    Math.round((currentStep / totalSteps) * 100)
  );

  // Fokus otomatis ke H1 setiap kali langkah berganti
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [currentQuestionId]);

  const handleSelectOption = (optionId: string) => {
    const parsedIndex = Number(optionId.replace('opt-', ''));
    if (Number.isNaN(parsedIndex) || !currentQuestion) return;

    setSelectedIndices((prev) => ({
      ...prev,
      [currentQuestion.id]: parsedIndex,
    }));
  };

  // Menyusun map jawaban { [questionId]: labelOpsi } untuk kebutuhan URL stateless
  const buildAnswersRecord = (
    latestIndices: Record<string, number>
  ): Record<string, string> => {
    const record: Record<string, string> = {};
    Object.entries(latestIndices).forEach(([qId, optIdx]) => {
      const q = questionMap[qId];
      if (q && q.options[optIdx]) {
        record[qId] = q.options[optIdx].label;
      }
    });
    return record;
  };

  const handleContinue = () => {
    if (selectedIndex === null || !currentQuestion) return;

    const chosenOption = currentQuestion.options[selectedIndex];
    if (!chosenOption?.nextId) return;

    const targetId = chosenOption.nextId;

    // Jika nextId adalah salah satu key pada `serviceData.results`, selesaikan wizard
    if (serviceData.results && serviceData.results[targetId]) {
      const finalAnswers = buildAnswersRecord({
        ...selectedIndices,
        [currentQuestion.id]: selectedIndex,
      });

      if (onFinish) {
        onFinish({
          serviceId: serviceData.id,
          resultId: targetId,
          answers: finalAnswers,
        });
      }
      return;
    }

    // Lanjut ke pertanyaan cabang berikutnya
    if (questionMap[targetId]) {
      setHistory((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selectedOptionIndex: selectedIndex,
        },
      ]);
      setCurrentQuestionId(targetId);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;

    const lastEntry = history[history.length - 1];
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setCurrentQuestionId(lastEntry.questionId);
  };

  const handleSaveDraft = () => {
    try {
      const draftData = {
        serviceId: serviceData.id,
        currentQuestionId,
        selectedIndices,
        history,
        savedAt: new Date().toISOString(),
      };
      sessionStorage.setItem(
        `wizard_session_draft_${serviceData.id}`,
        JSON.stringify(draftData)
      );
      showToast('Draf sesi tersimpan');
    } catch {
      showToast('Gagal menyimpan draf sesi');
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  if (!currentQuestion) {
    return (
      <div className="wizard-engine">
        <div className="content-container">
          <p>Data pertanyaan layanan tidak ditemukan.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wizard-engine">
      <div className="content-container">
        {/* Progress Header & Dynamic Bars */}
        <div
          className="wizard-progress-section"
          aria-label="Progres Pengisian Layanan"
        >
          <div className="progress-top-row">
            <span className="step-counter-text">
              LANGKAH {currentStep} DARI {totalSteps}
            </span>
            <span className="step-percentage-text">
              {progressPercent}% Selesai
            </span>
          </div>

          <div
            className="progress-bars-grid"
            style={{
              gridTemplateColumns: `repeat(${totalSteps}, 1fr)`,
            }}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Langkah ${currentStep} dari ${totalSteps}`}
          >
            {stepDefinitions.map((st) => {
              const isPassed = st.step < currentStep;
              const isActive = st.step === currentStep;
              const barClass = isActive
                ? 'progress-segment is-active'
                : isPassed
                ? 'progress-segment is-passed'
                : 'progress-segment is-pending';

              return <div key={st.step} className={barClass} />;
            })}
          </div>

          <div
            className="progress-labels-grid"
            style={{
              gridTemplateColumns: `repeat(${totalSteps}, 1fr)`,
            }}
          >
            {stepDefinitions.map((st) => {
              const isPassed = st.step < currentStep;
              const isActive = st.step === currentStep;
              const labelClass = isActive
                ? 'segment-label is-active'
                : isPassed
                ? 'segment-label is-passed'
                : 'segment-label is-pending';

              return (
                <div key={st.step} className={labelClass}>
                  <span>{st.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Penjelasan Kontekstual saat memilih opsi dengan properti `explanation` */}
        {activeRawOption?.explanation && (
          <div
            className="wizard-explanation-alert"
            role="note"
            aria-live="polite"
            style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '16px',
              color: '#1e3a8a',
              fontSize: '14px',
              lineHeight: 1.5,
            }}
          >
            <strong>💡 Penjelasan Bantuan: </strong>
            <span>{activeRawOption.explanation}</span>
          </div>
        )}

        {/* Question Card Component */}
        <QuestionCard
          currentStep={currentStep}
          stepLabel={serviceData.category}
          title={currentQuestion.text}
          subtitle={serviceData.title}
          options={mappedOptions}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
          onContinue={handleContinue}
          onBack={handleBack}
          onSaveDraft={handleSaveDraft}
          canGoBack={history.length > 0}
          isContinueDisabled={selectedIndex === null}
          helpBox={helpBoxConfig}
          showHelpBox={Boolean(helpBoxConfig)}
          headingRef={headingRef}
        />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="wizard-toast" role="status" aria-live="polite">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default WizardEngine;