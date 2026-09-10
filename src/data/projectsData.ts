export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'WebGIS & Spatial' | 'AI / Data / Research' | 'Web & Product' | 'Automation & Utilities' | 'Mobile';
  badge: string;
  featured: boolean;
  isUndergraduateThesis?: boolean;
  year: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  myContribution: string;
  challenge: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  journalUrl?: string;
  journalTitle?: string;
  journalName?: string;
  journalDoi?: string;
  liveUrl?: string;
  imagePath?: string;
  gallery?: {
    path: string;
    caption: string;
    classification: string;
  }[];
  supportingInfrastructure?: {
    name: string;
    description: string;
    type: string;
    githubUrl?: string;
  }[];
  accentGlow: string;
}

export const ALL_PROJECTS_DATA: ProjectItem[] = [
  // ================= 1. SIMTAN (Featured #1) =================
  {
    id: 'simtan-monitoring-palm-oil',
    slug: 'simtan',
    title: 'SIMTAN — Immature Oil Palm Monitoring Platform',
    category: 'WebGIS & Spatial',
    badge: 'Undergraduate Thesis / Published Research',
    featured: true,
    isUndergraduateThesis: true,
    year: '2026',
    status: 'Published Research',
    shortDescription: 'Enterprise Agro-GIS monitoring platform for immature oil palm (TBM III) with multi-criteria agronomic validation, spatial block indexing, and LLM executive synthesis.',
    fullDescription: 'SIMTAN (Sistem Informasi Monitoring Areal Tanaman) merupakan sistem informasi dan dashboard monitoring geospasial berbasis web terintegrasi untuk pemantauan tanaman belum menghasilkan (TBM III) kelapa sawit di PT Perkebunan Nusantara IV Regional 1. Proyek ini dikembangkan sebagai Tugas Akhir / Skripsi S1 Sistem dan Teknologi Informasi di Institut Teknologi Sawit Indonesia (ITSI) dan telah resmi dipublikasikan pada jurnal ilmiah nasional terakreditasi DECODING.',
    myContribution: 'Designed, architected, and implemented the full-stack system end-to-end: engineered the spatial polygon data model, built multi-criteria agronomic validation rules based on PPKS standards, implemented temporal dimension indexing, integrated Gemini LLM inference for executive decision narratives, and authored the academic publication.',
    challenge: 'PTPN IV Regional 1 mengelola ribuan hektar areal kelapa sawit TBM yang tersebar di berbagai unit distrik. Proses rekonsiliasi sensus vegetatif, populasi pokok, dan laju pertumbuhan tanaman antar distrik sebelumnya dilakukan manual melalui spreadsheet terpisah, menyebabkan jeda deteksi anomali pertumbuhan dan risiko keterlambatan intervensi pemeliharaan.',
    solution: 'Membangun platform Laravel enterprise terpusat dengan engine validasi kepatuhan agronomi otomatis standar PPKS (100% kriteria tajuk, populasi, dan kesehatan vegetatif), filter temporal triwulanan (Periode I-IV), visualisasi peta interaktif GIS, serta engine narasi eksekutif AI terintegrasi untuk pimpinan operasional kebun.',
    architecture: [
      'Laravel 11 MVC Backend with Sanctum Authentication and Role-Based Access Control (Superadmin, Admin, User)',
      'MySQL 8 Relational Database with Spatial Indexing for Estate Blocks and Vegetative Census Records',
      'Interactive GIS Mapping Layer with Secure Polygon GeoJSON Streaming and Status-Coded Vector Layers',
      'Agronomic Evaluation Engine verifying census compliance rates against PPKS growth curves',
      'AI Executive Narrative Module utilizing Google Gemini API for automated anomaly commentary'
    ],
    keyFeatures: [
      'Multi-Estate Monitoring Dashboard (12,429+ Ha, 1.6M+ active palm population tracked)',
      'Temporal Dimension Filter (Periode I - IV census synchronization with growth curve tracking)',
      'PPKS Agronomic Compliance Benchmark & Automated Anomaly Detection',
      'Spatial Block Detail Inspector with vegetative health classification (Optimal, Deviation, Critical)',
      'Batch Excel Census Ingestion with field validation and automated audit logging',
      'Executive AI Insights Narrative Engine with one-click report preview and PDF compilation'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Leaflet', 'Bootstrap', 'JavaScript', 'Gemini AI'],
    githubUrl: 'https://github.com/firhmgh/simtan-monitoring-palm-oil',
    journalUrl: 'https://journal.diginus.id/DECODING/article/view/1449',
    journalTitle: 'Implementasi Sistem Monitoring Tanaman Kelapa Sawit Berbasis Web GIS dan Large Language Model',
    journalName: 'DECODING: Jurnal Dedikasi Komunitas dan Perkembangan Teknologi Terkini (Vol. 4 No. 2, 2026)',
    journalDoi: '10.61255/decoding.v4i2.1449',
    imagePath: '/projects/simtan/cover.png',
    gallery: [
      {
        path: '/projects/simtan/cover.png',
        caption: 'Monitoring Panel Presisi TBM III — Overview metrik operasional, filter temporal, narasi AI, dan kepatuhan agronomi',
        classification: 'Dashboard Runtime'
      },
      {
        path: '/projects/simtan/feature-01-data-kebun.png',
        caption: 'Data Kebun Regional I — Tabel inventaris unit kebun operasional (Dusun Hulu, Gunung Monaco, Sei Silau) dengan status kesehatan',
        classification: 'Estate Inventory Runtime'
      },
      {
        path: '/projects/simtan/feature-02-upload-data.png',
        caption: 'Pusat Proses Unggah Data — Form ingest berkas sensus Excel dengan identifikasi parameter dan riwayat transaksi',
        classification: 'Data Ingest Runtime'
      },
      {
        path: '/projects/simtan/feature-03-laporan.png',
        caption: 'Pusat Generasi Laporan Presisi TBM III — Konfigurasi ekspor dokumen PDF dengan analisis AI dan matriks performa',
        classification: 'Reporting Engine Runtime'
      },
      {
        path: '/projects/simtan/login-screen.png',
        caption: 'Halaman Login Terautentikasi SIMTAN PTPN IV Regional I — Akses berbasis peran sistemik',
        classification: 'Authentication Interface'
      },
      {
        path: '/projects/simtan/validation-accuracy.png',
        caption: 'Validasi model deteksi pokok dan akurasi geospasial pada skripsi/publikasi',
        classification: 'Model Validation Matrix'
      }
    ],
    supportingInfrastructure: [
      {
        name: 'simtan-map-data',
        description: 'Repository data spasial pendukung berisi boundary GeoJSON dan polygon unit afdeling perkebunan.',
        type: 'Spatial Boundary Dataset',
        githubUrl: 'https://github.com/firhmgh/simtan-map-data'
      }
    ],
    accentGlow: 'from-blue-600/20 via-sky-500/10 to-transparent'
  },

  // ================= 2. WebGIS TBM Regional 1 PalmCo (Featured #2) =================
  {
    id: 'webgis-tbm-palmco-regional-1',
    slug: 'webgis-tbm-palmco',
    title: 'WebGIS TBM Regional 1 PalmCo',
    category: 'WebGIS & Spatial',
    badge: 'Enterprise GIS Platform',
    featured: true,
    year: '2026',
    status: 'Production / Deployed',
    shortDescription: 'Enterprise spatial platform serving PTPN IV Regional 1 with tiled orthomosaics, block-level census analysis, and interactive Leaflet map layers.',
    fullDescription: 'Platform WebGIS Enterprise berbasis React dan Vite yang dideploy untuk menyajikan data geospasial tanaman belum menghasilkan (TBM) di berbagai distrik perkebunan PTPN IV Regional 1 (Labuhan Batu, Serdang Bedagai, Asahan, Labuhan Batu Selatan). Menyediakan inspeksi blok spasial interaktif, visualisasi orthomosaic drone beresolusi tinggi, dan integrasi chart analytics.',
    myContribution: 'Architected and built the React + Vite single-page application frontend, designed responsive Map and Dashboard split views, integrated Leaflet.js with custom XYZ tile matrix services, and structured multi-district geospatial layers.',
    challenge: 'Menyajikan data spasial berukuran gigabyte dari berbagai distrik perkebunan sawit secara cepat di peramban web tanpa menyebabkan latensi rendering atau bottleneck memori pada perangkat lapangan.',
    solution: 'Menerapkan arsitektur micro-tiling XYZ berbasis CDN storage, lazy loading layer per distrik, serta caching metadata GeoJSON untuk navigasi peta yang instan dan responsif.',
    architecture: [
      'React 18 + TypeScript + Vite Single Page Application Architecture',
      'Tailwind CSS Responsive Design System optimized for field tablets and desktop control rooms',
      'Leaflet.js Spatial Rendering Engine with custom layer control and vector GeoJSON styling',
      'Decoupled Tile Server Architecture utilizing high-performance cloud storage for raster tiles'
    ],
    keyFeatures: [
      'Interactive Multi-District Map Viewer with satellite and orthomosaic tile toggle',
      'Real-Time Block Metadata Popup displaying planting year, population density, and elevation',
      'Synchronized Statistical Dashboard featuring census distribution charts',
      'Estate Inventory Table with search, sorting, and block coordinate location triggers'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Leaflet', 'Tailwind CSS', 'GeoJSON'],
    githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1',
    liveUrl: 'https://webgis-tbm-palmco-regional-1.vercel.app/',
    imagePath: '/projects/webgis-tbm/cover.png',
    gallery: [
      {
        path: '/projects/webgis-tbm/cover.png',
        caption: 'Enterprise WebGIS Map Viewer — Orthomosaic aerial tiles dengan layer polygon blok perkebunan PTPN IV',
        classification: 'Production Map Interface'
      },
      {
        path: '/projects/webgis-tbm/feature-02-charts.png',
        caption: 'Dashboard Analitik Spasial — Distribusi statistik luas areal dan kesehatan tanaman antar distrik',
        classification: 'Spatial Analytics View'
      },
      {
        path: '/projects/webgis-tbm/feature-03-map.png',
        caption: 'Detail Inspeksi Blok — Popup interaktif menampilkan parameter agronomi dan koordinat blok',
        classification: 'Interactive Block Inspection'
      },
      {
        path: '/projects/webgis-tbm/feature-04-table.png',
        caption: 'Tabel Inventaris Blok — Filter dan pencarian data atribut blok perkebunan',
        classification: 'Data Grid View'
      },
      {
        path: '/projects/webgis-tbm/feature-01-login.png',
        caption: 'Portal Autentikasi Pengguna WebGIS PTPN IV PalmCo',
        classification: 'Authentication Portal'
      }
    ],
    supportingInfrastructure: [
      {
        name: 'webgis-tbm-palmco-regional-1-asahan',
        description: 'Tile server & GeoJSON boundary repository khusus Distrik Asahan.',
        type: 'Regional Spatial Tile Service',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1-asahan'
      },
      {
        name: 'webgis-tbm-palmco-regional-1-labuhan-batu',
        description: 'Tile server & GeoJSON dataset khusus Distrik Labuhan Batu.',
        type: 'Regional Spatial Tile Service',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1-labuhan-batu'
      },
      {
        name: 'webgis-tbm-palmco-regional-1-serdang-bedagai-i',
        description: 'Tile server & GeoJSON dataset Distrik Serdang Bedagai Bagian I.',
        type: 'Regional Spatial Tile Service',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1-serdang-bedagai-i'
      },
      {
        name: 'webgis-tbm-palmco-regional-1-serdang-bedagai-ii',
        description: 'Tile server & GeoJSON dataset Distrik Serdang Bedagai Bagian II.',
        type: 'Regional Spatial Tile Service',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1-serdang-bedagai-ii'
      },
      {
        name: 'webgis-tbm-palmco-regional-1-labuhan-batu-selatan',
        description: 'Tile server & GeoJSON dataset khusus Distrik Labuhan Batu Selatan.',
        type: 'Regional Spatial Tile Service',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1-labuhan-batu-selatan'
      },
      {
        name: 'webgis-tbm-palmco-dtm-lidar',
        description: 'Digital Terrain Model (DTM) dan point cloud elevation data berbasis LiDAR.',
        type: 'Elevation & LiDAR Infrastructure',
        githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-dtm-lidar'
      }
    ],
    accentGlow: 'from-sky-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 3. Stasiun Kereta Api Sumatera Barat (Featured #3) =================
  {
    id: 'stasiun-kereta-api-sumatera-barat',
    slug: 'stasiun-ka-sumbar',
    title: 'Stasiun Kereta Api Sumatera Barat',
    category: 'WebGIS & Spatial',
    badge: 'Published Journal Paper / J-IbM',
    featured: true,
    year: '2024',
    status: 'Published Research',
    shortDescription: 'Interactive spatial information system mapping historical and active railway stations across West Sumatra, published in J-IbM (Vol. 4 No. 1, 2024).',
    fullDescription: 'Sistem Informasi Geografis pemetaan stasiun kereta api di Sumatera Barat yang mengintegrasikan jalur rel aktif dan non-aktif, informasi sejarah perkeretaapian, serta metadata operasional stasiun. Karya penelitian ini telah dipublikasikan di J-IbM (Jurnal Pengabdian dan Inovasi Masyarakat Indonesia) pada tahun 2024.',
    myContribution: 'Co-authored the research, conducted geospatial digitization of railway tracks and station coordinates across West Sumatra, and implemented the interactive Leaflet web mapping application.',
    challenge: 'Banyak stasiun kereta api bersejarah di Sumatera Barat yang tidak terdokumentasi secara spasial terbuka untuk publik, serta minimnya peta rute kereta api interaktif yang memadukan jalur aktif (seperti KA Minangkabau Ekspres) dengan jalur warisan cagar budaya.',
    solution: 'Membangun aplikasi WebGIS berbasis Leaflet.js dengan layer GeoJSON rute rel kereta api lengkap dan marker stasiun interaktif yang menyajikan foto historis, status operasional, dan profil stasiun.',
    architecture: [
      'Lightweight Client-Side WebGIS Architecture hosted on GitHub Pages',
      'Leaflet.js Mapping Engine with OpenStreetMap and CartoDB basemap providers',
      'Structured GeoJSON Station Registry with attribute schemas for coordinates, history, and status',
      'Responsive Mobile-Ready UI with search bar and station categorization filter'
    ],
    keyFeatures: [
      'Interactive Map of Active & Heritage Railway Stations across West Sumatra',
      'Historical Station Popups with heritage details, operational status, and architectural notes',
      'Dual Base Layer Toggle (Standard Street Map & High-Contrast Satellite/Carto)',
      'Search and Filter by Station Class (Stasiun Besar, Sedang, Halte)'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet', 'GeoJSON', 'GitHub Pages'],
    githubUrl: 'https://github.com/stasiunkasumbar/stasiunkasumbar.github.io',
    liveUrl: 'https://stasiunkasumbar.github.io/',
    journalUrl: 'https://journal.aira.or.id/index.php/j-ibm/article/download/909/337',
    journalTitle: 'Sistem Informasi Geografis Pemetaan Stasiun Kereta Api di Sumatera Barat Berbasis Web',
    journalName: 'J-IbM: Jurnal Pengabdian dan Inovasi Masyarakat Indonesia (Vol. 4 No. 1, 2024)',
    journalDoi: '10.55537/jibm.v4i1.909',
    imagePath: '/projects/stasiun-sumbar/cover.png',
    gallery: [
      {
        path: '/projects/stasiun-sumbar/cover.png',
        caption: 'Peta Interaktif Stasiun Kereta Api Sumatera Barat — Sebaran stasiun dan rute jalur kereta api',
        classification: 'Production WebGIS'
      },
      {
        path: '/projects/stasiun-sumbar/feature-01-map.png',
        caption: 'Tampilan Peta Rute Rel — Visualisasi jalur rel aktif dan non-aktif wilayah Sumbar',
        classification: 'Track Layer View'
      },
      {
        path: '/projects/stasiun-sumbar/feature-02-popup.png',
        caption: 'Popup Detail Informasi Stasiun — Dokumentasi sejarah, foto, dan status operasional',
        classification: 'Station Detail Popup'
      },
      {
        path: '/projects/stasiun-sumbar/feature-03-about.png',
        caption: 'Panel Informasi Proyek & Metodologi Pemetaan Stasiun',
        classification: 'About & Metadata View'
      }
    ],
    accentGlow: 'from-blue-600/20 via-sky-500/10 to-transparent'
  },

  // ================= 4. SiapSeleksi.id (Featured #4) =================
  {
    id: 'siapseleksi',
    slug: 'siapseleksi',
    title: 'SiapSeleksi.id',
    category: 'Web & Product',
    badge: 'Pre-Launch / In Development',
    featured: true,
    year: '2026',
    status: 'Pre-Launch / In Development',
    shortDescription: 'Computer Assisted Test (CAT) simulation platform built with Next.js, TypeScript, and Tailwind CSS for government examination preparation.',
    fullDescription: 'Platform edukasi digital dan simulasi ujian Computer Assisted Test (CAT) yang dirancang untuk calon peserta seleksi Calon Pegawai Negeri Sipil (CPNS) dan Pegawai Pemerintah dengan Perjanjian Kerja (PPPK). Platform menyediakan ujian berwaktu presisi, sistem penilaian bobot otomatis, modul latihan adaptif, dan visualisasi analitik performa peserta.',
    myContribution: 'Contributed to the frontend engineering of the CAT exam simulation engine, developed responsive test-taking interfaces, implemented real-time countdown timers with auto-submission, and built analytical score breakdown components.',
    challenge: 'Menciptakan antarmuka ujian berbasis web yang menyerupai standar aplikasi CAT BKN nasional dengan keandalan timer tingkat detik di sisi browser serta rendering ribuan soal latihan secara cepat.',
    solution: 'Menerapkan Next.js App Router dengan state management berbasis React Context yang terisolasi, optimasi lazy evaluation untuk navigasi lembar soal, dan modul analitik grafik interaktif untuk melihat kelemahan kompetensi.',
    architecture: [
      'Next.js Full-Stack Architecture with React 19, TypeScript, and Server Components',
      'Tailwind CSS Design System with dark and light theme adaptability',
      'Client-Side Test State Machine managing active questions, answer sheet, and submission timer',
      'Automated Scoring Calculator implementing national standard threshold scores (Passing Grade)'
    ],
    keyFeatures: [
      'Interactive Exam Simulator with standard CAT BKN interface layout and navigation palette',
      'Real-Time Precision Countdown Timer with local persistence preventing accidental loss of progress',
      'Comprehensive Competency Analytics (TWK, TIU, TKP score distribution and target indicators)',
      'Question Bank Directory categorized by government agency examination criteria'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    liveUrl: 'https://siapseleksi.id/',
    imagePath: '/projects/siapseleksi/cover.png',
    gallery: [
      {
        path: '/projects/siapseleksi/cover.png',
        caption: 'SiapSeleksi.id Landing Page — Platform simulasi dan persiapan seleksi CPNS / PPPK',
        classification: 'Production Landing Interface'
      },
      {
        path: '/projects/siapseleksi/feature-01.png',
        caption: 'Katalog Paket Simulasi — Pilihan tryout SKD, modul belajar, dan passing grade radar',
        classification: 'Product Catalog'
      },
      {
        path: '/projects/siapseleksi/feature-02.png',
        caption: 'Antarmuka Simulasi Ujian CAT — Navigasi nomor soal, ragu-ragu, dan timer berwaktu nyata',
        classification: 'Exam Engine Interface'
      },
      {
        path: '/projects/siapseleksi/feature-03.png',
        caption: 'Dashboard Analitik Skor — Evaluasi ketuntasan TWK, TIU, TKP dan rekomendasi belajar',
        classification: 'Score Analytics Engine'
      }
    ],
    accentGlow: 'from-blue-600/20 via-pink-500/10 to-transparent'
  },

  // ================= 5. ESG Palm Oil Analytics (Featured #5) =================
  {
    id: 'esg-palm-oil',
    slug: 'esg-palm-oil',
    title: 'ESG Palm Oil Analytics',
    category: 'AI / Data / Research',
    badge: 'Dual AI Engine Platform',
    featured: true,
    year: '2026',
    status: 'Production / Local Runtime Ready',
    shortDescription: 'Comprehensive sustainability compliance system for palm oil estates with automated carbon footprint tracking, NDPE scoring, and Dual AI recommendation engines.',
    fullDescription: 'Platform analisis kepatuhan Environmental, Social, and Governance (ESG) dan sertifikasi keberlanjutan (RSPO/ISPO) untuk industri perkebunan kelapa sawit. Mengintegrasikan pemantauan emisi karbon, indikator deforestasi NDPE (No Deforestation, No Peat, No Exploitation), serta engine Dual AI (Gemini AI dan rule-based inference) untuk menghasilkan rekomendasi aksi mitigasi dampak lingkungan.',
    myContribution: 'Architected and built the full-stack Laravel platform, designed the relational ESG indicator database schema, implemented carbon footprint and water usage calculators, and engineered the Dual AI recommendation pipeline.',
    challenge: 'Perusahaan perkebunan sawit menghadapi audit ketat terkait standar RSPO dan emisi gas rumah kaca, namun agregasi data lingkungan lintas pabrik kelapa sawit (PKS) dan kebun sering tidak terstandar dan lambat diolah.',
    solution: 'Membangun platform agregasi metrik ESG otomatis dengan dashboard visualisasi performa karbon (Scope 1, 2, 3), audit trail berkas sertifikasi, dan rekomendasi otomatis berbasis kecerdasan artifisial untuk kepatuhan regulasi.',
    architecture: [
      'Laravel 11 MVC Backend with Blade templating and Tailwind CSS',
      'MySQL Database storing multi-estate environmental telemetry and audit parameters',
      'Dual AI Integration Pipeline connecting to Google Gemini API for strategic executive briefings',
      'Dynamic Charting Engine rendering real-time emissions and biodiversity compliance trends'
    ],
    keyFeatures: [
      'Carbon Footprint & Scope 1/2/3 Greenhouse Gas Telemetry',
      'NDPE & Biodiversity Conservation Monitoring Panel',
      'Dual AI Compliance Engine (Automated Strategy Generation + Risk Assessment)',
      'Sustainability Audit Readiness Tracker with document vault and verification checkpoints'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Chart.js', 'Gemini AI'],
    githubUrl: 'https://github.com/firhmgh/esg-palm-oil',
    imagePath: '/projects/esg-palm-oil/cover.png',
    gallery: [
      {
        path: '/projects/esg-palm-oil/cover.png',
        caption: 'ESG Executive Dashboard — Metrik emisi karbon, skor kepatuhan NDPE, dan status audit keberlanjutan',
        classification: 'Operational Runtime'
      },
      {
        path: '/projects/esg-palm-oil/feature-01-analytics.png',
        caption: 'Modul Analisis Jejak Karbon — Visualisasi tren emisi Scope 1, 2, dan 3 per metrik ton CPO',
        classification: 'Carbon Analytics Runtime'
      },
      {
        path: '/projects/esg-palm-oil/feature-02-ai.png',
        caption: 'Dual AI Strategy Engine — Rekomendasi otomatis aksi mitigasi risiko lingkungan berbasis AI',
        classification: 'AI Inference Interface'
      },
      {
        path: '/projects/esg-palm-oil/feature-03-monitoring.png',
        caption: 'Panel Pemantauan Konservasi & Indikator Sosial Ketenagakerjaan Kebun',
        classification: 'Compliance Monitoring'
      }
    ],
    accentGlow: 'from-sky-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 6. Rekening Bersama / Escrow Service Platform (Featured #6) =================
  {
    id: 'rekening-bersama',
    slug: 'rekening-bersama',
    title: 'Rekening Bersama / Escrow Service Platform',
    category: 'Web & Product',
    badge: 'Fintech Escrow Monorepo',
    featured: true,
    year: '2026',
    status: 'Private Monorepo / Production Ready',
    shortDescription: 'Secure multi-party digital escrow web platform with automated dispute arbitration, tiered transaction fee calculation, and end-to-end ledger logging.',
    fullDescription: 'Platform rekening bersama (digital escrow) modern yang menjamin keamanan transaksi jual-beli online antara pembeli dan penjual melalui penahanan dana sementara oleh pihak ketiga terpercaya hingga pesanan terkonfirmasi. Dilengkapi antarmuka transaksi interaktif, kalkulator biaya komisi bertingkat, panel resolusi sengketa, dan pelacakan status dana secara transparan.',
    myContribution: 'Developed the responsive React + TypeScript frontend monorepo, engineered the interactive transaction wizard, implemented automated tiered fee calculation algorithms, and built state machines for multi-stage escrow fund release.',
    challenge: 'Mencegah penipuan pada transaksi peer-to-peer digital dengan memastikan proses pembayaran, penahanan dana, pengiriman barang, dan pelepasan dana berlangsung teratur dengan bukti transaksi yang tidak dapat dimanipulasi.',
    solution: 'Membangun platform escrow dengan alur status transaksi 5 tahap (Menunggu Pembayaran -> Dana Ditahan -> Barang Dikirim -> Verifikasi Pembeli -> Selesai), proteksi dispute otomatis, dan dokumentasi audit transaksi.',
    architecture: [
      'React 18 + TypeScript + Vite Client Architecture with modular UI components',
      'Finite State Machine handling 5-stage escrow lifecycles with deterministic transitions',
      'Dynamic Fee Calculation Engine supporting tiered thresholds and percentage-based commissions',
      'Tailwind CSS with custom fintech design tokens, status badges, and mobile-first layouts'
    ],
    keyFeatures: [
      '5-Stage Escrow Transaction Wizard (Pembelian, Pengiriman, Verifikasi, Pencairan)',
      'Tiered Escrow Fee Calculator with instant transparent breakdown',
      'Dispute Arbitration & Resolution Portal with evidence upload workflow',
      'Real-Time Fund Status Tracking with sanitized dummy transaction logging'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    imagePath: '/projects/rekening-bersama/cover.png',
    gallery: [
      {
        path: '/projects/rekening-bersama/cover.png',
        caption: 'Antarmuka Utama Platform Rekening Bersama — Portal transaksi aman dengan alur escrow terverifikasi',
        classification: 'Application Runtime'
      },
      {
        path: '/projects/rekening-bersama/feature-01-transaction.png',
        caption: 'Formulir Pembuatan Transaksi Baru — Konfigurasi nilai transaksi, pembeli, penjual, dan metode pengiriman',
        classification: 'Transaction Flow'
      },
      {
        path: '/projects/rekening-bersama/feature-02-fees.png',
        caption: 'Kalkulator Biaya Komisi Bertingkat — Perhitungan transparan biaya layanan escrow',
        classification: 'Fee Calculator'
      },
      {
        path: '/projects/rekening-bersama/feature-03-tracking.png',
        caption: 'Pelacakan Status Dana Transaksi — Log kronologis dan status pengamanan dana sistemik',
        classification: 'Status Tracking'
      }
    ],
    accentGlow: 'from-blue-600/20 via-pink-500/10 to-transparent'
  },

  // ================= 7. Local File Organizer & Auditor (Featured #7) =================
  {
    id: 'local-file-organizer-auditor',
    slug: 'local-file-organizer',
    title: 'Local File Organizer & Auditor',
    category: 'Automation & Utilities',
    badge: 'Desktop GUI & Dual-Engine CLI',
    featured: true,
    year: '2026',
    status: 'Public Repository / Desktop Ready',
    shortDescription: 'High-performance desktop file organizer and duplicate auditor with Tkinter GUI, tiered SHA-256 hashing, GIS bundle protection, and safe Recycle Bin staging.',
    fullDescription: 'Aplikasi desktop utilitas pembersih, pengorganisir, dan auditor duplikasi berkas lokal berkecepatan tinggi yang dilengkapi GUI Tkinter dan antarmuka CLI. Menggunakan algoritma tiered hashing (Size -> Partial Hash -> Full SHA-256) untuk mendeteksi duplikat dengan aman, perlindungan khusus bundle GIS/Shapefile agar tidak terpisah, dan pembersihan aman ke Recycle Bin.',
    myContribution: 'Architected and built the Python application end-to-end: implemented the tiered SHA-256 hashing algorithm, created the Tkinter Desktop GUI, built the multi-threaded file traversal engine, programmed GIS bundle protection heuristics, and authored automated unit tests.',
    challenge: 'Memeriksa ratusan gigabyte data lokal yang dipenuhi berkas duplikat memerlukan komputasi hashing yang berat, dan berkas geospasial (seperti .shp, .shx, .dbf, .prj) rentan rusak jika dipindahkan secara terpisah.',
    solution: 'Mengembangkan strategi tiered hashing yang memfilter berkas berdasarkan ukuran terlebih dahulu sebelum membaca parsial dan penuh, menambahkan aturan proteksi GIS shapefile bundle, serta memindahkan berkas duplikat ke Recycle Bin sistem untuk menghindari kehilangan data permanen.',
    architecture: [
      'Python 3 Architecture with Tkinter Desktop GUI and argparse CLI interface',
      'Tiered SHA-256 Duplicate Detection Engine: File Size Check -> 4KB Partial Hash -> Full SHA-256',
      'Multi-threaded Background Worker ensuring smooth UI rendering during large directory scans',
      'GIS Bundle Protection Heuristics preventing decomposition of multi-part spatial files',
      'Audit Reporting Module generating structured JSON and Markdown execution logs'
    ],
    keyFeatures: [
      'Modern Tkinter Desktop GUI with real-time directory selector, progress bar, and summary stats',
      'Tiered SHA-256 Duplicate Detection (Size -> Partial Hash -> Full Hash)',
      'GIS Bundle Protection (.shp, .shx, .dbf, .prj kept together without breaking spatial layers)',
      'Safe Recycle Bin Cleanup (send2trash integration preventing accidental permanent deletion)',
      'Multi-threaded background execution with real-time categorization data table',
      'Comprehensive Automated Test Suite covering duplicate detection and bundle integrity'
    ],
    techStack: ['Python', 'Tkinter', 'SHA-256', 'send2trash', 'Multithreading', 'PyTest'],
    githubUrl: 'https://github.com/firhmgh/local-file-organizer-auditor',
    imagePath: '/projects/local-file-organizer-auditor/gui.webp',
    gallery: [
      {
        path: '/projects/local-file-organizer-auditor/gui.webp',
        caption: 'Tkinter Desktop GUI — Antarmuka audit berkas dengan statistik scan, tabel klasifikasi, dan ringkasan duplikat',
        classification: 'Desktop GUI Runtime'
      }
    ],
    accentGlow: 'from-sky-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 8. Palm Oil Scheduling / POS-SIM (Featured #8) =================
  {
    id: 'palm-oil-scheduling',
    slug: 'palm-oil-scheduling',
    title: 'Palm Oil Scheduling / POS-SIM',
    category: 'AI / Data / Research',
    badge: 'Operations Research / Web Optimizer',
    featured: true,
    year: '2026',
    status: 'Live Site / Production Ready',
    shortDescription: 'Industrial palm oil mill scheduling simulator optimizing FFB harvesting queues, boiler throughput, and logistics scheduling using operations research algorithms.',
    fullDescription: 'Platform simulator dan pengoptimal jadwal operasional pabrik kelapa sawit (PKS) berbasis web. Memodelkan antrean penerimaan Tandan Buah Segar (TBS), kapasitas rebusan (sterilizer), laju ekstraksi CPO, serta penjadwalan truk angkut guna meminimalkan asam lemak bebas (ALB/FFA) dan memaksimalkan throughput harian.',
    myContribution: 'Engineered the browser-based simulation engine, modeled queuing mathematics and constraint satisfaction heuristics, developed the interactive scheduling timetable UI, and deployed the live application to GitHub Pages.',
    challenge: 'Penundaan pengolahan TBS setelah panen menyebabkan kenaikan kadar asam lemak bebas (FFA) yang menurunkan mutu CPO, sementara kapasitas stasiun rebusan dan jam operasional pabrik memiliki batasan ketat.',
    solution: 'Membangun simulator optimasi berbasis heuristik penjadwalan industri yang secara dinamis mengatur urutan proses lori dan alokasi boiler berdasarkan waktu kedatangan panen dan kapasitas stasiun.',
    architecture: [
      'Client-Side Web Simulation Architecture deployed on GitHub Pages',
      'Heuristic Scheduling Algorithm balancing sterilizer cycles and FFB arrival batches',
      'Dynamic HTML5 Canvas / DOM Timeline Visualizer rendering gantt chart schedules',
      'Scenario Comparison Engine evaluating throughput and waiting time metrics'
    ],
    keyFeatures: [
      'Interactive Mill Scheduling Simulator with customizable estate arrival parameters',
      'Dynamic Gantt Chart Visualization of sterilizer batches and boiler utilization',
      'FFA Quality Degradation Estimator based on post-harvest waiting duration',
      'Real-Time Schedule Comparison between FIFO, Earliest Deadline, and Optimized Heuristics'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Operations Research', 'GitHub Pages'],
    githubUrl: 'https://github.com/firhmgh/palm-oil-scheduling',
    liveUrl: 'https://firhmgh.github.io/palm-oil-scheduling/',
    imagePath: '/projects/palm-oil-scheduling/cover.png',
    gallery: [
      {
        path: '/projects/palm-oil-scheduling/cover.png',
        caption: 'POS-SIM Web Simulator — Antarmuka simulasi jadwal operasional pabrik kelapa sawit',
        classification: 'Live Production Interface'
      },
      {
        path: '/projects/palm-oil-scheduling/feature-01.png',
        caption: 'Visualisasi Timeline Gantt Chart — Alokasi rebusan sterilizer dan jadwal proses lori TBS',
        classification: 'Schedule Timeline'
      },
      {
        path: '/projects/palm-oil-scheduling/feature-02.png',
        caption: 'Analisis Throughput & Estimasi Kualitas CPO berdasarkan durasi tunggu',
        classification: 'Optimization Metrics'
      }
    ],
    accentGlow: 'from-blue-600/20 via-sky-500/10 to-transparent'
  },

  // ================= 9. Palm Oil RL Simulation (All Projects) =================
  {
    id: 'palm-oil-reinforcement-learning-simulation',
    slug: 'palm-oil-rl',
    title: 'Palm Oil Reinforcement Learning Simulation',
    category: 'AI / Data / Research',
    badge: 'Reinforcement Learning Research',
    featured: false,
    year: '2026',
    status: 'Research / Benchmark Ready',
    shortDescription: 'Reinforcement learning environment and algorithmic benchmark simulating autonomous agronomic decision policies in oil palm plantations.',
    fullDescription: 'Lingkungan simulasi Reinforcement Learning (RL) berbasis Gymnasium dan PyTorch untuk memodelkan pengambilan keputusan pemeliharaan perkebunan kelapa sawit secara otonom. Agen RL dilatih menggunakan algoritma Proximal Policy Optimization (PPO) dan Deep Q-Network (DQN) untuk mengoptimalkan alokasi pupuk, penanganan hama, dan jadwal kastrasi.',
    myContribution: 'Designed the custom Gymnasium environment state-action space, implemented agronomic transition dynamics and reward functions, trained PPO/DQN agents, and generated comparative performance benchmarks.',
    challenge: 'Mengembangkan kebijakan agronomi optimal membutuhkan pemodelan interaksi kompleks antara faktor lingkungan, biaya pemupukan, dan estimasi hasil panen tahunan.',
    solution: 'Membangun simulasi komputasi dengan reward function berbasis margin profit bersih dan keberlanjutan tanah, menghasilkan kurva konvergensi kebijakan agen yang superior dibanding aturan statis.',
    architecture: [
      'Custom Gymnasium RL Environment with continuous and discrete action spaces',
      'PyTorch Deep Learning Engine implementing Actor-Critic (PPO) and DQN policies',
      'Agronomic Bio-Physical Transition Matrix calibrated to tropical soil parameters',
      'Automated Benchmark Logger recording episode rewards, policy loss, and action frequencies'
    ],
    keyFeatures: [
      'Custom Oil Palm Plantation Gym Environment conforming to standard API',
      'Deep RL Training Pipeline (PPO, DQN, A2C) with hyperparameter tuning scripts',
      'Evaluation Benchmark comparing learned policy against traditional calendar schedules',
      'Comprehensive Reward Tracking and Policy Convergence Plots'
    ],
    techStack: ['Python', 'PyTorch', 'Gymnasium', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/firhmgh/palm-oil-reinforcement-learning-simulation',
    imagePath: '/projects/palm-oil-rl/rl-performance-benchmark.png',
    gallery: [
      {
        path: '/projects/palm-oil-rl/rl-performance-benchmark.png',
        caption: 'Grafik Benchmark Komputasi RL — Kurva konvergensi reward dan stabilitas kebijakan PPO vs DQN',
        classification: 'Computational Benchmark'
      }
    ],
    accentGlow: 'from-blue-600/20 via-pink-500/10 to-transparent'
  },

  // ================= 10. Google Drive Duplicate Cleaner (All Projects) =================
  {
    id: 'google-drive-duplicate-cleaner',
    slug: 'gdrive-cleaner',
    title: 'Google Drive Duplicate Cleaner',
    category: 'Automation & Utilities',
    badge: 'Desktop Cloud Utility',
    featured: false,
    year: '2026',
    status: 'Public Repository / Ready',
    shortDescription: 'Tkinter GUI utility integrating Google Drive API v3 to scan cloud storage, identify exact MD5 duplicates, and stage safe trash cleanup.',
    fullDescription: 'Aplikasi desktop berbasis Python dan Tkinter yang mengintegrasikan Google Drive API v3 untuk memindai berkas cloud drive pengguna, mengidentifikasi berkas duplikat berdasarkan hash checksum MD5 resmi Google Drive, serta menyediakan opsi pembersihan berkas duplikat ke Drive Trash secara aman.',
    myContribution: 'Developed the desktop GUI interface using Tkinter, integrated OAuth2 authentication flow with Google Drive API v3, and implemented safe batch trashing mechanisms.',
    challenge: 'Penyimpanan Google Drive sering penuh karena berkas duplikat yang terunggah berulang kali di folder berbeda, dan menghapus berkas cloud secara massal berisiko menghilangkan data penting.',
    solution: 'Memanfaatkan metadata MD5 checksum resmi dari Google Drive API untuk mendeteksi duplikat tanpa mengunduh seluruh isi berkas, memindahkan duplikat ke Trash (bukan penghapusan permanen), serta menyediakan pratinjau daftar berkas sebelum aksi eksekusi.',
    architecture: [
      'Python Desktop GUI Architecture powered by Tkinter',
      'Google Drive API v3 Client with OAuth2 consent handling and token refresh',
      'Hash Matching Engine grouping identical remote files by drive MD5 checksums',
      'Safe Staging Action moving identified duplicate IDs to Drive Trash'
    ],
    keyFeatures: [
      'Interactive Tkinter Desktop GUI with folder ID selector and scan progress meter',
      'Remote MD5 Checksum Duplicate Scanner without full file downloading',
      'Duplicate File Preview Table with path, size, and modification timestamps',
      'Safe Trash Cleanup (Moves files to Google Drive Trash for reversible recovery)'
    ],
    techStack: ['Python', 'Tkinter', 'Google Drive API', 'OAuth2', 'Requests'],
    githubUrl: 'https://github.com/firhmgh/google-drive-duplicate-cleaner',
    imagePath: '/projects/google-drive-duplicate-cleaner/gui.webp',
    gallery: [
      {
        path: '/projects/google-drive-duplicate-cleaner/gui.webp',
        caption: 'Antarmuka GUI Desktop Google Drive Duplicate Cleaner — Panel konfigurasi scan dan hasil audit berkas',
        classification: 'Desktop GUI Runtime'
      }
    ],
    accentGlow: 'from-sky-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 11. Digital Library & Blog (All Projects) =================
  {
    id: 'Digital-Library-Blog',
    slug: 'digital-library',
    title: 'Digital Library & Engineering Blog',
    category: 'Web & Product',
    badge: 'Educational Knowledge Base',
    featured: false,
    year: '2026',
    status: 'Live Site / Production Ready',
    shortDescription: 'Modern web publication and digital library portal cataloging software engineering, WebGIS tutorials, and academic materials.',
    fullDescription: 'Portal perpustakaan digital dan blog teknik yang dirancang untuk mendokumentasikan artikel akademik, tutorial pengembangan sistem geospasial, dan referensi teknologi informasi dengan antarmuka membaca yang bersih dan akses cepat.',
    myContribution: 'Designed and developed the responsive web application, implemented category taxonomy and search filtering, and configured automated deployment to GitHub Pages.',
    challenge: 'Menyajikan ratusan dokumen dan artikel teknis dengan navigasi yang intuitif serta waktu muat halaman instan pada koneksi internet terbatas.',
    solution: 'Membangun arsitektur frontend statis yang teroptimasi dengan typography editorial modern, pencarian instan berbasis peramban, dan performa tinggi.',
    architecture: [
      'Clean HTML5/CSS3/JavaScript Frontend Architecture hosted on GitHub Pages',
      'Client-Side Instant Filter and Search Engine for article indexing',
      'Responsive Editorial Layout optimized for long-form technical reading'
    ],
    keyFeatures: [
      'Instant Article and Document Catalog Search with tag filtering',
      'Clean Editorial Typography with high-contrast reading readability',
      'Fast Static Deployment with zero external server dependencies',
      'Organized Taxonomy for GIS, Software Engineering, and Computer Science'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    githubUrl: 'https://github.com/firhmgh/Digital-Library-Blog',
    liveUrl: 'https://firhmgh.github.io/Digital-Library-Blog/',
    imagePath: '/projects/digital-library/cover.webp',
    gallery: [
      {
        path: '/projects/digital-library/cover.webp',
        caption: 'Digital Library & Blog Portal — Beranda publikasi artikel dan repositori modul edukasi',
        classification: 'Live Production Web'
      },
      {
        path: '/projects/digital-library/feature-01.webp',
        caption: 'Katalog Artikel & Dokumen Referensi Ilmiah',
        classification: 'Article Catalog'
      },
      {
        path: '/projects/digital-library/feature-02.webp',
        caption: 'Tampilan Membaca Artikel dengan Tipografi Editorial Bersih',
        classification: 'Reading Experience'
      }
    ],
    accentGlow: 'from-blue-600/20 via-sky-500/10 to-transparent'
  },

  // ================= 12. Bot Jadwal Kuliah (All Projects) =================
  {
    id: 'bot-jadwal-kuliah',
    slug: 'bot-jadwal-kuliah',
    title: 'Bot Jadwal Kuliah',
    category: 'Automation & Utilities',
    badge: 'Workflow Automation',
    featured: false,
    year: '2024',
    status: 'Public Repository Verified',
    shortDescription: 'Academic scheduling notification bot reimplemented in Python to enable independent deployment and reduce dependency on trial-based workflow tools.',
    fullDescription: 'Bot notifikasi otomatisasi jadwal perkuliahan mahasiswa yang diimplementasikan dalam Python untuk memberikan pengingat waktu kuliah secara terjadwal. Re-implementasi dari pendekatan workflow-automation terdahulu ke kode mandiri Python murni memungkinkan deployment mandiri (independent deployable) tanpa ketergantungan pada alat otomasi berbayar atau berbatas masa percobaan.',
    myContribution: 'Reimplemented an earlier workflow-automation approach in Python to make the bot independently deployable and reduce dependency on trial-based workflow tooling. Structured cron-like schedule parsing and messaging handlers.',
    challenge: 'Mahasiswa kerap terlambat mengikuti perkuliahan karena jadwal kelas yang berubah-ubah, sementara platform otomasi berbasis trial memiliki kuota eksekusi terbatas yang sering terhenti.',
    solution: 'Menulis ulang logika penjadwalan ke dalam script Python mandiri yang dapat dijalankan secara terjadwal pada server mandiri atau cloud worker secara bebas biaya dan andal.',
    architecture: [
      'Python Runtime Architecture with automated scheduler daemon',
      'Structured JSON/Calendar Parser for academic course schedule timetables',
      'HTTP Webhook Dispatcher sending timely notification alerts to chat channels'
    ],
    keyFeatures: [
      'Automated Lecture Reminder Engine based on timetable cron triggers',
      'Independent Python Deployment without third-party proprietary dependencies',
      'Configurable Alert Thresholds (e.g., 30 minutes and 10 minutes prior to class)',
      'Error Handling & Reconnect Resilience for continuous background execution'
    ],
    techStack: ['Python', 'Automation', 'Webhooks', 'Task Scheduling'],
    githubUrl: 'https://github.com/firhmgh/bot-jadwal-kuliah',
    gallery: [],
    accentGlow: 'from-sky-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 13. Dirayah Al-Quran (All Projects) =================
  {
    id: 'Dirayah-Quran-Mobile-App',
    slug: 'dirayah-quran',
    title: 'Dirayah Quran Mobile App',
    category: 'Mobile',
    badge: 'Mobile App Project',
    featured: false,
    year: '2024',
    status: 'Public Repository Verified',
    shortDescription: 'Cross-platform Quranic mobile application providing clean reading typography, audio recitation streaming, and offline verse bookmarks.',
    fullDescription: 'Aplikasi mobile cross-platform berbasis Flutter/Dart untuk membaca kitab suci Al-Qur\'an dengan kenyamanan visual tinggi, terjemahan bahasa Indonesia resmi Kemenag, fitur pencarian surah dan ayat, pemutar audio tilawah terintegrasi, serta penanda bacaan offline.',
    myContribution: 'Worked on the cross-platform mobile application architecture, built responsive Quranic typography rendering components, and integrated audio recitation streaming.',
    challenge: 'Menyajikan teks Arab Al-Qur\'an dengan kaidah penulisan rasm Utsmani yang tepat dan tajwid yang nyaman dibaca pada layar perangkat bergerak berbagai ukuran.',
    solution: 'Mengimplementasikan render tipografi Arab Uthmanic beresolusi tinggi, navigasi surah yang ringan, serta penyimpanan lokal untuk riwayat bacaan terakhir dan bookmark ayat favorit.',
    architecture: [
      'Flutter / Dart Cross-Platform Architecture for Android and iOS',
      'Local SQLite Database storing structured surah, ayah, and translation data for instant offline access',
      'Streaming Audio Player integration supporting background audio playback'
    ],
    keyFeatures: [
      'Clear Arabic Uthmanic Script Typography with Indonesian translations',
      'Audio Recitation Streaming with verse-by-verse playback control',
      'Offline Surah & Ayah Bookmarking with last-read synchronization',
      'Light & Dark Reading Modes tailored for low-light environment comfort'
    ],
    techStack: ['Flutter', 'Dart', 'Mobile', 'SQLite'],
    githubUrl: 'https://github.com/firhmgh/Dirayah-Quran-Mobile-App',
    imagePath: '/projects/dirayah-quran/app-icon.png',
    gallery: [
      {
        path: '/projects/dirayah-quran/app-icon.png',
        caption: 'Project Asset — Identitas visual ikon resmi aplikasi mobile Dirayah Quran',
        classification: 'Project Asset'
      }
    ],
    accentGlow: 'from-blue-600/20 via-pink-500/10 to-transparent'
  },

  // ================= 14. Ramadhan Care (All Projects) =================
  {
    id: 'ramadhan-care',
    slug: 'ramadhan-care',
    title: 'Ramadhan Care',
    category: 'Web & Product',
    badge: 'Web Productivity Tool',
    featured: false,
    year: '2024',
    status: 'Public Repository Verified',
    shortDescription: 'Web-based worship productivity tracker and Ramadan habit monitoring platform built with modern web technologies.',
    fullDescription: 'Aplikasi web pencatatan dan pemantauan produktivitas ibadah harian selama bulan suci Ramadhan. Menyediakan checklist ibadah interaktif, penghitung target tilawah Al-Qur\'an, jadwal imsakiyah dan waktu sholat akurat, serta grafik progres harian.',
    myContribution: 'Developed the web application logic, designed responsive tracking checklists, and implemented client-side persistence for daily worship goals.',
    challenge: 'Membantu pengguna mempertahankan konsistensi ibadah harian dengan alat pelacak yang mudah digunakan tanpa alur pendaftaran yang rumit.',
    solution: 'Membangun antarmuka web intuitif dengan penyimpanan lokal browser yang aman dan visualisasi pencapaian target harian yang memotivasi.',
    architecture: [
      'Responsive Web Architecture with modern CSS component styling',
      'Client-Side LocalStorage Persistence for private, offline-accessible daily logs',
      'Astronomical Calculation Module generating prayer times based on geolocation'
    ],
    keyFeatures: [
      'Interactive Daily Worship Habit Tracker (Sholat, Tilawah, Sedekah)',
      'Accurate Prayer Times & Imsakiyah Countdown based on user location',
      'Quran Reading Target Calculator with remaining page estimators',
      'Weekly & Monthly Worship Consistency Analytics'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    githubUrl: 'https://github.com/firhmgh/ramadhan-care',
    gallery: [],
    accentGlow: 'from-pink-600/20 via-blue-500/10 to-transparent'
  },

  // ================= 15. Streamlit Canteen POS (All Projects) =================
  {
    id: 'streamlit-canteen-pos',
    slug: 'streamlit-canteen-pos',
    title: 'Streamlit Canteen POS',
    category: 'Automation & Utilities',
    badge: 'Data-Driven Point of Sale',
    featured: false,
    year: '2024',
    status: 'Public Repository Verified (Local Runtime Not Available)',
    shortDescription: 'Data-driven canteen point-of-sale and transaction recording application developed in Python with Streamlit and Pandas.',
    fullDescription: 'Aplikasi kasir (Point of Sale) dan pencatatan transaksi kantin berbasis data yang dikembangkan dengan Python dan framework Streamlit. Memungkinkan kasir mencatat penjualan harian, mengelola inventaris menu, dan memvisualisasikan laporan omzet penjualan.',
    myContribution: 'Developed the Streamlit application interface, structured Pandas data processing for daily sales summaries, and implemented automated invoice generation.',
    challenge: 'Kantin skala kecil membutuhkan sistem pencatatan transaksi yang praktis, cepat dioperasikan, dan langsung menghasilkan laporan penjualan tanpa infrastruktur database rumit.',
    solution: 'Menggunakan framework Streamlit yang cepat dan ringan dengan integrasi Pandas DataFrame untuk pengelolaan katalog produk, keranjang kasir, dan ekspor data transaksi ke spreadsheet.',
    architecture: [
      'Streamlit Rapid Application Architecture written in Python',
      'Pandas Data Ingestion & Manipulation for sales ledger and menu inventories',
      'Interactive Streamlit Session State handling order cart items and price calculations'
    ],
    keyFeatures: [
      'Point of Sale Cashier Interface with dynamic item selection and quantity triggers',
      'Automated Total Calculation with discount and payment change computation',
      'Daily Revenue Chart and top-selling menu analytics powered by Pandas',
      'CSV Export for financial reporting and external accounting reconciliation'
    ],
    techStack: ['Python', 'Streamlit', 'Pandas', 'Data Analytics'],
    githubUrl: 'https://github.com/firhmgh/streamlit-canteen-pos',
    gallery: [],
    accentGlow: 'from-blue-600/20 via-sky-500/10 to-transparent'
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return ALL_PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);
}
