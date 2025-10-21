'use client';

import { useEffect, useRef, useState } from 'react';

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

interface GoogleMapProps {
  stations: RadioStation[];
  selectedStation: RadioStation | null;
  onStationSelect: (station: RadioStation) => void;
}

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMap({ stations, selectedStation, onStationSelect }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calcular el centro basándose en las coordenadas de todas las estaciones
  const calculateCenter = () => {
    if (stations.length === 0) {
      return { lat: -10.25, lng: -76.25 }; // Centro de Perú por defecto
    }

    const avgLat = stations.reduce((sum, station) => sum + station.coordinates.lat, 0) / stations.length;
    const avgLng = stations.reduce((sum, station) => sum + station.coordinates.lng, 0) / stations.length;

    return { lat: avgLat, lng: avgLng };
  };

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      try {
        if (typeof window === 'undefined' || !window.google) {
          throw new Error('Google Maps no está cargado');
        }

        if (!mapRef.current) return;

        console.log('Creating map instance...');
        
        const center = calculateCenter();
        console.log('Map center calculated:', center);
        
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center,
          zoom: 9,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#1a1a1c' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#8a8a8a' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#0a0a0c' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#2a2a2c' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#999999' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#0d0d0f' }]
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        console.log('Map instance created successfully');
        setMap(mapInstance);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error al cargar el mapa:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar el mapa');
        setIsLoading(false);
      }
    };

    if (window.google) {
      initMap();
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleMaps);
          initMap();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkGoogleMaps);
        if (!window.google) {
          setError('No se pudo cargar Google Maps');
          setIsLoading(false);
        }
      }, 10000);

      return () => clearInterval(checkGoogleMaps);
    }
  }, []);

  useEffect(() => {
    if (!map || !window.google) return;

    markers.forEach(marker => marker.setMap(null));

    const newMarkers = stations.map(station => {
      // Validar coordenadas
      if (!station.coordinates || 
          typeof station.coordinates.lat !== 'number' || 
          typeof station.coordinates.lng !== 'number' ||
          isNaN(station.coordinates.lat) || 
          isNaN(station.coordinates.lng)) {
        console.warn(`Coordenadas inválidas para la estación ${station.name}:`, station.coordinates);
        return null;
      }

      console.log(`Creating marker for ${station.name} at lat:${station.coordinates.lat}, lng:${station.coordinates.lng}`);

      const rangeMatch = station.transmissionRange.match(/\d+/);
      const rangeKm = rangeMatch ? parseInt(rangeMatch[0]) : 30;

      const marker = new window.google.maps.Marker({
        position: station.coordinates,
        map: map,
        title: station.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: selectedStation?.id === station.id ? 12 : 8,
          fillColor: station.color,
          fillOpacity: selectedStation?.id === station.id ? 1 : 0.6,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
        animation: selectedStation?.id === station.id ? window.google.maps.Animation.BOUNCE : null,
      });

      new window.google.maps.Circle({
        map: map,
        center: station.coordinates,
        radius: rangeKm * 1000,
        fillColor: station.color,
        fillOpacity: 0.15,
        strokeColor: station.color,
        strokeOpacity: 0.4,
        strokeWeight: 1,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div style="padding:12px;color:#333"><h3 style="margin:0 0 8px 0;color:' + station.color + ';font-weight:bold;font-size:16px">' + station.name + '</h3><p style="margin:0 0 4px 0;font-size:14px;color:#666;font-weight:600">' + station.frequency + '</p><p style="margin:0;font-size:12px;color:#999">' + station.location + '</p></div>',
      });

      marker.addListener('click', () => {
        onStationSelect(station);
        infoWindow.open(map, marker);
      });

      return marker;
    });

    // Filtrar marcadores nulos (por coordenadas inválidas)
    const validMarkers = newMarkers.filter(marker => marker !== null);
    setMarkers(validMarkers);
    console.log(`Created ${validMarkers.length} valid markers out of ${stations.length} stations`);
  }, [map, stations, selectedStation, onStationSelect]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0a0c]">
        <div className="text-center max-w-md p-8">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2"/>
              <path d="M12 8V12M12 16H12.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Error al cargar el mapa</h3>
          <p className="text-red-400 text-sm mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#F28211] hover:bg-[#FFA806] text-white rounded-lg text-sm transition-colors"
          >
            Recargar página
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0a0c]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F28211] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-sm font-medium">Cargando Google Maps...</p>
          <p className="text-gray-500 text-xs mt-2">Esto puede tomar unos segundos</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
}
