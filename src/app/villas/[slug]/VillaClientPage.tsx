'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Villa } from './data';

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

function ContactForm({ villaName }: { villaName: string }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    availability: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          Solicitud recibida
        </h4>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
          Un agente comercial de VITAE se pondrá en contacto contigo en menos de 24 horas.
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
            Nombre completo *
          </label>
          <input
            required
            type="text"
            placeholder="Tu nombre"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            Correo electrónico *
          </label>
          <input
            required
            type="email"
            placeholder="tu@email.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            placeholder="+1 809 000 0000"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-primary">
            Disponibilidad
          </label>
          <select
            value={formState.availability}
            onChange={(e) => setFormState({ ...formState, availability: e.target.value })}
            className="w-full bg-transparent border-b border-outline-variant py-3 font-body text-sm text-white focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none"
          >
            <option value="" className="bg-surface text-white">Seleccionar horario preferido</option>
            <option value="morning" className="bg-surface text-white">Mañana (8am – 12pm)</option>
            <option value="afternoon" className="bg-surface text-white">Tarde (12pm – 5pm)</option>
            <option value="evening" className="bg-surface text-white">Noche (5pm – 8pm)</option>
          </select>
        </div>
      </div>
      <div className="space-y-1">
        <label className="font-label text-[10px] uppercase tracking-widest text-primary">
          Mensaje
        </label>
        <textarea
          placeholder={`Me interesa conocer más sobre ${villaName}...`}
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
            Enviando…
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-sm">calendar_add_on</span>
            Solicitar reunión con agente
          </>
        )}
      </motion.button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   MAIN CLIENT PAGE COMPONENT
───────────────────────────────────────────── */

