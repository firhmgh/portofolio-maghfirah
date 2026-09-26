import React, { useState } from 'react';
import { useRouter } from '../router';
import { 
  FREELANCE_SERVICES, 
  WORKFLOW_STEPS, 
  SERVICE_FAQS 
} from '../data/freelanceServicesData';
import { 
  Globe, 
  BarChart3, 
  MapPin, 
  Smartphone, 
  Database, 
  Network, 
  Wrench, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Send, 
  Check, 
  ArrowRight, 
  Calculator, 
  Laptop, 
  CreditCard, 
  RefreshCw, 
  HelpCircle,
  Copy,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FreelanceServices: React.FC = () => {
  const { navigate } = useRouter();

  // Estimator States
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-dev');
  const [projectScale, setProjectScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [timelineUrgency, setTimelineUrgency] = useState<'normal' | 'express'>('normal');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['deploy', 'docs']);
  const [briefCopied, setBriefCopied] = useState<boolean>(false);

  // Form & FAQ States
  const [projectNotes, setProjectNotes] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Helper icon mapper
  const renderServiceIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Globe': return <Globe className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Network': return <Network className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Globe className={className} />;
    }
  };

  // Estimator Calculations
  const baseServicePrices: Record<string, number> = {
    'web-dev': 3500000,
    'dashboard': 2800000,
    'webgis': 3800000,
    'mobile-app': 4500000,
    'database': 1800000,
    'api-integration': 2200000,
    'bug-fixing': 750000,
    'data-automation': 1200000
  };

  const scaleMultipliers: Record<string, { factor: number; label: string; timeline: string }> = {
    mvp: { factor: 0.8, label: 'MVP / Modul Inti Sederhana', timeline: '1 - 2 Pekan' },
    standard: { factor: 1.0, label: 'Standard Business (Lengkap & Terintegrasi)', timeline: '3 - 4 Pekan' },
    enterprise: { factor: 1.8, label: 'Enterprise / Kompleks (Multi-user & Skala Besar)', timeline: '5 - 8 Pekan' }
  };

  const addonPrices: Record<string, { price: number; name: string }> = {
    deploy: { price: 450000, name: 'Setup Cloud Hosting, Domain & SSL' },
    docs: { price: 300000, name: 'Dokumentasi Arsitektur & Panduan Operasional' },
    backup: { price: 350000, name: 'Sistem Auto-Backup Cloud Database Harian' },
    extendedWarranty: { price: 600000, name: 'Perpanjangan Garansi Bug 60 Hari' }
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const basePrice = baseServicePrices[selectedServiceId] || 3000000;
  const scaleInfo = scaleMultipliers[projectScale];
  const addonsTotal = selectedAddons.reduce((sum, addId) => sum + (addonPrices[addId]?.price || 0), 0);
  const urgencyMultiplier = timelineUrgency === 'express' ? 1.25 : 1.0;

  const estimatedMin = Math.round((basePrice * scaleInfo.factor * urgencyMultiplier + addonsTotal) * 0.95);
  const estimatedMax = Math.round((basePrice * scaleInfo.factor * urgencyMultiplier + addonsTotal) * 1.15);

  const formatIdr = (val: number) => `Rp ${val.toLocaleString('id-ID')}`;
  const formatUsd = (val: number) => `$${Math.round(val / 15800)}`;

  const currentService = FREELANCE_SERVICES.find((s) => s.id === selectedServiceId);

  const generatedBrief = `Halo Maghfirah, saya ingin request quotation proyek freelance:\n\n*Jenis Layanan:* ${currentService?.title}\n*Skala Proyek:* ${scaleInfo.label}\n*Target Timeline:* ${timelineUrgency === 'express' ? 'Express (Prioritas)' : 'Normal'} (~${scaleInfo.timeline})\n*Add-ons:* ${selectedAddons.map((a) => addonPrices[a]?.name).join(', ') || 'None'}\n*Estimasi Kalkulator:* ${formatIdr(estimatedMin)} - ${formatIdr(estimatedMax)}\n\n*Catatan Kebutuhan:*\n${projectNotes || '(Akan dijelaskan lebih lanjut saat diskusi scope)'}\n\nApakah jadwal Anda tersedia untuk konsultasi scope ini? Terima kasih!`;

  const copyBriefToClipboard = () => {
    navigator.clipboard.writeText(generatedBrief);
    setBriefCopied(true);
    setTimeout(() => setBriefCopied(false), 2500);
  };

  const sendWhatsAppBrief = () => {
    const url = `https://wa.me/6282285189397?text=${encodeURIComponent(generatedBrief)}`;
    window.open(url, '_blank');
  };

  const sendEmailBrief = () => {
    const subject = encodeURIComponent(`Request Freelance Project: ${currentService?.title}`);
    const body = encodeURIComponent(generatedBrief);
    window.location.href = `mailto:firahmagh485@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <button onClick={() => navigate('/')} className="hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors">
            Portfolio
          </button>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-slate-900 dark:text-white">Freelance Services</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-600 dark:text-slate-300 hidden sm:inline">Looking for ready-to-use software?</span>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200/80 dark:border-pink-800/80 hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors cursor-pointer"
          >
            <span>Browse Digital Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 mb-14 overflow-hidden glass-panel border border-blue-200/80 dark:border-blue-800/80 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-900/70 text-blue-800 dark:text-sky-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-300" />
            <span>High-Standard Engineering • Transparent Milestones • 100% IP Ownership</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Professional Engineering & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-pink-500 bg-clip-text text-transparent">
              Freelance Tech Services
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
            Solusi pengembangan software terapan yang transparan untuk perusahaan, startup, dinas, dan perorangan. Dilengkapi repositori privat GitHub, live demo staging mingguan, garansi bug gratis 30 hari, serta kepemilikan kode sumber seutuhnya.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-sky-400 block">50 / 50</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Pembayaran DP & Pelunasan</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-sky-400 block">Weekly</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Staging Demo & Update</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-sky-400 block">100%</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Hak Milik Source Code</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-sky-400 block">30 Hari</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Garansi Bug Gratis</span>
            </div>
          </div>
        </div>

        {/* Ambient Gradient Blob */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-bl from-sky-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* SECTION 1: Interactive Scope & Quotation Estimator */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Kalkulator Estimasi Biaya & Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Dapatkan estimasi biaya awal dan jadwal pengerjaan sesuai kebutuhan spesifik proyek Anda secara transparan.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Configurator (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-left">
            {/* 1. Select Service */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono flex items-center justify-between">
                <span>1. Pilih Kategori Layanan</span>
                <span className="text-blue-600 dark:text-sky-400 font-bold">{currentService?.category}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FREELANCE_SERVICES.map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/70 shadow-xs ring-1 ring-blue-500/30'
                          : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="text-blue-600 dark:text-sky-400 mb-2">
                        {renderServiceIcon(srv.iconName, 'w-4 h-4')}
                      </div>
                      <span className={`text-[11px] font-bold line-clamp-2 leading-tight ${isSelected ? 'text-blue-900 dark:text-sky-200' : 'text-slate-800 dark:text-slate-200'}`}>
                        {srv.title.split(' ')[0]} {srv.title.split(' ')[1] || ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Project Scale */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                2. Skala & Kompleksitas Proyek
              </label>
              <div className="grid sm:grid-cols-3 gap-2">
                {[
                  { id: 'mvp', title: 'MVP / Modul Inti', desc: 'Fokus pada fungsionalitas esensial tercepat' },
                  { id: 'standard', title: 'Standard Business', desc: 'Fitur lengkap, UI modern & terintegrasi' },
                  { id: 'enterprise', title: 'Enterprise / Kompleks', desc: 'Arsitektur skala besar, multi-role & audit' }
                ].map((s) => {
                  const isSelected = projectScale === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setProjectScale(s.id as any)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/70 ring-1 ring-blue-500/30'
                          : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{s.title}</h4>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">{s.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Timeline Urgency */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                3. Prioritas Kecepatan Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTimelineUrgency('normal')}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    timelineUrgency === 'normal'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/70'
                      : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    <span>Standar (~{scaleInfo.timeline})</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">Siklus sprint berurutan dengan jadwal normal</p>
                </button>

                <button
                  onClick={() => setTimelineUrgency('express')}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    timelineUrgency === 'express'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/70'
                      : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span>Express Priority (+25%)</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">Alokasi jam kerja dedikasi penuh prioritas tinggi</p>
                </button>
              </div>
            </div>

            {/* 4. Add-on Services */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                4. Opsi Layanan Tambahan (Add-ons)
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {Object.entries(addonPrices).map(([addId, addData]) => {
                  const isChecked = selectedAddons.includes(addId);
                  return (
                    <div
                      key={addId}
                      onClick={() => toggleAddon(addId)}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50'
                          : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400 dark:border-slate-600'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                          {addData.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 flex-shrink-0">
                        +{formatIdr(addData.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Notes Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                Catatan Singkat Kebutuhan Anda (Opsional):
              </label>
              <textarea
                rows={2}
                placeholder="Contoh: Butuh WebGIS untuk memetakan titik aset perkebunan 150 hektar dengan 3 layer spasial..."
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                className="w-full p-3 rounded-xl text-xs glass-panel border border-slate-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          {/* Right Live Quotation Summary (5 Cols) */}
          <div className="lg:col-span-5 sticky top-20 glass-panel rounded-3xl p-6 sm:p-8 border border-blue-300 dark:border-blue-800 shadow-xl space-y-6 text-left">
            <div className="space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                Live Quotation Summary
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {currentService?.title}
              </h3>
              <p className="text-xs text-blue-700 dark:text-sky-300 font-bold">
                {scaleInfo.label}
              </p>
            </div>

            {/* Calculation Price Numbers */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-pink-500/10 border border-blue-200 dark:border-blue-900 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                Estimasi Range Biaya:
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {formatIdr(estimatedMin)} — {formatIdr(estimatedMax)}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Sekitar {formatUsd(estimatedMin)} — {formatUsd(estimatedMax)}
              </div>
            </div>

            {/* Timeline & Delivery Breakdown */}
            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
              <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Estimasi Timeline:</span>
                <span className="font-bold text-slate-900 dark:text-white">~{scaleInfo.timeline}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Skema Termin:</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">DP 50% / Pelunasan 50%</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Garansi Bug Gratis:</span>
                <span className="font-bold text-blue-700 dark:text-sky-300">
                  {selectedAddons.includes('extendedWarranty') ? '60 Hari' : '30 Hari'}
                </span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Kepemilikan Source Code:</span>
                <span className="font-bold text-slate-900 dark:text-white">100% Hak Milik Klien</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={sendWhatsAppBrief}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-md hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Brief via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={copyBriefToClipboard}
                  className="py-2.5 px-3 rounded-xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {briefCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Brief</span>
                    </>
                  )}
                </button>

                <button
                  onClick={sendEmailBrief}
                  className="py-2.5 px-3 rounded-xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Email</span>
                </button>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
              *Estimasi bersifat indikatif berdasarkan kompleksitas standar. Nilai final disepakati bersama dalam Dokumen Scope of Work (SOW).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 8 Core Services Grid */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Spectrum Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            8 Layanan Utama Rekayasa Teknologi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Dikelola dengan standar teknis tinggi, pengujian menyeluruh, dan dokumentasi arsitektur rapi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FREELANCE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-5 sm:p-6 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 dark:hover:border-sky-500 transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/70 flex items-center justify-center text-blue-600 dark:text-sky-400 border border-blue-200 dark:border-blue-800">
                  {renderServiceIcon(srv.iconName, 'w-5 h-5')}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                    {srv.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                    {srv.tagline}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {srv.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {srv.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Meta & CTA */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-mono text-slate-500 dark:text-slate-400 font-bold block">Mulai dari</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">{srv.startingPriceIdr}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedServiceId(srv.id);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800 text-[11px] font-bold transition-colors cursor-pointer"
                >
                  Hitung Estimasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: The 7-Step Transparent Engineering Workflow */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Structured 7-Step Delivery Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Alur Pengerjaan Transparan & Profesional
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Dari diskusi scope awal hingga serah terima produksi, Anda selalu memegang kendali atas setiap milestone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 space-y-4 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
                  0{step.step}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  {step.duration}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-blue-700 dark:text-sky-400 font-extrabold block mb-1">
                  {step.phase}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-bold block">Deliverables:</span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              {/* Client Action Note */}
              <div className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">Aksi Klien: </span>
                {step.clientAction}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Client Workspace & Communication Guarantee */}
      <section className="mb-20 rounded-3xl p-6 sm:p-10 lg:p-12 glass-panel border border-blue-200 dark:border-blue-800 shadow-lg text-left">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-sky-400">
              <Laptop className="w-4 h-4" />
              <span>Modern Client Workspace Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Akses Pantau Langsung: Tidak Ada Proyek yang Dikerjakan "Secara Misterius"
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Saya menyediakan ruang kerja kolaboratif terbuka. Selama pengembangan berlangsung, Anda memiliki kontrol penuh untuk menguji langsung fitur yang sedang dibangun melalui URL Staging privat, menerima rangkuman mingguan, dan berdiskusi kapan saja.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-sky-400 flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Live Staging Preview URL</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 font-normal">Link web privat yang diperbarui setiap minggunya untuk Anda coba langsung di browser atau HP.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-sky-100 dark:bg-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Skema Termin Transparan (50-50)</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 font-normal">Pelunasan hanya dilakukan setelah sistem selesai diuji dan siap dioperasikan di server produksi Anda.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-pink-100 dark:bg-pink-900/60 flex items-center justify-center text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Garansi Bug Gratis 30 Hari</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 font-normal">Jika ditemukan error teknis setelah serah terima, saya perbaiki tanpa biaya tambahan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Mock Workspace Preview */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 text-xs font-mono text-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-[11px] text-slate-400 ml-2">client-staging-workspace</span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Sprint
              </span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Staging URL:</span>
                <span className="text-sky-400 font-bold underline">https://staging-client.maghfirah.dev</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Current Sprint:</span>
                <span className="text-emerald-400 font-bold">Week 2: WebGIS Layer Engine</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Repository:</span>
                <span className="text-slate-200">github.com/firhmgh/private-client-project</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-slate-300 space-y-1">
              <p className="text-emerald-400 font-medium">✓ Latest commit: feat(spatial): add vector tile caching & geojson indexing</p>
              <p className="text-emerald-400 font-medium">✓ Automated QA build: Passed (0 errors, 100% test pass rate)</p>
              <p className="text-sky-300 font-bold">→ Ready for client feedback review</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Frequently Asked Questions (FAQ) */}
      <section className="mb-20 max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3 text-left">
          {SERVICE_FAQS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3 font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Project Request Intake CTA */}
      <section className="rounded-3xl p-6 sm:p-10 lg:p-12 glass-panel border border-blue-300 dark:border-blue-800 shadow-2xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-900/70 text-blue-800 dark:text-sky-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Start?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            Mulai Diskusi Kebutuhan Proyek Anda Hari Ini
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Konsultasi awal 30 menit gratis tanpa kewajiban. Kita diskusikan kelayakan teknis, arsitektur yang paling efisien, dan jadwal pengerjaan terbaik untuk Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/6282285189397?text=Halo%20Maghfirah,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20freelance%20software/web."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-lg hover:scale-102 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Langsung via WhatsApp</span>
          </a>

          <a
            href="mailto:firahmagh485@gmail.com?subject=Inquiry%20Proyek%20Freelance%20Software"
            className="px-6 py-3 rounded-2xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Brief via Email</span>
          </a>
        </div>
      </section>
    </div>
  );
};
