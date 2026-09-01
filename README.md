# Maghfirah — Personal Portfolio (2026 Edition)

Portofolio developer profesional berstandar modern berbasis **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, dan **Framer Motion**, menampilkan profil terverifikasi, riwayat magang BUMN/Pemerintah, serta karya sistem nyata (Web, Mobile, Spatial WebGIS, AI/ML, dan Windows Tooling).

---

## 👤 Profil Singkat

- **Nama:** Maghfirah
- **Pendidikan:** S1 Sistem dan Teknologi Informasi, Institut Teknologi Sawit Indonesia (IPK 3.86 / 4.00)
- **Sertifikasi:** Pemrogram Web Muda (BNSP) & ArcGIS Pro Profesional (Esri)
- **Pengalaman Utama:**
  - *Mobile Programmer* — Parliamentary Internship Program, Sekretariat Jenderal DPR RI (Nilai: 84.25)
  - *Staf Magang Sistem Informasi & GIS* — PT Perkebunan Nusantara IV Regional 1, Program Magenta BUMN (Nilai: 95.9 / 100 - A)
- **Email:** [firahmagh485@gmail.com](mailto:firahmagh485@gmail.com)
- **LinkedIn:** [linkedin.com/in/firhmgh](https://linkedin.com/in/firhmgh)
- **GitHub:** [github.com/firhmgh](https://github.com/firhmgh)
- **Live Portfolio:** [firhmgh.github.io/portofolio-maghfirah](https://firhmgh.github.io/portofolio-maghfirah/)

---

## 🌟 Featured Engineering Projects

1. **[SIMTAN — Immature Oil Palm (TBM) Monitoring Platform](https://github.com/firhmgh/simtan-monitoring-palm-oil)** *(Tugas Akhir / Skripsi S1)*
   - *Platform Enterprise Agro-GIS dengan validasi agronomi otomatis, Static Raster XYZ Tiles, dan integrasi LLM (Laravel, Leaflet, MySQL, LLM API). Telah dipublikasikan pada jurnal ilmiah terindeks: [Journal of Deep Learning, Computer Vision and Digital Image Processing](https://journal.diginus.id/DECODING/article/view/1449).*
2. **[ESG Palm Oil — AI-Powered Sustainability Analytics Dashboard](https://github.com/firhmgh/esg-palm-oil)**
   - *Dashboard analitik keberlanjutan sawit dengan Dual AI Engine (Google Gemini & Groq Llama 3) serta pemodelan penalti Ganoderma.*
3. **[Palm Oil Reinforcement Learning Simulation](https://github.com/firhmgh/palm-oil-reinforcement-learning-simulation)**
   - *Environment simulasi riset Gymnasium untuk optimasi panen dan pemupukan berbasis PPO & Recurrent PPO (LSTM).*
4. **[Local File Organizer & Auditor (Desktop GUI + CLI)](https://github.com/firhmgh/local-file-organizer-auditor)**
   - *Utilitas sistem Windows dengan Tiered SHA-256 Hashing, proteksi bundel GIS (.shp/.prj), dan pembersihan aman ke Recycle Bin.*
5. **[WebGIS TBM Regional 1 PalmCo](https://github.com/firhmgh/webgis-tbm-palmco-regional-1)**
   - *Dashboard visualisasi spasial interaktif sebaran titik pohon dan layer DTM LiDAR (React, Vite, Leaflet, Supabase PostGIS).*
6. **[Google Drive Photo & Video Duplicate Cleaner](https://github.com/firhmgh/google-drive-duplicate-cleaner)**
   - *Utilitas automasi cloud multi-akun berbasis Google Drive API v3, OAuth 2.0, dan verifikasi checksum.*
7. **[Digital Library & Modern Blog Platform](https://github.com/firhmgh/Digital-Library-Blog)**
   - *Platform katalog dan pembaca artikel berbasis Next.js App Router, TypeScript, dan Tailwind CSS.*

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 18.3, TypeScript, Vite 6.0, HTML5 Semantic
- **Styling & UI:** Tailwind CSS 4, PostCSS, Lucide React, Glassmorphism Modern
- **Theming:** Dynamic Dark/Light Mode dengan LocalStorage persistence
- **Performance & SEO:** Lazy loading, responsive images, valid OpenGraph, dan core web vitals optimal

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# 1. Clone repositori
git clone https://github.com/firhmgh/portofolio-maghfirah.git
cd portofolio-maghfirah

# 2. Pasang dependensi
npm install

# 3. Jalankan server development
npm run dev

# 4. Build untuk production
npm run build
```

---

## 📁 Struktur Portofolio

```text
portofolio-maghfirah/
├── public/
│   ├── favicon.svg & favicon.png (Monogram FM resmi)
│   ├── images/profile.jpg (Foto profesional resmi)
│   ├── Maghfirah_CV.pdf (Berkas resmi resume PDF)
│   └── projects/ (Aset visual terstruktur proyek)
├── src/
│   ├── context/ThemeContext.tsx (Dark/Light theme provider)
│   ├── data/projectsData.ts (Data terpusat proyek nyata & publikasi)
│   ├── components/
│   │   ├── Navigation.tsx (Floating navbar + theme switcher + resume button)
│   │   ├── Hero.tsx (Editorial portrait frame + CTAs)
│   │   ├── SelectedWork.tsx (Showcase karya nyata + Journal link + Case study drawer)
│   │   ├── Skills.tsx (Matriks keahlian terverifikasi)
│   │   ├── Experience.tsx (Pengalaman kerja DPR RI & PTPN IV Regional 1)
│   │   ├── About.tsx (Profil dan visi rekayasa sistem)
│   │   ├── Contact.tsx (Direct email, LinkedIn, GitHub)
│   │   └── Footer.tsx (Copyright & build info)
│   └── App.tsx (Main application container)
└── index.html (SEO, Open Graph & metadata)
```

---

## 📄 Lisensi & Hak Cipta

© 2026 Maghfirah. Open-source under the MIT License.
