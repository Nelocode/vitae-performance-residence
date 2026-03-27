'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm({ villaName, lang }: { villaName: string, lang: 'es' | 'en' }) {
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
