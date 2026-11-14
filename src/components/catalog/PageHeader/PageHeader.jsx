import './PageHeader.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function PageHeader({
  title = 'Katalog Layanan Publik',
  subtitle = 'Pilih dan temukan informasi resmi prosedur, persyaratan, serta estimasi jam kerja layanan administrasi publik.'
}) {
  return (
    <div className="catalog-header-section">
      <Breadcrumb />
      <h2 className="catalog-main-title">{title}</h2>
      <p className="catalog-main-subtitle">{subtitle}</p>
    </div>
  );
}
