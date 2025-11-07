/**
 * Tipos compartidos para el proyecto DRTC - Radio Stations Explorer
 */

/**
 * Representa una estación de radio con toda su información
 */
export interface RadioStation {
  /** Unique station identifier */
  id: number;

  /** Station name */
  name: string;

  /** Transmission frequency (e.g., "TV 8 / FM 101.3 MHz") */
  frequency: string;

  /** Main location */
  location: string;

  /** Full address */
  address: string;

  /** Type of transmission system (e.g., "TV-FM", "FM", "TV") */
  systemType: string;

  /** Operational status (e.g., "Operativo", "Inactivo") */
  status: string;

  /** Description or technical report */
  description: string;

  /** Identifying color in hexadecimal format */
  color: string;

  /** Geographic coordinates */
  coordinates: {
    /** Latitude */
    lat: number;
    /** Longitude */
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
  /** Referencia al mapa de Leaflet */
  mapRef?: React.MutableRefObject<L.Map | null>;
}
