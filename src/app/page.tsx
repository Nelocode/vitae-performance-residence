'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { HOME_TRANSLATIONS } from './translations';
import { VILLAS } from './villas/[slug]/data';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = HOME_TRANSLATIONS[language];
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [activeSection, setActiveSection] = useState<string>('performance');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Image src="/vitae-logo.png" alt="VITAE Logo" fill className="object-contain" priority unoptimized />
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
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="hidden sm:flex bg-white/5 rounded-full p-1 border border-white/10">
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
                {['performance', 'masterplan', 'wellness', 'villas', 'location', 'team'].map((section, idx) => (
                  <motion.a
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${section}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-headline text-3xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {t.nav[section === 'wellness' ? 'cycle' : section as keyof typeof t.nav]}
                  </motion.a>
                ))}
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

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-8 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/1177708228?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115vw] h-[115vh] object-cover opacity-80 pointer-events-none"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 'none' }}
              title="VITAE Residences Hero Video"
            ></iframe>
          </div>
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

        <motion.section id="performance" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-24 md:py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-headline font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase tracking-tighter" dangerouslySetInnerHTML={{ __html: t.performance.headline }} />
            </div>
            <div className="lg:col-span-4 border-l-2 lg:border-l border-primary lg:border-outline-variant/20 pl-8 lg:pl-12 py-4">
              <p className="font-body text-on-surface-variant text-base lg:text-lg leading-relaxed">
                {t.performance.description}
              </p>
            </div>
          </div>
          
          <div className="max-w-[1920px] mx-auto mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-outline-variant/10">
            {t.performance.stats.map((stat, i) => (
              <div key={i} className="flex flex-col group lg:px-12">
                <span className="font-headline text-5xl lg:text-6xl text-white font-black mb-2 group-hover:text-primary transition-colors tracking-tighter">
                  {stat.value}
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
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
                <p className="text-[10px] text-white/5 tracking-widest uppercase">
                  Build: {new Date().toISOString().split('T')[0]} | UI v1.2.0
                </p>
                <p className="text-white/20 text-[10px] tracking-widest uppercase">
                  {new Date().getFullYear()} VITAE Residences. All Rights Reserved.
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
                <Image src="/renders/VITAE_PLANTA_C.png" alt="Masterplan Blueprint" fill className="object-cover" unoptimized />
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
        <section id="wellness" className="py-32 px-8 bg-surface overflow-hidden border-t border-outline-variant/10">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-20">
              <h3 className="font-headline text-xs lg:text-sm uppercase tracking-[0.5em] text-primary mb-4">{t.wellness.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-8" dangerouslySetInnerHTML={{ __html: t.wellness.headline }} />
              <p className="font-body text-on-surface-variant text-xl max-w-3xl leading-relaxed">{t.wellness.description}</p>
            </div>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {t.wellness.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="relative group h-[500px] overflow-hidden border border-outline-variant/10"
                >
                  <Image 
                    src={idx === 0 ? '/renders/villa-premium-10.png' : idx === 1 ? '/renders/villa-premium-11.png' : '/renders/villa-premium-12.png'} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70" 
                    unoptimized
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
                      {idx === 0 ? 'bolt' : idx === 1 ? 'fitness_center' : 'self_improvement'}
                    </span>
                    <span className="block text-primary font-bold mb-2 opacity-50 text-xs tracking-widest">0{idx + 1}</span>
                    <h4 className="font-headline text-3xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="font-body text-on-surface-variant text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* VILLAS SECTION */}
        <section id="villas" className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-20 text-center">
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.villas.label}</h3>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight" dangerouslySetInnerHTML={{ __html: t.villas.headline }} />
            </div>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
            >
              {['starters', 'beta'].map((slug, i) => {
                const villa = VILLAS[language][slug];
                return (
                  <motion.div 
                    key={slug}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="group"
                  >
                    <div className="relative h-[500px] overflow-hidden border border-outline-variant/10 shadow-2xl">
                      <Image 
                        src={villa.heroImage} 
                        alt={villa.name} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                        unoptimized 
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="inline-block bg-primary text-on-primary px-3 py-1 text-[9px] uppercase font-bold tracking-widest mb-4">
                          {villa.category}
                        </span>
                        <h4 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-3 uppercase drop-shadow-2xl">
                          {villa.name}
                        </h4>
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
            </motion.div>
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
                {(t.location.points as any[]).map((point, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 border-b border-white/10 group hover:border-primary/50 transition-all gap-4">
                    <span className="font-body text-white text-lg font-light group-hover:text-primary transition-colors">{point.label}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex gap-3">
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.query)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group/icon"
                          title="Google Maps"
                        >
                          <span className="material-symbols-outlined text-sm">map</span>
                        </a>
                        <a 
                          href={`https://waze.com/ul?q=${encodeURIComponent(point.query)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#33CCFF] hover:border-[#33CCFF] hover:text-white transition-all group/icon"
                          title="Waze"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.7,13.3c-0.2,0-0.4,0.1-0.6,0.1c-0.6,0-1.2-0.2-1.7-0.7c-0.5-0.5-0.7-1.1-0.7-1.7V9.5c0-3.6-2.9-6.5-6.5-6.5S3.7,5.9,3.7,9.5v1.5c0,0.6-0.2,1.2-0.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7c-0.2,0-0.4,0-0.6-0.1c-0.3,0-0.5,0.2-0.6,0.4c-0.1,0.3,0.1,0.6,0.4,0.7c1.3,0.5,2.7,0.3,3.9-0.5c0,0.1,0,0.1,0,0.2c0,3.6,2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5c0-0.1,0-0.1,0-0.2c1.2,0.8,2.6,1,3.9,0.5c0.3-0.1,0.5-0.4,0.4-0.7C20.2,13.5,20,13.3,19.7,13.3z M10.2,17c-2.5,0-4.5-2-4.5-4.5V11c0-0.6,0.4-1,1-1s1,0.4,1,1v1.5c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5V11c0-0.6,0.4-1,1-1s1,0.4,1,1v1.5C14.7,15,12.7,17,10.2,17z"/>
                          </svg>
                        </a>
                      </div>
                      <span className="font-headline text-primary font-bold min-w-[60px] text-right">{point.dist}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] border border-outline-variant/20 overflow-hidden">
              <Image src="/renders/VITAE_PLANTA_C.png" alt="Vistacana Map" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" unoptimized />
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
        <section id="team" className="py-32 px-8 bg-surface-container-highest border-t border-outline-variant/10">
          <div className="max-w-[1920px] mx-auto lg:flex gap-20 items-center">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">{t.team.label}</h3>
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 uppercase" dangerouslySetInnerHTML={{ __html: t.team.headline }} />
              <p className="font-body text-on-surface-variant text-xl leading-relaxed mb-12">{t.team.description}</p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-10 md:p-14 backdrop-blur-xl">
                 <h4 className="font-headline text-3xl font-bold text-white mb-4 uppercase">Grupo Paseo del Sendero</h4>
                 <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-6 font-light">
                    {language === 'es' 
                      ? 'Liderado por Alberto Vásquez con más de 30 años de experiencia internacional. El grupo ha transformado el paisaje de Vistacana con desarrollos temáticos que priorizan la calidad de vida y el bienestar.' 
                      : 'Led by Alberto Vásquez with over 30 years of international experience. The group has transformed the Vistacana landscape with themed developments that prioritize quality of life and well-being.'}
                 </p>
                 <div className="flex flex-wrap gap-8 opacity-40">
                   <span className="font-label uppercase tracking-widest text-[9px] font-bold">Chukum Lagoon</span>
                   <span className="font-label uppercase tracking-widest text-[9px] font-bold">Pueblito Caribeño</span>
                   <span className="font-label uppercase tracking-widest text-[9px] font-bold">Royal Gardens</span>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 gap-8">
               <div className="bg-surface-container-low border border-outline-variant/10 p-12 flex items-center justify-center">
                  <div className="relative h-20 w-64">
                    <Image src="/gps_logo_full.svg" alt="Grupo Paseo del Sendero" fill className="object-contain opacity-90 transition-opacity hover:opacity-100" unoptimized />
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] relative overflow-hidden group">
                     <Image src="/renders/WELLNESS_ESTANCIA_10.03.26.png" alt="Experience" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" unoptimized />
                  </div>
                  <div className="aspect-[4/5] relative overflow-hidden group">
                     <Image src="/renders/WELLNESS_ZONA COMÚN_10.03.26 (3).png" alt="Innovation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" unoptimized />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA FOOTER */}
        <section id="contacto" className="relative py-32 px-8 overflow-hidden">
          <Image 
            src="/renders/WELLNESS_ZONA COMÚN_10.03.26 (2).png" 
            alt="Evolve" 
            fill 
            className="object-cover opacity-30" 
            unoptimized 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="max-w-[1920px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-white" dangerouslySetInnerHTML={{ __html: t.cta_footer.headline }} />
              <p className="font-body text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-12 max-w-md">
                {t.cta_footer.description}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-outline-variant/10 pb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{language === 'es' ? 'Experiencia VITAE' : 'VITAE Experience'}</p>
                    <p className="font-body text-white text-sm">{language === 'es' ? 'Agenda una visita personalizada' : 'Schedule a private showing'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-outline-variant/10 pb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">download</span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{language === 'es' ? 'Información Técnica' : 'Technical Info'}</p>
                    <p className="font-body text-white text-sm">{language === 'es' ? 'Descarga el Brochure Completo' : 'Download Complete Brochure'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-low/80 border border-outline-variant/10 p-8 md:p-16 backdrop-blur-xl">
               <ContactForm villaName="VITAE Residences" lang={language as any} />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-8 bg-background border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-sm">
              <div className="h-10 w-32 relative mb-8">
                <Image src="/vitae-logo.png" alt="VITAE" fill className="object-contain" unoptimized />
              </div>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
                {language === 'es' 
                  ? 'El primer ecosistema residencial de alto rendimiento diseñado para la evolución humana en Vistacana.' 
                  : 'The first high-performance residential ecosystem designed for human evolution in Vistacana.'}
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">public</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">share</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div>
                <h5 className="font-headline text-white text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Navegación</h5>
                <ul className="space-y-4">
                  <li><Link href="#performance" className="font-label text-[10px] uppercase text-on-surface-variant hover:text-primary transition-colors tracking-widest">{t.nav.performance}</Link></li>
                  <li><Link href="#wellness" className="font-label text-[10px] uppercase text-on-surface-variant hover:text-primary transition-colors tracking-widest">{t.nav.cycle}</Link></li>
                  <li><Link href="#villas" className="font-label text-[10px] uppercase text-on-surface-variant hover:text-primary transition-colors tracking-widest">{t.nav.villas}</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-headline text-white text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Contacto</h5>
                <p className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mb-2">Vistacana, Punta Cana</p>
                <p className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest">info@vitaeresidences.com</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              <div className="font-label text-[9px] uppercase tracking-[0.4em] text-white/20 flex flex-wrap items-center gap-1 text-center md:text-left">
                <span>© 2026 VITAE residences. Creado con ❤️ por</span>
                <a href="https://www.contextoarquitectura.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline underline-offset-4 decoration-primary/30">CNTXT arquitectura</a>
                <span>, en Medellín Colombia.</span>
              </div>
              <div className="text-[8px] text-white/5 tracking-[0.5em] uppercase text-center md:text-left">
                Build ID: {new Date().toISOString().split('T')[0]}-FINAL
              </div>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="font-label text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="font-label text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
