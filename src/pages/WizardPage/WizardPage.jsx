import { useState, useEffect } from 'react';
import './WizardPage.css';
import Breadcrumb from '../../components/catalog/Breadcrumb/Breadcrumb';
import WizardEngine from '../../components/wizard/WizardEngine/WizardEngine';
import { getServiceById } from '../../data/services';

export default function WizardPage({ onNavigate, selectedServiceId }) {
  const getActiveServiceId = () => {
    if (selectedServiceId) return selectedServiceId;
    const hash = window.location.hash || '';
    const queryIndex = hash.indexOf('?');
    if (queryIndex !== -1) {
      const searchParams = new URLSearchParams(hash.substring(queryIndex));
      return searchParams.get('service') || 'permits-microbusiness-03';
    }
    return 'permits-microbusiness-03';
  };

  const [serviceId, setServiceId] = useState(getActiveServiceId);

  useEffect(() => {
    setServiceId(getActiveServiceId());
  }, [selectedServiceId]);

  useEffect(() => {
    const handleHashChange = () => setServiceId(getActiveServiceId());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [selectedServiceId]);

  const activeService = getServiceById(serviceId);

  const handleFinish = (payload) => {
    const finalServiceId = payload?.serviceId || activeService.id;
    const finalResultId = payload?.resultId || '';
    const answerMap = payload?.answers || {};

    const params = new URLSearchParams();
    params.set('service', finalServiceId);

    if (finalResultId) {
      params.set('res', finalResultId);
    }

    if (Object.keys(answerMap).length > 0) {
      params.set('ans', btoa(encodeURIComponent(JSON.stringify(answerMap))));
    }

    const queryString = params.toString();
    window.location.hash = `#/hasil?${queryString}`;

    if (onNavigate) {
      onNavigate('Halaman Hasil', {
        serviceId: finalServiceId,
        resultId: finalResultId,
        queryString,
      });
    }
  };

  return (
    <div className="wizard-page">
      <div className="wizard-page-container">
        <Breadcrumb
          items={[
            { label: 'BERANDA', href: '#/beranda', active: false },
            {
              label: activeService.category.toUpperCase(),
              href: '#/katalog',
              active: false,
            },
            {
              label: activeService.title,
              href: `#/wizard?service=${activeService.id}`,
              active: true,
            },
          ]}
        />
        <WizardEngine
          serviceData={activeService}
          onFinish={handleFinish}
        />
      </div>
    </div>
  );
}