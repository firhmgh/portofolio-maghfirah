export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  previewType: 'image' | 'code' | 'interactive-map' | 'ai-dashboard' | 'cli-terminal';
  imagePath?: string;
  accentColor: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'simtan-monitoring-palm-oil',
    title: 'SIMTAN — Integrated Immature Oil Palm (TBM) Monitoring Platform',
    category: 'Enterprise Agro-GIS & Expert Validation',
    badge: 'Enterprise Core / Research',
    featured: true,
    shortDescription: 'Enterprise geospatial monitoring platform for immature oil palm (TBM) with automated agronomic validation, spatial block maps, and role impersonation.',
    fullDescription: 'SIMTAN is an enterprise-grade agricultural management and geospatial monitoring platform designed to oversee immature oil palm (Tanaman Belum Menghasilkan / TBM) plantation operations across regional estates. It integrates Leaflet GIS with an automated agronomic audit validation engine that detects spatial and operational discrepancies.',
    challenge: 'Manual estate auditing across thousands of hectares caused delayed reporting, high human-error rates in condition validation, and fragmented spatial record keeping.',
    solution: 'Engineered a unified Laravel 10 and Leaflet GIS platform that automatically validates field data against expert agronomic rules, visualizes block condition polygons, and provides role-based impersonation for field inspectors and executives.',
    architecture: [
      'Backend: Laravel 10 RESTful architecture with custom validation pipelines and role-based access control (RBAC).',
      'Geospatial: Leaflet GIS client with custom tile overlays, GeoJSON block polygons, and centroid calculators.',
      'Validation Engine: Algorithmic expert system assessing plant health indicators, spacing integrity, and weeding compliance.',
      'Database: Relational schema optimized with composite indexes for rapid spatial and time-series reporting.'
    ],
    keyFeatures: [
      'Interactive geospatial block map with dynamic condition styling',
      'Automated agronomic audit validation scoring engine',
      'Administrative account impersonation for supervisory auditing',
      'Comprehensive estate block reporting with export capabilities',
      'Clean modular architecture with refactored lightweight frontend assets'
    ],
    techStack: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Leaflet GIS', 'JavaScript', 'Bootstrap 5', 'PostGIS Concepts'],
    githubUrl: 'https://github.com/firhmgh/simtan-monitoring-palm-oil',
    previewType: 'image',
    imagePath: '/projects/simtan/validation-accuracy.png',
    accentColor: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'esg-palm-oil',
    title: 'ESG Palm Oil — AI-Powered Sustainability Analytics Dashboard',
    category: 'AI Decision Support & Sustainability Analytics',
    badge: 'Dual AI Engine / Sustainability',
    featured: true,
    shortDescription: 'Comprehensive ESG analytics dashboard evaluating palm oil sustainability with dual AI scoring engines (Google Gemini & Groq Llama 3) and Ganoderma disease penalty modeling.',
    fullDescription: 'An enterprise-scale Environmental, Social, and Governance (ESG) analytics dashboard tailored for the sustainable palm oil industry. The platform leverages dual Large Language Model (LLM) providers to generate real-time sustainability scores, prescriptive remediation insights, and biological disease impact modeling.',
    challenge: 'ESG scoring in agro-industry often relies on slow manual audits without standardized risk modeling for biological threats like Ganoderma fungus attacks.',
    solution: 'Built an intelligent Laravel 11 dashboard integrating both Google Gemini 1.5 and Groq Llama 3 APIs with strict Ganoderma penalty formulas that bound ESG scores when disease prevalence exceeds critical thresholds.',
    architecture: [
      'AI Layer: Dual-service GroqService and GeminiService with dynamic fallback and response JSON schema normalization.',
      'Business Logic: Strict weighting calculator bounding ESG scores (max 50) when Ganoderma incidence exceeds 20%.',
      'Analytics UI: Responsive Chart.js radar and bar visualizations for E, S, and G metric breakdowns.',
      'Security: Complete environment variable isolation for AI API keys and enterprise data protection.'
    ],
    keyFeatures: [
      'Dual AI provider integration (Google Gemini & Groq Llama 3) for automated sustainability auditing',
      'Strict Ganoderma biological disease impact penalty weighting logic',
      'Interactive radar & trend analytics for Environmental, Social, and Governance compliance',
      'Automated mitigation strategy generator based on live estate telemetry',
      'Role-based dashboard views for sustainability officers and auditors'
    ],
    techStack: ['Laravel 11', 'PHP 8.2', 'Google Gemini AI', 'Groq Llama 3', 'Tailwind CSS', 'Chart.js', 'MySQL'],
    githubUrl: 'https://github.com/firhmgh/esg-palm-oil',
    previewType: 'ai-dashboard',
    accentColor: 'from-green-500 to-emerald-700'
  },
  {
    id: 'palm-oil-reinforcement-learning-simulation',
    title: 'Palm Oil Reinforcement Learning Simulation',
    category: 'Applied AI / Reinforcement Learning Research',
    badge: 'Machine Learning / Gymnasium',
    featured: true,
    shortDescription: 'Computational simulation environment for optimizing oil palm harvest and fertilization policies using Gymnasium, PPO, and Recurrent PPO with LSTM memory.',
    fullDescription: 'A computational research platform and simulation environment modeling oil palm plantation agronomic dynamics. The system frames plantation management as a Markov Decision Process (MDP), training deep reinforcement learning agents to maximize long-term harvest yield and economic profit.',
    challenge: 'Determining optimal cyclical harvesting rounds and nutrient dosage across multi-year variable weather patterns is complex and costly to test in vivo.',
    solution: 'Constructed a custom Gymnasium environment (`env_sawit.py`) modeling vegetative growth, weather fluctuations, and FFB ripeness, training PPO and Recurrent PPO (LSTM) agents that outperform conventional heuristic baselines.',
    architecture: [
      'Environment: Custom Gymnasium class with continuous state spaces (soil moisture, vegetative status, days since harvest).',
      'Action Space: Discrete/continuous action vectors governing fertilizer dosage and harvest round triggers.',
      'Algorithms: Stable-Baselines3 PPO & SB3-Contrib Recurrent PPO with temporal memory cells.',
      'Evaluation: Comparative benchmark scripts evaluating cumulative reward and yield stability across multi-episode rollouts.'
    ],
    keyFeatures: [
      'Custom Gymnasium simulation environment tailored to palm agronomy dynamics',
      'Dual RL agent architectures (PPO standard & Recurrent PPO with LSTM memory)',
      'Baseline heuristic policy benchmark suite for empirical comparison',
      'Interactive step-by-step decision visualizer (`simulator.py`)',
      'Pre-trained model checkpoints ready for multi-episode evaluation'
    ],
    techStack: ['Python 3.11', 'Gymnasium', 'Stable-Baselines3', 'PyTorch', 'SB3-Contrib', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/firhmgh/palm-oil-reinforcement-learning-simulation',
    previewType: 'code',
    accentColor: 'from-cyan-500 to-blue-700'
  },
  {
    id: 'local-file-organizer-auditor',
    title: 'Local File Organizer & Auditor (Desktop GUI + CLI)',
    category: 'Windows System Utility & High-Safety Tooling',
    badge: 'Desktop App & CLI / V3',
    featured: true,
    shortDescription: 'Safe, non-destructive Windows Desktop GUI & CLI utility to audit file systems, detect bit-level duplicates via tiered SHA-256, protect GIS/project bundles, and clean to Recycle Bin.',
    fullDescription: 'A professional Windows system utility built with a strict Safe-by-Default philosophy. It features multi-tiered chunk hashing (SHA-256) for rapid and 100% accurate duplicate detection, intelligent keeper selection, GIS sidecar bundle protection, and conservative cleanup routed exclusively to Windows Recycle Bin.',
    challenge: 'Existing cleanup tools frequently delete critical dependency files, GIS sidecar companions (.shp, .dbf), or permanently destroy files without audit trails.',
    solution: 'Engineered a dual-interface application (multi-threaded Tkinter Desktop GUI and automated CLI runner) with tiered hashing (size -> 4KB partial hash -> full SHA-256), a 100% immune system for protected file types, and send2trash safety.',
    architecture: [
      'Hashing Engine: Tiered pipeline eliminating dissimilar files early via byte size, partial header hash, and full SHA-256.',
      'Immunity & Context Engine: Heuristic detection of GIS bundles (.shp, .prj, .dbf), project assets, and system files.',
      'Keeper Selection: Context-aware scoring prioritizing organized folders over messy Download directories and duplicate suffixes.',
      'Threading & UI: Multi-threaded background workers in Tkinter with real-time progress queuing and Markdown/JSON export.'
    ],
    keyFeatures: [
      'Dual Interface: Modern multi-threaded Windows Desktop GUI and automated CLI script runner',
      'Tiered SHA-256 Hashing: Instant byte-level duplicate detection across tens of thousands of files',
      'Context-Aware GIS & Project Bundle Immunity: Zero accidental deletion of companion files',
      'Intelligent Keeper Selection favoring structured directory paths',
      'Comprehensive non-destructive dry-run audit reporting in Markdown and JSON',
      'Strict send2trash integration (NEVER permanent delete)'
    ],
    techStack: ['Python 3.11', 'Tkinter (Desktop GUI)', 'Multi-Threading', 'Send2Trash', 'SHA-256 Engine', 'Typer CLI', 'Unittest'],
    githubUrl: 'https://github.com/firhmgh/local-file-organizer-auditor',
    previewType: 'cli-terminal',
    accentColor: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'webgis-tbm-palmco-regional-1',
    title: 'WebGIS TBM Regional 1 PalmCo',
    category: 'Enterprise Geospatial Intelligence Frontend',
    badge: 'Enterprise GIS / PostGIS',
    featured: true,
    shortDescription: 'Interactive spatial visualization dashboard for immature oil palm (TBM) across Regional 1 PTPN IV featuring individual tree points and LiDAR DTM layers.',
    fullDescription: 'An enterprise geospatial web application providing interactive spatial visualization of oil palm estate blocks, individual tree census points, and Digital Terrain Model (DTM) LiDAR layers across Regional 1 (PTPN IV PalmCo).',
    challenge: 'Visualizing massive spatial datasets containing hundreds of thousands of individual tree coordinates and raster terrain layers smoothly in web browsers.',
    solution: 'Designed a modern React and Leaflet architecture coupled with Supabase PostGIS RPC functions and distributed tile layer services to render high-resolution plantation data with zero lag.',
    architecture: [
      'Frontend: React 18, Vite, and Leaflet with custom layer switching controls and raster opacity sliders.',
      'Spatial Backend: Supabase PostgreSQL with PostGIS RPC functions for dynamic bounding-box coordinate queries.',
      'Tile Lake: Distributed raster XYZ tile hosting sharded across regional GitHub storage repositories.',
      'Styling: Tailwind CSS design system with high-contrast plantation inspection mode.'
    ],
    keyFeatures: [
      'Interactive map viewport with multi-region estate navigation (Asahan, Labuhan Batu, Serdang Bedagai)',
      'High-precision tree census point rendering with condition color-coding',
      'LiDAR DTM and terrain contour layer overlays with opacity controls',
      'Dynamic layer switcher and block centroid search navigation',
      'Responsive design supporting field tablets and desktop control centers'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Leaflet GIS', 'Supabase PostGIS', 'Tailwind CSS', 'GeoJSON'],
    githubUrl: 'https://github.com/firhmgh/webgis-tbm-palmco-regional-1',
    previewType: 'image',
    imagePath: '/projects/webgis-tbm/plantation-overview.webp',
    accentColor: 'from-emerald-600 to-green-800'
  },
  {
    id: 'google-drive-duplicate-cleaner',
    title: 'Google Drive Photo & Video Duplicate Cleaner',
    category: 'Cloud Storage Automation & Security',
    badge: 'Cloud Automation / CLI',
    featured: true,
    shortDescription: 'Multi-account CLI utility for Google Drive to detect and safely clean 100% bit-level duplicate media files using OAuth 2.0 and checksum verification.',
    fullDescription: 'A secure cloud automation command-line utility designed to scan, identify, and safely clean redundant photo and video duplicates across multiple Google Drive accounts using OAuth 2.0 Client credentials and MD5/SHA checksum matching.',
    challenge: 'Cloud storage quotas fill quickly with identical smartphone backups, and standard Google Drive web interfaces lack bulk duplicate detection mechanisms.',
    solution: 'Developed an automated Python tool using Google Drive API v3 that performs recursive file indexing, checksum-based grouping, dry-run reporting, and non-destructive trash routing.',
    architecture: [
      'Auth Layer: Google OAuth 2.0 token manager with auto-refresh and multi-account credential isolation.',
      'Scanning Engine: Pagination-aware Google Drive API v3 queries with local caching for rapid re-audits.',
      'Safety Protocol: All deletion operations invoke API trash routing rather than permanent object deletion.',
      'Reporting: Structured Markdown summary tables with byte savings breakdown.'
    ],
    keyFeatures: [
      'Multi-account Google Drive OAuth 2.0 authentication support',
      'Deterministic MD5 and SHA checksum matching for 100% duplicate verification',
      'Detailed dry-run audit reporting with space reclamation calculations',
      'Safe trash routing with zero permanent data loss risk',
      'Lightweight and dependency-minimal Python CLI design'
    ],
    techStack: ['Python', 'Google Drive API v3', 'Google OAuth 2.0', 'CLI Architecture', 'Hash Validation'],
    githubUrl: 'https://github.com/firhmgh/google-drive-duplicate-cleaner',
    previewType: 'cli-terminal',
    accentColor: 'from-amber-500 to-orange-700'
  },
  {
    id: 'digital-library-blog',
    title: 'Digital Library & Modern Blog Platform',
    category: 'Full-Stack Web Application',
    badge: 'Modern Web / Next.js',
    featured: false,
    shortDescription: 'High-performance digital library and article platform built with Next.js App Router, TypeScript, and Tailwind CSS featuring catalog browsing and responsive reader views.',
    fullDescription: 'A full-stack digital content management and reading platform architected with modern React patterns, Next.js App Router, and TypeScript for seamless digital publication.',
    challenge: 'Building a clean, fast-loading digital reading experience with structured article categorization and responsive typography.',
    solution: 'Constructed an editorial reader platform with Next.js and Tailwind CSS featuring clean card layouts, search filtering, and optimized asset loading.',
    architecture: [
      'Framework: Next.js App Router with Server Components for fast initial page load.',
      'UI & Design: Tailwind CSS with custom editorial typography and dark/light support.',
      'State & Logic: React hooks for client-side search and catalog filtering.'
    ],
    keyFeatures: [
      'Modern book and article catalog with category filters',
      'Distraction-free responsive article reader interface',
      'Clean TypeScript codebase with strict typing',
      'High-performance rendering with Next.js optimization'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Lucide React'],
    githubUrl: 'https://github.com/firhmgh/Digital-Library-Blog',
    previewType: 'image',
    imagePath: '/projects/digital-library/article-banner.png',
    accentColor: 'from-purple-500 to-indigo-700'
  }
];
