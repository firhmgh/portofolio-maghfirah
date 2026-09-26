export interface ProductPackage {
  id: 'source-code' | 'installation-setup' | 'custom-dev';
  tierName: 'Source Code' | 'Installation / Setup' | 'Custom Development';
  priceIdr: string;
  priceUsd: string;
  popular?: boolean;
  summary: string;
  whatsIncluded: string[];
  whatsExcluded: string[];
  ctaLabel: string;
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
  businessBenefit: string;
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
    id: 'rekening-bersama-escrow',
    slug: 'rekening-bersama',
    title: 'Digital Escrow & Rekber Platform',
    tagline: 'Sistem rekening bersama digital peer-to-peer dengan state machine penguncian dana dan ruang arbitrase sengketa.',
    category: 'SaaS & Web',
    badge: 'Fintech Transaction Engine',
    priceStartingIdr: 'Rp 399.000',
    priceStartingUsd: '$25',
    coverImage: '/projects/rekening-bersama/cover.png',
    galleryImages: [
      '/projects/rekening-bersama/cover.png',
      '/projects/rekening-bersama/gallery-1.png',
      '/projects/rekening-bersama/gallery-2.png',
      '/projects/rekening-bersama/gallery-3.png'
    ],
    liveDemoUrl: 'https://firhmgh.github.io/rekening-bersama-platform/',
    githubUrl: 'https://github.com/firhmgh',
    businessBenefit: 'Membangun kepercayaan transaksi jual-beli online di komunitas, forum, atau marketplace niche dengan mengamankan dana pembeli hingga barang terverifikasi aman.',
    overview: 'Solusi sistem perantara transaksi aman (digital escrow / rekber) modern yang menjamin keamanan dana pembeli dan penjual. Menggunakan arsitektur state-machine ketat yang mengunci dana di penampungan sementara, kalkulator biaya fee komisi bertingkat, form upload bukti resi/transfer, dan panel mediasi sengketa transparan.',
    coreFeatures: [
      'State-Machine Transaksi 5 Tahap: Draft -> Didanai -> Dikirim -> Diperiksa -> Dana Dilepas',
      'Kalkulator fee rekber bertingkat otomatis dengan pembebanan fleksibel (buyer/seller/split)',
      'Ruang Mediasi Sengketa (Dispute Resolution) dengan histori pesan dan bukti berkas',
      'Dashboard ringkasan saldo penampungan (escrow holding) dan dana siap dicairkan (payout)',
      'Audit log transaksi anti-manipulasi mencatat setiap perubahan status dana',
      'Autentikasi role terpisah: Pembeli, Penjual, dan Admin Pengawas'
    ],
    technicalHighlights: [
      'Arsitektur React + TypeScript modular dengan validasi tipe data ketat',
      'Status transaksi deterministik mencegah risiko double-release atau kebocoran dana',
      'Database relasional terindeks siap menangani ratusan transaksi harian',
      'Siap dihubungkan ke API mutasi bank otomatis atau Payment Gateway'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    targetAudience: 'Komunitas Jual-Beli Online, Marketplace Niche (Akun Game, Gadget Bekas, Jasa Digital, Koleksi), Pengelola Jasa Rekber.',
    packages: [
      {
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 399.000',
        priceUsd: '$25',
        summary: 'Source code lengkap frontend, backend REST API, dan modul state-machine rekber siap dipelajari.',
        whatsIncluded: [
          'Full Frontend & Backend Monorepo Codebase',
          'Spesifikasi API Endpoint & Postman Collection Lengkap',
          'Skema Database Relasional PostgreSQL / SQLite',
          'Modul Logika Transaksi & State Machine Escrow',
          'Dokumentasi Panduan Konfigurasi Server'
        ],
        whatsExcluded: [
          'Pemasangan ke server VPS Anda',
          'Biaya sewa VPS & nama domain',
          'Integrasi mutasi rekening bank otomatis'
        ],
        ctaLabel: 'Beli Source Code'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 899.000',
        priceUsd: '$58',
        popular: true,
        summary: 'Saya pasang langsung di VPS Ubuntu Anda dengan domain kustom dan konfigurasi email notifikasi.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Setup VPS Cloud (Ubuntu, Nginx, Node.js PM2, Firewall)',
          'Konfigurasi Database PostgreSQL & Backup Otomatis',
          'Kustomisasi Branding & Aturan Fee Komisi Usaha Anda',
          'Setup Domain Kustom, SSL HTTPS & Notifikasi Email SMTP',
          'Pendampingan Teknis 14 Hari via WhatsApp'
        ],
        whatsExcluded: [
          'Biaya bulanan VPS & pendaftaran domain',
          'Akun perbankan bisnis'
        ],
        ctaLabel: 'Pesan Siap Pakai'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 1.790.000',
        priceUsd: '$115',
        summary: 'Integrasi cek mutasi bank otomatis / payment gateway, notifikasi WhatsApp gateway, dan verifikasi KYC.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Integrasi Cek Mutasi Bank Otomatis / Payment Gateway',
          'Modul Verifikasi Identitas Pengguna (Upload KTP / KYC Sederhana)',
          'Integrasi Notifikasi WhatsApp Otomatis ke Buyer & Seller',
          'Bimbingan Operasional via Remote Meeting',
          'Garansi Bug 30 Hari'
        ],
        whatsExcluded: [
          'Biaya langganan API mutasi bank pihak ketiga',
          'Akun WhatsApp Gateway bisnis'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
      }
    ],
    deliverables: [
      'Source Code Lengkap (Clean Architecture)',
      'Dokumentasi API & State Machine Flowchart',
      'Skrip Deployment Docker / Shell',
      'Bimbingan Operasional via WhatsApp / Meet'
    ]
  },
  {
    id: 'local-file-organizer-tool',
    slug: 'local-file-organizer',
    title: 'Local File Organizer & Duplicate Auditor',
    tagline: 'Aplikasi desktop Windows pembersih dan pendeteksi file duplikat berkecepatan tinggi dengan proteksi GIS bundle.',
    category: 'Desktop & Tools',
    badge: 'High-Speed Desktop Utility',
    priceStartingIdr: 'Rp 49.000',
    priceStartingUsd: '$3',
    coverImage: '/projects/local-file-organizer-auditor/gui.webp',
    galleryImages: [
      '/projects/local-file-organizer-auditor/gui.webp',
      '/projects/local-file-organizer-auditor/gallery-1.webp',
      '/projects/local-file-organizer-auditor/gallery-2.webp',
      '/projects/local-file-organizer-auditor/gallery-3.webp'
    ],
    liveDemoUrl: 'https://github.com/firhmgh/local-file-organizer-and-duplicate-auditor',
    githubUrl: 'https://github.com/firhmgh/local-file-organizer-and-duplicate-auditor',
    businessBenefit: 'Menghemat ratusan gigabyte ruang penyimpanan hard disk komputer kerja dan mencegah kerusakan data proyek akibat berkas spasial/GIS yang terpisah saat dibersihkan.',
    overview: 'Software utilitas desktop Windows untuk merapikan, mengelompokkan kategori file otomatis, dan mengaudit berkas duplikat pada direktori kerja besar. Menggunakan algoritma Tiered SHA-256 Hashing (Size -> Partial Hash -> Full SHA-256) yang bekerja 10x lebih cepat dibanding scanner konvensional, dilengkapi aturan proteksi khusus file GIS Shapefile agar komponen spasial (.shp, .shx, .dbf, .prj) tidak tercerai, serta staging aman ke Recycle Bin.',
    coreFeatures: [
      'Tiered SHA-256 Hashing: Filter ukuran -> 4KB Hash Parsial -> Hash Penuh SHA-256',
      'GIS Bundle Protection: Menjaga file .shp, .shx, .dbf, .prj tetap utuh tidak terpisah',
      'Antarmuka Desktop GUI Tkinter yang ringan tanpa lag saat memindai ratusan gigabyte',
      'Mode Dry-Run: Pratinjau daftar berkas yang akan dipindah sebelum dieksekusi',
      'Karantina Aman ke Recycle Bin sistem (file dapat dipulihkan sewaktu-waktu)',
      'Ekspor laporan audit duplikasi berkas ke format CSV / Text'
    ],
    technicalHighlights: [
      'Multi-threaded background worker memastikan antarmuka tetap responsif saat scan',
      'Deteksi hash akurat meskipun nama file berbeda namun isi byte identik',
      'Tersedia format Standalone Executable (.exe) langsung jalan tanpa install Python',
      'Dilengkapi automated unit tests dengan framework pytest'
    ],
    techStack: ['Python 3', 'Tkinter GUI', 'SHA-256', 'Multithreading', 'PyInstaller', 'Windows API'],
    targetAudience: 'Profesional GIS, Desainer Grafis, Arsitek, Fotografer, Data Analyst, dan pengguna Windows dengan disk penuh.',
    packages: [
      {
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 49.000',
        priceUsd: '$3',
        summary: 'File executable .exe langsung jalan di Windows 10/11 atau source code Python lengkap.',
        whatsIncluded: [
          'File Standalone Executable (.exe) siap pakai langsung klik',
          'Source Code Python 3 lengkap dan test suite pytest',
          'Lisensi Penggunaan Pribadi Seumur Hidup (Lifetime)',
          'User Guide PDF Bahasa Indonesia',
          'Update Bug Minor Selamanya'
        ],
        whatsExcluded: [
          'Kustomisasi aturan sortir folder khusus kantor',
          'Integrasi cloud sync otomatis'
        ],
        ctaLabel: 'Beli Sekarang'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 99.000',
        priceUsd: '$6',
        popular: true,
        summary: 'Bantuan setup konfigurasi folder kerja Anda via remote WhatsApp/AnyDesk agar sortir berjalan sesuai workflow.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Panduan setup remote optimasi direktori kerja Anda',
          'Konfigurasi rule kategori ekstensi file spesifik kebutuhan Anda',
          'Pembuatan shortcut otomatis & konfigurasi ignore folder proteksi',
          'Dukungan konsultasi langsung via WhatsApp'
        ],
        whatsExcluded: [
          'Pemulihan hard disk fisik yang rusak'
        ],
        ctaLabel: 'Pesan dengan Setup'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 299.000',
        priceUsd: '$19',
        summary: 'Kustomisasi aturan khusus untuk server NAS kantor, auto-scheduled task mingguan, atau format file proprietary.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Kustomisasi Ekstensi File Khusus & Rule Penamaan File Otomatis',
          'Integrasi Windows Task Scheduler (Pembersihan Otomatis Terjadwal)',
          'Build versi CLI kustom tanpa GUI untuk server / headless environment',
          'Garansi Teknis 30 Hari'
        ],
        whatsExcluded: [
          'Infrastruktur hardware server kantor'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
      }
    ],
    deliverables: [
      'File Executable Standalone (.exe) & Source Code Repo',
      'Buku Panduan PDF Pengoperasian Praktis',
      'Dukungan Teknis via Chat WhatsApp'
    ]
  },
  {
    id: 'webgis-spatial-starter-kit',
    slug: 'webgis-spatial-starter',
    title: 'WebGIS Spatial Portal Starter Kit',
    tagline: 'Template portal peta web interaktif modern dengan layer switcher dinamis, filter spasial, dan drawer data mobile.',
    category: 'GIS & Spatial',
    badge: 'Geospatial Web Template',
    priceStartingIdr: 'Rp 299.000',
    priceStartingUsd: '$19',
    coverImage: '/projects/stasiun-sumbar/cover.png',
    galleryImages: [
      '/projects/stasiun-sumbar/cover.png',
      '/projects/stasiun-sumbar/gallery-1.png',
      '/projects/stasiun-sumbar/gallery-2.png',
      '/projects/stasiun-sumbar/gallery-3.png'
    ],
    liveDemoUrl: 'https://firhmgh.github.io/stasiun-kereta-api-sumatera-barat/',
    githubUrl: 'https://github.com/firhmgh',
    businessBenefit: 'Mempercepat peluncuran web pemetaan aset, tata ruang, perkebunan, atau pariwisata dari hitungan minggu menjadi hitungan jam tanpa perlu server GIS mahal.',
    overview: 'Starter kit aplikasi WebGIS modern yang dirancang untuk mempercepat pembuatan peta interaktif berbasis web untuk instansi, perusahaan, maupun riset geospasial. Dilengkapi pengontrol layer spasial (Point, Line, Polygon), basemap switcher (Satelit, OSM, Terain), pop-up atribut interaktif, filter pencarian atribut, dan panel drawer responsif untuk perangkat bergerak.',
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
    targetAudience: 'Konsultan GIS, Dinas Pemerintahan, Peneliti Wilayah, Mahasiswa PWK/Geografi, dan Pengembang Properti.',
    packages: [
      {
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 299.000',
        priceUsd: '$19',
        summary: 'Template source code WebGIS lengkap siap diganti dengan file GeoJSON Anda sendiri.',
        whatsIncluded: [
          'Full Source Code Template WebGIS Responsif',
          'Komponen Basemap Switcher & Layer Controller',
          'Sample Dataset GeoJSON & Konverter Tool',
          'Dokumentasi Langkah Memasukkan Data Spasial Sendiri (PDF)',
          'Lisensi Penggunaan Bebas Permanen'
        ],
        whatsExcluded: [
          'Jasa konversi data peta milik klien',
          'Setup hosting & domain kustom'
        ],
        ctaLabel: 'Beli Template'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 649.000',
        priceUsd: '$42',
        popular: true,
        summary: 'Saya bantu konversi data spasial Anda (SHP/Excel/KML), styling simbologi peta, dan deploy langsung online.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Konversi hingga 5 Layer Spasial (dari Shapefile / Excel / CAD / KML)',
          'Custom Styling Simbologi Peta Sesuai Standar Kartografi',
          'Deployment ke Hosting Gratis (GitHub Pages / Vercel) atau Cloud Klien',
          'Setup Custom Domain & SSL HTTPS',
          'Pendampingan & Update Data Peta via WhatsApp'
        ],
        whatsExcluded: [
          'Survei pemetaan lapangan (data mentah disediakan klien)'
        ],
        ctaLabel: 'Pesan dengan Setup'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 1.450.000',
        priceUsd: '$95',
        summary: 'Pengembangan fitur geospasial lanjutan seperti spatial query PostGIS, analitik buffer, dan dashboard statistik terintegrasi.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Integrasi Database Spasial PostGIS untuk query atribut dinamis',
          'Fitur Analisis Spasial Khusus (Buffer area, jarak radius, heatmaps)',
          'Dashboard Panel Statistik Terintegrasi Grafik Infografis',
          'Bimbingan Penggunaan via Video Call',
          'Garansi Bug 30 Hari'
        ],
        whatsExcluded: [
          'Biaya database server PostGIS berbayar (jika ada)'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
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
    title: 'Quran Mobile App Starter Kit (Flutter)',
    tagline: 'Starter kit aplikasi mobile Flutter lintas platform dengan tipografi Arab rasm Utsmani dan database offline SQLite.',
    category: 'Mobile',
    badge: 'Cross-Platform Mobile Kit',
    priceStartingIdr: 'Rp 249.000',
    priceStartingUsd: '$16',
    coverImage: '/projects/dirayah-quran/app-icon.png',
    galleryImages: [
      '/projects/dirayah-quran/app-icon.png',
      '/projects/dirayah-quran/preview.png'
    ],
    githubUrl: 'https://github.com/firhmgh',
    businessBenefit: 'Meluncurkan aplikasi Al-Quran digital mobile dengan identitas brand yayasan atau lembaga sendiri di Google Play Store tanpa memulai coding dari nol.',
    overview: 'Starter kit aplikasi mobile lintas platform (Android & iOS) berbasis Flutter untuk membaca kitab suci secara digital dengan kenyamanan visual tipografi Arab rasm Utsmani resolusi tinggi, terjemahan resmi Kemenag RI, pencarian ayat kilat, penanda bacaan offline, dan integrasi pemutar audio murottal streaming.',
    coreFeatures: [
      'Render Tipografi Arab Rasm Utsmani resolusi tinggi yang nyaman di mata',
      'Pencarian Cepat Surah, Juz, dan Ayat Al-Quran',
      'Penyimpanan Lokal SQLite (Aplikasi dapat dibuka dan dibaca 100% tanpa internet/offline)',
      'Fitur Penanda Terakhir Baca (Last Read) dan Bookmark Ayat Favorit',
      'Audio Murottal Streaming per Surah dengan kontrol pemutar suara latar',
      'Dukungan Mode Terang & Gelap (Dark Mode) ramah baterai OLED'
    ],
    technicalHighlights: [
      'Clean Architecture Flutter dengan manajemen state terpisah dan mudah dipelihara',
      'Database SQLite lokal siap pakai berisi 114 surah dan 6.236 ayat lengkap',
      'Modular code: Sangat mudah ditambahkan fitur jadwal sholat, arah kiblat, atau doa harian'
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Just_Audio', 'Android & iOS'],
    targetAudience: 'Developer Mobile, Yayasan / Lembaga Dakwah, Komunitas Muslim yang ingin memiliki aplikasi Al-Quran dengan brand sendiri.',
    packages: [
      {
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 249.000',
        priceUsd: '$16',
        summary: 'Source code Flutter lengkap beserta database SQLite 114 surah siap di-compile di Android Studio/VS Code.',
        whatsIncluded: [
          'Full Flutter / Dart Source Code (Null Safety)',
          'Pre-populated SQLite Database (114 Surah + Terjemahan Kemenag)',
          'Dokumentasi Struktur Proyek & Cara Build APK / AAB (PDF)',
          'Lisensi Penggunaan Bebas Permanen (Lifetime)',
          'Update Kompatibilitas Versi Minor'
        ],
        whatsExcluded: [
          'Jasa build APK release atau upload ke Play Store',
          'Kustomisasi splash screen & icon'
        ],
        ctaLabel: 'Beli Source Code'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 549.000',
        priceUsd: '$35',
        popular: true,
        summary: 'Kustomisasi identitas aplikasi (nama brand, logo, splash screen) dan pembuatan signed APK/AAB siap upload.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Penggantian Nama Aplikasi, App Icon & Splash Screen Brand Anda',
          'Pembuatan Signed Android App Bundle (.aab) & Release APK',
          'Panduan / Bantuan Upload ke Google Play Console Anda',
          'Dukungan Konsultasi Teknis via WhatsApp'
        ],
        whatsExcluded: [
          'Biaya pendaftaran akun Google Play Console ($25 sekali bayar resmi ke Google)'
        ],
        ctaLabel: 'Pesan Siap Upload'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 1.190.000',
        priceUsd: '$76',
        summary: 'Penambahan fitur kustom seperti jadwal sholat otomatis sesuai GPS, kompas kiblat interaktif, atau kumpulan doa.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Integrasi Fitur Jadwal Sholat Geolocation Otomatis',
          'Fitur Kompas Arah Kiblat Interaktif',
          'Modul Kumpulan Doa Harian & Dzikir Pagi Petang',
          'Garansi Kompatibilitas Versi Android Terbaru 30 Hari'
        ],
        whatsExcluded: [
          'Biaya developer account Apple App Store'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
      }
    ],
    deliverables: [
      'Proyek Flutter Bersih (Versi Flutter Terbaru)',
      'File Database SQLite Terstruktur',
      'Panduan Setup Step-by-Step PDF'
    ]
  },
  {
    id: 'pos-sim-mill-optimizer',
    slug: 'palm-oil-scheduling',
    title: 'POS-SIM — Operations Scheduling Simulator',
    tagline: 'Simulator penjadwalan antrean industri berbasis web yang memodelkan kapasitas stasiun kerja dan efisiensi waktu olah.',
    category: 'Desktop & Tools',
    badge: 'Operations Research Simulator',
    priceStartingIdr: 'Rp 299.000',
    priceStartingUsd: '$19',
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
    businessBenefit: 'Membantu insinyur operasional dan manajer pabrik memvisualisasikan antrean antarsiklus produksi dan meminimalkan biaya penundaan bahan baku.',
    overview: 'Simulator dan pengoptimal jadwal operasional pabrik pengolahan berbasis web yang mengimplementasikan riset operasional (Operations Research). Memodelkan antrean kedatangan bahan baku, utilisasi rebusan (sterilizer), laju ekstraksi minyak (OER), dan degradasi asam lemak bebas (FFA/ALB) dalam bentuk visualisasi interaktif Gantt chart.',
    coreFeatures: [
      'Visual Interactive Gantt Chart Timeline: Simulasi giliran rebusan dan lori per jam',
      'Model Penalti FFA: Menghitung kerugian finansial akibat penundaan olah di loading ramp',
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
    targetAudience: 'Manajer Pabrik, Mill Engineer, Peneliti Agronomi/Supply Chain, Mahasiswa Teknik Industri.',
    packages: [
      {
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 299.000',
        priceUsd: '$19',
        summary: 'Source code lengkap simulator berbasis web siap di-host di server lokal atau portal intranet.',
        whatsIncluded: [
          'Full Source Code Frontend Simulator',
          'Modul Perhitungan Heuristik Penjadwalan & Formula FFA',
          'Panduan Embed ke Website / Portal Internal',
          'Lisensi Penggunaan Bebas Permanen (Lifetime)'
        ],
        whatsExcluded: [
          'Kalibrasi rumus sesuai pabrik riil klien',
          'Hosting setup'
        ],
        ctaLabel: 'Beli Source Code'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 649.000',
        priceUsd: '$42',
        popular: true,
        summary: 'Hosting online dan kalibrasi parameter sesuai kapasitas stasiun rebusan dan shift kerja riil pabrik Anda.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Penyesuaian Parameter Spesifik Pabrik (Kapasitas Ton/Jam riil)',
          'Custom Template Laporan Ekspor PDF Sesuai Format Perusahaan',
          'Deployment ke Cloud atau Intranet Klien',
          'Workshop Penggunaan Singkat via Video Call'
        ],
        whatsExcluded: [
          'Integrasi sensor SCADA hardware'
        ],
        ctaLabel: 'Pesan dengan Setup'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 1.490.000',
        priceUsd: '$95',
        summary: 'Pengembangan modul optimasi kustom, integrasi database timbangan TBS, dan dashboard KPI eksekutif.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Integrasi API database jembatan timbang (Weightbridge bridge)',
          'Kustomisasi formula optimasi multikriteria khusus',
          'Pendampingan Teknis & Garansi Bug 30 Hari'
        ],
        whatsExcluded: [
          'Kabel koneksi fisik jembatan timbang'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
      }
    ],
    deliverables: [
      'Source Code Web Simulator Teruji',
      'Dokumentasi Rumus Matematis & Batasan Optimasi',
      'Sample Dataset Kedatangan Truk Harian'
    ]
  },
  {
    id: 'streamlit-pos-analytics-kit',
    slug: 'streamlit-canteen-pos',
    title: 'Streamlit POS & Realtime Analytics Kit',
    tagline: 'Aplikasi kasir (Point of Sale) dan pembukuan omzet harian berbasis Python dan Streamlit tanpa kompleksitas database.',
    category: 'Desktop & Tools',
    badge: 'Lightweight SMB Tool',
    priceStartingIdr: 'Rp 99.000',
    priceStartingUsd: '$6',
    coverImage: '/projects/local-file-organizer-auditor/gui.webp',
    galleryImages: [
      '/projects/local-file-organizer-auditor/gui.webp'
    ],
    githubUrl: 'https://github.com/firhmgh',
    businessBenefit: 'Mencatat transaksi penjualan kafe atau toko secara cepat dan langsung menghasilkan laporan grafik omzet harian tanpa biaya langganan bulanan software kasir.',
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
        id: 'source-code',
        tierName: 'Source Code',
        priceIdr: 'Rp 99.000',
        priceUsd: '$6',
        summary: 'Skrip Python lengkap siap pakai langsung di laptop Anda beserta panduan instalasi 3 langkah.',
        whatsIncluded: [
          'Full Python Source Code & Streamlit App',
          'Contoh Database Menu & Transaksi Awal',
          'Panduan Instalasi Python & Library (10 Menit Setup)',
          'Lisensi Penggunaan Permanen (Lifetime)'
        ],
        whatsExcluded: [
          'Setup hosting cloud',
          'Input data menu massal'
        ],
        ctaLabel: 'Beli Script'
      },
      {
        id: 'installation-setup',
        tierName: 'Installation / Setup',
        priceIdr: 'Rp 249.000',
        priceUsd: '$16',
        popular: true,
        summary: 'Deploy aplikasi ke cloud agar kasir dan pemilik usaha bisa memantau transaksi dari HP secara bersamaan.',
        whatsIncluded: [
          'Semua benefit paket Source Code',
          'Hosting Online ke Streamlit Community Cloud (Akses dari HP & Tablet)',
          'Input Awal Seluruh Daftar Menu Usaha Anda (hingga 50 item)',
          'Setup Proteksi Password Login Kasir & Owner',
          'Bimbingan Penggunaan via WhatsApp'
        ],
        whatsExcluded: [
          'Hardware printer thermal bluetooth'
        ],
        ctaLabel: 'Pesan dengan Setup'
      },
      {
        id: 'custom-dev',
        tierName: 'Custom Development',
        priceIdr: 'Rp 590.000',
        priceUsd: '$38',
        summary: 'Kustomisasi format cetak struk thermal, sistem barcode scanning, dan laporan analitik margin keuntungan.',
        whatsIncluded: [
          'Semua benefit paket Installation / Setup',
          'Kustomisasi Cetak Struk Printer Thermal ESC/POS (58mm/80mm)',
          'Integrasi Barcode Scanner USB',
          'Kalkulasi Harga Pokok Penjualan (HPP) & Margin Laba Bersih',
          'Garansi Teknis 30 Hari'
        ],
        whatsExcluded: [
          'Unit scanner fisik'
        ],
        ctaLabel: 'Diskusi Kustomisasi'
      }
    ],
    deliverables: [
      'File Kode Python Siap Eksekusi',
      'Panduan Penggunaan Bahasa Indonesia',
      'Bantuan Instalasi via WhatsApp'
    ]
  }
];
