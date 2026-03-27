/* ─────────────────────────────────────────────
   VILLA DATA (MULTI-LANGUAGE)
───────────────────────────────────────────── */

export type Villa = {
  slug: string;
  badge: string;
  name: string;
  tagline: string;
  category: string; // Used for "Profile" based selection
  description: string; // Expanded description
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

export const VILLAS: Record<'es' | 'en', Record<string, Villa>> = {
  es: {
    starters: {
      slug: 'starters',
      badge: 'Model Starters',
      name: 'The Biophilic Starter',
      tagline: 'Rendimiento desde el primer día.',
      category: 'Inversionista Atleta',
      description: 'Ideal para quienes buscan su primera propiedad de alto rendimiento o una inversión inteligente en el HUB de Vistacana. Un espacio eficiente que no sacrifica la regeneración biológica.',
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
      category: 'Residente Visionario',
      description: 'Diseñado para el residente de alto rendimiento que busca el santuario definitivo. Triple altura, control circadiano y sistemas de bio-hacking integrados para una vida sin límites.',
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
  },
  en: {
    starters: {
      slug: 'starters',
      badge: 'Model Starters',
      name: 'The Biophilic Starter',
      tagline: 'Performance from day one.',
      category: 'Athlete Investor',
      description: 'Ideal for those seeking their first high-performance property or a smart investment in the Vistacana HUB. An efficient space that does not sacrifice biological regeneration.',
      area: '181 m²',
      bedrooms: '3 King Bedrooms',
      baths: '2.5 – 3.5 Baths',
      floors: '2 Floors',
      price: 'From USD 320,000',
      heroImage: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (1).png',
      gallery: [
        { src: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (1).png', caption: 'Exterior facade – main access' },
        { src: '/renders/WELLNESS_TIPOLOGÍA STANDARD_10.03.26 (2).png', caption: 'Side view – private garden' },
        { src: '/renders/WELLNESS_ESTANCIA_10.03.26.png', caption: 'Activation trails – Common area' },
        { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (3).png', caption: 'Lounge zone and active rest' },
      ],
      features: [
        { icon: 'bed', label: '3 King Bedrooms', detail: 'Master bedroom with walk-in closet and garden view' },
        { icon: 'shower', label: '2.5 – 3.5 Baths', detail: 'Natural stone bathrooms with rain showers' },
        { icon: 'work', label: 'Service quarters', detail: 'Room + private bathroom on the ground floor' },
        { icon: 'potted_plant', label: 'Living Walls', detail: 'Integrated biological filters in structure' },
        { icon: 'garage', label: 'Double Parking', detail: 'Covered garage for 2 vehicles' },
        { icon: 'deck', label: 'Private Terrace', detail: 'Noble wood deck with BBQ area' },
      ],
      tech: [
        { icon: 'sensor_door', label: 'Basic Smarthome' },
        { icon: 'water_drop', label: 'Water Filtration' },
        { icon: 'solar_power', label: 'Solar Panels op.' },
        { icon: 'air', label: 'Cross Ventilation' },
      ],
      amenities: [
        { icon: 'sports_tennis', label: 'Padel Courts' },
        { icon: 'fitness_center', label: 'Gym & Calisthenics' },
        { icon: 'spa', label: 'Spa & Recovery' },
        { icon: 'self_improvement', label: 'Meditation Zone' },
        { icon: 'directions_run', label: 'Active Trails' },
        { icon: 'pool', label: 'Common Pools' },
      ],
    },
    beta: {
      slug: 'beta',
      badge: 'Model Beta',
      name: 'Regenerative Sanctuary',
      tagline: 'The ultimate standard in human performance.',
      category: 'Visionary Resident',
      description: 'Designed for the high-performance resident seeking the ultimate sanctuary. Triple height, circadian control, and integrated bio-hacking systems for a life without limits.',
      area: '240 m²',
      bedrooms: '4 King Bedrooms',
      baths: '3.5 – 4.5 Baths',
      floors: '3 Floors',
      price: 'From USD 490,000',
      heroImage: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (1).png',
      gallery: [
        { src: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (1).png', caption: 'Premium facade – night view' },
        { src: '/renders/WELLNESS_TIPOLOGÍA PREMIUM_10.03.26 (2).png', caption: 'Volumetrics and plant integration' },
        { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (1).png', caption: 'Recovery zone – exclusive spa' },
        { src: '/renders/WELLNESS_ZONA COMÚN_10.03.26 (2).png', caption: 'Multifunctional arena – high intensity' },
      ],
      features: [
        { icon: 'bed', label: '4 King Bedrooms', detail: 'Master suite with private terrace and outdoor jacuzzi' },
        { icon: 'shower', label: '3.5 – 4.5 Baths', detail: 'Spa bathrooms with double marble sink and chromatic rain' },
        { icon: 'thermostat', label: 'Smart Thermal Control', detail: 'Intelligent circadian climate system' },
        { icon: 'light_mode', label: 'Circadian Lighting', detail: 'Lighting tuned to human biological rhythm' },
        { icon: 'water_drop', label: 'Advanced Filtration', detail: '6-stage alkaline filtration system' },
        { icon: 'pool', label: 'Private Plunge Pool', detail: 'Thermal contrast pool integrated in deck' },
      ],
      tech: [
        { icon: 'home_iot_device', label: 'Advanced Smarthome' },
        { icon: 'monitor_heart', label: 'Biometric Metrics' },
        { icon: 'solar_power', label: 'Off-grid ready' },
        { icon: 'air', label: 'HEPA Purification' },
      ],
      amenities: [
        { icon: 'sports_tennis', label: 'Padel Courts' },
        { icon: 'fitness_center', label: 'Gym & Calisthenics' },
        { icon: 'spa', label: 'Sublevel Spa' },
        { icon: 'self_improvement', label: 'Calm Zone' },
        { icon: 'directions_run', label: 'Running Track' },
        { icon: 'pool', label: 'Thermal Pools' },
      ],
    },
  },
};
