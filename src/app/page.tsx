'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.65;
    }
  }, []);

  return (
    <div className="selection:bg-primary selection:text-on-primary bg-background">
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:bg-transparent">
<div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
<div className="relative h-10 w-32">
  <Image src="/logo-final.png" alt="VITAE Logo" fill className="object-contain" priority />
</div>
<div className="hidden md:flex space-x-12">
<a className="text-white/70 hover:text-white transition-colors font-manrope uppercase tracking-[0.2em] text-[10px] lg:text-xs" href="#performance">Performance</a>
<a className="text-white/70 hover:text-white transition-colors font-manrope uppercase tracking-[0.2em] text-[10px] lg:text-xs" href="#cycle">Cycle</a>
<a className="text-white/70 hover:text-white transition-colors font-manrope uppercase tracking-[0.2em] text-[10px] lg:text-xs" href="#villas">Villas</a>
<a className="text-primary font-bold border-b border-primary pb-1 font-manrope uppercase tracking-[0.2em] text-[10px] lg:text-xs" href="#evolution">Evolution</a>
</div>
<button className="bg-primary text-on-primary px-6 py-2 font-manrope uppercase tracking-widest text-[10px] font-bold hover:bg-primary-container transition-all">
                Access
            </button>
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
<motion.span variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="block font-label uppercase tracking-[0.4em] text-primary mb-8 text-xs lg:text-sm">High Performance Living</motion.span>
<motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: "easeOut" }} className="font-headline font-extrabold text-5xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tighter">
                    Ciencia convertida <br/>en espacio
                </motion.h1>
<motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    El primer ecosistema de alto rendimiento humano en Vistacana. Un santuario de regeneración y potencial ilimitado.
                </motion.p>
<motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-on-primary px-12 py-5 font-manrope uppercase tracking-[0.2em] text-xs font-bold transition-transform">
                        Inicia tu proceso
                    </motion.button>
<a href="#masterplan">
  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-primary cursor-pointer hover:opacity-80 transition-all">
  <span className="font-manrope uppercase tracking-[0.2em] text-[10px]">Ver Masterplan</span>
  <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </motion.div>
</a>
</motion.div>
</motion.div>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="font-label text-[10px] tracking-[0.3em] uppercase mb-4">Scroll to Explore</span>
<div className="w-[1px] h-12 bg-primary"></div>
</motion.div>
</section>
{/* DISRUPTIVE TARGET BLOCK */}
<motion.section id="performance" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-32 px-8 bg-surface-container-lowest">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<h2 className="font-headline font-light text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                        No es un club social <span className="text-primary italic">tradicional</span>; es un entorno donde la <span className="font-bold">excelencia</span> es normal.
                    </h2>
</div>
<div className="lg:col-span-4 border-l border-outline-variant/20 pl-12 py-4">
<p className="font-body text-on-surface-variant text-base leading-loose">
                        Diseñado para atletas de la vida, emprendedores de alto impacto y visionarios que entienden que el entorno es el catalizador de la evolución biológica.
                    </p>
</div>
</div>
</motion.section>
{/* EL CICLO METABÓLICO */}
<motion.section id="cycle" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-24 bg-surface">
<div className="px-8 mb-20 max-w-[1920px] mx-auto">
<h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-4">The Performance Cycle</h3>
<h2 className="font-headline text-5xl font-bold text-white tracking-tight">El Ciclo Metabólico</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 h-full min-h-[600px] border-t border-outline-variant/10">
{/* Activation */}
<div className="group relative overflow-hidden bg-surface-container-low p-10 border-r border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-end min-h-[500px]">
<div className="absolute top-10 left-10">
  <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">bolt</span>
</div>
<span className="font-headline text-7xl font-extrabold text-outline-variant/10 absolute -right-6 -top-6">01</span>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="font-headline text-sm font-bold text-white mb-2 uppercase tracking-[0.3em]">Activation</h4>
<p className="font-body text-on-surface-variant text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Preparación neuro-fisiológica. Despierta tus sistemas metabólicos para el rendimiento óptimo a través de senderos de baja intensidad.
                        </p>
