import './GuidePage.css';
import Breadcrumb from '../../components/catalog/Breadcrumb/Breadcrumb';

export default function GuidePage({ onNavigate }) {
  const guides = [
    {
      title: 'Panduan Registrasi Antrean Online Mal Pelayanan Publik (MPP)',
      category: 'Tata Cara Antrean',
      description: 'Ikuti langkah-langkah mudah memesan nomor antrean secara online sebelum datang ke loket fisik untuk menghemat waktu.',
      steps: [
        'Buka portal atau aplikasi MPP terdekat di wilayah domisili Anda',
        'Pilih instansi dan jenis layanan yang ingin diurus (Disdukcapil, BPJS, atau PTSP)',
        'Tentukan hari dan jam kedatangan yang masih tersedia kuota',
        'Simpan bukti booking QR Code untuk di-scan di mesin tiket antrean'
      ]
    },
    {
      title: 'Daftar Berkas Dokumen Penting yang Wajib Dibawa',
      category: 'Persiapan Dokumen',
      description: 'Pastikan dokumen fisik dan digital berikut selalu dipersiapkan dalam format fotokopi dan scan PDF yang jelas.',
      steps: [
        'KTP elektronik dan Kartu Keluarga (KK) terbaru',
        'Surat pengantar RT/RW (khusus jenis layanan yang masih mewajibkan)',
        'Buku tabungan bank jika membutuhkan fasilitas autodebet',
        'Surat kuasa bermaterai jika pengurusan diwakilkan oleh pihak keluarga'
      ]
    },
    {
      title: 'Tips Aman Mengurus Layanan Publik (Anti Pungli & Calo)',
      category: 'Keamanan & Kepatuhan',
      description: 'Layanan administrasi publik dasar tidak memungut biaya liar. Pahami hak Anda sebagai warga negara.',
      steps: [
        'Selalu lakukan pembayaran melalui loket resmi atau transfer perbankan resmi negara',
        'Tolak tawaran jasa perantara / calo di luar loket resmi',
        'Laporkan indikasi pungutan liar secara anonim melalui kanal Laporan Pungli'
      ]
    }
  ];

  return (
    <div className="guide-page">
      <div className="guide-container">
        <Breadcrumb items={[
          { label: 'BERANDA', href: '#/beranda', active: false },
          { label: 'PANDUAN LAYANAN', href: '#/panduan', active: true }
        ]} />

        <div className="guide-header">
          <h2 className="guide-main-title">Panduan & Prosedur Pelayanan</h2>
          <p className="guide-main-subtitle">
            Kumpulan panduan praktis dan tips resmi untuk mempermudah masyarakat dalam mengurus berbagai perizinan dan dokumen kenegaraan.
          </p>
        </div>

        <div className="guide-list">
          {guides.map((item, idx) => (
            <article key={idx} className="guide-card">
              <span className="guide-category-badge">{item.category}</span>
              <h3 className="guide-title">{item.title}</h3>
              <p className="guide-description">{item.description}</p>
              <div className="guide-steps-box">
                <h4 className="guide-steps-heading">Langkah Pelaksanaan:</h4>
                <ol className="guide-step-items">
                  {item.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>

        <div className="guide-footer-cta">
          <p>Sudah siap mengurus layanan yang Anda butuhkan?</p>
          <button
            type="button"
            className="guide-btn-cta"
            onClick={() => onNavigate && onNavigate('Katalog Layanan')}
          >
            Lihat Katalog Layanan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
