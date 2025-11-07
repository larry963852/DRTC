'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LuRadioTower } from 'react-icons/lu';
import { renderToStaticMarkup } from 'react-dom/server';
import type { RadioStation, MapComponentProps } from '@/app/types';

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

function MapRefSetter({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) {
  const map = useMap();
  
  useEffect(() => {
    mapRef.current = map;
  }, [map, mapRef]);
  
  return null;
}

function ExternalMapRefSetter({ externalMapRef }: { externalMapRef?: React.MutableRefObject<any> }) {
  const map = useMap();
  
  useEffect(() => {
    if (externalMapRef) {
      externalMapRef.current = map;
    }
  }, [map, externalMapRef]);
  
  return null;
}

// Coordenadas centradas en Huánuco para vista general
const DEFAULT_CENTER: [number, number] = [-9.5, -76.4];
const DEFAULT_ZOOM = 9;

const getStatusBadgeStyles = (status: string) => {
  const normalized = status?.toLowerCase() ?? '';
  if (normalized.includes('operativo')) {
    return 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10';
  }
  return 'text-amber-200 border-amber-400/40 bg-amber-500/10';
};

export default function MapComponent({ stations, selectedStation, onStationSelect, mapRef: externalMapRef }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);

  const createCustomIcon = (station: RadioStation, isSelected: boolean) => {
    const size = isSelected ? 32 : 24;
    const iconHtml = renderToStaticMarkup(
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: 'rgba(27, 39, 56, 0.95)',
          borderRadius: '50%',
          border: `2px solid ${station.color}`,
          boxShadow: `0 0 ${isSelected ? 12 : 6}px ${station.color}66`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
        }}
      >
        <LuRadioTower size={isSelected ? 16 : 12} color="#ffffff" />
      </div>
    );

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2],
    });
  };

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="w-full h-full z-0"
        zoomControl={false}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapRefSetter mapRef={mapRef} />
        <ExternalMapRefSetter externalMapRef={externalMapRef} />
        <MapViewController selectedStation={selectedStation} />

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
                  <div className="bg-[#1b2738]/95 p-4 rounded-lg border border-white/10 shadow-xl min-w-[220px]">
                    <h3 
                      className="font-bold text-lg mb-2 tracking-tight"
                      style={{ color: station.color }}
                    >
                      {station.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-white font-semibold text-base">
                        {station.frequency}
                      </p>
                      <p className="text-white/70 text-sm">
                        {station.location}
                      </p>
                      <p className="text-white/60 text-xs">
                        {station.address}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-semibold uppercase tracking-wider">
                        <span className="px-2 py-1 rounded-full border border-white/15 text-white/70">
                          {station.systemType}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full border ${getStatusBadgeStyles(station.status)}`}
                        >
                          {station.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Popup>
            </Marker>
          );
        })}
      </MapContainer>

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
          background: #1b2738 !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .custom-popup .leaflet-popup-close-button {
          display: none;
        }
      `}</style>
    </div>
  );
}
