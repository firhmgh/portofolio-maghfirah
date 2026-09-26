export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
  startingPriceIdr: string;
  startingPriceUsd: string;
  iconName: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  clientAction: string;
}

export const FREELANCE_SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Application Development',
    category: 'Web Engineering',
    tagline: 'Modern, high-performance web applications tailored to your business operations and users.',
    description: 'Pengembangan aplikasi web kustom dari awal (scratch) atau kelanjutan sistem yang sudah ada menggunakan standar industri modern. Fokus pada clean architecture, kecepatan loading tinggi, antarmuka intuitif, dan keamanan data.',
    deliverables: [
      'Frontend responsif & interaktif (React / Next.js / Vue)',
      'Backend RESTful / GraphQL API terstruktur (Node.js / Laravel / Python)',
      'Autentikasi aman (Role-based access control, JWT / Session)',
      'Integrasi Payment Gateway & Third-party Services',
      'Deployment ke Cloud (Vercel / VPS / Cloudflare)'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Laravel', 'Tailwind CSS', 'PostgreSQL'],
    typicalTimeline: '2 - 6 Minggu',
    startingPriceIdr: 'Rp 3.500.000',
    startingPriceUsd: '',
    iconName: 'Globe'
  },
  {
    id: 'dashboard',
    title: 'Interactive Analytics & Business Dashboards',
    category: 'Data & Analytics',
    tagline: 'Transform raw company data into actionable visual insights and executive KPIs.',
    description: 'Pembuatan portal dashboard analitik interaktif untuk memonitor metrik operasional, performa penjualan, monitoring inventaris, hingga analitik sensor/IoT dengan grafik dinamis dan pemfilteran multi-dimensi.',
    deliverables: [
      'Visualisasi data real-time (Grafik garis, batang, donat, scatter, heatmaps)',
      'Filter data multi-kriteria & rentang tanggal dinamis',
      'Ekspor laporan otomatis (PDF, Excel, CSV)',
      'Sinkronisasi data otomatis dengan database atau spreadsheet Google Sheets',
      'Desain antarmuka modern Dark & Light Mode'
    ],
    techStack: ['React', 'Next.js', 'Chart.js', 'Recharts', 'Tailwind CSS', 'SQL'],
    typicalTimeline: '1 - 3 Minggu',
    startingPriceIdr: 'Rp 2.800.000',
    startingPriceUsd: '',
    iconName: 'BarChart3'
  },
  {
    id: 'webgis',
    title: 'WebGIS & Spatial Data Engineering',
    category: 'Geospatial Solutions',
    tagline: 'Geospatial web applications, custom interactive maps, and spatial analytics.',
    description: 'Pengembangan sistem informasi geografis berbasis web (WebGIS) profesional untuk pemetaan aset, monitoring perkebunan/kehutanan, analisis tata ruang, pelacakan rute, dan visualisasi layer spasial (Shapefile, GeoJSON, Geotiff).',
    deliverables: [
      'Peta web interaktif dengan multi-basemap switcher (Satelit, Terrain, Street)',
      'Manajemen layer vektor & raster dengan legenda otomatis',
      'Kalkulasi spasial (jarak, luas poligon, buffer, intersect, routing)',
      'Integrasi data spasial PostGIS / GeoJSON / KML / ESRI Shapefile',
      'Panel informasi spasial & popup interaktif ramah mobile'
    ],
    techStack: ['Leaflet.js', 'MapLibre GL', 'PostGIS', 'QGIS', 'GeoJSON', 'TypeScript'],
    typicalTimeline: '2 - 5 Minggu',
    startingPriceIdr: 'Rp 3.800.000',
    startingPriceUsd: '',
    iconName: 'MapPin'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App (Flutter)',
    category: 'Mobile Engineering',
    tagline: 'High-performance iOS and Android applications with native feel from a single codebase.',
    description: 'Pembuatan aplikasi mobile lintas platform untuk Android dan iOS menggunakan Flutter. Mengutamakan performa rendering 60 FPS, arsitektur kode bersih (BLoC / Provider), kemampuan kerja offline, dan integrasi API mulus.',
    deliverables: [
      'Aplikasi native compile untuk Android (APK / AAB) & iOS',
      'Desain UI/UX modern sesuai panduan Material Design 3 / Cupertino',
      'Penyimpanan lokal offline (SQLite / Hive / SharedPreferences)',
      'Push notification & background task',
      'Bantuan persiapan rilis dan submit ke Google Play Store'
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'REST API', 'Firebase', 'State Management'],
    typicalTimeline: '3 - 8 Minggu',
    startingPriceIdr: 'Rp 4.500.000',
    startingPriceUsd: '',
    iconName: 'Smartphone'
  },
  {
    id: 'database',
    title: 'Database Architecture & Query Optimization',
    category: 'Backend & Infrastructure',
    tagline: 'Robust relational schemas, indexing strategies, and high-performance SQL query tuning.',
    description: 'Perancangan struktur basis data relasional yang bersih, normalisasi tabel, optimasi query lambat (slow query optimization), penambahan indexing strategis, migrasi database, dan pembuatan stored procedures/triggers.',
    deliverables: [
      'Desain Entity Relationship Diagram (ERD) dan skema relasional bersih',
      'Analisis EXPLAIN ANALYZE dan optimasi query berat hingga 10x lebih cepat',
      'Index optimization (B-tree, GIN, GiST untuk data spasial)',
      'Skrip migrasi data aman tanpa downtime (zero data loss)',
      'Setup backup otomatis harian & disaster recovery plan'
    ],
    techStack: ['PostgreSQL', 'MySQL / MariaDB', 'PostGIS', 'Supabase', 'Redis', 'SQL'],
    typicalTimeline: '1 - 2 Minggu',
    startingPriceIdr: 'Rp 1.800.000',
    startingPriceUsd: '',
    iconName: 'Database'
  },
  {
    id: 'api-integration',
    title: 'API Development & Third-Party Integrations',
    category: 'Backend & Integration',
    tagline: 'Secure, well-documented REST APIs and payment / notification gateway connections.',
    description: 'Pembangunan arsitektur RESTful API yang aman dan berstandar, atau pengintegrasian sistem Anda dengan pihak ketiga seperti Payment Gateway (Midtrans, Xendit), Notifikasi WhatsApp, Email SMTP, AI LLM (OpenAI/Gemini), atau Google Maps.',
    deliverables: [
      'Endpoint API terstruktur dengan validasi request ketat & error handling jelas',
      'Dokumentasi interaktif (Swagger / Postman Collection)',
      'Integrasi Payment Gateway otomatis (QRIS, Virtual Account, Credit Card)',
      'Integrasi Webhook listener dengan retry logic & idempotency protection',
      'Rate-limiting, throttling, dan proteksi otorisasi Bearer JWT'
    ],
    techStack: ['Node.js', 'Express', 'Laravel API', 'Python FastAPI', 'Swagger', 'Postman'],
    typicalTimeline: '1 - 3 Minggu',
    startingPriceIdr: 'Rp 2.200.000',
    startingPriceUsd: '',
    iconName: 'Network'
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing, Debugging & Code Refactoring',
    category: 'Maintenance & Troubleshooting',
    tagline: 'Fast, precise diagnostic troubleshooting and refactoring for unstable codebases.',
    description: 'Layanan investigasi cepat untuk mencari akar permasalahan error (root-cause analysis), perbaikan bug kritis, perbaikan tampilan yang berantakan (responsive layout fixes), dan pembersihan kode kotor agar mudah dipelihara.',
    deliverables: [
      'Audit kode & identifikasi lokasi sumber error',
      'Patch perbaikan teruji tanpa merusak fungsionalitas lain',
      'Peningkatan performa rendering / waktu eksekusi',
      'Penjelasan penyebab error dan tips pencegahan di masa depan',
      'Pull Request rapi dengan catatan commit deskriptif'
    ],
    techStack: ['JavaScript / TypeScript', 'React', 'Next.js', 'Python', 'PHP / Laravel', 'CSS / Tailwind'],
    typicalTimeline: '2 - 7 Hari',
    startingPriceIdr: 'Rp 750.000',
    startingPriceUsd: '',
    iconName: 'Wrench'
  },
  {
    id: 'data-automation',
    title: 'Data Processing & Automated Python Scripts',
    category: 'Automation & Data Engineering',
    tagline: 'Custom Python scripts for batch file sorting, data cleaning, web scraping, and ETL pipelines.',
    description: 'Otomatisasi tugas rutin yang memakan waktu: pembersihan dataset Excel/CSV kotor, konversi format massal, ekstraksi data web legal (web scraping), integrasi pipeline data, dan script utilitas desktop untuk efisiensi tim Anda.',
    deliverables: [
      'Script Python otomatis siap jalan sekali klik atau terjadwal (Cron / Task Scheduler)',
      'Pembersihan, validasi, dan penggabungan dataset (ETL) menggunakan Pandas',
      'Otomatisasi pengolahan berkas (rename massal, hashing, kompresi, ekstraksi teks)',
      'Ekspor format terstandar (Excel berformat, CSV, JSON, Database)',
      'Panduan pengoperasian langkah-demi-langkah'
    ],
    techStack: ['Python', 'Pandas', 'OpenPyXL', 'BeautifulSoup', 'Selenium', 'Automation CLI'],
    typicalTimeline: '3 - 10 Hari',
    startingPriceIdr: 'Rp 1.200.000',
    startingPriceUsd: '',
    iconName: 'Cpu'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: 'Project Intake & Briefing',
    phase: 'Discovery',
    duration: 'Hari 1',
    description: 'Anda mengirimkan gambaran proyek via form atau WhatsApp. Kita membahas tujuan bisnis, fitur wajib, referensi desain, target pengguna, dan ekspektasi tenggat waktu.',
    deliverables: ['Ringkasan Kebutuhan Proyek (Project Brief)', 'Klarifikasi Scope Awal'],
    clientAction: 'Mengirimkan deskripsi kebutuhan & referensi proyek.'
  },
  {
    step: 2,
    title: 'Scope Discovery & Feasibility',
    phase: 'Analysis',
    duration: 'Hari 1 - 2',
    description: 'Saya melakukan analisis teknis mendalam: pemilihan arsitektur, estimasi kompleksitas, evaluasi API pihak ketiga, dan penyusunan breakdown fitur per modul.',
    deliverables: ['Dokumen Scope of Work (SOW)', 'Rekomendasi Arsitektur & Tech Stack'],
    clientAction: 'Review rincian fitur dan konfirmasi prioritas modul.'
  },
  {
    step: 3,
    title: 'Formal Quotation & Milestone Proposal',
    phase: 'Agreement',
    duration: 'Hari 2 - 3',
    description: 'Penyusunan penawaran harga transparan (fixed-price atau milestone-based), rincian jadwal pengerjaan per pekan, dan klausul garansi tertulis.',
    deliverables: ['Surat Penawaran Resmi (Quotation)', 'Jadwal Milestone & Deliverables'],
    clientAction: 'Penyetujuan proposal dan penandatanganan kesepakatan tertulis.'
  },
  {
    step: 4,
    title: 'Down Payment & Project Kickoff',
    phase: 'Inception',
    duration: 'Hari 3',
    description: 'Pembayaran DP 50% (atau termin pertama via transfer bank/escrow). Inisialisasi repository privat GitHub, setup environment, dan pembuatan workspace kolaborasi.',
    deliverables: ['Akses Repository GitHub Privat', 'Link Workspace & Papan Pantau Progress'],
    clientAction: 'Melakukan pembayaran termin pertama (50%).'
  },
  {
    step: 5,
    title: 'Weekly Sprints & Staging Workspace',
    phase: 'Development',
    duration: 'Pekan 1 - Selesai',
    description: 'Pengembangan berlangsung dalam siklus sprint mingguan. Setiap pekan klien menerima update progress transparan, link staging live untuk mencoba fitur langsung, dan demo video singkat.',
    deliverables: ['Update Progress Mingguan', 'Link Demo Staging Aktif (Live Preview)', 'Demo Video / Catatan Sprint'],
    clientAction: 'Mencoba fitur di link staging dan memberikan feedback berkala.'
  },
  {
    step: 6,
    title: 'QA Testing & Structured Revisions',
    phase: 'Testing & Polish',
    duration: 'Pekan Terakhir',
    description: 'Pengujian menyeluruh: uji fungsionalitas, uji respon tampilan di berbagai ukuran layar (desktop, tablet, HP), uji keamanan, serta 2 putaran revisi sesuai batasan SOW.',
    deliverables: ['Hasil Uji QA & Bug Resolution', 'Implementasi Masukan Revisi Klien'],
    clientAction: 'Pemeriksaan final User Acceptance Testing (UAT).'
  },
  {
    step: 7,
    title: 'Final Delivery, Deployment & 30-Day Warranty',
    phase: 'Handover & Support',
    duration: 'Pasca Pelunasan',
    description: 'Pelunasan sisa pembayaran 50%. Penyerahan penuh 100% kepemilikan source code repository, deployment ke server hosting produksi milik klien, serta garansi perbaikan bug gratis selama 30 hari.',
    deliverables: ['Transfer Kepemilikan Source Code 100%', 'Deployment ke Server Produksi Klien', 'Dokumentasi Panduan & Password Vault', 'Sertifikat Garansi Bug 30 Hari'],
    clientAction: 'Pelunasan pembayaran akhir & penerimaan aset proyek.'
  }
];

