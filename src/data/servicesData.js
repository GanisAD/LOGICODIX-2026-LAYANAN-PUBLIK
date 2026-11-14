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
  },
  {
    "id": "adminduk-ktp-01",
    "slug": "penerbitan-cetak-ulang-ktp-el",
    "title": "Penerbitan & Cetak Ulang KTP Elektronik (KTP-el)",
    "shortDescription": "Panduan syarat dan alur penerbitan KTP baru, perubahan data, hingga cetak ulang KTP hilang atau rusak di Dispendukcapil Surabaya.",
    "category": "Administrasi Kependudukan",
    "agency": "Dinas Kependudukan dan Pencatatan Sipil (Dispendukcapil) Kota Surabaya",
    "estimatedProcessingTime": "Maksimal 7 hari kerja",
    "officialFee": 0,
    "officialFeeLabel": "Rp0 (Gratis)",
    "sourceUrl": "https://dispendukcapil.surabaya.go.id",
    "lastVerified": "2026-11-14",
    "antiExtortionBanner": {
      "message": "Seluruh pengurusan KTP-el di Kota Surabaya GRATIS (Rp0). Laporkan jika ada oknum yang meminta pungutan biaya.",
      "channels": [
        {
          "name": "Media Center / Aplikasi WargaKu Surabaya",
          "url": "https://mediacenter.surabaya.go.id",
          "contact": "0812-3025-7000"
        },
        {
          "name": "Whistleblowing System (WBS) Pemkot Surabaya",
          "url": "https://wbs.surabaya.go.id",
          "contact": "wbs.surabaya.go.id"
        }
      ]
    },
    "locations": [
      {
        "name": "Mal Pelayanan Publik (MPP) Gedung Siola - Loket Dispendukcapil",
        "address": "Jl. Tunjungan No. 1-3, Genteng, Kota Surabaya",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB",
        "lat": -7.25634,
        "lng": 112.73761
      },
      {
        "name": "Kantor Kecamatan, Kelurahan, & Balai RW Surabaya",
        "address": "31 Kantor Kecamatan, 154 Kelurahan, & Balai RW se-Kota Surabaya",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB (Balai RW: Selasa & Jumat)",
        "lat": -7.25747,
        "lng": 112.75209
      }
    ],
    "startQuestionId": "ktp-q1",
    "questions": [
      {
        "id": "ktp-q1",
        "step": 1,
        "text": "Apa keperluan utama pengurusan KTP Elektronik (KTP-el) Anda?",
        "options": [
          {
            "label": "Pemula (baru berusia 17 tahun / belum pernah punya KTP-el)",
            "nextId": "ktp-q2-pemula"
          },
          {
            "label": "Perubahan data pada KTP (alamat, status nikah, nama, pekerjaan)",
            "nextId": "ktp-q2-ubah"
          },
          {
            "label": "KTP-el hilang atau rusak (patah / terkelupas / chip mati)",
            "nextId": "ktp-q2-hilang-rusak"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Jika Anda belum pernah memiliki KTP fisik sama sekali, pilih jalur Pemula. Jika KTP lama sudah ada namun data tidak sesuai atau hilang/rusak, pilih jalur cetak ulang.",
            "nextId": "ktp-q2-hilang-rusak"
          }
        ]
      },
      {
        "id": "ktp-q2-pemula",
        "step": 2,
        "text": "Apakah Anda sudah pernah melakukan perekaman biometrik (foto, sidik jari, & iris mata)?",
        "options": [
          {
            "label": "Sudah pernah rekam di Kecamatan / Siola / sekolah",
            "nextId": "ktp-q3-kanal-pemula"
          },
          {
            "label": "Belum pernah melakukan perekaman biometrik",
            "nextId": "ktp-q3-domisili-pemula"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Perekaman biometrik wajib dilakukan secara fisik satu kali seumur hidup. Jika ragu, kami arahkan ke panduan perekaman di Kecamatan/Siola.",
            "nextId": "ktp-q3-domisili-pemula"
          }
        ]
      },
      {
        "id": "ktp-q3-kanal-pemula",
        "step": 3,
        "text": "Metode pengajuan apa yang paling nyaman bagi Anda?",
        "options": [
          {
            "label": "Mandiri lewat HP/Laptop melalui aplikasi Klampid New Generation (KNG)",
            "nextId": "res-ktp-pemula-online"
          },
          {
            "label": "Datang langsung dengan bantuan petugas di Balai RW / Kelurahan",
            "nextId": "res-ktp-pemula-offline"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Pengajuan lewat aplikasi KNG dapat dilakukan dari rumah dan KTP fisik tinggal diambil di Kelurahan setelah selesai.",
            "nextId": "res-ktp-pemula-online"
          }
        ]
      },
      {
        "id": "ktp-q3-domisili-pemula",
        "step": 3,
        "text": "Apakah NIK Anda sudah terdaftar di Kartu Keluarga (KK) Kota Surabaya?",
        "options": [
          {
            "label": "Ya, KK saya beralamat di Kota Surabaya",
            "nextId": "res-ktp-pemula-rekam-sby"
          },
          {
            "label": "Tidak, KK saya masih daerah luar Surabaya (perekaman luar domisili)",
            "nextId": "res-ktp-pemula-rekam-luar"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Cek bagian atas Kartu Keluarga Anda. Pastikan membawa KK asli saat datang ke loket perekaman Kecamatan atau MPP Siola.",
            "nextId": "res-ktp-pemula-rekam-sby"
          }
        ]
      },
      {
        "id": "ktp-q2-ubah",
        "step": 2,
        "text": "Jenis perubahan data apa yang ingin Anda lakukan?",
        "options": [
          {
            "label": "Perubahan umum (alamat dalam kota, status perkawinan, pendidikan, pekerjaan)",
            "nextId": "ktp-q3-cek-kk"
          },
          {
            "label": "Perubahan elemen akta/identitas krusial (perubahan nama, tempat/tanggal lahir)",
            "nextId": "ktp-q3-sidang-pn"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Perubahan alamat, gelar, atau status nikah cukup memakai dokumen pendukung biasa, sedangkan perubahan nama lengkap memerlukan penetapan Pengadilan.",
            "nextId": "ktp-q3-cek-kk"
          }
        ]
      },
      {
        "id": "ktp-q3-cek-kk",
        "step": 3,
        "text": "Apakah data pada Kartu Keluarga (KK) Anda sudah diperbarui sesuai perubahan tersebut?",
        "options": [
          {
            "label": "Sudah, data di KK sudah versi terbaru",
            "nextId": "res-ktp-ubah-kk-ready"
          },
          {
            "label": "Belum, data di KK masih data lama",
            "nextId": "res-ktp-ubah-dengan-kk"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Pencetakan KTP baru selalu mengikuti data yang tercantum di KK. Anda bisa mengajukan pembaruan KK sekaligus KTP dalam satu alur di KNG.",
            "nextId": "res-ktp-ubah-dengan-kk"
          }
        ]
      },
      {
        "id": "ktp-q3-sidang-pn",
        "step": 3,
        "text": "Apakah Anda sudah memiliki salinan penetapan dari Pengadilan Negeri (PN)?",
        "options": [
          {
            "label": "Sudah memiliki salinan penetapan PN",
            "nextId": "res-ktp-ubah-dengan-kk"
          },
          {
            "label": "Belum, ingin mengurus lewat layanan terintegrasi PN di Kecamatan",
            "nextId": "res-ktp-integrasi-pn"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Pemkot Surabaya menyediakan layanan sidang terintegrasi Pengadilan Negeri langsung di Kantor Kecamatan untuk 18 jenis perubahan biodata/akta.",
            "nextId": "res-ktp-integrasi-pn"
          }
        ]
      },
      {
        "id": "ktp-q2-hilang-rusak",
        "step": 2,
        "text": "Bagaimana kondisi fisik KTP-el Anda saat ini?",
        "options": [
          {
            "label": "Hilang (tercecer / dicuri / tidak ditemukan)",
            "nextId": "ktp-q3-surat-polisi"
          },
          {
            "label": "Rusak (fisik masih ada tapi patah, buram, atau chip rusak)",
            "nextId": "ktp-q3-kanal-rusak"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Jika fisik kartu KTP lama tidak bisa diserahkan ke petugas, maka wajib diproses sebagai KTP Hilang dengan melampirkan surat kepolisian.",
            "nextId": "ktp-q3-surat-polisi"
          }
        ]
      },
      {
        "id": "ktp-q3-surat-polisi",
        "step": 3,
        "text": "Apakah Anda sudah mengurus Surat Keterangan Kehilangan dari Kepolisian (Polsek/Polrestabes)?",
        "options": [
          {
            "label": "Sudah punya Surat Kehilangan dari Polisi",
            "nextId": "res-ktp-hilang-ready"
          },
          {
            "label": "Belum punya Surat Kehilangan dari Polisi",
            "nextId": "res-ktp-hilang-belum-polisi"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Surat Keterangan Kehilangan dari Kepolisian adalah syarat wajib penggantian KTP hilang. Pembuatannya gratis di Polsek terdekat.",
            "nextId": "res-ktp-hilang-belum-polisi"
          }
        ]
      },
      {
        "id": "ktp-q3-kanal-rusak",
        "step": 3,
        "text": "Di mana Anda berencana mengajukan cetak ulang KTP rusak ini?",
        "options": [
          {
            "label": "Online lewat Klampid New Generation (KNG) lalu ambil di Kelurahan",
            "nextId": "res-ktp-rusak-online"
          },
          {
            "label": "Langsung ke Balai RW (Selasa/Jumat) atau Kelurahan setempat",
            "nextId": "res-ktp-rusak-online"
          },
          {
            "label": "Tidak tahu",
            "explanation": "KTP rusak tidak memerlukan surat kehilangan polisi, cukup tukarkan fisik KTP lama yang rusak saat pengambilan KTP baru.",
            "nextId": "res-ktp-rusak-online"
          }
        ]
      }
    ],
    "results": {
      "res-ktp-pemula-online": {
        "id": "res-ktp-pemula-online",
        "title": "Pencetakan KTP-el Pemula Mandiri via Klampid New Generation (KNG)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja setelah penunggalan data Kemendagri",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Scan/Foto Kartu Keluarga (KK) Kota Surabaya", "required": true },
          { "id": "doc-2", "name": "Scan/Foto Akta Kelahiran atau Ijazah terakhir", "required": true },
          { "id": "doc-3", "name": "Bukti tanda terima perekaman biometrik (jika ada)", "required": false }
        ],
        "steps": [
          "Buka situs dispendukcapil.surabaya.go.id dan masuk ke layanan Klampid New Generation (KNG).",
          "Pilih kategori Pendaftaran Penduduk > Permohonan KTP Elektronik (Pemula).",
          "Unggah dokumen persyaratan dan pilih titik pengambilan di Kelurahan domisili.",
          "Simpan bukti pengajuan berupa e-Kitir (barcode) untuk melacak progres pencetakan.",
          "Ambil fisik KTP-el di Kelurahan setelah status pada e-Kitir dinyatakan selesai."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-ktp-pemula-offline": {
        "id": "res-ktp-pemula-offline",
        "title": "Pencetakan KTP-el Pemula via Balai RW / Kelurahan",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fotokopi Kartu Keluarga (KK) Kota Surabaya", "required": true },
          { "id": "doc-2", "name": "Fotokopi Akta Kelahiran atau Ijazah terakhir", "required": true }
        ],
        "steps": [
          "Datang ke Balai RW setempat (setiap hari Selasa & Jumat) atau Kantor Kelurahan pada jam kerja.",
          "Serahkan berkas fotokopi KK dan Akta Kelahiran kepada petugas pendamping.",
          "Petugas akan membantu menginputkan permohonan ke sistem KNG dan memberikan e-Kitir.",
          "Ambil fisik KTP-el di Kelurahan sesuai pemberitahuan petugas."
        ],
        "officialChannels": [
          { "name": "Layanan Balai RW & Kelurahan Surabaya", "url": "https://dispendukcapil.surabaya.go.id", "type": "offline" }
        ]
      },
      "res-ktp-pemula-rekam-sby": {
        "id": "res-ktp-pemula-rekam-sby",
        "title": "Perekaman Biometrik & Penerbitan KTP-el Pemula (Warga Surabaya)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja sejak perekaman",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Kartu Keluarga (KK) Kota Surabaya asli/fotokopi", "required": true },
          { "id": "doc-2", "name": "Akta Kelahiran atau Ijazah terakhir", "required": true }
        ],
        "steps": [
          "Datang ke Kantor Kecamatan domisili atau MPP Gedung Siola dengan membawa dokumen asli.",
          "Ambil nomor antrian perekaman biometrik KTP-el.",
          "Lakukan verifikasi data, foto wajah, tanda tangan digital, sidik jari, dan pemindaian iris mata.",
          "Simpan tanda bukti perekaman (e-Kitir) dan ambil fisik KTP-el di Kelurahan setempat setelah selesai dicetak."
        ],
        "officialChannels": [
          { "name": "Kantor Kecamatan & MPP Gedung Siola", "url": "https://dispendukcapil.surabaya.go.id", "type": "offline" }
        ]
      },
      "res-ktp-pemula-rekam-luar": {
        "id": "res-ktp-pemula-rekam-luar",
        "title": "Perekaman Biometrik KTP-el Luar Domisili di Surabaya",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "1 hari kerja untuk perekaman (pencetakan mengikuti daerah asal atau setelah pindah)",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fotokopi Kartu Keluarga (KK) daerah asal", "required": true },
          { "id": "doc-2", "name": "Akta Kelahiran / Ijazah / Kartu Mahasiswa", "required": true }
        ],
        "steps": [
          "Kunjungi loket Dispendukcapil di MPP Gedung Siola (Jl. Tunjungan No. 1-3) untuk layanan perekaman luar domisili.",
          "Sampaikan kepada petugas bahwa Anda melakukan perekaman biometrik luar domisili.",
          "Data biometrik akan terkirim secara nasional ke pusat data Kemendagri untuk pencetakan KTP."
        ],
        "officialChannels": [
          { "name": "MPP Gedung Siola - Dispendukcapil Surabaya", "url": "https://dispendukcapil.surabaya.go.id", "type": "offline" }
        ]
      },
      "res-ktp-ubah-kk-ready": {
        "id": "res-ktp-ubah-kk-ready",
        "title": "Cetak Ulang KTP-el Perubahan Data (KK Sudah Terbaru)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Kartu Keluarga (KK) versi terbaru", "required": true },
          { "id": "doc-2", "name": "Fisik KTP-el lama (wajib ditukarkan saat pengambilan)", "required": true }
        ],
        "steps": [
          "Ajukan cetak ulang KTP-el melalui aplikasi KNG (dispendukcapil.surabaya.go.id) atau Balai RW.",
          "Unggah scan KK terbaru dan foto KTP-el lama.",
          "Pilih titik pengambilan di Kelurahan setempat dan simpan e-Kitir.",
          "Tukarkan KTP-el lama dengan KTP-el baru di Kelurahan saat status sudah selesai."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-ktp-ubah-dengan-kk": {
        "id": "res-ktp-ubah-dengan-kk",
        "title": "Pembaruan Data KK Sekaligus Penerbitan KTP-el Baru",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Kartu Keluarga (KK) lama", "required": true },
          { "id": "doc-2", "name": "Fisik KTP-el lama", "required": true },
          { "id": "doc-3", "name": "Dokumen dasar perubahan (Buku Nikah/Akta Cerai/Ijazah/SK Kerja/Penetapan PN)", "required": true }
        ],
        "steps": [
          "Ajukan permohonan Perubahan Biodata / Pembaruan KK terlebih dahulu melalui KNG atau Balai RW.",
          "Setelah KK digital baru terbit, ajukan cetak ulang KTP-el pada menu Pendaftaran Penduduk.",
          "Datang ke Kelurahan dengan membawa KTP-el lama untuk ditukarkan dengan KTP-el baru."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-ktp-integrasi-pn": {
        "id": "res-ktp-integrasi-pn",
        "title": "Perubahan Biodata KTP/Akta Terintegrasi Pengadilan Negeri di Kecamatan",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Layanan Adminduk Pemkot Gratis; biaya panjar sidang mengikuti ketentuan PN)",
        "estimatedTime": "Mengikuti jadwal sidang keliling di Kecamatan",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP dan Kartu Keluarga (KK) Surabaya", "required": true },
          { "id": "doc-2", "name": "Akta Kelahiran / Akta Perkawinan asli", "required": true },
          { "id": "doc-3", "name": "Bukti pendukung perubahan (Ijazah / Surat Keterangan / 2 orang saksi)", "required": true }
        ],
        "steps": [
          "Daftarkan permohonan perubahan elemen data penting di Kantor Kecamatan domisili.",
          "Ikuti jadwal sidang terintegrasi dengan Hakim Pengadilan Negeri Surabaya yang digelar di Kecamatan.",
          "Setelah putusan dibacakan, Dispendukcapil langsung menerbitkan KK dan KTP-el baru di lokasi."
        ],
        "officialChannels": [
          { "name": "Kantor Kecamatan Se-Kota Surabaya (Layanan Terintegrasi PN)", "url": "https://dispendukcapil.surabaya.go.id", "type": "offline" }
        ]
      },
      "res-ktp-hilang-ready": {
        "id": "res-ktp-hilang-ready",
        "title": "Penggantian KTP-el Hilang (Surat Kehilangan Lengkap)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Surat Keterangan Kehilangan dari Kepolisian (Asli)", "required": true },
          { "id": "doc-2", "name": "Scan/Fotokopi Kartu Keluarga (KK) Kota Surabaya", "required": true }
        ],
        "steps": [
          "Login ke portal Klampid New Generation (KNG) atau kunjungi Balai RW / Kelurahan.",
          "Pilih menu Cetak Ulang KTP-el Hilang dan unggah scan KK beserta Surat Kehilangan Kepolisian.",
          "Simpan e-Kitir dan ambil KTP-el baru di Kelurahan dengan menyerahkan Surat Kehilangan asli."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-ktp-hilang-belum-polisi": {
        "id": "res-ktp-hilang-belum-polisi",
        "title": "Langkah Awal & Penggantian KTP-el Hilang",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja setelah berkas diajukan",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fotokopi Kartu Keluarga (KK) untuk pengantar ke Polsek", "required": true },
          { "id": "doc-2", "name": "Surat Keterangan Kehilangan dari Polsek/Polrestabes", "required": true }
        ],
        "steps": [
          "Kunjungi Polsek terdekat dengan membawa fotokopi KK untuk membuat Surat Keterangan Kehilangan KTP (gratis).",
          "Setelah surat terbit, buka aplikasi Klampid New Generation (KNG) di dispendukcapil.surabaya.go.id.",
          "Ajukan permohonan KTP Hilang dengan mengunggah KK dan Surat Kehilangan tersebut.",
          "Ambil KTP-el baru di Kelurahan dengan menyerahkan Surat Kehilangan asli."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-ktp-rusak-online": {
        "id": "res-ktp-rusak-online",
        "title": "Penggantian / Cetak Ulang KTP-el Rusak",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "Maksimal 7 hari kerja",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fisik KTP-el lama yang rusak", "required": true },
          { "id": "doc-2", "name": "Scan/Fotokopi Kartu Keluarga (KK) Kota Surabaya", "required": true }
        ],
        "steps": [
          "Ajukan permohonan Cetak Ulang KTP Rusak melalui KNG (dispendukcapil.surabaya.go.id) atau Balai RW.",
          "Unggah scan KK dan foto fisik KTP-el yang rusak (tidak perlu surat kehilangan polisi).",
          "Tukar fisik KTP-el rusak dengan KTP-el baru di Kelurahan saat e-Kitir berstatus selesai."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (KNG)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" },
          { "name": "Balai RW & Kelurahan Surabaya", "url": "https://dispendukcapil.surabaya.go.id", "type": "offline" }
        ]
      }
    }
  },
  {
    "id": "permits-microbusiness-03",
    "slug": "izin-usaha-umkm-nib",
    "title": "Pendampingan & Penerbitan Izin Usaha UMKM (NIB)",
    "shortDescription": "Panduan penerbitan Nomor Induk Berusaha (NIB) dan pendampingan perizinan berbasis risiko bagi pelaku UMKM di Kota Surabaya.",
    "category": "Perizinan Berusaha UMKM",
    "agency": "DPMPTSP Kota Surabaya & Dinkopumdag Kota Surabaya",
    "estimatedProcessingTime": "1–2 hari kerja",
    "officialFee": 0,
    "officialFeeLabel": "Rp0 (Gratis)",
    "sourceUrl": "https://dpm-ptsp.surabaya.go.id",
    "lastVerified": "2026-11-14",
    "antiExtortionBanner": {
      "message": "Penerbitan NIB dan konsultasi Klinik Investasi DPMPTSP Surabaya GRATIS (Rp0). Laporkan segala bentuk percaloan atau pungli.",
      "channels": [
        {
          "name": "Media Center / Aplikasi WargaKu Surabaya",
          "url": "https://mediacenter.surabaya.go.id",
          "contact": "0812-3025-7000"
        },
        {
          "name": "Whistleblowing System (WBS) Pemkot Surabaya",
          "url": "https://wbs.surabaya.go.id",
          "contact": "wbs.surabaya.go.id"
        }
      ]
    },
    "locations": [
      {
        "name": "Mal Pelayanan Publik (MPP) Gedung Siola Lt. 3 - Klinik Investasi DPMPTSP",
        "address": "Jl. Tunjungan No. 1-3, Genteng, Kota Surabaya 60275",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB",
        "lat": -7.25634,
        "lng": 112.73761
      },
      {
        "name": "Sentra Pelayanan Publik (SPP) Menur",
        "address": "Jl. Raya Menur No. 31C, Manyar Sabrangan, Mulyorejo, Surabaya",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB",
        "lat": -7.28312,
        "lng": 112.76285
      }
    ],
    "startQuestionId": "umkm-q1",
    "questions": [
      {
        "id": "umkm-q1",
        "step": 1,
        "text": "Apa bentuk badan usaha yang Anda jalankan saat ini?",
        "options": [
          {
            "label": "Usaha Perseorangan (Milik pribadi / pedagang / kedai / kreator)",
            "nextId": "umkm-q2-modal"
          },
          {
            "label": "Badan Usaha (PT Perorangan, CV, PT Biasa, atau Koperasi)",
            "nextId": "umkm-q2-legalitas-badan"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Jika usaha belum didaftarkan ke notaris/Kemenkumham, maka usaha Anda berstatus Usaha Perseorangan dan cukup mendaftar menggunakan NIK e-KTP.",
            "nextId": "umkm-q2-modal"
          }
        ]
      },
      {
        "id": "umkm-q2-modal",
        "step": 2,
        "text": "Berapa perkiraan modal usaha Anda (di luar tanah dan bangunan tempat usaha)?",
        "options": [
          {
            "label": "Usaha Mikro (Maksimal Rp1 Miliar)",
            "nextId": "umkm-q3-tempat-usaha"
          },
          {
            "label": "Usaha Kecil (Lebih dari Rp1 Miliar s.d. Rp5 Miliar)",
            "nextId": "umkm-q3-tempat-usaha"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Mayoritas usaha rintisan, kuliner rumahan, dan toko ritel skala warga masuk kategori Usaha Mikro (modal di bawah Rp1 Miliar).",
            "nextId": "umkm-q3-tempat-usaha"
          }
        ]
      },
      {
        "id": "umkm-q3-tempat-usaha",
        "step": 3,
        "text": "Di mana lokasi kegiatan usaha Anda berlangsung?",
        "options": [
          {
            "label": "Rumah tinggal sendiri / sewa ruko komersial / usaha online",
            "nextId": "umkm-q4-bantuan"
          },
          {
            "label": "Lahan khusus / kawasan yang perlu cek kesesuaian tata ruang (KKPR)",
            "nextId": "res-umkm-tata-ruang"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Untuk usaha mikro & kecil (UMK), persetujuan kesesuaian tata ruang diproses otomatis lewat pernyataan mandiri di sistem OSS/SSW Alfa.",
            "nextId": "umkm-q4-bantuan"
          }
        ]
      },
      {
        "id": "umkm-q4-bantuan",
        "step": 4,
        "text": "Apakah Anda sudah mengetahui kode KBLI 2020 dan siap mengurusnya sendiri secara online?",
        "options": [
          {
            "label": "Sudah siap daftar mandiri lewat SSW Alfa / OSS RBA",
            "nextId": "res-umkm-mandiri"
          },
          {
            "label": "Butuh konsultasi kode KBLI & pendampingan loket Pemkot",
            "nextId": "res-umkm-pendampingan"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Pemilihan kode KBLI 5 digit sangat menentukan tingkat risiko usaha. Jika ragu, Anda dapat berkonsultasi gratis di Klinik Investasi MPP Siola atau Balai RW.",
            "nextId": "res-umkm-pendampingan"
          }
        ]
      },
      {
        "id": "umkm-q2-legalitas-badan",
        "step": 2,
        "text": "Apakah Akta Pendirian dan SK Pengesahan Kemenkumham (AHU) badan usaha Anda sudah terbit?",
        "options": [
          {
            "label": "Sudah terbit SK AHU & memiliki NPWP Badan Usaha",
            "nextId": "umkm-q3-badan-kanal"
          },
          {
            "label": "Belum memiliki Akta / SK AHU",
            "nextId": "res-umkm-belum-ahu"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Untuk badan usaha berbentuk CV/PT, data otomatis ditarik dari sistem AHU Kemenkumham menggunakan NPWP Badan.",
            "nextId": "umkm-q3-badan-kanal"
          }
        ]
      },
      {
        "id": "umkm-q3-badan-kanal",
        "step": 3,
        "text": "Apakah Anda memerlukan verifikasi tata ruang atau sertifikat standar tambahan?",
        "options": [
          {
            "label": "Risiko Rendah (hanya butuh penerbitan NIB)",
            "nextId": "res-umkm-badan-usaha"
          },
          {
            "label": "Butuh penapisan perizinan dasar / konsultasi teknis di DPMPTSP",
            "nextId": "res-umkm-tata-ruang"
          },
          {
            "label": "Tidak tahu",
            "explanation": "DPMPTSP Surabaya menyediakan aplikasi SI CERDAS dan Klinik Investasi untuk membantu penapisan perizinan dasar usaha.",
            "nextId": "res-umkm-badan-usaha"
          }
        ]
      }
    ],
    "results": {
      "res-umkm-mandiri": {
        "id": "res-umkm-mandiri",
        "title": "Penerbitan NIB UMK Perseorangan (Jalur Mandiri Online)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "1 hari kerja (terbit otomatis secara elektronik)",
        "sourceUrl": "https://sswalfa.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP Pemilik Usaha (NIK valid Dukcapil)", "required": true },
          { "id": "doc-2", "name": "Nomor WhatsApp & Email aktif untuk kode OTP", "required": true },
          { "id": "doc-3", "name": "NPWP Pribadi pemilik usaha (jika sudah punya)", "required": false },
          { "id": "doc-4", "name": "Data lokasi usaha di Surabaya, luas lahan, dan kode KBLI 2020", "required": true }
        ],
        "steps": [
          "Buka portal Surabaya Single Window (SSW) Alfa di sswalfa.surabaya.go.id atau sistem OSS RBA (oss.go.id).",
          "Daftar akun dengan memilih skala usaha UMK (Orang Perseorangan) dan verifikasi kode OTP.",
          "Lengkapi profil pemilik usaha menggunakan NIK e-KTP.",
          "Pilih kode KBLI 2020 yang sesuai, isi alamat usaha di Surabaya, serta nominal modal usaha.",
          "Setujui pernyataan mandiri kesanggupan pengelolaan lingkungan (SPPL) dan K3L.",
          "Unduh dan cetak dokumen Nomor Induk Berusaha (NIB) yang langsung terbit."
        ],
        "officialChannels": [
          { "name": "Surabaya Single Window (SSW) Alfa", "url": "https://sswalfa.surabaya.go.id", "type": "online" },
          { "name": "DPMPTSP Kota Surabaya", "url": "https://dpm-ptsp.surabaya.go.id", "type": "online" }
        ]
      },
      "res-umkm-pendampingan": {
        "id": "res-umkm-pendampingan",
        "title": "Pendampingan Penerbitan NIB UMKM di Loket Pemkot Surabaya",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "1–2 hari kerja",
        "sourceUrl": "https://dpm-ptsp.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP Asli Pemilik Usaha", "required": true },
          { "id": "doc-2", "name": "Ponsel aktif dengan akses Email & WhatsApp untuk OTP", "required": true },
          { "id": "doc-3", "name": "NPWP Pribadi (opsional untuk usaha mikro)", "required": false },
          { "id": "doc-4", "name": "Rincian kegiatan usaha (jenis produk/jasa, alamat tempat usaha, modal)", "required": true }
        ],
        "steps": [
          "Kunjungi Klinik Investasi DPMPTSP di MPP Gedung Siola Lt. 3, SPP Menur, atau jadwal pelayanan Balai RW (Selasa & Jumat).",
          "Konsultasikan jenis kegiatan usaha kepada petugas untuk mendapatkan kode KBLI 2020 yang tepat.",
          "Petugas mendampingi pendaftaran akun dan pengisian formulir OSS RBA / SSW Alfa hingga NIB terbit.",
          "Simpan file PDF dan cetak NIB sebagai bukti legalitas usaha resmi."
        ],
        "officialChannels": [
          { "name": "Klinik Investasi MPP Siola Lt. 3 & SPP Menur", "url": "https://dpm-ptsp.surabaya.go.id", "type": "offline" },
          { "name": "Pelayanan Balai RW Surabaya (Selasa & Jumat)", "url": "https://sswalfa.surabaya.go.id", "type": "offline" }
        ]
      },
      "res-umkm-tata-ruang": {
        "id": "res-umkm-tata-ruang",
        "title": "Penapisan Tata Ruang & Perizinan Berusaha UMKM (SI CERDAS / DPMPTSP)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis untuk NIB & konsultasi penapisan)",
        "estimatedTime": "1–2 hari kerja",
        "sourceUrl": "https://dpm-ptsp.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP Penanggung Jawab & NPWP", "required": true },
          { "id": "doc-2", "name": "Titik koordinat / alamat persil lokasi usaha di Surabaya", "required": true },
          { "id": "doc-3", "name": "Bukti penguasaan lahan/bangunan (Sertifikat / Perjanjian Sewa)", "required": false }
        ],
        "steps": [
          "Gunakan fitur penapisan perizinan dasar melalui SI CERDAS di portal dpm-ptsp.surabaya.go.id atau datang ke MPP Siola Lt. 3.",
          "Verifikasi kesesuaian zonasi kegiatan usaha dengan rencana tata ruang Kota Surabaya.",
          "Lanjutkan penerbitan NIB dan pernyataan mandiri KKPR melalui SSW Alfa / OSS RBA."
        ],
        "officialChannels": [
          { "name": "DPMPTSP Surabaya (SI CERDAS & Klinik Investasi)", "url": "https://dpm-ptsp.surabaya.go.id", "type": "online" }
        ]
      },
      "res-umkm-badan-usaha": {
        "id": "res-umkm-badan-usaha",
        "title": "Penerbitan NIB UMKM Berbentuk Badan Usaha (CV / PT / PT Perorangan)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "1–2 hari kerja",
        "sourceUrl": "https://dpm-ptsp.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Akta Pendirian & SK Pengesahan Kemenkumham (AHU)", "required": true },
          { "id": "doc-2", "name": "NPWP Badan Usaha berstatus Konfirmasi Status Wajib Pajak (KSWP) Valid", "required": true },
          { "id": "doc-3", "name": "e-KTP Direktur / Penanggung Jawab", "required": true },
          { "id": "doc-4", "name": "Email & WhatsApp resmi badan usaha", "required": true }
        ],
        "steps": [
          "Login ke SSW Alfa (sswalfa.surabaya.go.id) atau OSS RBA menggunakan hak akses Badan Usaha.",
          "Tarik data legalitas AHU menggunakan nomor SK dan NPWP Badan Usaha.",
          "Lengkapi kode KBLI, modal disetor, dan alamat lokasi usaha di Surabaya.",
          "Setujui pernyataan mandiri SPPL/K3L dan unduh NIB beserta Sertifikat Standar (jika Risiko Menengah Rendah)."
        ],
        "officialChannels": [
          { "name": "Surabaya Single Window (SSW) Alfa", "url": "https://sswalfa.surabaya.go.id", "type": "online" }
        ]
      },
      "res-umkm-belum-ahu": {
        "id": "res-umkm-belum-ahu",
        "title": "Persiapan Legalitas Awal Sebelum Penerbitan NIB Badan Usaha",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Penerbitan NIB gratis setelah SK AHU terbit)",
        "estimatedTime": "1–2 hari kerja setelah SK AHU tersedia",
        "sourceUrl": "https://dpm-ptsp.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP & NPWP Pribadi para pendiri", "required": true },
          { "id": "doc-2", "name": "Akta Notaris & SK AHU Kemenkumham (untuk CV/PT) atau Sertifikat Pendaftaran PT Perorangan", "required": true }
        ],
        "steps": [
          "Selesaikan terlebih dahulu pendirian badan hukum melalui Notaris (untuk CV/PT) atau portal AHU PT Perorangan.",
          "Pastikan NPWP Badan Usaha telah aktif dan berstatus valid.",
          "Setelah SK AHU terbit, kunjungi Klinik Investasi MPP Siola Lt. 3 atau akses SSW Alfa untuk menerbitkan NIB secara gratis."
        ],
        "officialChannels": [
          { "name": "Klinik Investasi DPMPTSP MPP Siola Lt. 3", "url": "https://dpm-ptsp.surabaya.go.id", "type": "offline" }
        ]
      }
    }
  },
  {
    "id": "health-bpjs-pbi-02",
    "slug": "pendaftaran-reaktivasi-bpjs-pbi-pemda",
    "title": "Pendaftaran & Reaktivasi BPJS Kesehatan PBI Pemda Surabaya",
    "shortDescription": "Panduan pendaftaran baru, alih segmen, dan reaktivasi jaminan kesehatan gratis (PBI APBD) bagi warga Kota Surabaya.",
    "category": "Jaminan Kesehatan Daerah",
    "agency": "Dinas Sosial (Dinsos) & Dinas Kesehatan Kota Surabaya",
    "estimatedProcessingTime": "1–3 hari kerja",
    "officialFee": 0,
    "officialFeeLabel": "Rp0 (Gratis - Iuran Ditanggung APBD Pemkot Surabaya)",
    "sourceUrl": "https://surabaya.go.id",
    "lastVerified": "2026-11-14",
    "antiExtortionBanner": {
      "message": "Pengurusan BPJS PBI Pemda (APBD Surabaya) GRATIS (Rp0) dan iuran bulanannya ditanggung penuh Pemkot. Laporkan jika ada pungutan liar.",
      "channels": [
        {
          "name": "Media Center / Aplikasi WargaKu Surabaya",
          "url": "https://mediacenter.surabaya.go.id",
          "contact": "0812-3025-7000"
        },
        {
          "name": "Whistleblowing System (WBS) Pemkot Surabaya",
          "url": "https://wbs.surabaya.go.id",
          "contact": "wbs.surabaya.go.id"
        }
      ]
    },
    "locations": [
      {
        "name": "Kantor Kelurahan & Balai RW Domisili KK Surabaya",
        "address": "154 Kantor Kelurahan & Balai RW se-Kota Surabaya",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB (Balai RW: Selasa & Jumat)",
        "lat": -7.25747,
        "lng": 112.75209
      },
      {
        "name": "Kantor Dinas Sosial (Dinsos) Kota Surabaya",
        "address": "Jl. Arif Rahman Hakim No. 131-133, Keputih, Sukolilo, Surabaya",
        "operatingHours": "Senin–Jumat, 08.00–15.00 WIB",
        "lat": -7.29138,
        "lng": 112.79724
      }
    ],
    "startQuestionId": "bpjs-q1",
    "questions": [
      {
        "id": "bpjs-q1",
        "step": 1,
        "text": "Apakah pemohon ber-KTP dan tercatat pada Kartu Keluarga (KK) Kota Surabaya?",
        "options": [
          {
            "label": "Ya, ber-NIK dan KK Kota Surabaya",
            "nextId": "bpjs-q2-status"
          },
          {
            "label": "Tidak, KTP dan KK masih daerah luar Kota Surabaya",
            "nextId": "bpjs-q2-luar-kota"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Program BPJS PBI APBD Pemkot Surabaya menggunakan anggaran daerah sehingga wajib mensyaratkan NIK dan KK Kota Surabaya.",
            "nextId": "bpjs-q2-status"
          }
        ]
      },
      {
        "id": "bpjs-q2-status",
        "step": 2,
        "text": "Bagaimana status kepesertaan BPJS Kesehatan pemohon saat ini?",
        "options": [
          {
            "label": "Belum pernah terdaftar BPJS Kesehatan sama sekali",
            "nextId": "bpjs-q3-urgensi"
          },
          {
            "label": "Nonaktif karena resign/PHK dari perusahaan (eks-PPU)",
            "nextId": "bpjs-q3-urgensi"
          },
          {
            "label": "Peserta Mandiri (PBPU) yang tidak mampu membayar / menunggak iuran",
            "nextId": "bpjs-q3-urgensi"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Status NIK BPJS dapat dicek melalui loket Kelurahan atau WhatsApp PANDAWA BPJS Kesehatan (0811-8165-165).",
            "nextId": "bpjs-q3-urgensi"
          }
        ]
      },
      {
        "id": "bpjs-q3-urgensi",
        "step": 3,
        "text": "Apakah pemohon sedang membutuhkan layanan medis darurat / sedang rawat inap saat ini?",
        "options": [
          {
            "label": "Ya, sedang rawat inap di RS / Puskesmas atau butuh tindakan segera",
            "nextId": "res-bpjs-darurat"
          },
          {
            "label": "Tidak, pengajuan reguler untuk jaminan kesehatan keluarga",
            "nextId": "bpjs-q4-kanal-reguler"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Pasien rawat inap memiliki jalur aktivasi prioritas maksimal 3x24 jam hari kerja sejak masuk rumah sakit agar biaya perawatan terjamin.",
            "nextId": "bpjs-q4-kanal-reguler"
          }
        ]
      },
      {
        "id": "bpjs-q4-kanal-reguler",
        "step": 4,
        "text": "Melalui titik layanan mana Anda ingin mengajukan usulan BPJS PBI Pemda?",
        "options": [
          {
            "label": "Kantor Kelurahan setempat (Senin–Jumat)",
            "nextId": "res-bpjs-reguler"
          },
          {
            "label": "Pelayanan jemput bola Balai RW (Selasa & Jumat) / Kader Surabaya Hebat (KSH)",
            "nextId": "res-bpjs-balai-rw"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Anda dapat datang ke Kantor Kelurahan sesuai domisili KK atau melapor ke Kader Surabaya Hebat (KSH) di RW Anda.",
            "nextId": "res-bpjs-reguler"
          }
        ]
      },
      {
        "id": "bpjs-q2-luar-kota",
        "step": 2,
        "text": "Apakah Anda berencana memindahkan domisili KK dan KTP ke Kota Surabaya?",
        "options": [
          {
            "label": "Ya, akan mengurus pindah domisili ke Surabaya",
            "nextId": "res-bpjs-pindah-domisili"
          },
          {
            "label": "Tidak, hanya berdomisili sementara di Surabaya",
            "nextId": "res-bpjs-non-surabaya"
          },
          {
            "label": "Tidak tahu",
            "explanation": "Jika tidak pindah KK ke Surabaya, pengusulan PBI daerah tetap menjadi kewenangan Dinas Sosial kabupaten/kota sesuai KTP asal.",
            "nextId": "res-bpjs-non-surabaya"
          }
        ]
      }
    ],
    "results": {
      "res-bpjs-reguler": {
        "id": "res-bpjs-reguler",
        "title": "Pendaftaran / Alih Segmen BPJS PBI Pemda via Kantor Kelurahan",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis - Ditanggung APBD Pemkot Surabaya)",
        "estimatedTime": "1–3 hari kerja verifikasi kelayakan Dinsos",
        "sourceUrl": "https://surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fotokopi & Asli Kartu Keluarga (KK) Kota Surabaya", "required": true },
          { "id": "doc-2", "name": "Fotokopi & Asli e-KTP anggota keluarga yang diajukan", "required": true },
          { "id": "doc-3", "name": "Surat Keterangan Tidak Mampu (SKTM) / verifikasi Gamiskin Kelurahan", "required": true },
          { "id": "doc-4", "name": "Surat keterangan nonaktif dari perusahaan (khusus eks-pekerja PPU)", "required": false }
        ],
        "steps": [
          "Datang ke Kantor Kelurahan domisili KK dengan membawa dokumen asli dan fotokopi.",
          "Ajukan permohonan pendaftaran baru atau alih segmen ke BPJS Kesehatan PBI Pemda (APBD).",
          "Petugas Kelurahan bersama Kader Surabaya Hebat (KSH) memverifikasi kondisi sosial-ekonomi keluarga.",
          "Usulan diteruskan ke Dinas Sosial dan Dinas Kesehatan Kota Surabaya untuk didaftarkan ke BPJS Kesehatan.",
          "Cek status keaktifan NIK secara berkala di Puskesmas atau aplikasi Mobile JKN."
        ],
        "officialChannels": [
          { "name": "Kantor Kelurahan Se-Kota Surabaya", "url": "https://surabaya.go.id", "type": "offline" },
          { "name": "Dinas Sosial Kota Surabaya", "url": "https://surabaya.go.id", "type": "offline" }
        ]
      },
      "res-bpjs-balai-rw": {
        "id": "res-bpjs-balai-rw",
        "title": "Pengajuan BPJS PBI Pemda via Balai RW & Kader Surabaya Hebat (KSH)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis - Ditanggung APBD Pemkot Surabaya)",
        "estimatedTime": "1–3 hari kerja verifikasi kelayakan",
        "sourceUrl": "https://surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Fotokopi Kartu Keluarga (KK) Kota Surabaya", "required": true },
          { "id": "doc-2", "name": "Fotokopi e-KTP pemohon", "required": true }
        ],
        "steps": [
          "Kunjungi Balai RW setempat pada jadwal pelayanan jemput bola (setiap hari Selasa & Jumat) atau hubungi Kader Surabaya Hebat (KSH).",
          "Sampaikan kebutuhan pendaftaran/reaktivasi BPJS PBI Pemda kepada petugas kelurahan yang bertugas di Balai RW.",
          "KSH membantu pencatatan verifikasi lapangan agar berkas langsung diproses oleh Kelurahan dan Dinas Sosial.",
          "Setelah aktif, cukup tunjukkan NIK KTP saat berobat di Puskesmas atau Faskes Tingkat Pertama."
        ],
        "officialChannels": [
          { "name": "Pelayanan Balai RW Surabaya (Selasa & Jumat)", "url": "https://surabaya.go.id", "type": "offline" }
        ]
      },
      "res-bpjs-darurat": {
        "id": "res-bpjs-darurat",
        "title": "Aktivasi Cepat BPJS PBI Pemda (Jalur Darurat / Rawat Inap)",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis - Ditanggung APBD Pemkot Surabaya)",
        "estimatedTime": "Maksimal 1–3 hari kerja (prioritas sebelum pasien pulang RS)",
        "sourceUrl": "https://surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Kartu Keluarga (KK) dan e-KTP Kota Surabaya", "required": true },
          { "id": "doc-2", "name": "Surat Keterangan Rawat Inap / Rujukan dari Puskesmas atau RSUD", "required": true },
          { "id": "doc-3", "name": "Surat pengantar / verifikasi kelayakan dari Kelurahan setempat", "required": true }
        ],
        "steps": [
          "Minta Surat Keterangan Rawat Inap dari loket administrasi Rumah Sakit atau Puskesmas.",
          "Perwakilan keluarga segera membawa KTP, KK Surabaya, dan surat RS ke Kantor Kelurahan atau loket Dinsos / Dinkes Surabaya.",
          "Petugas memproses verifikasi cepat (jalur UHC darurat) agar kepesertaan BPJS PBI aktif dalam batas 3x24 jam hari kerja sejak pasien masuk RS.",
          "Serahkan bukti kepesertaan aktif ke bagian administrasi Rumah Sakit."
        ],
        "officialChannels": [
          { "name": "Kantor Kelurahan, Puskesmas, & Dinas Sosial Surabaya", "url": "https://surabaya.go.id", "type": "offline" }
        ]
      },
      "res-bpjs-pindah-domisili": {
        "id": "res-bpjs-pindah-domisili",
        "title": "Alur Pindah Penduduk ke Surabaya Sebelum Pengajuan BPJS PBI Pemda",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Gratis)",
        "estimatedTime": "3–7 hari kerja untuk penerbitan KK Surabaya + 1–3 hari verifikasi BPJS",
        "sourceUrl": "https://dispendukcapil.surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "Surat Keterangan Pindah WNI (SKPWNI) dari daerah asal", "required": true },
          { "id": "doc-2", "name": "e-KTP dan KK daerah asal", "required": true }
        ],
        "steps": [
          "Ajukan layanan Pindah Datang melalui aplikasi Klampid New Generation (KNG) di dispendukcapil.surabaya.go.id.",
          "Setelah KK dan KTP Kota Surabaya terbit, bawa dokumen tersebut ke Kantor Kelurahan domisili baru.",
          "Ajukan usulan BPJS Kesehatan PBI Pemda (APBD) melalui loket Kelurahan."
        ],
        "officialChannels": [
          { "name": "Klampid New Generation (Dispendukcapil Surabaya)", "url": "https://dispendukcapil.surabaya.go.id", "type": "online" }
        ]
      },
      "res-bpjs-non-surabaya": {
        "id": "res-bpjs-non-surabaya",
        "title": "Panduan Jaminan Kesehatan bagi Warga Non-KTP Surabaya",
        "officialFee": 0,
        "officialFeeLabel": "Rp0 (Untuk pengusulan di daerah asal)",
        "estimatedTime": "Menyesuaikan kebijakan Dinas Sosial daerah asal",
        "sourceUrl": "https://surabaya.go.id",
        "lastVerified": "2026-11-14",
        "documents": [
          { "id": "doc-1", "name": "e-KTP dan Kartu Keluarga (KK) daerah asal", "required": true }
        ],
        "steps": [
          "Program BPJS PBI Pemda Surabaya dibiayai APBD Kota Surabaya sehingga hanya berlaku untuk warga ber-KK Surabaya.",
          "Hubungi Dinas Sosial atau Kelurahan sesuai alamat KTP asal untuk pengusulan PBI APBN/APBD daerah asal.",
          "Jika sudah memiliki BPJS aktif dari daerah asal dan sedang berada di Surabaya, Anda tetap dapat mengakses layanan gawat darurat (IGD) di RS mana pun atau pindah Faskes sementara lewat Mobile JKN."
        ],
        "officialChannels": [
          { "name": "Portal Resmi Pemerintah Kota Surabaya", "url": "https://surabaya.go.id", "type": "online" }
        ]
      }
    }
  }
];