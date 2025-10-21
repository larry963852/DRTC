import type { RadioStation } from '@/app/types';

/**
 * Base de datos de estaciones de radio
 * Incluye todas las emisoras con su información completa
 */
export const radioStations: RadioStation[] = [
  {
    id: 1,
    name: "Radio Yauyipampa",
    frequency: "98.5 MHz",
    location: "Yauyipampa (Planta)",
    address: "Yauyipampa, Huancayo, Perú",
    signalStrength: "Strong (95%)",
    transmissionRange: "50 km radius",
    description: "Emisora principal ubicada en la planta de Yauyipampa, transmitiendo las mejores noticias y entretenimiento de la región.",
    color: "#F28211",
    coordinates: { lat: -12.0642, lng: -75.2684 }
  },
  {
    id: 2,
    name: "Radio Pachar",
    frequency: "101.2 MHz",
    location: "Pachar",
    address: "Pachar, Huancayo, Perú",
    signalStrength: "Moderate (85%)",
    transmissionRange: "45 km radius",
    description: "Radio comunitaria de Pachar, conectando a la comunidad con música, noticias locales y programación cultural.",
    color: "#1C20E9",
    coordinates: { lat: -12.0647, lng: -75.2694 }
  },
  {
    id: 3,
    name: "Radio Alto Perú",
    frequency: "95.7 MHz",
    location: "Barrio Alto Perú",
    address: "Barrio Alto Perú, Huancayo, Perú",
    signalStrength: "Strong (90%)",
    transmissionRange: "40 km radius",
    description: "Emisora del Barrio Alto Perú, ofreciendo programación variada y de calidad para toda la familia.",
    color: "#3B82F6",
    coordinates: { lat: -12.0414, lng: -75.2950 }
  },
  {
    id: 4,
    name: "Radio Huancampata",
    frequency: "103.9 MHz",
    location: "Huancampata (Piedra Larga)",
    address: "Huancampata, Piedra Larga, Huancayo, Perú",
    signalStrength: "Strong (88%)",
    transmissionRange: "42 km radius",
    description: "Radio Huancampata, transmitiendo desde Piedra Larga con las mejores frecuencias de la zona.",
    color: "#8B5CF6",
    coordinates: { lat: -12.0360, lng: -75.1178 }
  }
];

/**
 * Obtener una estación por su ID
 */
export const getStationById = (id: number): RadioStation | undefined => {
  return radioStations.find(station => station.id === id);
};

/**
 * Obtener estaciones por rango de frecuencia
 */
export const getStationsByFrequencyRange = (minMhz: number, maxMhz: number): RadioStation[] => {
  return radioStations.filter(station => {
    const frequency = parseFloat(station.frequency.replace(' MHz', ''));
    return frequency >= minMhz && frequency <= maxMhz;
  });
};
