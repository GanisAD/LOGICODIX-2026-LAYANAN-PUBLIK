import './CatalogList.css';
import CatalogCard from '../CatalogCard/CatalogCard';

export default function CatalogList({ services = [], onSelectDetail, searchQuery = '' }) {
  if (services.length === 0) {
    return (
      <div className="catalog-empty-state">
        <div className="empty-icon-circle" aria-hidden="true">
          <span>🔍</span>
        </div>
        <h4 className="empty-title">Layanan Tidak Ditemukan</h4>
        <p className="empty-message">
          Tidak ada layanan publik yang cocok dengan kata kunci <strong>"{searchQuery}"</strong>. Silakan coba kata kunci lain seperti <em>"KTP"</em>, <em>"BPJS"</em>, atau <em>"OSS"</em>.
        </p>
      </div>
    );
  }

  return (
    <section className="catalog-list-section" aria-label="Daftar Layanan Publik">
      <div className="catalog-cards-container">
        {services.map((service) => (
          <CatalogCard
            key={service.id}
            service={service}
            onSelectDetail={onSelectDetail}
          />
        ))}
      </div>
    </section>
  );
}
