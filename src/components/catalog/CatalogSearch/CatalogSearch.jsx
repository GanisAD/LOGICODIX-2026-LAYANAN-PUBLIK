import { useState } from 'react';
import './CatalogSearch.css';
import SearchIcon from '../../icons/SearchIcon';
import CloseIcon from '../../icons/CloseIcon';

export default function CatalogSearch({ searchQuery = '', onSearch, onReset }) {
  const [internalQuery, setInternalQuery] = useState(searchQuery);

  const handleChange = (e) => {
    const value = e.target.value;
    setInternalQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(internalQuery);
    }
  };

  const handleClear = () => {
    setInternalQuery('');
    if (onReset) {
      onReset();
    } else if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form className="catalog-search-form" onSubmit={handleSubmit} role="search">
      <div className="search-input-wrapper">
        <span className="search-icon-adornment" aria-hidden="true">
          <SearchIcon size={18} color="#94a3b8" />
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Cari nama layanan, instansi, atau kata kunci..."
          value={internalQuery}
          onChange={handleChange}
          aria-label="Cari nama layanan, instansi, atau kata kunci"
        />
        {internalQuery && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Hapus kata kunci pencarian"
          >
            <CloseIcon size={16} color="#94a3b8" />
          </button>
        )}
      </div>

      <button type="submit" className="search-submit-btn">
        Cari
      </button>
    </form>
  );
}
