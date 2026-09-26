export interface ProductPackage {
  id: string;
  name: string;
  priceIdr: string;
  priceUsd: string;
  popular?: boolean;
  description: string;
  includes: string[];
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'SaaS & Web' | 'Desktop & Tools' | 'GIS & Spatial' | 'Mobile';
  badge: string;
  priceStartingIdr: string;
  priceStartingUsd: string;
  coverImage: string;
  galleryImages: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  demoCredentials?: {
    role: string;
    email?: string;
    note: string;
  };
  overview: string;
  coreFeatures: string[];
  technicalHighlights: string[];
  techStack: string[];
  targetAudience: string;
  packages: ProductPackage[];
  deliverables: string[];
}

export const DIGITAL_PRODUCTS_DATA: DigitalProduct[] = [
  {
    id: 'siapseleksi-cbt-engine',
    slug: 'siapseleksi',
    title: 'SiapSeleksi.id — CAT Exam Engine & CBT Simulation Platform',
    tagline: 'Production-ready Computer Assisted Test (CAT) simulation system with real-time timers and automated weight scoring.',
    category: 'SaaS & Web',
    badge: 'High Demand SaaS',
    priceStartingIdr: 'Rp 1.850.000',
    priceStartingUsd: '',
    coverImage: '/projects/siapseleksi/cover.png',
    galleryImages: [
      '/projects/siapseleksi/cover.png',
      '/projects/siapseleksi/gallery-1.png',
      '/projects/siapseleksi/gallery-2.png',
      '/projects/siapseleksi/gallery-3.png',
      '/projects/siapseleksi/gallery-4.png',
    ],
    liveDemoUrl: 'https://siapseleksi.id',
    githubUrl: 'https://github.com/firhmgh',
    overview: 'SiapSeleksi.id adalah platform simulasi Computer Assisted Test (CAT) mandiri berkinerja tinggi yang dirancang untuk bimbingan belajar (Bimbel), lembaga pelatihan, universitas, maupun penyelenggara ujian sertifikasi. Dilengkapi engine ujian berbasis detik anti-kecurangan, penilaian otomatis standar nasional (TWK, TIU, TKP), dan analitik grafik skor mendalam.',
    coreFeatures: [
      'Engine ujian berwaktu presisi detik dengan proteksi auto-submit saat waktu habis',
      'Kalkulasi bobot nilai otomatis bertingkat (Skala 1-5 dan ambang batas kelulusan/passing grade)',
      'Anti-Cheating Detection (deteksi perpindahan tab browser & kehilangan fokus layar)',
      'Dashboard analitik performa peserta dengan radar chart kelemahan materi soal',
      'Sistem manajemen bank soal dengan dukungan upload batch (CSV / JSON)',
      'Tampilan responsif ramah smartphone, tablet, dan PC (Desktop simulator)'
    ],
    technicalHighlights: [
      'Frontend modern Next.js 14 / TypeScript dengan rendering super cepat',
      'Client-side state management terisolasi (mencegah kehilangan jawaban saat koneksi terputus)',
      'Skema basis data relasional fleksibel untuk ribuan variasi kategori soal',
      'Dukungan integrasi payment gateway Midtrans / Tripay untuk penjualan paket tryout'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'PostgreSQL', 'Chart.js'],
    targetAudience: 'Lembaga Kursus/Bimbel CPNS/Kedinasan, Guru, Dosen, serta Developer yang ingin meluncurkan platform Tryout berbayar.',
    packages: [
      {
        id: 'starter',
        name: 'Source Code Edition',
        priceIdr: 'Rp 1.850.000',
        priceUsd: '',
        description: 'Akses penuh seluruh source code frontend & database schema untuk dikembangkan mandiri.',
        includes: [
          'Full Source Code Next.js & TypeScript',
          'Database Schema SQL & Sample Data Soal Tryout',
          'Dokumentasi Instalasi & Panduan Setup Lokal',
          'Lisensi Penggunaan Bebas untuk 1 Brand / Domain',
          '1 Bulan Update Perbaikan Bug'
        ]
      },
      {
        id: 'turnkey',
        name: 'Ready-to-Deploy & Setup',
        priceIdr: 'Rp 3.900.000',
        priceUsd: '',
        popular: true,
        description: 'Solusi lengkap siap pakai langsung online dengan domain dan identitas brand milik Anda.',
        includes: [
          'Semua benefit Source Code Edition',
          'Jasa Instalasi & Konfigurasi Hosting (Vercel / VPS Ubuntu)',
          'Custom Branding (Logo, Nama Bimbel, Skema Warna)',
          'Setup Database Cloud (Supabase / Neon PostgreSQL)',
          'Setup Custom Domain & SSL HTTPS',
          '3 Bulan Dukungan Teknis Prioritas'
        ]
      },
      {
        id: 'enterprise',
        name: 'Custom SaaS Edition',
        priceIdr: 'Rp 7.500.000',
        priceUsd: '',
        description: 'Kustomisasi fitur khusus termasuk integrasi payment gateway otomatis dan sistem affiliate.',
        includes: [
          'Semua benefit Ready-to-Deploy',
          'Integrasi Payment Gateway Otomatis (QRIS, VA, E-Wallet)',
          'Modul Multi-Tutor & Manajemen Hak Akses Admin',
          'Kustomisasi Rumus Skor Ujian Khusus',
          'Pelatihan Operasional Admin via Google Meet',
          '6 Bulan Garansi & Maintenance Teknis'
        ]
      }
    ],
    deliverables: [
      'Repository Source Code Terstruktur (Clean Code)',
      'Panduan Setup PDF & Video Walkthrough',
      'Skrip Migrasi Database & Seeder Data Awal',
      'Dukungan Konsultasi via WhatsApp'
    ]
  },
  {
    id: 'rekening-bersama-escrow',
    slug: 'rekening-bersama',
    title: 'Rekening Bersama / Digital Escrow Platform',
    tagline: 'Multi-party escrow transaction system with automated dispute arbitration and ledger tracking.',
    category: 'SaaS & Web',
    badge: 'Fintech Engine',
    priceStartingIdr: 'Rp 2.400.000',
    priceStartingUsd: '',
    coverImage: '/projects/rekening-bersama/cover.png',
    galleryImages: [
      '/projects/rekening-bersama/cover.png',
      '/projects/rekening-bersama/gallery-1.png',
      '/projects/rekening-bersama/gallery-2.png',
      '/projects/rekening-bersama/gallery-3.png'
    ],
    liveDemoUrl: 'https://firhmgh.github.io/rekening-bersama-platform/',
    githubUrl: 'https://github.com/firhmgh',
    overview: 'Solusi platform perantara transaksi aman (digital escrow) peer-to-peer yang menjamin keamanan dana jual-beli online. Menggunakan arsitektur state-machine ketat yang mengunci dana pembeli hingga barang/jasa diverifikasi, dilengkapi kalkulator biaya komisi bertingkat, bukti transfer upload, dan ruang mediasi sengketa.',
    coreFeatures: [
      'State-Machine Transaksi 5 Tahap: Draft -> Didanai -> Dikirim -> Diperiksa -> Dana Dilepas',
      'Kalkulator komisi bertingkat otomatis dengan pembebanan fleksibel (pembeli/penjual/split)',
      'Panel Resolusi Sengketa (Dispute Room) dengan histori chat dan upload bukti berkas',
      'Dashboard ringkasan saldo tertahan (escrow holding) dan dana siap dicairkan (payout)',
      'Audit log transaksi anti-manipulasi mencatat setiap perubahan status dana',
      'Autentikasi role terpisah: Pembeli, Penjual, dan Admin Moderator'
    ],
    technicalHighlights: [
      'Arsitektur React + TypeScript modular dengan validasi tipe ketat',
      'Status transaksi deterministik mencegah double-release atau kebocoran dana',
      'Desain database terindeks siap menangani ribuan transaksi per hari',
      'Siap dihubungkan ke penyedia mutasi bank otomatis atau Payment Gateway'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    targetAudience: 'Komunitas Jual-Beli Online, Marketplace Niche (Akun Game, Gadget Bekas, Jasa Digital), Komunitas Freelance.',
    packages: [
      {
        id: 'starter',
        name: 'Developer Core Monorepo',
        priceIdr: 'Rp 2.400.000',
        priceUsd: '',
        description: 'Source code lengkap frontend & backend escrow siap diintegrasikan ke sistem bisnis Anda.',
        includes: [
          'Full Frontend & Backend Codebase Monorepo',
          'Spesifikasi API Endpoint & Postman Collection',
          'Skema Database Relasional Lengkap',
          'State-Machine Logic Module',
          'Panduan Konfigurasi Server'
        ]
      },
      {
        id: 'turnkey',
        name: 'Turnkey Escrow Portal',
        priceIdr: 'Rp 5.200.000',
        priceUsd: '',
        popular: true,
        description: 'Pemasangan lengkap pada server VPS Anda siap digunakan untuk operasional bisnis rekber.',
        includes: [
          'Semua benefit Developer Core',
          'Deploy Lengkap ke Cloud VPS (Ubuntu/Nginx/Node.js)',
          'Konfigurasi Database PostgreSQL & Backup Otomatis',
          'Kustomisasi Branding & Kebijakan Biaya Rekber',
          'Setup Domain, SSL HTTPS & Mail Notification SMTP',
          '2 Bulan Support Pemeliharaan Teknis'
        ]
      },
      {
        id: 'enterprise',
        name: 'Fintech Custom Integration',
        priceIdr: 'Rp 9.800.000',
        priceUsd: '',
        description: 'Integrasi perbankan otomatis, mutasi rekening real-time, dan modul verifikasi identitas (KYC).',
        includes: [
          'Semua benefit Turnkey Escrow Portal',
          'Integrasi Cek Mutasi Bank Otomatis / Payment Gateway',
          'Modul Verifikasi Identitas (Upload KTP / KYC Sederhana)',
          'Sistem Notifikasi WhatsApp Otomatis ke Pembeli & Penjual',
          'Prioritas SLA Bug Fixing 6 Bulan'
        ]
      }
    ],
    deliverables: [
      'Source Code Lengkap (Clean Architecture)',
      'Dokumentasi API & State Machine Flowchart',
      'Skrip Deployment Docker / Shell',
      'Bimbingan Operasional via Remote Meeting'
    ]
  },
  {
    id: 'local-file-organizer-tool',
    slug: 'local-file-organizer',
    title: 'Local File Organizer & Duplicate Auditor',
    tagline: 'High-speed desktop file organizer and duplicate auditor with tiered SHA-256 and GIS bundle safety.',
    category: 'Desktop & Tools',
    badge: 'Desktop Utility',
    priceStartingIdr: 'Rp 180.000',
    priceStartingUsd: '',
    coverImage: '/projects/local-file-organizer-auditor/gui.webp',
    galleryImages: [
      '/projects/local-file-organizer-auditor/gui.webp',
      '/projects/local-file-organizer-auditor/gallery-1.webp',
      '/projects/local-file-organizer-auditor/gallery-2.webp',
      '/projects/local-file-organizer-auditor/gallery-3.webp'
    ],
    liveDemoUrl: 'https://github.com/firhmgh/local-file-organizer-and-duplicate-auditor',
    githubUrl: 'https://github.com/firhmgh/local-file-organizer-and-duplicate-auditor',
    overview: 'Software desktop Windows berkinerja tinggi untuk membersihkan, mengelompokkan, dan mengaudit berkas duplikat pada hard disk atau folder kerja besar. Menggunakan algoritma Tiered SHA-256 Hashing yang 10x lebih cepat dari scanner biasa, proteksi bundle shapefile GIS agar tidak rusak, dan sistem karantina aman ke Recycle Bin.',
    coreFeatures: [
      'Tiered SHA-256 Hashing: Filter ukuran -> 4KB Hash Parsial -> Hash Penuh SHA-256',
      'GIS Bundle Protection: Menjaga file .shp, .shx, .dbf, .prj tetap utuh tidak terpencar',
      'Antarmuka Desktop GUI Tkinter yang ringan tanpa lag saat memindai ratusan gigabyte',
      'Mode Dry-Run: Simulasi preview berkas yang akan dirapikan sebelum eksekusi nyata',
      'Karantina Aman ke Recycle Bin (berkas dapat dikembalikan sewaktu-waktu jika diperlukan)',
      'Ekspor laporan audit duplikasi ke format CSV / Text'
    ],
    technicalHighlights: [
      'Multi-threaded background scanner untuk kestabilan UI responsif',
      'Algoritma deteksi cerdas menangani nama file identik dengan konten berbeda',
      'Tersedia versi Standalone Executable (.exe) tanpa perlu install Python',
      'Disertai Automated Unit Tests dengan pytest'
    ],
    techStack: ['Python 3', 'Tkinter GUI', 'SHA-256', 'Multithreading', 'PyInstaller', 'Windows API'],
    targetAudience: 'Profesional GIS, Desainer Grafis, Fotografer, Data Analyst, dan siapapun yang memiliki hard drive penuh file ganda.',
    packages: [
      {
        id: 'binary',
        name: 'Executable License (.EXE)',
        priceIdr: 'Rp 180.000',
        priceUsd: '',
        popular: true,
        description: 'Installer & file .exe langsung pakai untuk Windows 10/11 tanpa perlu instalasi tools lain.',
        includes: [
          'Executable File (.exe) Siap Pakai Langsung Jalan',
          'Lisensi Penggunaan Pribadi Seumur Hidup (Lifetime)',
          'User Guide Ringkas PDF Bahasa Indonesia',
          'Free Update Versi Minor Selamanya'
        ]
      },
      {
        id: 'source',
        name: 'Developer & Source Edition',
        priceIdr: 'Rp 450.000',
        priceUsd: '',
        description: 'Source code Python lengkap untuk dipelajari, dimodifikasi, atau di-compile ke Linux/macOS.',
        includes: [
          'Full Python Source Code & Modul Struktur Bersih',
          'Test Suite pytest & Script Build PyInstaller',
          'Dokumentasi Arsitektur Algoritma Hashing',
          'Lisensi Modifikasi untuk Kebutuhan Internal Perusahaan'
        ]
      },
      {
        id: 'custom',
        name: 'Enterprise Automation Custom',
        priceIdr: 'Rp 1.500.000',
        priceUsd: '',
        description: 'Kustomisasi aturan khusus untuk server file kantor, cloud NAS, atau penjadwalan otomatis.',
        includes: [
          'Semua benefit Developer Edition',
          'Kustomisasi Ekstensi File Khusus & Rule Pembersihan',
          'Integrasi Scheduled Task Background (Otomatis mingguan)',
          'Dukungan Remote Setup 1 Hari Kerja'
        ]
      }
    ],
    deliverables: [
      'File Executable Standalone (.exe) / Source Code Repo',
      'Buku Panduan PDF Panduan Pengoperasian',
      'Dukungan Bantuan via Chat WhatsApp'
    ]
  },
  {
    id: 'pos-sim-mill-optimizer',
    slug: 'palm-oil-scheduling',
    title: 'POS-SIM — Palm Oil Mill Scheduling Simulator & Optimizer',
    tagline: 'Industrial operations research simulator optimizing FFB queues, boiler throughput, and FFA degradation.',
    category: 'Desktop & Tools',
    badge: 'Industrial Operations Research',
    priceStartingIdr: 'Rp 1.650.000',
    priceStartingUsd: '',
    coverImage: '/projects/palm-oil-scheduling/cover.png',
    galleryImages: [
      '/projects/palm-oil-scheduling/cover.png',
      '/projects/palm-oil-scheduling/gallery-1.png',
      '/projects/palm-oil-scheduling/gallery-2.png',
      '/projects/palm-oil-scheduling/gallery-3.png',
      '/projects/palm-oil-scheduling/gallery-4.png'
    ],
    liveDemoUrl: 'https://firhmgh.github.io/pos-sim/',
    githubUrl: 'https://github.com/firhmgh',
    overview: 'Simulator dan pengoptimal jadwal operasional pabrik kelapa sawit (PKS) berbasis web yang mengimplementasikan riset operasional (Operations Research). Memodelkan antrean kedatangan Tandan Buah Segar (TBS), utilisasi rebusan (sterilizer), laju ekstraksi minyak (OER), dan degradasi asam lemak bebas (FFA/ALB).',
    coreFeatures: [
      'Visual Interactive Gantt Chart Timeline: Simulasi giliran rebusan dan lori TBS per jam',
      'Model Penalti FFA: Menghitung kerugian finansial akibat penundaan olah TBS di loading ramp',
      'Algoritma Heuristik Penjadwalan: Rekomendasi urutan proses optimal berdasarkan kapasitas boiler',
      'Simulasi Berbagai Skenario (Puncak Panen, Kerusakan Stasiun Rebusan, Keterlambatan Truk)',
      'Ekspor hasil jadwal harian dan laporan efisiensi pabrik ke PDF / Excel',
      'Dapat dijalankan langsung di browser tanpa instalasi software rumit'
    ],
    technicalHighlights: [
      'Engine optimasi murni berbasis browser (Zero Server Overhead)',
      'Rendering dinamis HTML5 Canvas / SVG untuk timeline interaktif',
      'Parameter pabrik fleksibel (jumlah rebusan, tonase per rebusan, jam kerja per shift)',
      'Mudah diintegrasikan ke dalam portal dashboard intranet perusahaan'
    ],
    techStack: ['JavaScript ES6+', 'HTML5 Canvas', 'Tailwind CSS', 'Operations Research Math', 'GitHub Pages'],
    targetAudience: 'Manajer Pabrik Kelapa Sawit (PKS), Mill Engineer, Peneliti Agronomi/Supply Chain, Mahasiswa Teknik Industri.',
    packages: [
      {
        id: 'web-engine',
        name: 'Web Simulator Engine Code',
        priceIdr: 'Rp 1.650.000',
        priceUsd: '',
        popular: true,
        description: 'Source code lengkap simulator berbasis web siap di-host di server lokal atau cloud intranet.',
        includes: [
          'Full Source Code Frontend Simulator',
          'Modul Perhitungan Heuristik Penjadwalan & Formula FFA',
          'Panduan Embed ke Website / Portal Internal',
          'Lisensi Penggunaan Komersial / Akademik'
        ]
      },
      {
        id: 'mill-custom',
        name: 'Factory Custom Calibration',
        priceIdr: 'Rp 4.500.000',
        priceUsd: '',
        description: 'Kalibrasi parameter simulator sesuai jumlah stasiun rebusan, kapasitas lori, dan shift riil pabrik Anda.',
        includes: [
          'Semua benefit Web Simulator Engine',
          'Penyesuaian Parameter Spesifik Pabrik (Kapasitas Ton/Jam riil)',
          'Custom Template Laporan Ekspor PDF Sesuai Format Perusahaan',
          'Workshop Teknis Online Pemakaian Alat untuk Staff Pabrik',
          '3 Bulan Dukungan Teknis Penyesuaian Formula'
        ]
      }
    ],
    deliverables: [
      'Source Code Web Simulator Teruji',
      'Dokumentasi Rumus Matematis & Batasan Optimasi',
      'Sample Dataset Kedatangan Truk TBS Harian'
    ]
  },
  {
    id: 'webgis-spatial-starter-kit',
    slug: 'webgis-spatial-starter',
    title: 'WebGIS Interactive Spatial Portal Starter Kit',
    tagline: 'High-performance interactive web mapping template with layer switcher, spatial queries, and mobile drawer.',
    category: 'GIS & Spatial',
    badge: 'Geospatial Accelerator',
    priceStartingIdr: 'Rp 1.450.000',
    priceStartingUsd: '',
    coverImage: '/projects/stasiun-sumbar/cover.png',
    galleryImages: [
      '/projects/stasiun-sumbar/cover.png',
      '/projects/stasiun-sumbar/gallery-1.png',
      '/projects/stasiun-sumbar/gallery-2.png',
      '/projects/stasiun-sumbar/gallery-3.png'
    ],
    liveDemoUrl: 'https://firhmgh.github.io/stasiun-kereta-api-sumatera-barat/',
    githubUrl: 'https://github.com/firhmgh',
    overview: 'Starter kit aplikasi WebGIS modern yang dirancang untuk mempercepat pembuatan peta interaktif berbasis web untuk instansi, perusahaan, maupun riset. Dilengkapi pengontrol layer spasial (Point, Line, Polygon), basemap switcher (Satelit, OSM, Terain), pop-up atribut interaktif, filter spasial, dan panel data responsif untuk smartphone.',
    coreFeatures: [
      'Multi-Basemap Switcher (Google Satellite, OpenStreetMap, CartoDB Positron/Dark)',
      'Layer Management: Toggle layer GeoJSON/Shapefile secara dinamis dengan legenda otomatis',
      'Pencarian Cepat Lokasi & Filter Atribut (berdasarkan nama objek, kategori, atau wilayah)',
      'Interactive Bottom Sheet / Sidebar Drawer data spesifik saat titik peta diklik',
      'Tool Pengukuran Jarak & Luas Area secara real-time di atas peta',
      'Desain UI modern, ringan, dan cepat dibuka di perangkat smartphone dengan koneksi seluler'
    ],
    technicalHighlights: [
      'Dibangun dengan Leaflet.js / MapLibre GL teroptimasi untuk ribuan titik koordinat',
      'Pemisahan komponen terstruktur (MapContainer, LayerControls, SearchBar, InfoDrawer)',
      'Data GeoJSON terstruktur mudah diganti dengan dataset baru hanya dalam 5 menit',
      'Ringan (Zero Heavy Server Required, bisa di-hosting gratis di GitHub Pages / Vercel)'
    ],
    techStack: ['JavaScript / TypeScript', 'Leaflet.js / MapLibre', 'Tailwind CSS', 'GeoJSON', 'HTML5'],
    targetAudience: 'Konsultan GIS, Dinas Pemerintahan, Peneliti Wilayah, Mahasiswa Perencanaan Wilayah & Kota, Pengembang Properti.',
    packages: [
      {
        id: 'starter',
        name: 'WebGIS Starter Template',
        priceIdr: 'Rp 1.450.000',
        priceUsd: '',
        description: 'Template WebGIS lengkap siap diganti dengan data GeoJSON / layer spasial Anda sendiri.',
        includes: [
          'Full Source Code Template WebGIS Responsif',
          'Komponen Basemap Switcher & Layer Controller',
          'Sample Dataset GeoJSON & Konverter Tool',
          'Dokumentasi Langkah Mudah Memasukkan Data Peta Sendiri'
        ]
      },
      {
        id: 'full-setup',
        name: 'Data Ingestion & Online Deployment',
        priceIdr: 'Rp 3.800.000',
        priceUsd: '',
        popular: true,
        description: 'Saya yang mengonversi data spasial Anda (SHP/Excel/KML), mendesain styling peta, dan men-deploy langsung online.',
        includes: [
          'Semua benefit Starter Template',
          'Konversi hingga 5 Layer Spasial (dari Shapefile / Excel / CAD)',
          'Custom Styling Simbologi Peta Sesuai Standar Kartografi',
          'Setup Domain Kustom & Hosting Online',
          'Pelatihan Update Data Peta via Google Meet (1 Jam)',
          '1 Bulan Pendampingan Teknis'
        ]
      }
    ],
    deliverables: [
      'Source Code WebGIS Bersih & Berkomentar Lengkap',
      'Struktur Folder GeoJSON Terorganisir',
      'Video Tutorial Cara Tambah Titik/Poligon Baru'
    ]
  },
  {
    id: 'dirayah-quran-mobile-kit',
    slug: 'dirayah-quran',
    title: 'Dirayah Quran Mobile App Starter Kit',
    tagline: 'Clean-architecture Flutter mobile application with Uthmanic Arabic typography and offline SQLite.',
    category: 'Mobile',
    badge: 'Mobile App Engine',
    priceStartingIdr: 'Rp 1.250.000',
    priceStartingUsd: '',
    coverImage: '/projects/dirayah-quran/app-icon.png',
    galleryImages: [
      '/projects/dirayah-quran/app-icon.png',
      '/projects/dirayah-quran/preview.png'
    ],
    githubUrl: 'https://github.com/firhmgh',
    overview: 'Starter kit aplikasi mobile lintas platform (Android & iOS) berbasis Flutter untuk membaca Al-Qur\'an secara digital dengan kenyamanan tipografi Arab rasm Utsmani, terjemahan resmi Kemenag RI, pencarian ayat kilat, penanda bacaan offline, dan integrasi audio murottal streaming.',
    coreFeatures: [
      'Render Tipografi Arab Rasm Utsmani resolusi tinggi yang nyaman di mata',
      'Pencarian Cepat Surah, Juz, dan Ayat Al-Qur\'an',
      'Penyimpanan Lokal SQLite (Aplikasi dapat dibuka dan dibaca 100% tanpa internet/offline)',
      'Fitur Penanda Terakhir Baca (Last Read) dan Bookmark Ayat Favorit',
      'Audio Murottal Streaming per Surah dengan kontrol pemutar suara latar',
      'Dukungan Mode Terang & Gelap (Dark Mode) ramah baterai OLED'
    ],
    technicalHighlights: [
      'Clean Architecture Flutter dengan manajemen state terpisah dan mudah di-maintenance',
      'Database SQLite lokal siap pakai berisi 114 surah dan 6.236 ayat lengkap',
      'Modular code: Sangat mudah ditambahkan fitur jadwal sholat, arah kiblat, atau doa harian'
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Just_Audio', 'Android & iOS'],
    targetAudience: 'Developer Mobile, Yayasan / Lembaga Dakwah, Komunitas Muslim yang ingin memiliki aplikasi Al-Qur\'an dengan brand sendiri di Google Play Store.',
    packages: [
      {
        id: 'source',
        name: 'Flutter Source Code Kit',
        priceIdr: 'Rp 1.250.000',
        priceUsd: '',
        popular: true,
        description: 'Source code Flutter lengkap beserta database SQLite siap compile di VS Code atau Android Studio.',
        includes: [
          'Full Flutter / Dart Source Code',
          'Pre-populated SQLite Database (114 Surah + Terjemahan)',
          'Dokumentasi Struktur Proyek & Cara Build APK',
          'Lisensi Penggunaan Bebas'
        ]
      },
      {
        id: 'playstore',
        name: 'Custom Branding & Play Store Build',
        priceIdr: 'Rp 3.200.000',
        priceUsd: '',
        description: 'Kustomisasi identitas aplikasi (nama, logo splash screen) dan pembuatan file APK/AAB siap upload ke Play Store.',
        includes: [
          'Semua benefit Source Code Kit',
          'Penggantian Nama Aplikasi, App Icon & Splash Screen Brand Anda',
          'Pembuatan Signed Android App Bundle (.aab) & Release APK',
          'Panduan / Bantuan Upload ke Google Play Console Anda',
          '1 Bulan Garansi Build Kompatibilitas Android Terbaru'
        ]
      }
    ],
    deliverables: [
      'Proyek Flutter Bersih (Versi Flutter Terbaru)',
      'File Database SQLite Terstruktur',
      'Panduan Setup Step-by-Step PDF'
    ]
  },
  {
    id: 'streamlit-pos-analytics-kit',
    slug: 'streamlit-canteen-pos',
    title: 'Streamlit Business POS & Realtime Analytics Kit',
    tagline: 'Lightweight data-driven point-of-sale and sales ledger dashboard for SMBs with zero database hassle.',
    category: 'Desktop & Tools',
    badge: 'SMB Analytics Tool',
    priceStartingIdr: 'Rp 550.000',
    priceStartingUsd: '',
    coverImage: '/projects/local-file-organizer-auditor/gui.webp',
    galleryImages: [
      '/projects/local-file-organizer-auditor/gui.webp'
    ],
    githubUrl: 'https://github.com/firhmgh',
    overview: 'Aplikasi kasir (Point of Sale) dan pembukuan penjualan harian berbasis Python dan Streamlit yang super praktis untuk kafe, kantin, katering, atau UMKM. Memungkinkan pencatatan transaksi cepat, manajemen katalog menu, cetak struk nota, dan grafik analitik omzet otomatis tanpa perlu instalasi database rumit.',
    coreFeatures: [
      'Antarmuka Kasir Ramah Touchscreen: Pemilihan produk dengan sekali klik dan kalkulasi kembalian otomatis',
      'Katalog Menu Dinamis: Tambah, edit harga, dan atur stok produk dengan mudah',
      'Laporan Penjualan Realtime: Grafik omzet harian, produk terlaris, dan jam paling ramai',
      'Cetak Invoice / Struk Pembelian otomatis',
      'Ekspor Pembukuan ke Spreadsheet Excel / CSV hanya dengan satu tombol',
      'Bisa dijalankan offline di laptop kasir atau di-online-kan gratis di cloud'
    ],
    technicalHighlights: [
      'Dibangun dengan Python murni dan framework data Streamlit + Pandas',
      'Penyimpanan data tabular terstruktur tanpa konfigurasi server database berat',
      'Kode ringkas dan mudah disesuaikan dengan alur kasir usaha Anda'
    ],
    techStack: ['Python 3', 'Streamlit', 'Pandas', 'Plotly', 'Excel / CSV Storage'],
    targetAudience: 'Pemilik Usaha Kafe / Kantin / UMKM, Data Analyst yang ingin prototype cepat, Kasir Toko Retail.',
    packages: [
      {
        id: 'turnkey-script',
        name: 'Turnkey Python Script',
        priceIdr: 'Rp 550.000',
        priceUsd: '',
        popular: true,
        description: 'Skrip Python lengkap siap pakai langsung di laptop Anda beserta panduan instalasi 3 langkah.',
        includes: [
          'Full Python Source Code & Streamlit App',
          'Contoh Database Menu & Transaksi Awal',
          'Panduan Instalasi Python & Library (10 Menit Setup)',
          'Lisensi Penggunaan Permanen'
        ]
      },
      {
        id: 'cloud-setup',
        name: 'Cloud Hosted & Multi-Device Setup',
        priceIdr: 'Rp 1.750.000',
        priceUsd: '',
        description: 'Deploy aplikasi ke cloud agar kasir dan owner bisa memantau transaksi dari HP secara bersamaan.',
        includes: [
          'Semua benefit Turnkey Script',
          'Hosting Online ke Streamlit Community Cloud (Akses dari HP & Tablet)',
          'Input Awal Seluruh Daftar Menu Usaha Anda (hingga 50 item)',
          'Setup Proteksi Password Login Kasir & Owner',
          'Bimbingan Penggunaan via Video Call'
        ]
      }
    ],
    deliverables: [
      'File Kode Python Siap Eksekusi',
      'Panduan Penggunaan Bahasa Indonesia',
      'Bantuan Instalasi via WhatsApp'
    ]
  }
];
