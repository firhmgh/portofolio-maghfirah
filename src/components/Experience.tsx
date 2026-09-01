import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Mobile Programmer – Parliamentary Internship Program (Pattern Pro)',
      company: 'Sekretariat Jenderal DPR RI',
      location: 'Jakarta Pusat, DKI Jakarta',
      period: 'September 2024 – Desember 2024',
      grade: 'Nilai Capaian Pembelajaran: 84.25 (Memuaskan)',
      points: [
        'Merancang dan mengembangkan aplikasi seluler berbasis Flutter (Android SDK) untuk sistem pembelajaran dan absensi Tenaga Ahli/Staf Administrasi DPR RI menggunakan timestamp, mendukung platform Android/iOS.',
        'Merancang basis data dan data persistence untuk aplikasi mobile, mengimplementasikan location-based service (GPS) dan navigasi, dengan version control GitHub/GitLab.',
        'Merancang ritme absensi mingguan yang lebih terstruktur untuk mempermudah pengguna dan mendukung efisiensi proses pencatatan kehadiran.',
        'Menyelesaikan program dengan total nilai capaian pembelajaran 84,25 (Memuaskan).'
      ]
    },
    {
      role: 'Staf Magang, Sistem Informatika dan Teknik Informatika Kantor Regional I',
      company: 'PT Perkebunan Nusantara III (Persero)',
      location: 'Kota Medan, Sumatera Utara',
      period: 'Januari 2025 – Juli 2025',
      grade: 'Nilai Rata-rata: 95.9/100 (A – Sangat Memuaskan)',
      points: [
        'Program Magang Generasi Bertalenta (Magenta) – Kementerian BUMN.',
        'Mengelola dan menganalisis data spasial menggunakan ArcGIS Pro dan QGIS untuk pemetaan sebaran Ganoderma pada kelapa sawit.',
        'Mengembangkan WebGIS berbasis QGIS untuk publikasi data spasial.',
        'Mengoperasikan GPS Geodetik E300 Pro (RTK dan Statik), serta mengolah data menggunakan Leica Spider dan GeoSolution.',
        'Membangun fullstack website Sistem Informasi Tanaman (SIMTAN) menggunakan Laravel, mencakup desain UI, desain basis data, dan implementasi backend, termasuk fitur unggah dan visualisasi data Excel ke dashboard interaktif (chart dan tabel dinamis).',
        'Menyelesaikan program magang dengan nilai rata-rata 95,9/100 (A – Sangat Memuaskan).'
      ]
    }
  ];

  const organizations = [
    {
      org: 'HMJ STI, Institut Teknologi Sawit Indonesia',
      role: 'Divisi Akademik',
      period: 'Juli 2023 – November 2024',
      desc: 'Terlibat dalam perumusan kebijakan akademik jurusan serta perencanaan seminar dan workshop.'
    },
    {
      org: 'UKM SIGMA ITSI Medan',
      role: 'Divisi Penelitian dan Pengembangan',
      period: 'Maret 2023 – Sekarang',
      desc: 'Berkolaborasi dalam perencanaan dan persiapan proyek penelitian serta koordinasi logistik divisi.'
    }
  ];

  const trainings = [
    {
      title: 'Pelatihan Innovillage "How to Validate Your Social Project"',
      issuer: 'Telkom University & Danantara Indonesia',
      period: 'Desember 2025',
      role: 'Peserta'
    },
    {
      title: 'Konsep Pemrograman & Dampak Teknologi Digital bagi UMKM',
      issuer: 'Digital Talent Scholarship, Komdigi',
      period: '2026',
      role: 'Pelatihan Tambahan'
    },
    {
      title: 'Webinar Blunder Pengolahan Data GNSS',
      issuer: 'Geodemy',
      period: '2025',
      role: 'Pelatihan Tambahan'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0d0f14] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Verified Career & Academic Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Riwayat pengalaman kerja profesional, program magang BUMN/Pemerintah, pendidikan formal, kepengurusan organisasi, dan pelatihan bersertifikat.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-12 gap-10 text-left">
          {/* Work Experience (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Pengalaman Kerja & Magang
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {exp.company} • <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                        {exp.grade}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Organisasi */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Pengalaman Organisasi
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {organizations.map((org, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{org.role}</span>
                      <span className="text-[10px] font-mono text-slate-500">{org.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{org.org}</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{org.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Pendidikan Formal
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Institut Teknologi Sawit Indonesia
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                  2022 – 2026
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                S1 Sistem dan Teknologi Informasi
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/60 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                IPK: 3.86 / 4.00
              </div>
            </div>

            {/* Sertifikasi Resmi */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Sertifikasi Resmi
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h5 className="font-bold text-slate-900 dark:text-white text-xs">
                      Sertifikat Kompetensi BNSP — Pemrogram Web Muda (Junior Web Programmer)
                    </h5>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">BNSP</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Lembaga Sertifikasi Profesi LPK TIKOM (2026)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <h5 className="font-bold text-slate-900 dark:text-white text-xs">
                      ArcGIS Pro Profesional
                    </h5>
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">ESRI</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Esri Indonesia • 24 jam pelatihan (Januari 2025)
                  </p>
                </div>
              </div>
            </div>

            {/* Pelatihan Tambahan */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Pelatihan & Workshop
              </h4>
              <div className="space-y-2">
                {trainings.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{t.title}</span>
                      <span className="text-[10px] font-mono text-slate-500">{t.period}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
