export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  featured: boolean;
  isUndergraduateThesis?: boolean;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  journalUrl?: string;
  journalTitle?: string;
  liveUrl?: string;
  imagePath: string;
  accentColor: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'simtan-monitoring-palm-oil',
    title: 'SIMTAN — Immature Oil Palm (TBM) Monitoring Platform',
    category: 'Enterprise Agro-GIS & Expert Validation (Tugas Akhir / Skripsi S1)',
    badge: 'Final Project / Skripsi',
    featured: true,
    isUndergraduateThesis: true,
    shortDescription: 'Platform enterprise monitoring spasial TBM kelapa sawit dengan validasi agronomi otomatis, visualisasi static raster XYZ tiles, dan model LLM. Proyek Tugas Akhir S1 dengan publikasi jurnal ilmiah terindeks.',
    fullDescription: 'SIMTAN merupakan sistem informasi dan dashboard monitoring berbasis web (Laravel) terintegrasi untuk pemantauan tanaman belum menghasilkan (TBM) kelapa sawit di PT Perkebunan Nusantara IV Regional 1. Proyek ini dikembangkan sebagai Tugas Akhir / Skripsi S1 Sistem dan Teknologi Informasi di ITSI dan telah dipublikasikan pada jurnal ilmiah.',
    challenge: 'Pencatatan manual kebun seluas ribuan hektar memicu keterlambatan pelaporan, resiko inkonsistensi data lapangan, dan rendering orthophoto beresolusi tinggi yang lambat (>12.000 ms).',
    solution: 'Membangun platform Laravel dengan integrasi Static Raster Tiling (XYZ Tiles) yang mempercepat rendering peta menjadi rata-rata 180 ms, validasi kesesuaian agronomi otomatis (Fleiss Kappa 0.8105), dan integrasi LLM (Gemini 1.5 Flash & Llama 3) untuk rekomendasi pemeliharaan.',
    architecture: [
      'Backend & Architecture: Laravel MVC RESTful architecture dengan custom agronomic validation pipeline.',
      'Spatial Rendering: Static Raster Tiling (XYZ Tiles) memotong latensi rendering dari >12s menjadi ~180ms.',
      'AI Recommendation Engine: Integrasi Dual LLM API (Gemini 1.5 & Llama 3) untuk prescriptive analytics biometrik tanaman.',
      'Database: MySQL teroptimasi dengan index relasional untuk query poligon blok kebun.'
    ],
    keyFeatures: [
      'Peta spasial interaktif blok kebun TBM dengan static raster XYZ tiling rendering cepat',
      'Mesin validasi agronomi otomatis dengan tingkat kesepakatan pakar 0.8105 (Fleiss Kappa)',
      'Prescriptive analytics rekomendasi pemeliharaan via integrasi LLM API',
      'Modul visualisasi data sensus Excel ke chart dan tabel dinamis',
      'Tugas Akhir / Skripsi resmi dengan publikasi di Journal of Deep Learning, Computer Vision and Digital Image Processing'
    ],
    techStack: ['Laravel', 'PHP', 'XYZ Tiles', 'Leaflet GIS', 'LLM API', 'MySQL', 'Bootstrap'],
    githubUrl: 'https://github.com/firhmgh/simtan-monitoring-palm-oil',
    journalUrl: 'https://journal.diginus.id/DECODING/article/view/1449',
    journalTitle: 'Laravel Dashboard for Immature Oil Palm (TBM III) Monitoring Using XYZ Tiles and Large Language Models',
    imagePath: 'projects/simtan/validation-accuracy.png',
    accentColor: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'esg-palm-oil',
    title: 'ESG Palm Oil — AI Sustainability Analytics Dashboard',
    category: 'AI Decision Support & Sustainability Analytics',
    badge: 'Dual AI Engine',
    featured: true,
    shortDescription: 'Dashboard analitik kepatuhan ESG rantai pasok kelapa sawit dengan evaluasi Dual AI (Gemini & Groq Llama 3) serta pemodelan penalti biologis Ganoderma.',
    fullDescription: 'Platform analitik keberlanjutan Environmental, Social, and Governance (ESG) terintegrasi untuk industri agro-sawit yang memanfaatkan dua provider Large Language Model (LLM) untuk scoring otomatis dan rekomendasi mitigasi risiko.',
    challenge: 'Audit kepatuhan ESG konvensional berjalan lambat dan belum memperhitungkan ancaman biologis seperti serangan jamur Ganoderma terhadap stabilitas skor keberlanjutan.',
    solution: 'Merancang arsitektur dashboard cerdas dengan Laravel 11 yang menghubungkan Google Gemini 1.5 dan Groq Llama 3 API dengan rumus pembatas penalti Ganoderma otomatis jika insidensi melebihi ambang batas.',
    architecture: [
      'AI Engine: Dual service GroqService dan GeminiService dengan skema fallback otomatis.',
      'Business Logic: Algoritma pembobot penalti ketat untuk metrik lingkungan dan penyakit.',
      'Visualisasi: Radar chart interaktif Chart.js untuk dimensi Environmental, Social, dan Governance.',
      'Security: Isolasi penuh environment variable API key dan data perkebunan.'
    ],
    keyFeatures: [
      'Integrasi Dual AI (Google Gemini 1.5 & Groq Llama 3) untuk audit keberlanjutan otomatis',
      'Pemodelan penalti ketat berbasis insidensi penyakit Ganoderma',
      'Visualisasi radar multi-dimensi kepatuhan ESG',
      'Generator rekomendasi tindakan mitigasi berbasis telemetri kebun',
      'Tampilan adaptif untuk petugas sustainability dan auditor'
    ],
    techStack: ['Laravel 11', 'PHP 8.2', 'Google Gemini AI', 'Groq Llama 3', 'Tailwind CSS', 'Chart.js', 'MySQL'],
    githubUrl: 'https://github.com/firhmgh/esg-palm-oil',
    imagePath: 'projects/esg-palm-oil/dashboard.webp',
    accentColor: 'from-green-500 to-emerald-700'
  },
  {
    id: 'palm-oil-reinforcement-learning-simulation',
    title: 'Palm Oil Reinforcement Learning Simulation',
    category: 'Applied AI / Reinforcement Learning Research',
    badge: 'Machine Learning',
    featured: true,
    shortDescription: 'Simulasi komputasional optimasi kebijakan panen dan pemupukan kelapa sawit berbasis Gymnasium, PPO, dan Recurrent PPO dengan memori temporal LSTM.',
    fullDescription: 'Platform riset komputasional yang memodelkan dinamika perkebunan kelapa sawit sebagai Markov Decision Process (MDP) dan melatih agen deep reinforcement learning untuk memaksimalkan yield panen jangka panjang.',
    challenge: 'Menentukan siklus rotasi panen dan dosis nutrisi optimal di tengah fluktuasi cuaca multi-tahun sangat berbiaya tinggi bila diuji secara langsung di lapangan.',
    solution: 'Membangun custom Gymnasium environment yang memodelkan pertumbuhan vegetatif, kematangan TBS, dan cuaca, lalu melatih agen PPO dan Recurrent PPO yang mengungguli metode baseline FIFO.',
    architecture: [
      'Environment: Custom Gymnasium class dengan state space status vegetatif dan kelembapan tanah.',
      'Action Space: Vektor aksi penentuan rotasi panen dan dosis pemupukan presisi.',
      'Algorithms: Stable-Baselines3 PPO & SB3-Contrib Recurrent PPO (LSTM).',
      'Benchmark: Evaluator komparatif reward dan stabilitas produksi multi-episode.'
    ],
    keyFeatures: [
      'Custom Gymnasium simulation environment untuk agronomi sawit',
      'Dua arsitektur agen RL (PPO Standard & Recurrent PPO LSTM)',
      'Benchmark komparatif terhadap kebijakan operasional konvensional',
      'Visualizer langkah simulasi interaktif (simulator.py)',
      'Model checkpoints terlatih siap evaluasi multi-episode'
    ],
    techStack: ['Python 3.11', 'Gymnasium', 'Stable-Baselines3', 'PyTorch', 'SB3-Contrib', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/firhmgh/palm-oil-reinforcement-learning-simulation',
    imagePath: 'projects/palm-oil-rl/rl-performance-benchmark.png',
    accentColor: 'from-cyan-500 to-blue-700'
  },
  {
    id: 'local-file-organizer-auditor',
    title: 'Local File Organizer & Auditor (Desktop GUI + CLI)',
    category: 'Windows System Utility & High-Safety Tooling',
    badge: 'Desktop App & CLI',
    featured: true,
    shortDescription: 'Utilitas Windows Desktop GUI & CLI untuk audit sistem file, deteksi duplikat identik tingkat bit via Tiered SHA-256, proteksi bundel GIS, dan cleanup ke Recycle Bin.',
    fullDescription: 'Perangkat lunak utilitas Windows berstandar keamanan tinggi dengan filosofi Safe-by-Default. Dilengkapi algoritma multi-tiered chunk hashing (SHA-256) untuk deteksi duplikat 100% akurat, seleksi keeper pintar, dan proteksi berkas proyek.',
    challenge: 'Tool pembersih umum sering kali menghapus file dependensi penting, merusak bundel sidecar GIS (.shp, .dbf), atau menghapus file secara permanen tanpa opsi recovery.',
    solution: 'Membangun aplikasi dual-interface (Tkinter Desktop GUI multi-threaded dan CLI) dengan Tiered Hashing (ukuran -> partial hash -> full SHA-256), proteksi bundel GIS, dan routing khusus ke Windows Recycle Bin.',
    architecture: [
      'Hashing Engine: Pipeline bertingkat menyeleksi file via ukuran byte, header hash, dan SHA-256.',
      'Immunity Engine: Deteksi otomatis sidecar GIS (.shp, .prj, .dbf) dan aset proyek.',
      'Keeper Scoring: Algoritma memilih file asli pada folder terstruktur dibanding folder Downloads.',
      'Threading UI: Background workers Tkinter dengan progress bar real-time dan ekspor laporan Markdown/JSON.'
    ],
    keyFeatures: [
      'Dual Interface: Windows Desktop GUI multi-threaded dan CLI automated runner',
      'Tiered SHA-256 Hashing: Deteksi duplikat bit-level instan tanpa false positive',
      'Proteksi Berkas GIS & Project: Bebas resiko terhapusnya companion files',
      'Seleksi Keeper Pintar mempertahankan lokasi file yang rapi',
      'Laporan audit dry-run lengkap dalam format Markdown dan JSON',
      'Integrasi aman Send2Trash (tidak pernah hard-delete)'
    ],
    techStack: ['Python 3.11', 'Tkinter GUI', 'Multi-Threading', 'Send2Trash', 'SHA-256 Engine', 'Typer CLI', 'Unittest'],
    githubUrl: 'https://github.com/firhmgh/local-file-organizer-auditor',
    imagePath: 'projects/local-file-organizer-auditor/gui.webp',
    accentColor: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'webgis-tbm-palmco-regional-1',
    title: 'WebGIS TBM Regional 1 PalmCo',
    category: 'Enterprise Geospatial Intelligence Frontend',
    badge: 'Enterprise GIS',
    featured: true,
    shortDescription: 'Dashboard visualisasi spasial interaktif blok kebun TBM, sebaran titik pohon, dan layer kontur DTM LiDAR perkebunan kelapa sawit se-Regional 1 PTPN IV.',
    fullDescription: 'Aplikasi web geospasial enterprise yang menyajikan visualisasi spasial interaktif blok kebun kelapa sawit, titik sensus pohon presisi, dan Digital Terrain Model (DTM) LiDAR di wilayah Regional 1 PTPN IV.',
    challenge: 'Memuat dan menampilkan puluhan ribu koordinat sensus pohon dan raster terrain resolusi tinggi secara cepat dan halus pada browser web.',
    solution: 'Merancang arsitektur React dan Leaflet yang diintegrasikan dengan Supabase PostGIS RPC dan distributed tile services untuk rendering peta tanpa lag.',
    architecture: [
      'Frontend: React 18, Vite, dan Leaflet dengan layer switcher dan slider opasitas.',
      'Spatial Backend: Supabase PostgreSQL dengan PostGIS RPC untuk query bounding-box dinamis.',
      'Tile Hosting: Penyimpanan distributed XYZ tile layers untuk peta citra dan DTM.',
      'Styling: Tailwind CSS dengan mode kontras tinggi inspeksi perkebunan.'
    ],
    keyFeatures: [
      'Viewport peta interaktif navigasi estate regional (Asahan, Labuhan Batu, Serdang Bedagai)',
      'Visualisasi titik sensus pohon presisi dengan pewarnaan kondisi kesehatan',
      'Overlay layer LiDAR DTM dan kontur elevasi dengan kontrol opasitas',
      'Layer switcher dinamis dan navigasi pencarian centroid blok',
      'Desain responsif untuk tablet lapangan maupun monitor control center'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Leaflet GIS', 'Supabase PostGIS', 'Tailwind CSS', 'GeoJSON'],
    githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1',
    imagePath: 'projects/webgis-tbm/plantation-overview.webp',
    accentColor: 'from-emerald-600 to-green-800'
  },
  {
    id: 'google-drive-duplicate-cleaner',
    title: 'Google Drive Photo & Video Duplicate Cleaner',
    category: 'Cloud Storage Automation & Security',
    badge: 'Cloud Automation',
    featured: true,
    shortDescription: 'Utilitas Desktop GUI & CLI multi-akun Google Drive untuk mendeteksi dan membersihkan file duplikat media secara aman via OAuth 2.0 dan pencocokan checksum.',
    fullDescription: 'Aplikasi desktop dan CLI otomatisasi penyimpanan cloud untuk memindai, mengidentifikasi, dan membersihkan duplikat media foto/video secara aman di Google Drive menggunakan OAuth 2.0 dan checksum MD5/SHA.',
    challenge: 'Kapasitas cloud storage cepat penuh akibat pencadangan otomatis berulang dari smartphone, sementara antarmuka web Drive tidak memiliki fitur pembersihan duplikat massal.',
    solution: 'Membangun aplikasi Python dengan Google Drive API v3 yang mengindeks file secara rekursif, mengelompokkan berdasarkan checksum, melakukan simulasi dry-run, dan memindahkan duplikat ke Trash.',
    architecture: [
      'Auth Layer: Google OAuth 2.0 token manager dengan auto-refresh dan isolasi akun.',
      'Scanning Engine: Pagination-aware Google Drive API v3 queries dengan caching lokal.',
      'Safety Protocol: Seluruh operasi pembersihan diarahkan ke folder Trash (bukan hard-delete).',
      'Reporting: Ringkasan audit terstruktur dengan perhitungan penghematan kuota.'
    ],
    keyFeatures: [
      'Dukungan Desktop GUI & CLI untuk otentikasi multi-akun Google Drive OAuth 2.0',
      'Pencocokan checksum MD5 dan SHA deterministik untuk verifikasi duplikat 100%',
      'Laporan audit dry-run lengkap dengan estimasi penghematan ruang penyimpanan',
      'Pembersihan aman ke Trash tanpa resiko kehilangan data permanen',
      'Desain ringan dan efisien tanpa dependensi berlebih'
    ],
    techStack: ['Python', 'Tkinter GUI', 'Google Drive API v3', 'Google OAuth 2.0', 'Hash Validation'],
    githubUrl: 'https://github.com/firhmgh/google-drive-duplicate-cleaner',
    imagePath: 'projects/google-drive-duplicate-cleaner/gui.webp',
    accentColor: 'from-amber-500 to-orange-700'
  },
  {
    id: 'digital-library-blog',
    title: 'Digital Library & Modern Blog Platform',
    category: 'Full-Stack Web Application',
    badge: 'Modern Web',
    featured: false,
    shortDescription: 'Platform perpustakaan digital dan pembaca artikel berbasis Next.js App Router, TypeScript, dan Tailwind CSS dengan katalog pencarian dan tampilan pembaca responsif.',
    fullDescription: 'Platform publikasi digital dan manajemen konten artikel yang dirancang dengan Next.js App Router dan TypeScript untuk pengalaman membaca artikel yang bersih dan cepat.',
    challenge: 'Membangun antarmuka pembaca artikel digital yang fokus, cepat dimuat, dengan tipografi yang nyaman diakses di desktop maupun ponsel.',
    solution: 'Mengembangkan web portal dengan Next.js dan Tailwind CSS yang menyajikan tata letak kartu modern, filter kategori, dan optimasi pemuatan aset.',
    architecture: [
      'Framework: Next.js App Router dengan Server Components untuk kecepatan akses awal.',
      'UI & Design: Tailwind CSS dengan tipografi editorial dan dukungan dark/light mode.',
      'State: Client-side search and category filtering hooks.'
    ],
    keyFeatures: [
      'Katalog buku dan artikel digital dengan filter kategori',
      'Antarmuka pembaca artikel bersih dan responsif',
      'Codebase TypeScript dengan type-checking ketat',
      'Performa rendering optimal dengan optimasi Next.js'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Lucide React'],
    githubUrl: 'https://github.com/firhmgh/Digital-Library-Blog',
    imagePath: 'projects/digital-library/article-banner.png',
    accentColor: 'from-purple-500 to-indigo-700'
  }
];