</div>
<Image 
  className="absolute inset-0 object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 -z-10" 
  alt="Peaceful nature trails for activation" 
  src="/renders/WELLNESS_ESTANCIA_10.03.26.png"
  fill
/>
<div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</div>
{/* Progression */}
<div className="group relative overflow-hidden bg-surface-container-low p-10 border-r border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-end min-h-[500px]">
<div className="absolute top-10 left-10">
  <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">trending_up</span>
</div>
<span className="font-headline text-7xl font-extrabold text-outline-variant/10 absolute -right-6 -top-6">02</span>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="font-headline text-sm font-bold text-white mb-2 uppercase tracking-[0.3em]">Progression</h4>
<p className="font-body text-on-surface-variant text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Foco en ritmo y resistencia. Pistas de atletismo, zonas de cardio outdoor y circuitos de calistenia ligera.
                        </p>
</div>
<Image 
  className="absolute inset-0 object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 -z-10" 
  alt="High-end gym facilities for progression" 
  src="/renders/WELLNESS_GIMNASIO_10.03.26.png"
  fill
/>
<div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</div>
{/* Intensity */}
<div className="group relative overflow-hidden bg-surface-container-highest p-10 border-r border-outline-variant/10 flex flex-col justify-end min-h-[500px]">
<div className="absolute top-10 left-10">
  <span className="material-symbols-outlined text-primary text-5xl opacity-90 scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
</div>
<span className="font-headline text-7xl font-extrabold text-primary/10 absolute -right-6 -top-6">03</span>
<div className="relative z-10">
<h4 className="font-headline text-sm font-bold text-white mb-2 uppercase tracking-[0.3em]">Intensity</h4>
<p className="font-body text-on-surface-variant text-[11px] leading-relaxed">
                            El núcleo del proyecto. Canchas de Pádel y Arena Multifuncional de Calistenia para el máximo esfuerzo físico.
                        </p>
</div>
<Image 
  className="absolute inset-0 object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 -z-10" 
  alt="Modern padel court with architectural lighting" 
  src="/renders/WELLNESS_ZONA COMÚN_10.03.26 (2).png"
  fill
/>
<div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
</div>
{/* Calm */}
<div className="group relative overflow-hidden bg-surface-container-low p-10 border-r border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-end min-h-[500px]">
<div className="absolute top-10 left-10">
  <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">self_improvement</span>
</div>
<span className="font-headline text-7xl font-extrabold text-outline-variant/10 absolute -right-6 -top-6">04</span>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="font-headline text-sm font-bold text-white mb-2 uppercase tracking-[0.3em]">Calm</h4>
<p className="font-body text-on-surface-variant text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Descenso controlado y meditación. Zonas de estiramiento, plataformas contemplativas y áreas lounge sombreadas.
                        </p>
</div>
<Image 
  className="absolute inset-0 object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 -z-10" 
  alt="Lounge area for calm and meditation" 
  src="/renders/WELLNESS_ZONA COMÚN_10.03.26 (3).png"
  fill
/>
<div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</div>
{/* Recovery */}
<div className="group relative overflow-hidden bg-[#1a1a1a] p-10 hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-end min-h-[500px]">
<div className="absolute top-10 left-10">
  <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">spa</span>
</div>
<span className="font-headline text-7xl font-extrabold text-outline-variant/10 absolute -right-6 -top-6">05</span>
<div className="mt-20 relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="font-headline text-sm font-bold text-white mb-2 uppercase tracking-[0.3em]">Recovery</h4>
<p className="font-body text-on-surface-variant text-[11px] leading-relaxed">
                            Regeneración celular profunda. Subnivel spa con piscinas de contraste térmico, sauna y baño turco especializado.
                        </p>
