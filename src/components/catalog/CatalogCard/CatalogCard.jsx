import './CatalogCard.css';
import ClockIcon from '../../icons/ClockIcon';
import ChevronRightIcon from '../../icons/ChevronRightIcon';

export default function CatalogCard({ service, onSelectDetail }) {
  const {
    initials,
    category,
    title,
    description,
    schedule,
    estimatePrefix,
    estimate,
    status
  } = service;

  return (
    <article className="catalog-card" aria-labelledby={`service-title-${service.id}`}>
      {/* Avatar Circle */}
      <div className="card-avatar-wrapper" aria-hidden="true">
        <div className="card-avatar">
          <span>{initials}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="card-content">
        {/* Category Pill Tag */}
        <div className="card-category-badge">
          <span>{category}</span>
        </div>

        {/* Service Title */}
        <h3 id={`service-title-${service.id}`} className="card-title">
          {title}
        </h3>

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* Schedule & Estimate Metadata */}
        <div className="card-metadata">
          <ClockIcon size={14} color="#002379" className="metadata-clock-icon" />
          <span className="metadata-schedule">{schedule}</span>
          <span className="metadata-divider">·</span>
          <span className="metadata-estimate">
            <strong className="metadata-estimate-highlight">
              {estimatePrefix} {estimate}
            </strong>
          </span>
        </div>
      </div>

      {/* Right Column: Status and Action Button */}
      <div className="card-actions">
        {/* Status Badge */}
        <div className="card-status-badge">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">{status}</span>
        </div>

        {/* Detail Button */}
        <button
          type="button"
          className="card-detail-btn"
          onClick={() => onSelectDetail && onSelectDetail(service)}
          aria-label={`Lihat detail layanan ${title}`}
        >
          <span>Lihat Detail</span>
          <ChevronRightIcon size={14} color="#ffffff" />
        </button>
      </div>
    </article>
  );
}
