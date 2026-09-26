import React, { useState } from 'react';
import { 
  DIGITAL_PRODUCTS_DATA, 
  DigitalProduct, 
  ProductPackage 
} from '../data/digitalProductsData';
import { useRouter } from '../router';
import { 
  Search, 
  ExternalLink, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Code2, 
  ArrowRight, 
  MessageSquare, 
  X, 
  CheckCircle2, 
  ChevronRight,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getAssetUrl = (url?: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const clean = url.startsWith('/') ? url : '/' + url;
  return `${base}${clean}`;
};

export const DigitalProducts: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<DigitalProduct | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<ProductPackage | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = ['All', 'SaaS & Web', 'Desktop & Tools', 'GIS & Spatial', 'Mobile'];

  const filteredProducts = DIGITAL_PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openProductModal = (product: DigitalProduct, initialPackage?: ProductPackage) => {
    setActiveProductModal(product);
    setSelectedPackage(initialPackage || product.packages[1] || product.packages[0]);
    setActiveImageIndex(0);
  };

  const closeProductModal = () => {
    setActiveProductModal(null);
    setSelectedPackage(null);
  };

  const createWhatsAppLink = (productTitle: string, packageName?: string, price?: string) => {
    const message = encodeURIComponent(
      `Halo Maghfirah, saya tertarik dengan Digital Product:\n\n*${productTitle}*\nPaket: ${packageName || 'Informasi Produk'} (${price || 'Konsultasi'})\n\nApakah bisa konsultasi detail teknis dan alur transaksinya? Terima kasih.`
    );
    return `https://wa.me/6282285189397?text=${message}`;
  };

  const createEmailLink = (productTitle: string, packageName?: string) => {
    const subject = encodeURIComponent(`Inquiry Digital Product: ${productTitle}`);
    const body = encodeURIComponent(
      `Halo Maghfirah,\n\nSaya tertarik dengan produk "${productTitle}" pada paket "${packageName || 'Standar'}".\n\nBisakah Anda mengirimkan informasi lisensi dan tata cara pembayarannya?\n\nTerima kasih.`
    );
    return `mailto:firahmagh485@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb & Track Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => navigate('/')} 
            className="hover:text-blue-600 dark:hover:text-sky-400 font-medium transition-colors"
          >
            Portfolio
          </button>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-slate-900 dark:text-white">Digital Products Storefront</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-600 dark:text-slate-300 hidden sm:inline">Need custom engineering?</span>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-sky-300 border border-blue-200/80 dark:border-blue-700/80 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
          >
            <span>Explore Freelance Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero Storefront Banner */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 overflow-hidden glass-panel border border-blue-200/80 dark:border-blue-800/80 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-900/70 text-blue-800 dark:text-sky-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-300" />
            <span>Turnkey Applications & Accessible Developer Kits</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Turnkey Digital Products & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-pink-500 bg-clip-text text-transparent">
              Tested Developer Kits
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
            Koleksi aplikasi, platform web, dan tool utilitas desktop siap pakai dengan harga terjangkau dan realistis. Bebas royalti tersembunyi, arsitektur kode bersih (clean code), dokumentasi instalasi lengkap, dan dukungan teknis langsung dari pembuatnya.
          </p>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>100% Tested Codebase</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-sky-400 flex-shrink-0" />
              <span>Full Source Code</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <FileCheck className="w-4 h-4 text-sky-600 dark:text-sky-300 flex-shrink-0" />
              <span>Installation Guides</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0" />
              <span>Fast WhatsApp Support</span>
            </div>
          </div>
        </div>

        {/* Ambient Glow Pill */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 via-pink-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'glass-panel text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-300 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
          <input
            type="text"
            placeholder="Cari produk / teknologi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs glass-panel border border-slate-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-400 dark:hover:border-sky-500 transition-all duration-300"
          >
            <div>
              {/* Product Cover Image with Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={getAssetUrl(product.coverImage)}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Floating Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 max-w-[85%]">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-600 text-white backdrop-blur-md shadow-xs">
                    {product.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-white border border-white/20 backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                {/* Price Tag Floating on Bottom Right */}
                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold block">
                    Mulai dari
                  </span>
                  <span className="text-base font-black text-white">
                    {product.priceStartingIdr}
                  </span>
                  <span className="text-[11px] font-bold text-sky-300 ml-1">
                    ({product.priceStartingUsd})
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {product.tagline}
                  </p>
                </div>

                {/* Key Features Quick Bullets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {product.coreFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {product.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {product.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                      +{product.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-5 sm:p-6 pt-0 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => openProductModal(product)}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Detail & Paket</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {product.liveDemoUrl ? (
                  <a
                    href={product.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 text-center cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                  </a>
                ) : (
                  <button
                    onClick={() => openProductModal(product)}
                    className="w-full py-2 px-3 rounded-xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Screenshots</span>
                  </button>
                )}
              </div>

              {/* Direct Fast Purchase CTA */}
              <a
                href={createWhatsAppLink(product.title, product.packages[0]?.name, product.packages[0]?.priceIdr)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/40 hover:bg-blue-100/70 dark:hover:bg-blue-900/60 text-blue-800 dark:text-sky-300 text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 space-y-3 glass-panel rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
            Tidak ada produk yang cocok dengan pencarian "{searchQuery}"
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Bottom Cross-Promotion to Freelance Services */}
      <div className="mt-16 rounded-3xl p-6 sm:p-8 glass-panel border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-sky-400">
            <Sparkles className="w-4 h-4" />
            <span>Need Custom Development Instead?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Butuh Aplikasi Kustom yang Dibuat Spesifik untuk Kebutuhan Bisnis Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-xl font-normal">
            Jika sistem yang Anda perlukan memiliki aturan bisnis unik, Anda dapat menggunakan layanan Freelance Services dengan sprint mingguan, live staging, dan garansi bug 30 hari.
          </p>
        </div>

        <button
          onClick={() => navigate('/services')}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white text-xs sm:text-sm font-bold shadow-md hover:scale-102 transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
        >
          <span>Buka Freelance Services</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Product Detail & Package Selection Modal */}
      <AnimatePresence>
        {activeProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProductModal}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0c1220] border border-blue-200 dark:border-blue-900 shadow-2xl p-5 sm:p-8 z-10 space-y-6 text-left"
            >
              {/* Close Button */}
              <button
                onClick={closeProductModal}
                aria-label="Tutup dialog"
                className="absolute top-4 right-4 p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-600 text-white">
                    {activeProductModal.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                    {activeProductModal.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">
                  {activeProductModal.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {activeProductModal.tagline}
                </p>
              </div>

              {/* Gallery Image Display */}
              <div className="space-y-3">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <img
                    src={getAssetUrl(activeProductModal.galleryImages[activeImageIndex] || activeProductModal.coverImage)}
                    alt={`${activeProductModal.title} preview`}
                    className="w-full h-full object-contain bg-slate-950"
                  />
                  {activeProductModal.liveDemoUrl && (
                    <a
                      href={activeProductModal.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md"
                    >
                      <span>Buka Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Thumbnails */}
                {activeProductModal.galleryImages.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {activeProductModal.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-14 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImageIndex === idx ? 'border-blue-600 scale-102' : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={getAssetUrl(img)}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Overview & Audience */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono">
                  Deskripsi & Target Pengguna
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {activeProductModal.overview}
                </p>
                <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-blue-950 dark:text-sky-200">
                  <span className="font-bold">Cocok untuk: </span>
                  {activeProductModal.targetAudience}
                </div>
              </div>

              {/* Features & Architecture Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    <span>Fitur Utama</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeProductModal.coreFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>Keunggulan Arsitektur</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeProductModal.technicalHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-bold block mb-1">
                      Tech Stack Digunakan:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {activeProductModal.techStack.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Breakdown & Purchase Flow */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    Pilihan Paket Lisensi & Layanan
                  </h3>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Pilih paket yang paling sesuai
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  {activeProductModal.packages.map((pkg) => {
                    const isSelected = selectedPackage?.id === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/70 ring-2 ring-blue-500/30 shadow-md'
                            : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-blue-400 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                              {pkg.name}
                            </h4>
                            {pkg.popular && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-pink-600 text-white">
                                Popular
                              </span>
                            )}
                          </div>
                          <div>
                            <span className="text-lg font-black text-slate-900 dark:text-white">
                              {pkg.priceIdr}
                            </span>
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-bold ml-1">
                              / {pkg.priceUsd}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                            {pkg.description}
                          </p>

                          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                            {pkg.includes.map((inc, incIdx) => (
                              <div key={incIdx} className="flex items-start gap-1.5 text-[10px] text-slate-700 dark:text-slate-300 font-medium">
                                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 mt-3">
                          <button
                            type="button"
                            className={`w-full py-1.5 rounded-xl text-xs font-bold transition-colors ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {isSelected ? 'Paket Terpilih' : 'Pilih Paket'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Callouts */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5 text-center sm:text-left font-medium">
                  <p className="font-bold text-slate-900 dark:text-white">
                    Paket terpilih: {selectedPackage?.name} ({selectedPackage?.priceIdr})
                  </p>
                  <p>Transaksi aman via Direct Invoicing & Transfer Bank / Escrow Resmi.</p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={createEmailLink(activeProductModal.title, selectedPackage?.name)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-xs font-bold text-center"
                  >
                    Kirim Email
                  </a>
                  <a
                    href={createWhatsAppLink(activeProductModal.title, selectedPackage?.name, selectedPackage?.priceIdr)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Beli via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
