# DRTC - Radio Stations Explorer 📻

Explorador interactivo de estaciones de radio con visualización en mapas usando React Leaflet y Next.js 15.

## 🚀 Características

- 🗺️ **Mapas Interactivos**: Visualización de estaciones de radio con React Leaflet y OpenStreetMap
- 🎨 **Tema Oscuro Profesional**: Interfaz moderna con diseño oscuro elegante
- 📡 **Información Detallada**: Frecuencias, alcance de señal y ubicaciones precisas de cada estación
- 🎯 **Navegación Intuitiva**: Selección de estaciones con animaciones fluidas y transiciones suaves
- 📱 **Responsive**: Diseño completamente adaptado a diferentes tamaños de pantalla
- ⚡ **Alto Rendimiento**: Construido con Next.js 15 y Turbopack

## 🛠️ Tecnologías Utilizadas

- **Next.js 15.5.6** - Framework de React con App Router
- **React 19.1.0** - Biblioteca de UI más reciente
- **TypeScript 5** - Tipado estático para mayor seguridad
- **Tailwind CSS 4** - Framework de estilos utility-first
- **React Leaflet 5.0.0** - Componentes React para mapas interactivos
- **Leaflet 1.9.4** - Biblioteca de mapas open source líder
- **pnpm** - Gestor de paquetes rápido y eficiente

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/larry963852/DRTC.git

# Navegar al directorio del proyecto
cd DRTC

# Instalar dependencias con pnpm
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🚀 Scripts Disponibles

```bash
# Desarrollo con Turbopack (ultra rápido)
pnpm dev

# Compilar para producción con optimizaciones
pnpm build

# Ejecutar versión de producción
pnpm start

# Verificar linting y errores de código
pnpm lint
```

## 📂 Estructura del Proyecto

```
DRTC/
├── app/
│   ├── components/
│   │   └── MapComponent.tsx    # Componente principal de mapa con Leaflet
│   ├── globals.css             # Estilos globales y personalizaciones
│   ├── layout.tsx              # Layout raíz de la aplicación
│   └── page.tsx                # Página principal con datos de estaciones
├── public/                     # Archivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración de TypeScript
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── postcss.config.mjs          # Configuración de PostCSS
└── README.md                   # Este archivo
```

## 🎨 Características del Mapa

### Visualización Avanzada
- **Marcadores Personalizados**: Cada estación tiene un marcador único con su color corporativo
- **Círculos de Transmisión**: Visualización clara del alcance de señal de cada estación
- **Popups Informativos**: Información detallada al hacer clic en cada marcador
- **Animaciones de Pulso**: Efectos visuales en la estación actualmente seleccionada
- **Tema Oscuro Integrado**: Tiles de mapa oscuros para mejor experiencia visual nocturna
- **Navegación Fluida**: Transiciones suaves al cambiar entre estaciones

### Interactividad
- Clic en marcadores para ver información detallada
- Panel lateral con detalles completos de cada estación
- Leyenda interactiva con todas las estaciones
- Zoom y navegación del mapa totalmente funcionales

## 📡 Estaciones de Radio Incluidas

| Estación | Frecuencia | Ubicación | Alcance |
|----------|-----------|-----------|---------|
| **Radio Yauyipampa** | 98.5 MHz | Yauyipampa (Planta) | 50 km |
| **Radio Pachar** | 101.2 MHz | Pachar | 45 km |
| **Radio Alto Perú** | 95.7 MHz | Barrio Alto Perú | 40 km |
| **Radio Huancampata** | 103.9 MHz | Huancampata (Piedra Larga) | 42 km |

## 🔧 Configuración

Este proyecto utiliza **OpenStreetMap** a través de Leaflet, por lo que **no requiere API keys** ni variables de entorno. Es completamente open source y gratuito.

### Sin Dependencias de APIs Privadas
- ✅ No requiere Google Maps API Key
- ✅ No hay límites de uso
- ✅ Sin costos de servicios externos
- ✅ Mapas de alta calidad de CartoDB

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Desplegar
vercel
```

O simplemente conecta tu repositorio en [vercel.com](https://vercel.com) para despliegue automático.

### Otras Plataformas
El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## 🎯 Próximas Características

- [ ] Búsqueda de estaciones por nombre o frecuencia
- [ ] Filtros por tipo de señal o alcance
- [ ] Modo de vista satélite
- [ ] Compartir ubicación de estaciones
- [ ] Integración con reproductores de radio online

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de uso interno y privado.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ utilizando las mejores prácticas de desarrollo web moderno y las últimas tecnologías de React y Next.js.

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.
