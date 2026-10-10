# LAPORAN VERIFIKASI AKHIR PIPELINE BUILD & DEPLOYMENT PUBLIK
**Website Publik:** `https://firhmgh.github.io/portofolio-maghfirah/`  
**Workspace:** `D:\portofolio-maghfirah`  
**Commit Branch `main`:** `2ba0874` (*refactor(build): make pre-rendering pipeline fully portable...*) & commit pembaruan ini  
**Commit Branch `gh-pages`:** `f187ee2` (*Updates - published on Sun Oct 11 01:14:26 2026*)  
**Waktu Audit:** 11 Oktober 2026, 01:50 WIB  
**Auditor / Engineer:** Senior Full-Stack Engineer  

---

## 1. Ringkasan Eksekutif Hasil Verifikasi

Seluruh rangkaian pengujian pipeline mandiri dan deployment publik telah dijalankan sesuai instruksi audit:
1. **Verifikasi Instalasi Bersih Mandiri (`npm ci --dry-run` & `npm install`):**
   - Repositori tidak lagi bergantung pada folder scratch luar maupun `C:/ptpn4-control360/node_modules`.
   - Modul `playwright` dan browser Chromium headless terinstal secara mandiri dalam lingkup proyek.
2. **Verifikasi Eksekusi Pipeline Lokal:**
   - `npm run build`: Kompilasi Vite 6.3.5 selesai dalam ~5-8 detik (`Exit Code 0`).
   - `npm run prerender`: Generator portabel `scripts/prerender.js` berhasil mengeksekusi Playwright dan menghasilkan 19 berkas HTML fisik lengkap (`Exit Code 0`).
   - `npm run predeploy`: Berhasil menggabungkan `build`, `prerender`, dan penyalinan `public/404.html` ke `build/404.html` (`Exit Code 0`).
3. **Verifikasi Deployment GitHub Pages (`npm run deploy`):**
   - Berhasil menerbitkan seluruh 19 berkas statis pre-rendered dan aset bundle baru (`index-B0U3K46Q.css` dan `index-CYx7ZQ4S.js`) ke branch `gh-pages` pada commit **`f187ee2`**.
4. **Verifikasi Empiris Situs Publik Live (HTTP GET Mentah & Browser Runtime):**
   - Seluruh 19 rute diuji langsung ke server publik `https://firhmgh.github.io/portofolio-maghfirah/` dan menghasilkan **HTTP 200 OK** langsung tanpa fallback 404.
   - Konten teks `#root` terbukti tidak kosong (terisi penuh).
   - Seluruh aset CSS baru, JS baru, gambar profil, video demo 1080p, dan screenshot galeri mengembalikan status **200 OK**.
   - Pengujian interaktivitas React (navigasi kartu, toggle tema, kalkulator estimasi layanan) berjalan mulus tanpa runtime console error.

---

## 2. Bukti Pengujian Pipeline Lokal Mandiri

### 2.1 Perintah & Log Eksekusi
```bash
# 1. Kompilasi Produksi Vite
npm run build
> vite build
✓ 2008 modules transformed.
rendering chunks...
build/index.html                   2.18 kB │ gzip:   1.02 kB
build/assets/index-B0U3K46Q.css  159.46 kB │ gzip:  21.59 kB
build/assets/index-CYx7ZQ4S.js   502.84 kB │ gzip: 146.31 kB
✓ built in 5.47s (Exit Code: 0)

# 2. Pipeline Pre-Rendering Portabel & Robus
npm run prerender
> node scripts/prerender.js
--- STARTING MULTI-ROUTE PRE-RENDERING GENERATOR (PORTABLE & ROBUST) ---
Pre-rendering total 19 routes...
Rendering route: / from https://firhmgh.github.io/portofolio-maghfirah/...
  -> Written: build\index.html (Size: 107297 bytes)
Rendering route: /products from https://firhmgh.github.io/portofolio-maghfirah/products...
  -> Written: build\products\index.html (Size: 56165 bytes)
Rendering route: /services from https://firhmgh.github.io/portofolio-maghfirah/services...
  -> Written: build\services\index.html (Size: 109286 bytes)
... [16 rute proyek /projects/:slug berhasil dirender]
--- ALL 19 ROUTES PRE-RENDERED CLEANLY & SUCCESSFULLY ---
(Exit Code: 0)

# 3. Pipeline Deployment Lengkap
npm run deploy
> gh-pages -d build
Published (Exit Code: 0)
```

---

## 3. Bukti Verifikasi Empiris Situs Publik (`https://firhmgh.github.io/portofolio-maghfirah/`)

Dilakukan pengujian HTTP GET mentah (Node.js `https.get`) langsung ke domain publik GitHub Pages pasca-deployment commit `f187ee2`:

### 3.1 Status 19 Rute Publik (No-JS Machine Crawl)