export const SERVICE_FAQS = [
  {
    q: 'Bagaimana skema pembayaran proyek freelance?',
    a: 'Standar pembayaran adalah 50% Down Payment (DP) sebelum proyek dimulai, dan 50% pelunasan setelah proyek selesai diuji dan siap di-deploy ke server Anda. Untuk proyek berskala besar (di atas Rp 10 juta), pembayaran dapat dibagi menjadi 3 termin berbasis milestone kemajuan.'
  },
  {
    q: 'Apakah saya mendapatkan hak milik penuh atas source code?',
    a: 'Ya, 100%! Setelah pelunasan, seluruh hak cipta dan hak milik intelektual source code menjadi milik Anda seutuhnya. Tidak ada biaya royalti tersembunyi atau lisensi berlangganan ke saya.'
  },
  {
    q: 'Bagaimana jika ada bug setelah proyek diserahkan?',
    a: 'Setiap proyek freelance saya sertai dengan Garansi Perbaikan Bug Gratis selama 30 hari setelah serah terima final. Jika ditemukan ketidaksesuaian fungsional dengan kesepakatan awal (SOW), saya perbaiki segera tanpa biaya tambahan.'
  },
  {
    q: 'Berapa kali revisi yang diperbolehkan?',
    a: 'Termasuk 2 putaran revisi terstruktur pada tahap QA/Review untuk memastikan fungsionalitas dan tampilan sesuai dengan brief awal. Perubahan arah konsep atau penambahan fitur baru di luar SOW akan didiskusikan secara terpisah sebagai addendum scope.'
  },
  {
    q: 'Bagaimana saya memantau jalannya proyek setiap minggu?',
    a: 'Saya menerapkan transparansi penuh: Anda diberikan akses ke URL staging privat (link web uji coba langsung) dan menerima laporan progres mingguan via WhatsApp atau video singkat, sehingga Anda selalu tahu status proyek secara akurat.'
  }
];
