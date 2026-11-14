import './Breadcrumb.css';

export default function Breadcrumb({ items = [] }) {
  const defaultItems = [
    { label: 'BERANDA', href: '#', active: false },
    { label: 'KATALOG LAYANAN', href: '#', active: true }
  ];

  const currentItems = items.length > 0 ? items : defaultItems;

  return (
    <nav className="catalog-breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {currentItems.map((item, index) => (
          <li key={item.label} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {item.active ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="breadcrumb-link">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