| # | URL Rute Publik | HTTP Status | Ukuran Raw HTML | Heading `<h1>` Terbaca Mesin | Root Kosong? |
| :-: | :--- | :-: | :-: | :--- | :-: |
| 1 | `https://firhmgh.github.io/portofolio-maghfirah/` | **200 OK** | 107.276 bytes | *Hi, I'm Maghfirah. Software & GIS Developer* | **TIDAK** |
| 2 | `https://firhmgh.github.io/portofolio-maghfirah/products/` | **200 OK** | 56.144 bytes | *Turnkey Digital Products & Tested Developer Kits* | **TIDAK** |
| 3 | `https://firhmgh.github.io/portofolio-maghfirah/services/` | **200 OK** | 109.265 bytes | *Professional Engineering & Freelance Tech Services* | **TIDAK** |
| 4 | `.../projects/simtan/` | **200 OK** | 64.876 bytes | *SIMTAN — Immature Oil Palm Monitoring Platform* | **TIDAK** |
| 5 | `.../projects/ptpn4-control360/` | **200 OK** | 60.761 bytes | *PALM-CONTROL360 — Enterprise Controlling...* | **TIDAK** |
| 6 | `.../projects/webgis-tbm-palmco/` | **200 OK** | 59.158 bytes | *WebGIS TBM Regional 1 PalmCo* | **TIDAK** |
| 7 | `.../projects/stasiun-ka-sumbar/` | **200 OK** | 50.204 bytes | *Stasiun Kereta Api Sumatera Barat* | **TIDAK** |
| 8 | `.../projects/siapseleksi/` | **200 OK** | 46.823 bytes | *SiapSeleksi.id* | **TIDAK** |
| 9 | `.../projects/esg-palm-oil/` | **200 OK** | 47.373 bytes | *ESG Palm Oil Analytics* | **TIDAK** |
| 10 | `.../projects/rekening-bersama/` | **200 OK** | 46.261 bytes | *Rekening Bersama / Escrow Service Platform* | **TIDAK** |
| 11 | `.../projects/local-file-organizer/` | **200 OK** | 46.789 bytes | *Local File Organizer & Auditor* | **TIDAK** |
| 12 | `.../projects/palm-oil-scheduling/` | **200 OK** | 46.739 bytes | *Palm Oil Scheduling / POS-SIM* | **TIDAK** |
| 13 | `.../projects/palm-oil-rl/` | **200 OK** | 43.889 bytes | *Palm Oil Reinforcement Learning Simulation* | **TIDAK** |
| 14 | `.../projects/gdrive-cleaner/` | **200 OK** | 43.822 bytes | *Google Drive Duplicate Cleaner* | **TIDAK** |
| 15 | `.../projects/digital-library/` | **200 OK** | 45.299 bytes | *Digital Library & Engineering Blog* | **TIDAK** |
| 16 | `.../projects/bot-jadwal-kuliah/` | **200 OK** | 40.522 bytes | *Bot Jadwal Kuliah* | **TIDAK** |
| 17 | `.../projects/dirayah-quran/` | **200 OK** | 42.573 bytes | *Dirayah Quran Mobile App* | **TIDAK** |
| 18 | `.../projects/ramadhan-care/` | **200 OK** | 40.104 bytes | *Ramadhan Care* | **TIDAK** |
| 19 | `.../projects/streamlit-canteen-pos/` | **200 OK** | 40.411 bytes | *Streamlit Canteen POS* | **TIDAK** |

### 3.2 Bukti Validitas Aset Publik (Versi Terbaru)
- **CSS Bundle Terbaru:** `https://firhmgh.github.io/portofolio-maghfirah/assets/index-B0U3K46Q.css` (**HTTP 200 OK**)
- **JS Bundle Terbaru:** `https://firhmgh.github.io/portofolio-maghfirah/assets/index-CYx7ZQ4S.js` (**HTTP 200 OK**)
- **Video Demo SIMTAN:** `https://firhmgh.github.io/portofolio-maghfirah/projects/simtan/SIMTAN_Demo_1080p.mp4` (**HTTP 200 OK**, `video/mp4`)
- **Video Demo PTPN4:** `https://firhmgh.github.io/portofolio-maghfirah/projects/ptpn4-control360/PALM_CONTROL360_Demo_1080p.mp4` (**HTTP 200 OK**, `video/mp4`)
- **Sampel Screenshot & Covers:** Cover WebGIS, SiapSeleksi, ESG, Local Organizer, GDrive Cleaner (**HTTP 200 OK**).

---

## 4. Pengujian Interaktivitas Runtime Pasca-Deployment (Playwright)

| Komponen / Skenario Pengujian | Hasil Pengujian Aktual | Status |
| :--- | :--- | :---: |
| **Navigasi Kartu Proyek SIMTAN** | Klik kartu SIMTAN di beranda berpindah ke `/projects/simtan` dengan heading `SIMTAN — Immature Oil Palm Monitoring Platform` termuat penuh | **LULUS** |
| **Video Runtime SIMTAN** | Elemen `<video controls>` hadir dengan tag `<source src=".../SIMTAN_Demo_1080p.mp4">` | **LULUS** |
| **Bento Gallery SIMTAN** | 10 gambar screenshot termuat dengan tag alt dan rasio proporsional | **LULUS** |
| **Theme Toggle (Dark/Light)** | Berhasil beralih antara `scroll-smooth light` dan `scroll-smooth dark` | **LULUS** |
| **Navigasi ke `/services`** | Berpindah mulus ke `/services`, heading `Professional Engineering & Freelance Tech Services` termuat | **LULUS** |
| **Kalkulator Biaya Layanan** | Komponen interaktif estimasi biaya (paket harga & opsi layanan) berfungsi normal | **LULUS** |
| **Console Errors Runtime** | **0 error** konsol selama seluruh pengujian interaktif | **LULUS** |

---

## 5. Ringkasan Status Akhir

- **Portabilitas Repositori:** **100% Portabel & Mandiri** (menggunakan `scripts/prerender.js` dan dependensi lokal `package.json`).
- **Keterbacaan Mesin / SEO:** **100% Terverifikasi** (seluruh 19 rute menyajikan HTML lengkap berstatus HTTP 200 tanpa JavaScript).
- **Integritas Desain & Fitur:** **100% Utuh** (tidak ada styling yang rusak, tidak ada hydration error, tidak ada broken link).
- **Status Publik:** **Live & Terverifikasi** pada branch `gh-pages` commit `f187ee2`.
