'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { RadioStation, MapComponentProps } from '@/app/types';

// Componente para actualizar la vista del mapa cuando cambia la estación seleccionada
function MapViewController({ selectedStation }: { selectedStation: RadioStation | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedStation) {
      map.flyTo(
        [selectedStation.coordinates.lat, selectedStation.coordinates.lng],
        15,
        { duration: 1.5 }
      );
    }
  }, [selectedStation, map]);

  return null;
}

export default function MapComponent({ stations, selectedStation, onStationSelect }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);

  // Calcular el centro del mapa basado en todas las estaciones
  const calculateCenter = (): [number, number] => {
    if (stations.length === 0) {
      // Centro de Huancayo por defecto
      return [-9.92882, -76.23989];
    }

    const avgLat = stations.reduce((sum, station) => sum + station.coordinates.lat, 0) / stations.length;
    const avgLng = stations.reduce((sum, station) => sum + station.coordinates.lng, 0) / stations.length;

    return [avgLat, avgLng];
  };

  // Crear iconos personalizados para los marcadores (más pequeños y precisos)
  const createCustomIcon = (station: RadioStation, isSelected: boolean) => {
    const size = isSelected ? 8 : 6;
    const iconHtml = `
      <div style="
        width: ${size * 2}px;
        height: ${size * 2}px;
        background-color: ${station.color};
        border: 2px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 ${isSelected ? '12px' : '6px'} ${station.color}80;
        animation: ${isSelected ? 'pulse 2s infinite' : 'none'};
      "></div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [size * 2, size * 2],
      iconAnchor: [size, size],
      popupAnchor: [0, -size],
    });
  };

  const center = calculateCenter();

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={center}
        zoom={13}
        ref={mapRef}
        className="w-full h-full z-0"
        zoomControl={false}
        attributionControl={true}
        style={{ background: '#0a0a0c' }}
      >
        {/* Capa de tiles con estilo oscuro personalizado */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          className="map-tiles"
        />

        {/* Controlador de vista del mapa */}
        <MapViewController selectedStation={selectedStation} />

        {/* Renderizar estaciones de radio */}
        {stations.map((station) => {
          const isSelected = selectedStation?.id === station.id;

          return (
            <Marker
              key={station.id}
              position={[station.coordinates.lat, station.coordinates.lng]}
              icon={createCustomIcon(station, isSelected)}
              eventHandlers={{
                click: () => {
                  onStationSelect(station);
                },
              }}
            >
                <Popup
                  className="custom-popup"
                  closeButton={false}
                >
                  <div className="bg-[#1a1a1c] p-4 rounded-lg border border-[#2a2a2a] shadow-xl min-w-[220px]">
                    <h3 
                      className="font-bold text-lg mb-2 tracking-tight"
                      style={{ color: station.color }}
                    >
                      {station.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-[#FFA806] font-semibold text-base">
                        {station.frequency}
                      </p>
                      <p className="text-[#ccc] text-sm">
                        {station.location}
                      </p>
                      <p className="text-[#888] text-xs mt-2">
                        {station.signalStrength}
                      </p>
                    </div>
                  </div>
                </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Estilos adicionales para animaciones */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .custom-marker {
          background: transparent !important;
          border: none !important;
        }

        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }

        .leaflet-popup-tip {
          background: #1a1a1c !important;
          border: 1px solid #2a2a2a !important;
        }

        .custom-popup .leaflet-popup-close-button {
          display: none;
        }

        /* Personalización del control de atribución */
        .leaflet-control-attribution {
          background: rgba(26, 26, 28, 0.8) !important;
          color: #888 !important;
          font-size: 10px !important;
          padding: 2px 6px !important;
          border-radius: 4px !important;
        }

        .leaflet-control-attribution a {
          color: #F28211 !important;
        }

        /* Eliminar el fondo blanco por defecto */
        .leaflet-container {
          background: #0a0a0c !important;
        }

        /* Mejorar la apariencia de los tiles */
        .map-tiles {
          filter: brightness(0.9) contrast(1.1);
        }
      `}</style>
    </div>
  );
}
