import React, { useState, useEffect, useRef } from 'react';
import './WizardEngine.css';
import QuestionCard, {
  QuestionOption,
  HelpBoxConfig,
} from '../QuestionCard/QuestionCard';

export interface StepDefinition {
  step: number;
  label: string;
}

export interface QuestionData {
  id: string;
  stepNumber: number;
  stepLabel: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
  helpBox?: HelpBoxConfig | null;
  isTerminalResult?: boolean;
}

export interface WizardServiceConfig {
  id: string;
  steps: StepDefinition[];
  questions: Record<string, QuestionData>;
  initialQuestionId: string;
}

// Fixture pengujian default sesuai spesifikasi desain gambar
export const DEFAULT_WIZARD_DATA: WizardServiceConfig = {
  id: 'layanan-kependudukan',
  steps: [
    { step: 1, label: '1. Kategori Layanan' },
    { step: 2, label: '2. Detail Kebutuhan' },
    { step: 3, label: '3. Lokasi & Waktu' },
    { step: 4, label: '4. Hasil Rekomendasi' },
  ],
  initialQuestionId: 'kategori-layanan',
  questions: {
    'kategori-layanan': {
      id: 'kategori-layanan',
      stepNumber: 1,
      stepLabel: 'Kategori Layanan',
      title: 'Apa dokumen kependudukan yang hendak Anda urus?',
      subtitle:
        'Pilih salah satu dokumen resmi untuk memulai pembuatan panduan berkas kependudukan.',
      helpBox: {
        text: 'Ragu atau tidak yakin dengan jenis status dokumen Anda?',
        linkText: 'Lihat Panduan Bantuan Opsi',
        href: '#panduan-bantuan',
      },
      options: [
        {
          id: 'akta-kelahiran',
          title: 'Akta Kelahiran',
          description:
            'Pencatatan kelahiran baru bagi anak, balita, maupun orang dewasa yang belum memiliki akta.',
          nextId: 'detail-kebutuhan',
        },
        {
          id: 'ktp-kk',
          title: 'KTP Elektronik & Kartu Keluarga (KK)',
          description:
            'Perekaman baru 17 tahun, perubahan data identitas, penggantian dokumen rusak atau hilang.',
          nextId: 'detail-kebutuhan',
        },
        {
          id: 'akta-kematian',
          title: 'Akta Kematian',
          description:
            'Pelaporan resmi warga yang meninggal dunia untuk pemutakhiran data kependudukan dan waris.',
          nextId: 'detail-kebutuhan',
        },
        {
          id: 'skpwni',
          title: 'Surat Pindah Domisili (SKPWNI)',
          description:
            'Kepindahan kependudukan antar RT/RW, kelurahan, kecamatan, maupun antar kota/provinsi.',
          nextId: 'detail-kebutuhan',
        },
      ],
    },
    'detail-kebutuhan': {
      id: 'detail-kebutuhan',
      stepNumber: 2,
      stepLabel: 'Detail Kebutuhan',
      title: 'Apa status pencatatan kelahiran yang diperlukan?',
      subtitle:
        'Informasi ini menentukan daftar berkas persyaratan dan formulir yang harus dilengkapi.',
      helpBox: {
        text: 'Perlu panduan mengenai syarat saksi atau surat pengantar?',
        linkText: 'Buka Panduan Persyaratan',
        href: '#panduan-syarat',
      },
      options: [
        {
          id: 'kelahiran-baru',
          title: 'Kelahiran Baru (Kurang dari 60 Hari)',
          description:
            'Pencatatan tepat waktu dengan surat keterangan kelahiran dari dokter/bidan.',
          nextId: 'lokasi-waktu',
        },
        {
          id: 'kelahiran-terlambat',
          title: 'Kelahiran Terlambat (Lebih dari 60 Hari)',
          description:
            'Pencatatan yang melampaui batas waktu reguler membutuhkan surat pernyataan tanggung jawab mutlak.',
          nextId: 'lokasi-waktu',
        },
      ],
    },
    'lokasi-waktu': {
      id: 'lokasi-waktu',
      stepNumber: 3,
      stepLabel: 'Lokasi & Waktu',
      title: 'Di mana lokasi pengurusan berkas kependudukan Anda?',
      subtitle:
        'Pilih kantor pelayanan atau loket administrasi terdekat dengan domisili Anda.',
      helpBox: {
        text: 'Cek daftar kantor Disdukcapil dan kecamatan aktif.',
        linkText: 'Lihat Peta Layanan',
        href: '#peta-layanan',
      },
      options: [
        {
          id: 'loket-disdukcapil',
          title: 'Kantor Dinas Kependudukan dan Catatan Sipil',
          description:
            'Pelayanan terpadu satu atap tingkat kota/kabupaten dengan kuota harian reguler.',
          nextId: 'hasil-rekomendasi',
        },
        {
          id: 'loket-kecamatan',
          title: 'Loket Pelayanan Administrasi Kecamatan Setempat',
          description:
            'Layanan dokumen di kantor kecamatan terdekat sesuai alamat pada Kartu Keluarga.',
          nextId: 'hasil-rekomendasi',
        },
      ],
    },
    'hasil-rekomendasi': {
      id: 'hasil-rekomendasi',
      stepNumber: 4,
      stepLabel: 'Hasil Rekomendasi',
      title: 'Panduan dan Berkas Persyaratan Pengurusan',
      subtitle:
        'Berikut daftar lengkap dokumen, estimasi waktu penyelesaian, dan lokasi loket pelayanan Anda.',
      isTerminalResult: true,
      options: [],
    },
  },
};

