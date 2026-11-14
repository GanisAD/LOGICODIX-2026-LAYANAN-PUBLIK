import './WizardPage.css';
import Breadcrumb from '../../components/catalog/Breadcrumb/Breadcrumb';
import WizardEngine from '../../components/wizard/WizardEngine/WizardEngine';

export default function WizardPage({ onNavigate }) {
  const handleFinish = (answers) => {
    // Navigasi ke katalog dengan query atau hasil pilihan
    if (onNavigate) {
      onNavigate('Katalog Layanan');
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
