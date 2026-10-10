# LAPORAN PERBAIKAN PORTABILITAS PIPELINE PRE-RENDERING
**Repositori:** `D:\portofolio-maghfirah`  
**Branch:** `main`  
**Waktu Pengujian & Verifikasi:** 11 Oktober 2026, 00:05 WIB  
**Auditor / Engineer:** Senior Full-Stack Engineer  

---

## 1. Ringkasan Eksekutif & Tujuan Perbaikan

Berdasarkan temuan pada `PORTFOLIO_POST_DEPLOY_VERIFICATION.md`, pipeline pre-rendering sebelumnya memiliki kelemahan portabilitas kritis:
1. Skrip `prerender_all.js` berada di luar repositori git pada direktori scratch `C:/Users/LENOVO/.gemini/antigravity-ide/scratch/prerender_all.js`.
2. Skrip tersebut mengimpor modul Playwright secara hardcoded dari direktori proyek lain: `require('C:/ptpn4-control360/node_modules/playwright')`.
3. Akibatnya, perintah build/predeploy tidak dapat dijalankan secara konsisten jika di-clone di mesin lain atau dijalankan di GitHub Actions CI/CD.

**Tindakan Perbaikan:**
- Skrip generator pre-render dipindahkan ke dalam repositori pada path `D:\portofolio-maghfirah\scripts\prerender.js`.
- Semua path absolut diganti menjadi path relatif berbasis direktori proyek (`__dirname` / `path.resolve(__dirname, '..')`).
- Dependensi `playwright` dideklarasikan secara resmi ke dalam `devDependencies` di `package.json` dan tercatat di `package-lock.json` lokal proyek ini.
- Skrip `predeploy` dan `prerender` di `package.json` diperbarui secara relatif: `node scripts/prerender.js`.
- Dilakukan verifikasi `npm run build` dan `npm run prerender` secara bersih dari dalam repositori.

---

## 2. Rincian Perubahan Kode & Dependensi

### 2.1 Deklarasi Dependensi di `package.json`
`playwright` kini telah ditambahkan ke dalam `devDependencies` proyek:
```json
"devDependencies": {
  "@tailwindcss/postcss": "^4.3.3",
  "@types/node": "^20.10.0",
  "@types/react": "^19.2.14",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react-swc": "^3.10.2",
  "autoprefixer": "^10.5.4",
  "gh-pages": "^6.3.0",
  "playwright": "^1.64.0",
  "postcss": "^8.5.26",
  "tailwindcss": "^4.3.3",
  "typescript": "^5.9.3",
  "vite": "6.3.5"
}
```

