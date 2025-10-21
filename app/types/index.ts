/**
 * Tipos compartidos para el proyecto DRTC - Radio Stations Explorer
 */

/**
 * Representa una estación de radio con toda su información
 */
export interface RadioStation {
  /** Identificador único de la estación */
  id: number;
  /** Nombre de la estación */
  name: string;
  /** Frecuencia de transmisión (ej: "98.5 MHz") */
  frequency: string;
  /** Ubicación principal */
  location: string;
  /** Dirección completa */
  address: string;
  /** Nivel de señal (ej: "Strong (95%)") */
  signalStrength: string;
  /** Rango de transmisión (ej: "50 km radius") */
  transmissionRange: string;
  /** Descripción de la estación */
  description: string;
  /** Color identificativo en formato hexadecimal */
  color: string;
  /** Coordenadas geográficas */
  coordinates: {
    /** Latitud */
    lat: number;
    /** Longitud */
    lng: number;
  };
}

/**
 * Props para el componente de mapa
 */
export interface MapComponentProps {
  /** Lista de estaciones a mostrar en el mapa */
  stations: RadioStation[];
  /** Estación actualmente seleccionada */
  selectedStation: RadioStation | null;
  /** Callback cuando se selecciona una estación */
  onStationSelect: (station: RadioStation) => void;
}
