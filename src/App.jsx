import { useState, useMemo } from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import PageHeader from './components/catalog/PageHeader/PageHeader';
import CatalogSearch from './components/catalog/CatalogSearch/CatalogSearch';
import CatalogList from './components/catalog/CatalogList/CatalogList';
import ServiceModal from './components/catalog/ServiceModal/ServiceModal';
import { servicesData } from './data/servicesData';

function App() {
  const [activeNav, setActiveNav] = useState('Katalog Layanan');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Filter services by title, category, description, or keyword
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

  const handleNavClick = (navLabel) => {
    setActiveNav(navLabel);
    if (navLabel !== 'Katalog Layanan') {
      // Optional feedback or smooth navigation behavior
    }
  };

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
    <div className="app-layout">
      {/* Primary Header Navbar */}
      <Header activeNav={activeNav} onNavClick={handleNavClick} />

      {/* Main Catalog View Container */}
      <main className="catalog-main">
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
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App;