</div>
<Image 
  className="absolute inset-0 object-cover opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 -z-10" 
  alt="Luxury recovery spa and pool area" 
  src="/renders/WELLNESS_ZONA COMÚN_10.03.26 (1).png"
  fill
/>
<div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</div>
</div>
</motion.section>
{/* MASTERPLAN TECHNICAL GRID */}
<motion.section id="masterplan" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-32 px-8 bg-surface-dim relative">
<div className="absolute inset-0 blueprint-grid"></div>
<div className="max-w-[1920px] mx-auto relative z-10">
<div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative z-10">
  <div className="bg-surface-container p-8 border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-3xl mb-4">square_foot</span>
    <h5 className="font-headline text-3xl font-bold text-white mb-1">8,537.63</h5>
    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">m2 de terreno total</p>
  </div>
  <div className="bg-surface-container p-8 border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-3xl mb-4">potted_plant</span>
    <h5 className="font-headline text-3xl font-bold text-white mb-1">1,791</h5>
    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">m2 Áreas comunes peatonales</p>
  </div>
  <div className="bg-surface-container p-8 border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-3xl mb-4">home</span>
    <h5 className="font-headline text-3xl font-bold text-white mb-1">22</h5>
    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Residencias de alto rendimiento</p>
  </div>
  <div className="bg-surface-container p-8 border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-3xl mb-4">calendar_today</span>
    <h5 className="font-headline text-3xl font-bold text-white mb-1">Feb 2026</h5>
    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Inicio Fase 1</p>
  </div>
</div>
<div className="lg:col-span-12 bg-surface-container h-[600px] border border-outline-variant/20 flex items-center justify-center group overflow-hidden relative z-10">
<motion.div 
  initial={{ scale: 1.15 }} 
  whileInView={{ scale: 1 }} 
  transition={{ duration: 1.5, ease: "easeOut" }} 
  className="relative w-full h-full"
>
  <Image 
    className="object-cover opacity-90 group-hover:grayscale-0 transition-all duration-1000" 
    alt="Architectural technical drawing of a luxury villa masterplan" 
    src="/renders/VITAE_PLANTA_C.png"
    fill
  />
</motion.div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-label uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                                Expand Technical Blueprint
                            </motion.button>
</div>
</div>
</div>
</motion.section>
{/* VILLAS PRODUCT CARDS */}
<motion.section id="villas" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-32 px-8 bg-background">
<div className="max-w-[1920px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div>
<h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-6">The Residences</h3>
<h2 className="font-headline text-6xl font-bold text-white leading-none">Villas de Alto <br/>Rendimiento</h2>
</div>
<p className="font-body text-on-surface-variant max-w-md text-sm leading-loose">
                        Espacios de triple altura, materiales nobles y tecnología de bio-hacking integrada para asegurar el descanso y la regeneración celular.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-outline-variant/10">
{/* Villa Item 1 */}
<div className="group border-r border-outline-variant/10">
<div className="aspect-[4/5] overflow-hidden relative">
<motion.div 
  initial={{ scale: 1.15 }} 
  whileInView={{ scale: 1 }} 
  transition={{ duration: 1.2, ease: "easeOut" }} 
  className="relative w-full h-full"
>
  <Image 
    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
    alt="Modern biophilic architecture starter villa" 
    src="/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (1).png"
    fill
  />
</motion.div>
<div className="absolute top-6 left-6 bg-primary text-on-primary px-3 py-1 font-label text-[10px] uppercase tracking-widest font-bold">Model Starters</div>
</div>
<div className="p-10 bg-surface-container-low group-hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start mb-6">
  <h4 className="font-headline text-2xl font-bold text-white">The Biophilic Starter</h4>
  <span className="font-label text-primary font-bold text-lg">181 m²</span>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">bed</span>
                                    3 Habitaciones King
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">shower</span>
                                    2.5 - 3.5 Baños
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">work</span>
                                    Cuarto de servicio incluido
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">potted_plant</span>
                                    Muros Verdes Integrados
                                </li>
