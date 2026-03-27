/* ─────────────────────────────────────────────
   VILLA DATA
───────────────────────────────────────────── */

export type Villa = {
  slug: string;
  badge: string;
  name: string;
  tagline: string;
  area: string;
  bedrooms: string;
  baths: string;
  floors: string;
  price: string;
  heroImage: string;
  gallery: { src: string; caption: string }[];
  features: { icon: string; label: string; detail: string }[];
  tech: { icon: string; label: string }[];
  amenities: { icon: string; label: string }[];
};

export const VILLAS: Record<string, Villa> = {
  starters: {
    slug: 'starters',
    badge: 'Model Starters',
    name: 'The Biophilic Starter',
    tagline: 'Rendimiento desde el primer día.',
    area: '181 m²',
    bedrooms: '3 Habs. King',
    baths: '2.5 – 3.5 Baños',
    floors: '2 Plantas',
    price: 'Desde USD 320,000',
    heroImage: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (1).png',
    gallery: [
      { src: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (1).png', caption: 'Fachada exterior – acceso principal' },
      { src: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (2).png', caption: 'Vista lateral – jardín privado' },
      { src: '/renders/WELLNESS_ESTANCIA_10.03.26.png', caption: 'Senderos de activación – Área común' },
      { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (3).png', caption: 'Zona lounge y descanso activo' },
    ],
    features: [
      { icon: 'bed', label: '3 Habitaciones King', detail: 'Dormitorio principal con walk-in closet y vista al jardín' },
      { icon: 'shower', label: '2.5 – 3.5 Baños', detail: 'Baños en piedra natural con duchas de lluvia' },
      { icon: 'work', label: 'Cuarto de servicio', detail: 'Habitación + baño privado en planta baja' },
      { icon: 'potted_plant', label: 'Muros Verdes', detail: 'Biofiltros vivos integrados en estructura' },
      { icon: 'garage', label: 'Parqueo doble', detail: 'Cochera cubierta para 2 vehículos' },
      { icon: 'deck', label: 'Terraza privada', detail: 'Deck de madera noble con zona BBQ' },
    ],
    tech: [
      { icon: 'sensor_door', label: 'Domótica básica' },
      { icon: 'water_drop', label: 'Filtración de agua' },
      { icon: 'solar_power', label: 'Paneles solares op.' },
      { icon: 'air', label: 'Ventilación cruzada' },
    ],
    amenities: [
      { icon: 'sports_tennis', label: 'Canchas de Pádel' },
      { icon: 'fitness_center', label: 'Gym & Calistenia' },
      { icon: 'spa', label: 'Spa & Recuperación' },
      { icon: 'self_improvement', label: 'Zona Meditación' },
      { icon: 'directions_run', label: 'Senderos Activos' },
      { icon: 'pool', label: 'Piscinas Comunes' },
    ],
  },
  beta: {
    slug: 'beta',
    badge: 'Model Beta',
    name: 'Regenerative Sanctuary',
    tagline: 'El máximo estándar de rendimiento humano.',
    area: '240 m²',
    bedrooms: '4 Habs. King',
    baths: '3.5 – 4.5 Baños',
    floors: '3 Plantas',
    price: 'Desde USD 490,000',
    heroImage: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (1).png',
    gallery: [
      { src: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (1).png', caption: 'Fachada premium – vista nocturna' },
      { src: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (2).png', caption: 'Volumetría e integración vegetal' },
      { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (1).png', caption: 'Zona de recuperación – spa exclusivo' },
      { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (2).png', caption: 'Arena multifuncional – alta intensidad' },
    ],
    features: [
      { icon: 'bed', label: '4 Habitaciones King', detail: 'Suite master con terraza privada y jacuzzi exterior' },
      { icon: 'shower', label: '3.5 – 4.5 Baños', detail: 'Baños de spa con doble lavabo en mármol y lluvia cromática' },
      { icon: 'thermostat', label: 'Smart Thermal Control', detail: 'Sistema de climatización inteligente circadiano' },
      { icon: 'light_mode', label: 'Circadian Lighting', detail: 'Iluminación sintonizada al ritmo biológico humano' },
      { icon: 'water_drop', label: 'Advanced Filtration', detail: 'Sistema de filtración alcalina de 6 etapas' },
      { icon: 'pool', label: 'Plunge Pool privada', detail: 'Piscina de contraste térmico integrada en deck' },
    ],
    tech: [
      { icon: 'home_iot_device', label: 'Domótica avanzada' },
      { icon: 'monitor_heart', label: 'Métricas biométricas' },
      { icon: 'solar_power', label: 'Off-grid ready' },
      { icon: 'air', label: 'Purificación HEPA' },
    ],
    amenities: [
      { icon: 'sports_tennis', label: 'Canchas de Pádel' },
      { icon: 'fitness_center', label: 'Gym & Calistenia' },
      { icon: 'spa', label: 'Spa Subnivel' },
      { icon: 'self_improvement', label: 'Zona de Calma' },
      { icon: 'directions_run', label: 'Pista de Atletismo' },
      { icon: 'pool', label: 'Piscinas Térmicas' },
    ],
  },
};
