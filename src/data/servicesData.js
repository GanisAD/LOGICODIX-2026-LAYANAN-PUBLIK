export const servicesData = [
  {
    id: 'dk-01',
    initials: 'DK',
    category: 'Dinas Kependudukan dan Pencatatan Sipil',
    title: 'Administrasi Kependudukan (KTP-el & Kartu Keluarga)',
    description:
      'Penerbitan dan pembaruan dokumen kependudukan seperti KTP elektronik, Kartu Keluarga (KK), Akta Kelahiran, dan Surat Pindah domisili.',
    schedule: 'Senin – Jumat: 08.00 – 15.30 WIB',
    estimatePrefix: 'Estimasi Proses:',
    estimate: '1–2 Hari Kerja',
    status: 'Layanan Aktif',
    statusType: 'active',
    details: {
      agency: 'Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil)',
      location: 'Gedung Mal Pelayanan Publik (MPP) Lt. 2, Loket 05-08',
      contact: '0811-2345-6789 / disdukcapil@layanan.go.id',
      cost: 'Gratis (Rp 0 - Bebas Pungli)',
      requirements: [
        'Kartu Keluarga (KK) asli dan fotokopi',
        'KTP-el lama (khusus perpanjangan / penggantian rusak)',
        'Surat Keterangan Kehilangan dari Polsek (jika hilang)',
        'Akta Kelahiran dan Ijazah terakhir untuk verifikasi data pemohon baru',
        'Surat Keterangan Pindah (SKP) bagi pemohon pindah domisili'
      ],
      procedures: [
        'Mengambil nomor antrean atau booking antrean online lewat portal',
        'Penyerahan berkas dan verifikasi data oleh petugas loket',
        'Perekaman data biometrik (sidik jari, iris mata, foto) bagi pemohon KTP baru',
        'Proses validasi database kependudukan SIAK terpusat',
        'Pencetakan dan penyerahan KTP-el / KK serta tanda terima'
      ]
    }
  },
  {
    id: 'bp-02',
    initials: 'BP',
    category: 'BPJS Kesehatan & Fasilitas Pelayanan',
    title: 'Pendaftaran & Mutasi Kepesertaan BPJS Kesehatan',
    description:
      'Layanan pendaftaran peserta baru, perubahan data faskes tingkat pertama, cetak kartu digital, dan verifikasi status keaktifan jaminan.',
    schedule: 'Senin – Jumat: 08.00 – 15.00 WIB (Online 24 Jam)',
    estimatePrefix: 'Estimasi:',
    estimate: 'Instan - 1 Hari',
    status: 'Online 24/7',
    statusType: 'online',
    details: {
      agency: 'Badan Penyelenggara Jaminan Sosial (BPJS) Kesehatan',
      location: 'Kantor Cabang BPJS Kesehatan & Kanal Digital Mobile JKN',
      contact: 'Care Center 165 / pandawa@bpjs-kesehatan.go.id',
      cost: 'Gratis biaya registrasi (Iuran bulanan sesuai kelas mandiri / PBI)',
      requirements: [
        'Kartu Tanda Penduduk (e-KTP) atau Kartu Keluarga (KK)',
        'Buku tabungan bank mitra (BRI, Mandiri, BNI, BTN, atau BCA) untuk autodebet',
        'Nomor ponsel aktif yang terhubung WhatsApp',
        'Alamat email aktif untuk pengiriman e-ID / kartu digital'
      ],
      procedures: [
        'Mengakses kanal layanan online (Aplikasi Mobile JKN / Layanan PANDAWA) atau loket cabang',
        'Mengisi form identitas dan memilih Fasilitas Kesehatan Tingkat Pertama (FKTP)',
        'Memilih kelas perawatan (Kelas I, II, atau III) bagi peserta mandiri',
        'Melakukan autodebet atau pembayaran iuran pertama jika mandiri',
        'Kartu digital (KIS Digital) langsung aktif dan dapat diunduh di aplikasi'
      ]
    }
  },
  {
    id: 'iu-03',
    initials: 'IU',
    category: 'Dinas Penanaman Modal & PTSP',
    title: 'Penerbitan NIB & Izin Usaha Mikro Kecil (OSS-RBA)',
    description:
      'Pembuatan Nomor Induk Berusaha (NIB), izin edar produk, sertifikasi standar usaha mikro kecil, serta fasilitasi legalitas usaha terpadu.',
    schedule: 'Senin – Jumat: 08.30 – 16.00 WIB',
    estimatePrefix: 'Estimasi Proses:',
    estimate: '1-3 Hari Kerja',
    status: 'Layanan Aktif',
    statusType: 'active',
    details: {
      agency: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP)',
      location: 'Layanan OSS Terpadu DPMPTSP / Sistem Daring OSS-RBA',
      contact: 'Kontak OSS: 0811-9876-5432 / bantuan@oss.go.id',
      cost: 'Gratis (Rp 0 - Layanan OSS Resmi Pemerintah)',
      requirements: [
        'Nomor Induk Kependudukan (NIK) e-KTP Pemilik Usaha',
        'Nomor Pokok Wajib Pajak (NPWP) Pribadi / Badan Usaha (valid)',
        'Data detail kegiatan usaha dan kode KBLI 5 digit yang sesuai',
        'Nomor telepon WhatsApp dan alamat surel (email) aktif usaha',
        'Data lokasi dan estimasi modal usaha'
      ],
      procedures: [
        'Membuat akun Hak Akses pada sistem OSS-RBA menggunakan NIK',
        'Mengisi profil pelaku usaha dan data legalitas kegiatan usaha',
        'Memilih kegiatan usaha sesuai klasifikasi baku (KBLI) dan tingkat risiko usaha',
        'Verifikasi otomatis oleh sistem berbasis risiko (Risk-Based Approach)',
        'Penerbitan langsung NIB elektronik yang dilengkapi QR Code resmi'
      ]
    }
  }
];
