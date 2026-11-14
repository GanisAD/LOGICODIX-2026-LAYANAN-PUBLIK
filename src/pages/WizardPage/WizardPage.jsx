import './WizardPage.css';
import Breadcrumb from '../../components/catalog/Breadcrumb/Breadcrumb';
import WizardEngine from '../../components/wizard/WizardEngine/WizardEngine';

export default function WizardPage({ onNavigate }) {
  const handleFinish = (answers) => {
    // Bangun stateless URL query params dari hasil pilihan wizard
    const params = new URLSearchParams();
    if (answers['kategori-layanan']) {
      params.set('ans1', answers['kategori-layanan']);
    }
    if (answers['detail-kebutuhan']) {
      params.set('ans2', answers['detail-kebutuhan']);
    }
    if (answers['lokasi-waktu']) {
      params.set('ans3', answers['lokasi-waktu']);
    }
    params.set('cat', 'Kedai Kopi / Kafe / Warung Makan');
    params.set('title', 'Izin Usaha Anda: NIB Usaha Mikro (Gratis)');
    params.set('reg', '#SPK-SUB-2025-8849');
    params.set('kbli', '56303 (Kedai Minuman/Kopi)');

    // Redirect ke halaman hasil
    const targetHash = `#/hasil?${params.toString()}`;
    window.location.hash = targetHash;
    if (onNavigate) {
      onNavigate('Halaman Hasil', params.toString());
    }
  };

  return (
    <div className="wizard-page">
      <div className="wizard-page-container">
        <Breadcrumb
          items={[
            { label: 'BERANDA', href: '#/beranda', active: false },
            { label: 'PANDUAN PINTAR (WIZARD)', href: '#/wizard', active: true }
          ]}
        />
        <WizardEngine onFinish={handleFinish} />
      </div>
    </div>
  );
}