interface HistoryEntry {
  questionId: string;
  selectedOptionId: string | null;
}

export interface WizardEngineProps {
  serviceData?: WizardServiceConfig;
  initialSelectedOptionId?: string;
  onFinish?: (answers: Record<string, string>) => void;
}

export const WizardEngine: React.FC<WizardEngineProps> = ({
  serviceData = DEFAULT_WIZARD_DATA,
  initialSelectedOptionId = 'akta-kelahiran',
  onFinish,
}) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    serviceData.initialQuestionId
  );
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    // Inisialisasi dari initialSelectedOptionId untuk fixture visual
    if (initialSelectedOptionId) {
      return { [serviceData.initialQuestionId]: initialSelectedOptionId };
    }
    return {};
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  const currentQuestion =
    serviceData.questions[currentQuestionId] ||
    serviceData.questions[serviceData.initialQuestionId];

  const currentStep = currentQuestion?.stepNumber || 1;
  const totalSteps = serviceData.steps.length;
  const selectedOptionId = answers[currentQuestionId] || null;

  // Persentase dinamis = langkah aktif / total
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

  // Handle pemilihan opsi radio
  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: optionId,
    }));
  };

  // Navigasi lanjut
  const handleContinue = () => {
    if (!selectedOptionId) return;

    const chosenOption = currentQuestion.options.find(
      (opt) => opt.id === selectedOptionId
    );

    if (!chosenOption?.nextId) {
      if (onFinish) {
        onFinish(answers);
      }
      return;
    }

    const nextQuestionId = chosenOption.nextId;
    setHistory((prev) => [
      ...prev,
      {
        questionId: currentQuestionId,
        selectedOptionId,
      },
    ]);

    setCurrentQuestionId(nextQuestionId);
  };

  // Navigasi kembali (mulai langkah 2)
  const handleBack = () => {
    if (history.length === 0) return;

    const lastEntry = history[history.length - 1];
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setCurrentQuestionId(lastEntry.questionId);
  };

  // Simpan Draf Sesi ke sessionStorage & tampilkan toast
  const handleSaveDraft = () => {
    try {
      const draftData = {
        serviceId: serviceData.id,
        currentQuestionId,
        answers,
        history,
        savedAt: new Date().toISOString(),
      };
      sessionStorage.setItem('wizard_session_draft', JSON.stringify(draftData));
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

  const isTerminal = Boolean(currentQuestion.isTerminalResult);

  return (
    <div className="wizard-engine">
      <div className="content-container">
        {/* Progress Header & Dynamic Bars */}
        <div className="wizard-progress-section" aria-label="Progres Pengisian Layanan">
          <div className="progress-top-row">
            <span className="step-counter-text">
              LANGKAH {currentStep} DARI {totalSteps}
            </span>
            <span className="step-percentage-text">{progressPercent}% Selesai</span>
          </div>

          {/* Bar Grid Dinamis (3-5 Segmen) */}
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
            {serviceData.steps.map((st) => {
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

          {/* Label Segmen di Bawah Bar */}
          <div
            className="progress-labels-grid"
            style={{
              gridTemplateColumns: `repeat(${totalSteps}, 1fr)`,
            }}
          >
            {serviceData.steps.map((st) => {
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

        {/* Question Card Component */}
        <QuestionCard
          currentStep={currentStep}
          stepLabel={currentQuestion.stepLabel}
          title={currentQuestion.title}
          subtitle={currentQuestion.subtitle}
          options={currentQuestion.options}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
          onContinue={handleContinue}
          onBack={handleBack}
          onSaveDraft={handleSaveDraft}
          canGoBack={history.length > 0}
          isContinueDisabled={!selectedOptionId}
          helpBox={currentQuestion.helpBox}
          showHelpBox={!isTerminal && Boolean(currentQuestion.helpBox)}
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