export default function VillaClientPage({ villa }: { villa: Villa }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + villa.gallery.length) % villa.gallery.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % villa.gallery.length));

  return (
    <div className="bg-background selection:bg-primary selection:text-on-primary min-h-screen">

      {/* ── TOP NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-5 max-w-[1920px] mx-auto">
          <Link href="/" className="relative h-8 w-24 block">
            <Image src="/vitae-logo.png" alt="VITAE Logo" fill className="object-contain" priority unoptimized />
          </Link>
          <Link
            href="/#villas"
            className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors font-label text-[10px] uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver a Villas
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={villa.heroImage}
            alt={villa.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        </div>

        {/* Blueprint grid overlay */}
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
          <h1 className="font-headline font-extrabold text-5xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6">
            {villa.name}
          </h1>
          <p className="font-body text-on-surface-variant text-xl max-w-xl font-light">
            {villa.tagline}
          </p>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container border-b border-outline-variant/10"
      >
        <div className="max-w-[1920px] mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-outline-variant/10">
          {[
            { icon: 'square_foot', label: 'Área Total', value: villa.area },
            { icon: 'bed', label: 'Habitaciones', value: villa.bedrooms },
            { icon: 'layers', label: 'Plantas', value: villa.floors },
            { icon: 'attach_money', label: 'Precio base', value: villa.price },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-8 first:pl-0 last:pr-0">
              <span className="material-symbols-outlined text-primary text-2xl hidden md:block">
                {stat.icon}
              </span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-1">
                  {stat.label}
                </p>
                <p className="font-headline font-bold text-white text-lg md:text-2xl">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <main className="max-w-[1920px] mx-auto px-8">

        {/* ── GALLERY ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24"
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
                Galería
              </h3>
              <h2 className="font-headline text-4xl font-bold text-white">Visual Tour</h2>
            </div>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hidden md:block">
              {villa.gallery.length} imágenes — clic para ampliar
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {villa.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden cursor-pointer group ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    zoom_in
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-label text-[9px] uppercase tracking-widest text-white/80">
                    {img.caption}
                  </p>
                </div>
                {/* primary accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── FEATURES ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-outline-variant/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
                Espacios
              </h3>
              <h2 className="font-headline text-5xl font-bold text-white mb-6">
                Especificaciones
              </h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Cada metro cuadrado diseñado con intención biofílica para maximizar la regeneración y el rendimiento humano.
              </p>

              {/* Tech Stack */}
              <div className="mt-12 border border-outline-variant/10 p-6 bg-surface-container-low">
                <p className="font-label text-[9px] uppercase tracking-widest text-primary mb-6">
                  Tecnología integrada
                </p>
                <div className="grid grid-cols-2 gap-4">
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
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group p-6 border border-outline-variant/10 bg-surface-container-low hover:bg-surface-container-high hover:border-primary/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">{feat.icon}</span>
                    </div>
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

        {/* ── AMENITIES ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-outline-variant/10"
        >
          <div className="text-center mb-16">
            <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
              Ecosistema
            </h3>
            <h2 className="font-headline text-5xl font-bold text-white">
              Amenidades del complejo
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {villa.amenities.map((am, i) => (
              <motion.div
                key={am.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col items-center text-center p-8 border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-low transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{am.icon}</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors">
                  {am.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── MASTERPLAN REFERENCE ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-outline-variant/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
                Ubicación
              </h3>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">
                Masterplan & Entorno
              </h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
                VITAE Performance Residence está ubicado en Vistacana, Punta Cana — uno de los ecosistemas más privilegiados del Caribe. A 8 minutos del aeropuerto internacional y rodeado de naturaleza tropical preservada.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'flight', label: '8 min aeropuerto' },
                  { icon: 'beach_access', label: '12 min del mar' },
                  { icon: 'forest', label: 'Entorno natural' },
                  { icon: 'security', label: '24/7 Vigilancia' },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">{d.icon}</span>
                    <span className="font-body text-on-surface-variant text-xs">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-outline-variant/10">
              <Image
                src="/renders/VITAE_PLANTA_C.png"
                alt="Masterplan técnico VITAE"
                fill
                className="object-cover opacity-90"
                unoptimized
              />
              <div className="absolute inset-0 blueprint-grid opacity-30" />
            </div>
          </div>
        </motion.section>

        {/* ── CONTACT FORM ── */}
        <motion.section
          id="contacto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-outline-variant/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — CTA copy */}
            <div className="lg:col-span-4">
              <h3 className="font-headline text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
                Contacto
              </h3>
              <h2 className="font-headline text-5xl font-bold text-white mb-6 leading-tight">
                Habla con<br />un agente
              </h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-10">
                Nuestro equipo comercial está disponible para resolver todas tus preguntas, agendar visitas al terreno y guiarte a través del proceso de inversión.
              </p>

              <div className="space-y-6">
                {[
                  { icon: 'schedule', label: 'Respuesta en', value: 'Menos de 24h' },
                  { icon: 'language', label: 'Idiomas', value: 'ES · EN · PT' },
                  { icon: 'videocam', label: 'Modalidad', value: 'Presencial o virtual' },
                ].map((item) => (
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

            {/* Right — Form */}
            <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/10 p-10 md:p-14">
              <p className="font-headline text-2xl font-bold text-white mb-10">
                Solicitar reunión — <span className="text-primary italic">{villa.name}</span>
              </p>
              <ContactForm villaName={villa.name} />
            </div>
          </div>
        </motion.section>
      </main>

      {/* ── FOOTER ─ */}
      <footer className="border-t border-outline-variant/10 bg-surface-container-lowest mt-16">
        <div className="max-w-[1920px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative h-8 w-24">
            <Image src="/vitae-logo.png" alt="VITAE" fill className="object-contain" unoptimized />
          </div>
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
            © 2024 VITAE RESIDENCES — Vistacana, Punta Cana, RD
          </p>
          <Link
            href="/"
            className="font-label text-[10px] uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            Inicio
          </Link>
        </div>
      </footer>

      {/* ── LIGHTBOX PORTAL ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={villa.gallery}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
