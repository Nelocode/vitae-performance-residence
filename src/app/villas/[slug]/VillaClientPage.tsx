'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { VILLAS } from './data';
import { useLanguage } from '@/context/LanguageContext';

/* ─────────────────────────────────────────────
   LIGHTBOX COMPONENT
───────────────────────────────────────────── */

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; caption: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>
      <button
        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <span className="material-symbols-outlined text-4xl">arrow_back_ios</span>
      </button>
      <button
        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <span className="material-symbols-outlined text-4xl">arrow_forward_ios</span>
      </button>
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl mx-8 aspect-[16/10]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].caption}
          fill
          className="object-contain"
          unoptimized
        />
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-label text-[10px] tracking-widest uppercase text-white/40 whitespace-nowrap">
          {images[index].caption}
        </p>
      </motion.div>
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-primary w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT FORM COMPONENT
───────────────────────────────────────────── */

function ContactForm({ villaName, lang }: { villaName: string, lang: 'es' | 'en' }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    availability: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const labels = {
    es: {
      success: 'Solicitud recibida',
      successDesc: 'Un agente comercial de VITAE se pondrá en contacto contigo en menos de 24 horas.',
      name: 'Nombre completo *',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico *',
      emailPlaceholder: 'tu@email.com',
      phone: 'Teléfono / WhatsApp',
      phonePlaceholder: '+1 809 000 0000',
      availability: 'Disponibilidad',
      availabilityPlaceholder: 'Seleccionar horario preferido',
      morning: 'Mañana (8am – 12pm)',
      afternoon: 'Tarde (12pm – 5pm)',
      evening: 'Noche (5pm – 8pm)',
      messageLabel: 'Mensaje',
      messagePlaceholder: `Me interesa conocer más sobre ${villaName}...`,
      submit: 'Solicitar reunión con agente',
      sending: 'Enviando…',
    },
    en: {
      success: 'Request received',
      successDesc: 'A VITAE commercial agent will contact you in less than 24 hours.',
      name: 'Full Name *',
      namePlaceholder: 'Your name',
      email: 'Email address *',
      emailPlaceholder: 'you@email.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+1 809 000 0000',
      availability: 'Availability',
      availabilityPlaceholder: 'Select preferred time',
      morning: 'Morning (8am – 12pm)',
      afternoon: 'Afternoon (12pm – 5pm)',
      evening: 'Evening (5pm – 8pm)',
      messageLabel: 'Message',
      messagePlaceholder: `I'm interested in learning more about ${villaName}...`,
      submit: 'Request meeting with agent',
      sending: 'Sending…',
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-low border border-primary/20 p-16 text-center"
      >
        <span className="material-symbols-outlined text-primary text-6xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <h4 className="font-headline text-3xl font-bold text-white mb-4">
          {labels.success}
        </h4>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
          {labels.successDesc}
        </p>
      </motion.div>
    );
  }

  const inputClass =
    'w-full bg-transparent border-b border-outline-variant py-3 font-body text-sm text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            {labels.name}
          </label>
          <input
            required
            type="text"
            placeholder={labels.namePlaceholder}
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            {labels.email}
          </label>
          <input
            required
            type="email"
            placeholder={labels.emailPlaceholder}
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            {labels.phone}
          </label>
          <input
            type="tel"
            placeholder={labels.phonePlaceholder}
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            {labels.availability}
          </label>
          <select
            value={formState.availability}
            onChange={(e) => setFormState({ ...formState, availability: e.target.value })}
            className="w-full bg-transparent border-b border-outline-variant py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none"
          >
            <option value="" className="bg-surface text-white">{labels.availabilityPlaceholder}</option>
            <option value="morning" className="bg-surface text-white">{labels.morning}</option>
            <option value="afternoon" className="bg-surface text-white">{labels.afternoon}</option>
            <option value="evening" className="bg-surface text-white">{labels.evening}</option>
          </select>
        </div>
      </div>
      <div className="space-y-1">
        <label className="font-label text-[10px] uppercase tracking-widest text-primary">
          {labels.messageLabel}
        </label>
        <textarea
          placeholder={labels.messagePlaceholder}
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-primary text-on-primary px-16 py-5 font-manrope uppercase tracking-[0.25em] text-[10px] font-bold hover:bg-primary-container transition-all disabled:opacity-60 flex items-center gap-3"
      >
        {loading ? (
          <>
            <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
            {labels.sending}
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-sm">calendar_add_on</span>
            {labels.submit}
          </>
        )}
      </motion.button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   MAIN CLIENT PAGE COMPONENT
───────────────────────────────────────────── */

export default function VillaClientPage({ slug }: { slug: string }) {
  const { language, setLanguage } = useLanguage();
  const villa = VILLAS[language][slug as keyof typeof VILLAS['es']];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!villa) {
     return notFound();
  }

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + villa.gallery.length) % villa.gallery.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % villa.gallery.length));

  const ui = {
    es: {
      back: 'Volver a Villas',
      areaLabel: 'Área Total',
      bedLabel: 'Habitaciones',
      floorLabel: 'Plantas',
      priceLabel: 'Precio base',
      gallerySub: 'Galería',
      galleryTitle: 'Visual Tour',
      galleryHint: `${villa.gallery.length} imágenes — clic para ampliar`,
      specSub: 'Espacios',
      specTitle: 'Especificaciones',
      specDesc: 'Cada metro cuadrado diseñado con intención biofílica para maximizar la regeneración y el rendimiento humano.',
      techLabel: 'Tecnología integrada',
      ecoSub: 'Ecosistema',
      ecoTitle: 'Amenidades del complejo',
      plansSub: 'Arquitectura',
      plansTitle: 'Distribución y Dimensiones',
      plansDesc: 'Planos técnicos detallados que muestran la integración de espacios abiertos y áreas verdes privadas.',
      locationSub: 'Ubicación',
      locationTitle: 'Masterplan & Entorno',
      locationDesc: 'VITAE Performance Residence está ubicado en Vistacana, Punta Cana — uno de los ecosistemas más privilegiados del Caribe.',
      contactSub: 'Contacto',
      contactTitle: 'Habla con un agente',
      contactDesc: 'Nuestro equipo comercial está disponible para resolver todas tus preguntas.',
      ctaBrochure: 'Descargar Brochure (PDF)',
      ctaBrochurePending: 'Preparando descarga...',
      stats: [
        { icon: 'flight', label: '8 min aeropuerto' },
        { icon: 'beach_access', label: '12 min del mar' },
        { icon: 'forest', label: 'Entorno natural' },
        { icon: 'security', label: '24/7 Vigilancia' },
      ],
      contactDetails: [
        { icon: 'schedule', label: 'Respuesta en', value: 'Menos de 24h' },
        { icon: 'language', label: 'Idiomas', value: 'ES · EN · PT' },
        { icon: 'videocam', label: 'Modalidad', value: 'Presencial o virtual' },
      ]
    },
    en: {
      back: 'Back to Villas',
      areaLabel: 'Total Area',
      bedLabel: 'Bedrooms',
      floorLabel: 'Floors',
      priceLabel: 'Starting price',
      gallerySub: 'Gallery',
      galleryTitle: 'Visual Tour',
      galleryHint: `${villa.gallery.length} images — click to enlarge`,
      specSub: 'Spaces',
      specTitle: 'Specifications',
      specDesc: 'Every square meter designed with biophilic intent to maximize regeneration and human performance.',
      techLabel: 'Integrated Technology',
      ecoSub: 'Ecosystem',
      ecoTitle: 'Complex Amenities',
      plansSub: 'Architecture',
      plansTitle: 'Layout & Dimensions',
      plansDesc: 'Detailed technical plans showing the integration of open spaces and private green areas.',
      locationSub: 'Location',
      locationTitle: 'Masterplan & Environment',
      locationDesc: 'VITAE Performance Residence is located in Vistacana, Punta Cana — one of the most privileged ecosystems in the Caribbean.',
      contactSub: 'Contact',
      contactTitle: 'Talk to an Agent',
      contactDesc: 'Our commercial team is available to answer all your questions.',
      ctaBrochure: 'Download Brochure (PDF)',
      ctaBrochurePending: 'Preparing download...',
      stats: [
        { icon: 'flight', label: '8 min airport' },
        { icon: 'beach_access', label: '12 min from sea' },
        { icon: 'forest', label: 'Natural environment' },
        { icon: 'security', label: '24/7 Security' },
      ],
      contactDetails: [
        { icon: 'schedule', label: 'Response in', value: 'Less than 24h' },
        { icon: 'language', label: 'Languages', value: 'ES · EN · PT' },
        { icon: 'videocam', label: 'Meeting', value: 'In-person or virtual' },
      ]
    }
  }[language];

  return (
    <div className="bg-background selection:bg-primary selection:text-on-primary min-h-screen">

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-5 max-w-[1920px] mx-auto">
          <Link href="/" className="relative h-8 w-24 block">
            <Image src="/vitae-logo.png" alt="VITAE Logo" fill className="object-contain" priority unoptimized />
          </Link>
          <div className="flex items-center gap-4 lg:gap-8">
             <div className="hidden sm:flex bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-[9px] uppercase font-bold tracking-widest transition-all rounded-full ${language === 'es' ? 'bg-primary text-on-primary' : 'text-white/40 hover:text-white'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[9px] uppercase font-bold tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-primary text-on-primary' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <Link
              href="/#villas"
              className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors font-label text-[10px] uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {ui.back}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center p-8 md:hidden"
            >
              <div className="absolute top-8 right-8 flex items-center gap-4">
                 <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                    <button onClick={() => setLanguage('es')} className={`px-4 py-2 text-xs uppercase font-bold tracking-widest transition-all rounded-full ${language === 'es' ? 'bg-primary text-on-primary' : 'text-white/40'}`}>ES</button>
                    <button onClick={() => setLanguage('en')} className={`px-4 py-2 text-xs uppercase font-bold tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-primary text-on-primary' : 'text-white/40'}`}>EN</button>
                 </div>
                 <button onClick={() => setIsMenuOpen(false)} className="text-white w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
                    <span className="material-symbols-outlined text-3xl">close</span>
                 </button>
              </div>
              
              <div className="flex flex-col gap-8 text-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-headline text-3xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-colors">
                  {language === 'es' ? 'Inicio' : 'Home'}
                </Link>
                <Link href="/#villas" onClick={() => setIsMenuOpen(false)} className="font-headline text-3xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-colors">
                  {language === 'es' ? 'Villas' : 'Villas'}
                </Link>
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="font-headline text-3xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-colors">
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </Link>
              </div>
              
              <div className="absolute bottom-12 w-full px-8 flex justify-between items-center opacity-40">
                <div className="h-6 w-24 relative">
                  <Image src="/vitae-logo.png" alt="VITAE" fill className="object-contain" unoptimized />
                </div>
                <p className="font-label text-[9px] uppercase tracking-widest">© 2026</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 px-8 pb-20 max-w-[1920px] mx-auto w-full"
        >
          <span className="inline-block font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-6 border border-primary/30 px-4 py-2">
            {villa.badge}
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            {villa.name}
          </h1>
          <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light">
            {villa.tagline}
          </p>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container border-b border-outline-variant/10"
      >
        <div className="max-w-[1920px] mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 md:divide-x divide-outline-variant/10">
          {[
            { icon: 'square_foot', label: ui.areaLabel, value: villa.area },
            { icon: 'bed', label: ui.bedLabel, value: villa.bedrooms },
            { icon: 'layers', label: ui.floorLabel, value: villa.floors },
            { icon: 'attach_money', label: ui.priceLabel, value: villa.price },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-8 first:pl-0 last:pr-0">
              <span className="material-symbols-outlined text-primary text-2xl hidden md:block">{stat.icon}</span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">{stat.label}</p>
                <p className="font-headline font-bold text-white text-lg md:text-2xl">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <main className="max-w-[1920px] mx-auto px-8">

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">{ui.gallerySub}</h3>
              <h2 className="font-headline text-4xl font-bold text-white uppercase">{ui.galleryTitle}</h2>
            </div>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hidden md:block">{ui.galleryHint}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {villa.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
                onClick={() => openLightbox(i)}
              >
                <Image src={img.src} alt={img.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">zoom_in</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-label text-[9px] uppercase tracking-widest text-white/80">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-24 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">{ui.specSub}</h3>
              <h2 className="font-headline text-5xl font-bold text-white mb-6 uppercase">{ui.specTitle}</h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">{ui.specDesc}</p>
              <div className="mt-12 border border-outline-variant/10 p-6 bg-surface-container-low">
                <p className="font-label text-[9px] uppercase tracking-widest text-primary mb-6">{ui.techLabel}</p>
                <div className="grid grid-cols-1 gap-4">
                  {villa.tech.map((t) => (
                    <div key={t.label} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">{t.icon}</span>
                      <span className="font-body text-on-surface-variant text-xs">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {villa.features.map((feat, i) => (
                <motion.div key={feat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group p-8 border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3"><span className="material-symbols-outlined text-primary text-2xl">{feat.icon}</span></div>
                    <div>
                      <h5 className="font-headline font-bold text-white text-sm mb-1">{feat.label}</h5>
                      <p className="font-body text-on-surface-variant text-xs leading-relaxed">{feat.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PLANS & DIMENSIONS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-24 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5">
               <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">{ui.plansSub}</h3>
               <h2 className="font-headline text-5xl font-bold text-white mb-6 uppercase">{ui.plansTitle}</h2>
               <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">{ui.plansDesc}</p>
               <button className="bg-primary/10 border border-primary/30 text-primary px-8 py-4 font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  {ui.ctaBrochure}
               </button>
             </div>
             <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-surface-container-low border border-outline-variant/10 relative overflow-hidden group">
                   <Image src="/renders/VITAE_PLANTA_C.png" alt="Planta Baja" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" unoptimized />
                   <div className="absolute inset-0 blueprint-grid opacity-20" />
                   <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-white">Level 01</div>
                </div>
                <div className="aspect-[3/4] bg-surface-container-low border border-outline-variant/10 relative overflow-hidden group">
                   <Image src="/renders/VITAE_PLANTA_C.png" alt="Planta Alta" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" unoptimized />
                   <div className="absolute inset-0 blueprint-grid opacity-20" />
                   <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest text-white">Level 02</div>
                </div>
             </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-24 border-t border-outline-variant/10 text-center">
            <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">{ui.ecoSub}</h3>
            <h2 className="font-headline text-5xl font-bold text-white mb-12 uppercase">{ui.ecoTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {villa.amenities.map((am) => (
              <div key={am.label} className="p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{am.icon}</span>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">{am.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contacto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-24 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">{ui.contactSub}</h3>
              <h2 className="font-headline text-5xl font-bold text-white mb-6 leading-tight uppercase">{ui.contactTitle}</h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-10">{ui.contactDesc}</p>
              <div className="space-y-6">
                {ui.contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border-b border-outline-variant/10 pb-6">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    <div>
                      <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">{item.label}</p>
                      <p className="font-body text-white text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/10 p-10 md:p-14">
              <p className="font-headline text-2xl font-bold text-white mb-10 uppercase">
                {language === 'es' ? 'Descubrir' : 'Discover'} <span className="text-primary italic">{villa.name}</span>
              </p>
              <ContactForm villaName={villa.name} lang={language as any} />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-outline-variant/10 bg-surface-container-lowest py-12 px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative h-8 w-24 opacity-40">
            <Image src="/vitae-logo.png" alt="VITAE" fill className="object-contain" unoptimized />
          </div>
          <p className="font-label text-[9px] uppercase tracking-widest text-white/20">
            © 2026 VITAE RESIDENCES — VISTACANA, PUNTA CANA
          </p>
          <Link href="/" className="font-label text-[10px] uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">home</span>
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
        </div>
      </footer>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox images={villa.gallery} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
        )}
      </AnimatePresence>
    </div>
  );
}