</ul>
<button className="w-full border border-primary/30 text-primary py-4 font-manrope uppercase tracking-[0.2em] text-[10px] hover:bg-primary hover:text-on-primary transition-all">
                                Solicitar Dossier
                            </button>
</div>
</div>
{/* Villa Item 2 (Active/Focus) */}
<div className="group border-r border-outline-variant/10">
<div className="aspect-[4/5] overflow-hidden relative">
<motion.div 
  initial={{ scale: 1.15 }} 
  whileInView={{ scale: 1 }} 
  transition={{ duration: 1.2, ease: "easeOut" }} 
  className="relative w-full h-full"
>
  <Image 
    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
    alt="Luxury regenerative sanctuary villa exterior" 
    src="/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (1).png"
    fill
  />
</motion.div>
<div className="absolute top-6 left-6 bg-primary text-on-primary px-3 py-1 font-label text-[10px] uppercase tracking-widest font-bold">Model Beta</div>
</div>
<div className="p-10 bg-surface-container transition-colors">
<div className="flex justify-between items-start mb-6">
  <h4 className="font-headline text-2xl font-bold text-white">Regenerative Sanctuary</h4>
  <span className="font-label text-primary font-bold text-lg">240 m²</span>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">thermostat</span>
                                    Smart Thermal Control
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">light_mode</span>
                                    Circadian Lighting System
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">water_drop</span>
                                    Advanced Water Filtration
                                </li>
</ul>
<button className="w-full bg-primary text-on-primary py-4 font-manrope uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-[0.98] transition-all">
                                Solicitar Dossier
                            </button>
</div>
</div>
{/* Villa Item 3 */}
<div className="group">
<div className="aspect-[4/5] overflow-hidden relative">
<motion.div 
  initial={{ scale: 1.15 }} 
  whileInView={{ scale: 1 }} 
  transition={{ duration: 1.2, ease: "easeOut" }} 
  className="relative w-full h-full"
>
  <Image 
    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
    alt="High performance loft interior design" 
    src="/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (2).png"
    fill
  />
</motion.div>
<div className="absolute top-6 left-6 bg-primary text-on-primary px-3 py-1 font-label text-[10px] uppercase tracking-widest font-bold">Model Delta</div>
</div>
<div className="p-10 bg-surface-container-low group-hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start mb-6">
  <h4 className="font-headline text-2xl font-bold text-white">Performance Loft</h4>
  <span className="font-label text-primary font-bold text-lg">301 m²</span>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">sound_detection_dog_barking</span>
                                    Acoustic Isolation Elite
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">air</span>
                                    HEPA Air Purification
                                </li>
<li className="flex items-center gap-4 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary text-xl">shield</span>
                                    High-Performance Security
                                </li>
</ul>
<button className="w-full border border-primary/30 text-primary py-4 font-manrope uppercase tracking-[0.2em] text-[10px] hover:bg-primary hover:text-on-primary transition-all">
                                Solicitar Dossier
                            </button>
