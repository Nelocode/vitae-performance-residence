'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { HOME_TRANSLATIONS } from './translations';
import { VILLAS } from './villas/[slug]/data';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = HOME_TRANSLATIONS[language];
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [activeSection, setActiveSection] = useState<string>('performance');

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.65;
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['performance', 'masterplan', 'wellness', 'villas', 'location', 'team'];

    const handleScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight / 2;
      let closest = sectionIds[0];
      let minDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elMid = window.scrollY + rect.top + rect.height / 2;
        const dist = Math.abs(viewportMid - elMid);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (section: string, label: string) => {
    const isActive = activeSection === section;
    return (
      <a
        className={`relative transition-all font-manrope uppercase tracking-[0.2em] text-[10px] lg:text-xs pb-1 ${
          isActive
            ? 'text-primary font-semibold'
            : 'text-white/60 hover:text-white'
        }`}
        href={`#${section}`}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 w-full h-px bg-primary transition-transform duration-300 origin-left ${
            isActive ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </a>
    );
  };

  return (
    <div className="selection:bg-primary selection:text-on-primary bg-background overflow-x-hidden">
      
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
          <div className="relative h-10 w-32">
            <Link href="/">
              <Image src="/vitae-logo.png" alt="VITAE Logo" fill className="object-contain" priority />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLink('performance', t.nav.performance)}
            {navLink('masterplan', t.nav.masterplan)}
            {navLink('wellness', t.nav.cycle)}
            {navLink('villas', t.nav.villas)}
            {navLink('location', t.nav.location)}
            {navLink('team', t.nav.team)}
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest transition-all rounded-full ${language === 'es' ? 'bg-primary text-on-primary' : 'text-white/60 hover:text-white'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-primary text-on-primary' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-8 overflow-hidden">
          <video ref={heroVideoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
            <source src="/dynamic-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 z-[1] pointer-events-none"></div>
          <div className="absolute inset-0 hero-gradient z-[1] pointer-events-none"></div>
          <div className="absolute inset-0 blueprint-grid opacity-30 z-[1] pointer-events-none"></div>
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-5xl"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="block font-label uppercase tracking-[0.4em] text-primary mb-8 text-xs lg:text-sm">
              {t.hero.label}
            </motion.span>
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              className="font-headline font-extrabold text-5xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tighter"
              dangerouslySetInnerHTML={{ __html: t.hero.headline }}
            />
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {t.hero.description}
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-on-primary px-12 py-5 font-manrope uppercase tracking-[0.2em] text-xs font-bold transition-transform">
                {t.hero.cta1}
              </motion.button>
              <a href="#masterplan">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-primary cursor-pointer hover:opacity-80 transition-all">
                  <span className="font-manrope uppercase tracking-[0.2em] text-[10px]">{t.hero.cta2}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="font-label text-[10px] tracking-[0.3em] uppercase mb-4">{t.hero.scroll}</span>
            <div className="w-[1px] h-12 bg-primary"></div>
          </motion.div>
        </section>

        {/* PERFORMANCE DISRUPTIVE */}
        <motion.section id="performance" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-headline font-light text-4xl md:text-6xl lg:text-7xl text-white leading-tight" dangerouslySetInnerHTML={{ __html: t.performance.headline }} />
            </div>
            <div className="lg:col-span-4 border-l border-outline-variant/20 pl-12 py-4">
              <p className="font-body text-on-surface-variant text-base leading-loose">
                {t.performance.description}
              </p>
            </div>
          </div>
        </motion.section>

        {/* MASTERPLAN */}
        <motion.section id="masterplan" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-32 px-8 bg-surface-dim relative">
          <div className="absolute inset-0 blueprint-grid"></div>
          <div className="max-w-[1920px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              <div className="bg-surface-container-low p-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">square_foot</span>
                <h5 className="font-headline text-3xl font-bold text-white mb-1">8,537.63</h5>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {language === 'es' ? 'm2 de terreno total' : 'Total terrain m2'}
                </p>
              </div>
              <div className="bg-surface-container-low p-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">potted_plant</span>
                <h5 className="font-headline text-3xl font-bold text-white mb-1">1,791</h5>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {language === 'es' ? 'm2 Áreas comunes' : 'Common areas m2'}
                </p>
              </div>
              <div className="bg-surface-container-low p-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">home</span>
                <h5 className="font-headline text-3xl font-bold text-white mb-1">22</h5>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                   {language === 'es' ? 'Residencias' : 'Residences'}
                </p>
              </div>
              <div className="bg-surface-container-low p-8 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">calendar_today</span>
                <h5 className="font-headline text-3xl font-bold text-white mb-1">Feb 2026</h5>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                   {language === 'es' ? 'Inicio Fase 1' : 'Phase 1 Start'}
                </p>
              </div>
            </div>
            <div className="bg-surface-container h-[600px] border border-outline-variant/20 flex items-center justify-center group overflow-hidden relative">
              <motion.div initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} className="relative w-full h-full">
                <Image src="/renders/VITAE_PLANTA_C.png" alt="Masterplan Blueprint" fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-label uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                  {language === 'es' ? 'Expandir Masterplan Técnico' : 'Expand Technical Masterplan'}
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WELLNESS ECOSYSTEM */}
        <section id="wellness" className="py-32 px-8 bg-surface overflow-hidden">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.wellness.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: t.wellness.headline }} />
              <p className="font-body text-on-surface-variant text-xl max-w-3xl leading-relaxed">{t.wellness.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.wellness.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-10 border-l border-primary/20 hover:bg-white/10 transition-all"
                >
                  <span className="block text-primary font-bold mb-4 opacity-50 text-sm">0{idx + 1}</span>
                  <h4 className="font-headline text-2xl text-white mb-4">{item.title}</h4>
                  <p className="font-body text-on-surface-variant font-light leading-loose">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VILLAS SECTION */}
        <section id="villas" className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-20 text-center">
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.villas.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight" dangerouslySetInnerHTML={{ __html: t.villas.headline }} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {['starters', 'beta'].map((slug) => {
                const villa = VILLAS[language][slug];
                return (
                  <motion.div 
                    key={slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative h-[500px] overflow-hidden border border-outline-variant/10">
                      <Image src={villa.heroImage} alt={villa.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-4">
                          {villa.category}
                        </span>
                        <h4 className="font-headline text-3xl text-white mb-2">{villa.name}</h4>
                        <p className="font-body text-white/70 font-light mb-6 line-clamp-2">{villa.description}</p>
                        <div className="flex items-center space-x-8 text-white/60 text-xs mb-8">
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">square_foot</span>{villa.area}</span>
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">bed</span>{villa.bedrooms}</span>
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">shower</span>{villa.baths}</span>
                        </div>
                        <Link href={`/villas/${slug}`}>
                          <button className="bg-white text-black px-8 py-3 font-manrope uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-on-primary transition-all">
                            {t.villas.cta}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATION & CONNECTIVITY */}
        <section id="location" className="py-32 px-8 bg-surface relative overflow-hidden">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.location.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: t.location.headline }} />
              <p className="font-body text-on-surface-variant text-xl mb-12 leading-relaxed">{t.location.description}</p>
              
              <div className="space-y-6">
                {t.location.points.map((point, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-white/10 group hover:border-primary/50 transition-all">
                    <span className="font-body text-white text-lg font-light group-hover:text-primary transition-colors">{point.label}</span>
                    <span className="font-headline text-primary font-bold">{point.dist}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] border border-outline-variant/20 overflow-hidden">
              <Image src="/renders/VITAE_PLANTA_C.png" alt="Vistacana Map" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-8 bg-primary/20 rounded-full animate-ping" />
                  <div className="relative bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-2xl shadow-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE TEAM BEHIND */}
        <section id="team" className="py-32 px-8 bg-surface-container-highest">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-20">
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.team.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: t.team.headline }} />
              <p className="font-body text-on-surface-variant text-xl max-w-3xl mx-auto">{t.team.description}</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 md:p-20 text-center max-w-4xl mx-auto backdrop-blur-xl">
               <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                 <span className="material-symbols-outlined text-4xl text-primary">domain</span>
               </div>
               <h4 className="font-headline text-3xl text-white mb-4">{t.team.developer}</h4>
               <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">{t.team.experience}</p>
               <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-white/10 opacity-60">
                 <span className="font-label uppercase tracking-widest text-[10px]">Partner Inmobiliario</span>
                 <span className="font-label uppercase tracking-widest text-[10px]">Desarrollo Sostenible</span>
                 <span className="font-label uppercase tracking-widest text-[10px]">Arquitectura Wellness</span>
               </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA FOOTER */}
        <section className="py-32 px-8 bg-primary text-on-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">{t.cta_footer.headline}</h2>
            <p className="font-body text-on-primary/80 text-xl mb-12 max-w-2xl mx-auto font-light">{t.cta_footer.description}</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-primary px-12 py-5 font-manrope uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-all">
                {t.cta_footer.visit}
              </button>
              <button className="bg-transparent border border-white text-white px-12 py-5 font-manrope uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all">
                {t.cta_footer.brochure}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 border-t border-white/5 bg-background">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="h-6 w-20 relative opacity-40">
            <Image src="/vitae-logo.png" alt="VITAE Logo" fill className="object-contain" />
          </div>
          <p className="font-label text-[10px] uppercase tracking-widest text-white/30">
            © 2026 VITAE residences. Developed for high performance humans.
          </p>
        </div>
      </footer>
    </div>
  );
}
