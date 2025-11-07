'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { radioStations } from '@/app/data/stations';
import type { RadioStation } from '@/app/types';
import type L from 'leaflet';

// Importación dinámica para evitar SSR con Leaflet
const MapComponent = dynamic(() => import('./components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#3b506d]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#f7c637] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-sm font-medium">Cargando mapa...</p>
        <p className="text-white/70 text-xs mt-2">Preparando visualización</p>
      </div>
    </div>
  ),
});

const getStatusBadgeStyles = (status: string) => {
  const normalized = status?.toLowerCase() ?? '';
  if (normalized.includes('operativo')) {
    return 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10';
  }
  return 'text-amber-200 border-amber-400/40 bg-amber-500/10';
};

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<RadioStation | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <div className="min-h-screen bg-[#1f2f45] flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-[1400px] h-[100vh] sm:h-[90vh] lg:h-[85vh] bg-[#24354c] backdrop-blur-sm rounded-none sm:rounded-xl lg:rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-[380px] bg-[#1b2738] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col max-h-[40vh] lg:max-h-full">
          <div className="p-4 sm:p-6 border-b border-white/5">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2e7ab7] to-[#1a4d7a] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="2" fill="white"/>
                  <path d="M8 16h8M10 19h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 10c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h1 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                  Radio Stations
                </h1>
                <p className="text-white/70 text-xs">
                  Explorador de Emisoras
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {selectedStation ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-[#2b3f55] p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h2 className="text-white font-bold text-xl sm:text-2xl mb-1 tracking-tight">
                        {selectedStation.name}
                      </h2>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full animate-pulse shadow-lg"
                            style={{ 
                              backgroundColor: selectedStation.color,
                              boxShadow: `0 0 12px ${selectedStation.color}80`
                            }}
                          />
                          <span className="text-white font-bold text-lg sm:text-xl">
                            {selectedStation.frequency}
                          </span>
                        </div>
                        <span
                          className={`inline-flex w-fit px-3 py-1 text-[11px] font-semibold uppercase tracking-widest rounded-full border ${getStatusBadgeStyles(selectedStation.status)}`}
                        >
                          {selectedStation.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke={selectedStation.color} strokeWidth="2"/>
                        <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke={selectedStation.color} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#22354c] p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="white" strokeWidth="2"/>
                        <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2"/>
                      </svg>
                      <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                        Ubicación
                      </span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1">
                      {selectedStation.location}
                    </p>
                    <p className="text-white/70 text-xs">
                      {selectedStation.address}
                    </p>
                  </div>

                  <div className="bg-[#22354c] p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                        Sistema
                      </span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1">
                      {selectedStation.systemType}
                    </p>
                    <p className="text-white/70 text-xs">
                      Configuración registrada en la DRTC
                    </p>
                  </div>

                  <div className="bg-[#22354c] p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                        Descripción
                      </span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {selectedStation.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 8V12L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-white/70 text-sm">
                  Selecciona una estación en el mapa
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 relative bg-[#1f2f45] min-h-[60vh] lg:min-h-0">
          <MapComponent 
            stations={radioStations}
            selectedStation={selectedStation}
            onStationSelect={setSelectedStation}
            mapRef={mapRef}
          />

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col gap-2 z-10">
            <button 
              onClick={handleZoomIn}
              className="w-10 h-10 bg-[#2e7ab7]/80 hover:bg-[#2e7ab7] border border-[#4a9fd8]/30 rounded-lg flex items-center justify-center transition-all shadow-lg text-white hover:shadow-[#2e7ab7]/50 hover:scale-105"
              title="Zoom In"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              onClick={handleZoomOut}
              className="w-10 h-10 bg-[#2e7ab7]/80 hover:bg-[#2e7ab7] border border-[#4a9fd8]/30 rounded-lg flex items-center justify-center transition-all shadow-lg text-white hover:shadow-[#2e7ab7]/50 hover:scale-105"
              title="Zoom Out"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-[#1b2738]/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10 shadow-xl z-10 max-w-[200px] sm:max-w-[250px]">
            <h4 className="text-[#decc9c] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Estaciones de Radio</h4>
            <div className="space-y-2 max-h-[150px] sm:max-h-[220px] overflow-y-auto pr-1 legend-scroll">
              {radioStations.map((station) => (
                <div 
                  key={station.id}
                  className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-all ${
                    selectedStation?.id === station.id 
                      ? 'bg-[#2e7ab7]/30 border border-[#f7c637]' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setSelectedStation(station)}
                >
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ 
                      backgroundColor: station.color,
                      boxShadow: selectedStation?.id === station.id ? `0 0 8px ${station.color}` : 'none'
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#decc9c] text-[10px] sm:text-xs font-medium truncate">{station.name}</p>
                    <p className="text-[#decc9c]/80 text-[9px] sm:text-[10px]">{station.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedStation && (
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/10">
                <p className="text-white/70 text-[9px] sm:text-[10px] mb-1 uppercase tracking-wider">Coordenadas:</p>
                <div className="flex gap-2 text-[10px] sm:text-[11px] font-mono">
                  <span className="text-white">Lat: {selectedStation.coordinates.lat.toFixed(4)}</span>
                  <span className="text-white">Lng: {selectedStation.coordinates.lng.toFixed(4)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .legend-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .legend-scroll::-webkit-scrollbar-track {
          background: rgba(27, 39, 56, 0.3);
          border-radius: 2px;
        }
        .legend-scroll::-webkit-scrollbar-thumb {
          background: rgba(222, 204, 156, 0.2);
          border-radius: 2px;
          transition: background 0.2s ease;
        }
        .legend-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(222, 204, 156, 0.35);
        }
        .legend-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(222, 204, 156, 0.2) rgba(27, 39, 56, 0.3);
        }
      `}</style>
    </div>
  );
}