### 2.2 Pembaruan Skrip NPM di `package.json`
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build && node scripts/prerender.js && node -e \"require('fs').copyFileSync('public/404.html','build/404.html'); console.log('SPA 404.html copied to build');\"",
  "deploy": "gh-pages -d build",
  "prerender": "node scripts/prerender.js"
}
```

### 2.3 Implementasi Portabel `scripts/prerender.js`
- Mengimpor Playwright standar dari `node_modules` lokal: `const { chromium } = require('playwright');`.
- Menentukan path dinamis berbasis direktori root proyek:
  ```js
  const projectRoot = path.resolve(__dirname, '..');
  const buildDir = path.join(projectRoot, 'build');
  const dataPath = path.join(projectRoot, 'src', 'data', 'projectsData.ts');
  ```
- Mengekstrak 16 slug proyek secara dinamis dari `src/data/projectsData.ts` sehingga penambahan proyek baru di masa depan akan otomatis di-prerender tanpa mengubah skrip.
- Menghasilkan berkas fisik `build/index.html`, `build/products/index.html`, `build/services/index.html`, dan 16 berkas `build/projects/<slug>/index.html`.

---

## 3. Bukti Pengujian Eksekusi Bersih (Build & Pre-Render)

### 3.1 Hasil Eksekusi `npm run build`
- Kompilasi modul Vite 6.3.5:
  - `build/index.html`: 2.18 kB (template dasar)
  - `build/assets/index-B0U3K46Q.css`: 159.46 kB
  - `build/assets/index-CYx7ZQ4S.js`: 502.84 kB
- Status: **Berhasil (Exit Code 0)**.

### 3.2 Hasil Eksekusi `npm run prerender`
- Eksekusi Playwright headless Chromium internal proyek:
  ```text
  --- STARTING MULTI-ROUTE PRE-RENDERING GENERATOR (PORTABLE) ---
  Pre-rendering total 19 routes...
  Rendering route: / from https://firhmgh.github.io/portofolio-maghfirah/...
    -> Written: build\index.html (Size: 107307 bytes)
  Rendering route: /products from https://firhmgh.github.io/portofolio-maghfirah/products...
    -> Written: build\products\index.html (Size: 56162 bytes)
  Rendering route: /services from https://firhmgh.github.io/portofolio-maghfirah/services...
    -> Written: build\services\index.html (Size: 109283 bytes)
  Rendering route: /projects/simtan from https://firhmgh.github.io/portofolio-maghfirah/projects/simtan...
    -> Written: build\projects\simtan\index.html (Size: 64894 bytes)
  Rendering route: /projects/ptpn4-control360 from https://firhmgh.github.io/portofolio-maghfirah/projects/ptpn4-control360...
    -> Written: build\projects\ptpn4-control360\index.html (Size: 60779 bytes)
  ... [14 rute proyek lainnya]
  --- ALL 19 ROUTES PRE-RENDERED SUCCESSFULLY ---
  ```
- Status: **Berhasil (Exit Code 0)**.

---

## 4. Verifikasi Integritas 19 Berkas HTML Lokal yang Dihasilkan

Seluruh 19 berkas HTML statis di dalam direktori `build/` diperiksa untuk memastikan konten penting tidak tertimpa atau hilang:

| Nama Rute | Jalur Berkas Fisik | Ukuran Berkas | Heading `<h1>` Terbaca Mesin | Root Kosong? |
| :--- | :--- | :---: | :--- | :---: |
| **Home** | `build/index.html` | 107.307 bytes | *Hi, I'm Maghfirah. Software & GIS Developer* | **TIDAK** |
| **Products** | `build/products/index.html` | 56.162 bytes | *Turnkey Digital Products & Tested Developer Kits* | **TIDAK** |
| **Services** | `build/services/index.html` | 109.283 bytes | *Professional Engineering & Freelance Tech Services* | **TIDAK** |
| **simtan** | `build/projects/simtan/index.html` | 64.894 bytes | *SIMTAN — Immature Oil Palm Monitoring Platform* | **TIDAK** |
| **ptpn4-control360** | `build/projects/ptpn4-control360/index.html` | 60.779 bytes | *PALM-CONTROL360 — Enterprise Controlling...* | **TIDAK** |
| **webgis-tbm-palmco** | `build/projects/webgis-tbm-palmco/index.html` | 59.176 bytes | *WebGIS TBM Regional 1 PalmCo* | **TIDAK** |
| **stasiun-ka-sumbar** | `build/projects/stasiun-ka-sumbar/index.html` | 50.222 bytes | *Stasiun Kereta Api Sumatera Barat* | **TIDAK** |
| **siapseleksi** | `build/projects/siapseleksi/index.html` | 46.841 bytes | *SiapSeleksi.id* | **TIDAK** |
| **esg-palm-oil** | `build/projects/esg-palm-oil/index.html` | 47.391 bytes | *ESG Palm Oil Analytics* | **TIDAK** |
| **rekening-bersama** | `build/projects/rekening-bersama/index.html` | 46.279 bytes | *Rekening Bersama / Escrow Service Platform* | **TIDAK** |
| **local-file-organizer**| `build/projects/local-file-organizer/index.html` | 46.807 bytes | *Local File Organizer & Auditor* | **TIDAK** |
| **palm-oil-scheduling**| `build/projects/palm-oil-scheduling/index.html` | 46.757 bytes | *Palm Oil Scheduling / POS-SIM* | **TIDAK** |
| **palm-oil-rl** | `build/projects/palm-oil-rl/index.html` | 43.907 bytes | *Palm Oil Reinforcement Learning Simulation* | **TIDAK** |
| **gdrive-cleaner** | `build/projects/gdrive-cleaner/index.html` | 43.840 bytes | *Google Drive Duplicate Cleaner* | **TIDAK** |
| **digital-library** | `build/projects/digital-library/index.html` | 45.317 bytes | *Digital Library & Engineering Blog* | **TIDAK** |
| **bot-jadwal-kuliah** | `build/projects/bot-jadwal-kuliah/index.html` | 40.540 bytes | *Bot Jadwal Kuliah* | **TIDAK** |
| **dirayah-quran** | `build/projects/dirayah-quran/index.html` | 42.591 bytes | *Dirayah Quran Mobile App* | **TIDAK** |
| **ramadhan-care** | `build/projects/ramadhan-care/index.html` | 40.122 bytes | *Ramadhan Care* | **TIDAK** |
| **streamlit-canteen-pos**| `build/projects/streamlit-canteen-pos/index.html` | 40.429 bytes | *Streamlit Canteen POS* | **TIDAK** |

---

## 5. Status Verifikasi Live Deployment vs Build Lokal

Sesuai instruksi audit yang ketat:
- **Build & Pre-Render Lokal:** Terverifikasi **100% Berhasil & Portabel**.
- **Perubahan Berkas Repositori:**
  - Menambahkan `scripts/prerender.js`.
  - Memperbarui `package.json` dan `package-lock.json` dengan `playwright`.
  - Berkas build lokal siap dideploy ulang menggunakan `npm run deploy`.
- **Catatan Deployment Publik:** Hasil build portabel terbaru saat ini berada di workspace lokal dan siap diterbitkan ke branch `gh-pages` kapan pun pengguna memberikan instruksi `npm run deploy` selanjutnya.