</div>
</div>
</div>
</div>
</motion.section>
{/* EVOLUTION TIMELINE SECTION */}
<motion.section id="evolution" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-40 px-8 bg-surface-dim relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-24">
      <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-primary mb-6">Evolution Timeline</h3>
      <h2 className="font-headline text-6xl font-bold text-white mb-8">Nuestra hoja de ruta</h2>
      <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-light">De la visión a la realidad física. Un ecosistema diseñado para escalar con la comunidad.</p>
    </div>
    
    <div className="relative border-l border-primary/20 ml-12 space-y-24 py-12">
      <div className="relative pl-16">
        <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(97,161,133,0.5)]"></div>
        <span className="font-label text-primary font-bold text-sm tracking-widest uppercase block mb-2">Febrero 2026</span>
        <h4 className="font-headline text-3xl font-bold text-white mb-4 italic">Inicio de la visión</h4>
        <p className="font-body text-on-surface-variant max-w-xl text-sm leading-relaxed">Conceptualización del ecosistema de alto rendimiento y adquisición estratégica del lote en Vistacana.</p>
      </div>
      
      <div className="relative pl-16">
        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-primary/40 rounded-full border border-primary"></div>
        <span className="font-label text-primary font-bold text-sm tracking-widest uppercase block mb-2">Marzo 2026</span>
        <h4 className="font-headline text-3xl font-bold text-white mb-4 italic">Masterplan & Diseño Final</h4>
        <p className="font-body text-on-surface-variant max-w-xl text-sm leading-relaxed">Finalización de la arquitectura biofílica y especificaciones técnicas de las 22 residencias exclusivas.</p>
      </div>

      <div className="relative pl-16 opacity-30">
        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-outline rounded-full border border-outline"></div>
        <span className="font-label text-on-surface-variant font-bold text-sm tracking-widest uppercase block mb-2">Q3 2026</span>
        <h4 className="font-headline text-3xl font-bold text-white mb-4 italic">Excavación & Fundación</h4>
        <p className="font-body text-on-surface-variant max-w-xl text-sm leading-relaxed">Preparación del terreno e inicio de obras de infraestructura común y el eje verde.</p>
      </div>
    </div>
  </div>
</motion.section>

{/* CTA FINAL */}
<motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-40 px-8 bg-surface text-center relative overflow-hidden border-t border-outline-variant/10">
<div className="absolute inset-0 bg-primary/5 opacity-30"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="font-headline text-4xl md:text-7xl font-bold text-white mb-12 leading-[1.1]">
                    Tu mayor activo es tu capacidad de recuperación
                </h2>
<p className="font-body text-on-surface-variant text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light">
                    Únete al ecosistema donde el lujo se encuentra con la longevidad. 
                </p>
<button className="bg-primary text-on-primary px-16 py-6 font-manrope uppercase tracking-[0.3em] text-xs font-extrabold hover:px-20 transition-all duration-500 shadow-2xl shadow-primary/20">
                    Inicia tu proceso de evolución
                </button>
</div>
</motion.section>
</main>
{/* Footer */}
<footer className="w-full border-t border-[#4e453c]/20 bg-[#1a1a1a] dark:bg-black">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 w-full max-w-[1920px] mx-auto">
<div className="space-y-8">
<div className="relative h-10 w-32">
  <Image src="/logo-final.png" alt="VITAE Logo" fill className="object-contain" />
</div>
<p className="font-inter text-[11px] tracking-widest uppercase leading-loose text-white/40">
                    Vistacana, Punta Cana<br/>
                    República Dominicana
                </p>
</div>
<div className="flex flex-col space-y-4">
<a className="font-inter text-[11px] tracking-widest uppercase leading-loose text-white/40 hover:text-primary transition-colors duration-500" href="#">Vistacana, Punta Cana</a>
<a className="font-inter text-[11px] tracking-widest uppercase leading-loose text-white/40 hover:text-primary transition-colors duration-500" href="#">Privacy Policy</a>
<a className="font-inter text-[11px] tracking-widest uppercase leading-loose text-white/40 hover:text-primary transition-colors duration-500" href="#">Technical Specifications</a>
</div>
<div className="md:text-right flex flex-col justify-between h-full">
<div className="space-y-4">
<span className="block font-inter text-[11px] tracking-widest uppercase leading-loose text-primary">Newsletter</span>
<div className="relative max-w-xs md:ml-auto">
<input className="w-full bg-transparent border-b border-outline-variant py-2 font-inter text-[10px] uppercase tracking-widest focus:outline-none focus:border-primary transition-colors text-white" placeholder="Email Address" type="email"/>
</div>
</div>
<div className="mt-12 font-inter text-[11px] tracking-widest uppercase leading-loose text-white/40">
                    © 2024 VITAE RESIDENCES. ALL RIGHTS RESERVED.
                </div>
</div>
</div>
</footer>

    </div>
  );
}
