import { useState, useMemo } from 'react';
import './CatalogPage.css';
import PageHeader from '../../components/catalog/PageHeader/PageHeader';
import CatalogSearch from '../../components/catalog/CatalogSearch/CatalogSearch';
import CatalogList from '../../components/catalog/CatalogList/CatalogList';
import ServiceModal from '../../components/catalog/ServiceModal/ServiceModal';
import { servicesData } from '../../data/servicesData';

export default function CatalogPage({ initialSearch = '' }) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedService, setSelectedService] = useState(null);

  // Sync if initialSearch changes
  useMemo(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  // Filter services by title, category, description, initials, or agency
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return servicesData;
    }
    const query = searchQuery.toLowerCase().trim();
    return servicesData.filter((service) => {
      return (
        service.title.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.initials.toLowerCase().includes(query) ||
        service.details?.agency?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  const handleOpenDetail = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <section className="catalog-page" aria-label="Halaman Katalog Layanan Publik">
      <div className="catalog-container">
        {/* Breadcrumbs and Title Header */}
        <PageHeader
          title="Katalog Layanan Publik"
          subtitle="Pilih dan temukan informasi resmi prosedur, persyaratan, serta estimasi jam kerja layanan administrasi publik."
        />

        {/* Search Input Bar */}
        <CatalogSearch
          searchQuery={searchQuery}
          onSearch={handleSearch}
          onReset={handleResetSearch}
        />

        {/* Cards List Section */}
        <CatalogList
          services={filteredServices}
          onSelectDetail={handleOpenDetail}
          searchQuery={searchQuery}
        />
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
}
