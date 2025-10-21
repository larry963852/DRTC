'use client';

import { useState } from 'react';
import GoogleMap from './components/GoogleMap';

interface RadioStation {
  id: number;
  name: string;
  frequency: string;
  location: string;
  address: string;
  signalStrength: string;
  transmissionRange: string;
  description: string;
  color: string;
  coordinates: { lat: number; lng: number };
}

const radioStations: RadioStation[] = [
  {
    id: 1,
    name: "Radio Yauyipampa",
    frequency: "98.5 MHz",
    location: "Yauyipampa (Planta)",
    address: "Yauyipampa, Perú",
    signalStrength: "Strong (95%)",
    transmissionRange: "50 km radius",
    description: "Emisora principal ubicada en la planta de Yauyipampa, transmitiendo las mejores noticias y entretenimiento de la región.",
    color: "#F28211",
    coordinates: { lat: -10.06425, lng: -76.2683611 }
  },
  {
    id: 2,
    name: "Radio Pachar",
    frequency: "101.2 MHz",
    location: "Pachar",
    address: "Pachar, Perú",
    signalStrength: "Moderate (85%)",
    transmissionRange: "45 km radius",
    description: "Radio comunitaria de Pachar, conectando a la comunidad con música, noticias locales y programación cultural.",
    color: "#1C20E9",
    coordinates: { lat: -10.264722, lng: -76.269444 }
  },
  {
    id: 3,
    name: "Radio Alto Perú",
    frequency: "95.7 MHz",
    location: "Barrio Alto Perú",
    address: "Barrio Alto Perú, Perú",
    signalStrength: "Strong (90%)",
    transmissionRange: "40 km radius",
    description: "Emisora del Barrio Alto Perú, ofreciendo programación variada y de calidad para toda la familia.",
    color: "#3B82F6",
    coordinates: { lat: -10.3413889, lng: -76.295 }
  },
  {
    id: 4,
    name: "Radio Huancampata",
    frequency: "103.9 MHz",
    location: "Huancampata (Piedra Larga)",
    address: "Huancampata, Piedra Larga, Perú",
    signalStrength: "Strong (88%)",
    transmissionRange: "42 km radius",
    description: "Radio Huancampata, transmitiendo desde Piedra Larga con las mejores frecuencias de la zona.",
    color: "#8B5CF6",
    coordinates: { lat: -10.36, lng: -76.117778 }
  }
];

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<RadioStation | null>(radioStations[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0b] via-[#111113] to-[#0a0a0b] flex items-center justify-center p-6">
      <div className="w-full max-w-[1400px] h-[85vh] bg-[#0D0D0D]/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#1f1f1f] overflow-hidden flex">
        
        {/* Panel Izquierdo - Detalles de la Estación */}
        <div className="w-[380px] bg-gradient-to-b from-[#121214] to-[#0a0a0c] border-r border-[#1f1f1f] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#1f1f1f]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F28211] to-[#FFA806] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl tracking-tight">
                  Radio Stations
                </h1>
                <p className="text-[#888] text-xs">
                  Explorador de Emisoras
                </p>
              </div>
            </div>
          </div>

          {/* Detalles de la Estación Seleccionada */}
          <div className="flex-1 overflow-y-auto p-6">
            {selectedStation ? (
              <div className="space-y-6">
                {/* Info Principal */}
                <div className="bg-gradient-to-br from-[#1a1a1c] to-[#141416] p-5 rounded-xl border border-[#2a2a2a] shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h2 className="text-white font-bold text-2xl mb-1 tracking-tight">
                        {selectedStation.name}
                      </h2>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full animate-pulse shadow-lg"
                          style={{ 
                            backgroundColor: selectedStation.color,
                            boxShadow: `0 0 12px ${selectedStation.color}80`
                          }}
                        />
                        <span className="text-[#FFA806] font-bold text-xl">
                          {selectedStation.frequency}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-[#0D0D0D] rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke={selectedStation.color} strokeWidth="2"/>
                        <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke={selectedStation.color} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Información Detallada */}
                <div className="space-y-4">
                  <div className="bg-[#161618] p-4 rounded-lg border border-[#222224] hover:border-[#2a2a2c] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#F28211" strokeWidth="2"/>
                        <circle cx="12" cy="9" r="2.5" stroke="#F28211" strokeWidth="2"/>
                      </svg>
                      <span className="text-[#888] text-xs font-semibold uppercase tracking-wider">
                        Ubicación
                      </span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1">
                      {selectedStation.location}
                    </p>
                    <p className="text-[#aaa] text-xs">
                      {selectedStation.address}
                    </p>
                  </div>

                  <div className="bg-[#161618] p-4 rounded-lg border border-[#222224] hover:border-[#2a2a2c] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#888] text-xs font-semibold uppercase tracking-wider">
                        Señal
                      </span>
                    </div>
                    <p className="text-white font-medium text-sm mb-1">
                      {selectedStation.signalStrength}
                    </p>
                    <p className="text-[#aaa] text-xs">
                      Rango: {selectedStation.transmissionRange}
                    </p>
                  </div>

                  <div className="bg-[#161618] p-4 rounded-lg border border-[#222224] hover:border-[#2a2a2c] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#10B981" strokeWidth="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="text-[#888] text-xs font-semibold uppercase tracking-wider">
                        Descripción
                      </span>
                    </div>
                    <p className="text-[#ccc] text-sm leading-relaxed">
                      {selectedStation.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1c] flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#444" strokeWidth="2"/>
                    <path d="M12 8V12L14 14" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[#666] text-sm">
                  Selecciona una estación en el mapa
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Panel Derecho - Mapa Interactivo */}
        <div className="flex-1 relative bg-[#0a0a0c]">
          {/* Google Maps Component */}
          <GoogleMap 
            stations={radioStations}
            selectedStation={selectedStation}
            onStationSelect={setSelectedStation}
          />

          {/* Controles del Mapa */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button 
              className="w-10 h-10 bg-[#1a1a1c] hover:bg-[#222224] border border-[#2a2a2a] rounded-lg flex items-center justify-center transition-colors shadow-lg"
              title="Zoom In"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              className="w-10 h-10 bg-[#1a1a1c] hover:bg-[#222224] border border-[#2a2a2a] rounded-lg flex items-center justify-center transition-colors shadow-lg"
              title="Zoom Out"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Leyenda */}
          <div className="absolute bottom-4 left-4 bg-[#1a1a1c]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2a2a2a] shadow-xl z-10 max-w-[250px]">
            <h4 className="text-white font-semibold text-sm mb-3">Estaciones de Radio</h4>
            <div className="space-y-2">
              {radioStations.map((station) => (
                <div 
                  key={station.id}
                  className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-all ${
                    selectedStation?.id === station.id 
                      ? 'bg-[#2a2a2c] border border-[#F28211]' 
                      : 'hover:bg-[#222224]'
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
                    <p className="text-[#ccc] text-xs font-medium truncate">{station.name}</p>
                    <p className="text-[#888] text-[10px]">{station.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Info de coordenadas de estación seleccionada */}
            {selectedStation && (
              <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
                <p className="text-[#888] text-[10px] mb-1 uppercase tracking-wider">Coordenadas:</p>
                <div className="flex gap-2 text-[11px] font-mono">
                  <span className="text-[#FFA806]">Lat: {selectedStation.coordinates.lat.toFixed(4)}</span>
                  <span className="text-[#3B82F6]">Lng: {selectedStation.coordinates.lng.toFixed(4)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
