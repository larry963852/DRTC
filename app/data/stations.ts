import type { RadioStation } from '@/app/types';

/**
 * Base de datos de estaciones de radio
 * Incluye todas las emisoras con su información completa
 */
export const radioStations: RadioStation[] = [
  {
    "id": 1,
    "name": "Radio CANCHAPARAN",
    "frequency": "TV 8 / FM 101.3 MHz",
    "location": "CANCHAPARAN",
    "address": "HUANUCO, AMBO, CONCHAMARCA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -10.06425,
      "lng": -76.2683611
    }
  },
  {
    "id": 2,
    "name": "Radio ACOBAMBA",
    "frequency": "TV 8 / FM 103.9 MHz",
    "location": "ACOBAMBA",
    "address": "HUANUCO, AMBO, HUACAR",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.264722,
      "lng": -76.269444
    }
  },
  {
    "id": 3,
    "name": "Radio MOSCA",
    "frequency": "TV 11 / FM 103.1 MHz",
    "location": "MOSCA",
    "address": "HUANUCO, AMBO, SAN FRANCISCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.3413889,
      "lng": -76.295
    }
  },
  {
    "id": 4,
    "name": "Radio SAN JOAQUIN",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "SAN JOAQUIN",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -10.36,
      "lng": -76.117778
    }
  },
  {
    "id": 5,
    "name": "Radio PORVENIR",
    "frequency": "TV 10 / FM 103.1 MHz",
    "location": "PORVENIR",
    "address": "HUANUCO, HUAMALIES, LLATA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.57722,
      "lng": -76.866389
    }
  },
  {
    "id": 6,
    "name": "Radio CASHAPAMPA",
    "frequency": "TV 8 / FM 103.9 MHz",
    "location": "CASHAPAMPA",
    "address": "HUANUCO, HUAMALIES, MONZON",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.2302778,
      "lng": -76.32556
    }
  },
  {
    "id": 7,
    "name": "Radio POQUE",
    "frequency": "TV 12 / FM 102.9 MHz",
    "location": "POQUE",
    "address": "HUANUCO, HUAMALIES, PUÑOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -9.5375,
      "lng": -76.89722
    }
  },
  {
    "id": 8,
    "name": "Radio CARPA",
    "frequency": "TV 7 / FM 103.1 MHz",
    "location": "CARPA",
    "address": "HUANUCO, HUAMALIES, TANTAMAYO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -9.32722,
      "lng": -76.66111
    }
  },
  {
    "id": 9,
    "name": "Radio LA ESPERANZA",
    "frequency": "TV 13 / FM 103.9 MHz",
    "location": "LA ESPERANZA",
    "address": "HUANUCO, HUAMALIES, TANTAMAYO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.3791667,
      "lng": -76.719722
    }
  },
  {
    "id": 10,
    "name": "Radio SAN ISIDRO",
    "frequency": "TV 13 / FM 103.5 MHz",
    "location": "SAN ISIDRO",
    "address": "HUANUCO, LEONCIO PRADO, HERMILIO VALDIZAN",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, por mantenimiento debido a que el sistema fue desmantelado para reubicar a otra localidad que pidio el servicio de radio TV",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.160556,
      "lng": -75.848055
    }
  },
  {
    "id": 11,
    "name": "Radio PUCAYACU",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "PUCAYACU",
    "address": "HUANUCO, LEONCIO PRADO, JOSE CRESPO Y CASTILLO",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, debido al crecimiento de la población habrieron una calle por donde se encontraba la estación y ese se encuentra en proceso de construcción de la nueva caseta",
    "color": "#E67E22",
    "coordinates": {
      "lat": -8.7491667,
      "lng": -76.11944
    }
  },
  {
    "id": 12,
    "name": "Radio QUILCAYHUARIN",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "QUILCAYHUARIN",
    "address": "HUANUCO, YAROWILCA, CHAVINILLO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": 9.886778,
      "lng": -76.56656
    }
  },
  {
    "id": 13,
    "name": "Radio SALAPAMPA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "SALAPAMPA",
    "address": "HUANUCO, AMBO, AMBO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -10.208444,
      "lng": -76.163833
    }
  },
  {
    "id": 14,
    "name": "Radio COCHATAMA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "COCHATAMA",
    "address": "HUANUCO, AMBO, HUACAR",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -10.127944,
      "lng": -76.25311
    }
  },
  {
    "id": 15,
    "name": "Radio AYANCOCHA ALTA",
    "frequency": "TV 7 / FM 94.5 MHz",
    "location": "AYANCOCHA ALTA",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -10.2463889,
      "lng": -76.12591667
    }
  },
  {
    "id": 16,
    "name": "Radio CORRALCANCHA",
    "frequency": "TV 7 / FM 95.3 MHz",
    "location": "CORRALCANCHA",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -10.3778056,
      "lng": -76.0971389
    }
  },
  {
    "id": 17,
    "name": "Radio CHIPAQUILLO",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "CHIPAQUILLO",
    "address": "HUANUCO, DOS DE MAYO, MARIAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.536445,
      "lng": -76.4141389
    }
  },
  {
    "id": 18,
    "name": "Radio HUANCHAN",
    "frequency": "TV 7 / FM 103.1 MHz",
    "location": "HUANCHAN",
    "address": "HUANUCO, HUANUCO, MARGOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.95463889,
      "lng": -76.490833
    }
  },
  {
    "id": 19,
    "name": "Radio MITOQUERA",
    "frequency": "TV 8 / FM 88.5 MHz",
    "location": "MITOQUERA",
    "address": "HUANUCO, HUANUCO, SANTA MARIA DEL VALLE",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.83502778,
      "lng": -76.3164722
    }
  },
  {
    "id": 20,
    "name": "Radio COSMA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "COSMA",
    "address": "HUANUCO, LAURICOCHA, RONDOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.95525,
      "lng": -76.6514722
    }
  },
  {
    "id": 21,
    "name": "Radio PILLCOCANCHA",
    "frequency": "7 / 103.9 / 102.3 MHz",
    "location": "PILLCOCANCHA",
    "address": "HUANUCO, LAURICOCHA, RONDOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -10.0310833,
      "lng": -76.7151389
    }
  },
  {
    "id": 22,
    "name": "Radio ANTACOLPA",
    "frequency": "7 / 103.1 / 102.3 MHz",
    "location": "ANTACOLPA",
    "address": "HUANUCO, LAURICOCHA, SAN MIGUEL DE CAURI",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.25541667,
      "lng": -76.6823611
    }
  },
  {
    "id": 23,
    "name": "Radio HUARIPAMPA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "HUARIPAMPA",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -8.6180833,
      "lng": -77.09575
    }
  },
  {
    "id": 24,
    "name": "Radio YAMOS",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "YAMOS",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -8.6011944,
      "lng": -77.1401389
    }
  },
  {
    "id": 25,
    "name": "Radio SAN BUENAVENTURA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "SAN BUENAVENTURA",
    "address": "HUANUCO, MARAÑON, SAN BUENAVENTURA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -8.76813889,
      "lng": -77.18525
    }
  },
  {
    "id": 26,
    "name": "Radio TOMAY RICA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "TOMAY RICA",
    "address": "HUANUCO, PACHITEA, PANAO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.937694,
      "lng": -75.906167
    }
  },
  {
    "id": 27,
    "name": "Radio YURACMARCA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "YURACMARCA",
    "address": "HUANUCO, PACHITEA, PANAO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -10.119667,
      "lng": -75.8959445
    }
  },
  {
    "id": 28,
    "name": "Radio EL DORADO",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "EL DORADO",
    "address": "HUANUCO, PUERTO INCA, YUYAPICHIS",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, debido a que los equipos de Transmision fueron trasladados al talles de l direccion de telecomunicaciones",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.80802778,
      "lng": -75.013778
    }
  },
  {
    "id": 29,
    "name": "Radio ÑAUSA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "ÑAUSA",
    "address": "HUANUCO, AMBO, CONCHAMARCA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digitl Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -10.0793056,
      "lng": -76.2812778
    }
  },
  {
    "id": 30,
    "name": "Radio MARIAS",
    "frequency": "TV 7 / FM 103.5 MHz",
    "location": "MARIAS",
    "address": "HUANUCO, DOS DE MAYO, MARIAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.6075,
      "lng": -76.7091667
    }
  },
  {
    "id": 31,
    "name": "Radio SAN JUAN GLORIOSO",
    "frequency": "TV 7 / FM 103.5 MHz",
    "location": "SAN JUAN GLORIOSO",
    "address": "HUANUCO, DOS DE MAYO, SHUNQUI",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.77694445,
      "lng": -76.8247222
    }
  },
  {
    "id": 32,
    "name": "Radio QUIPRAN",
    "frequency": "TV 9 / FM 103.9 MHz",
    "location": "QUIPRAN",
    "address": "HUANUCO, HUAMALIES, CHAVIN DE PARIARCA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.49475,
      "lng": -76.770667
    }
  },
  {
    "id": 33,
    "name": "Radio CACHICOTO",
    "frequency": "8 / 103.9 / 88.3 MHz",
    "location": "CACHICOTO",
    "address": "HUANUCO, HUAMALIES, MONZON",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.2113889,
      "lng": -76.23944
    }
  },
  {
    "id": 34,
    "name": "Radio LIBERTAD CAUNARAPA",
    "frequency": "TV 5 / FM 103.9 MHz",
    "location": "LIBERTAD CAUNARAPA",
    "address": "HUANUCO, HUAMALIES, MONZON",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.2938889,
      "lng": -76.44222
    }
  },
  {
    "id": 35,
    "name": "Radio PACAYHUA",
    "frequency": "TV 7 / FM 102.9 MHz",
    "location": "PACAYHUA",
    "address": "HUANUCO, HUANUCO, MARGOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.9893889,
      "lng": -76.52852778
    }
  },
  {
    "id": 36,
    "name": "Radio TALLAGASHA\n(Reubicado de Vichaycoto)",
    "frequency": "TV 7 / FM 102.9 MHz",
    "location": "TALLAGASHA\n(Reubicado de Vichaycoto)",
    "address": "HUANUCO, PACHITEA, PANOA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM REUBICADO POR LA DRTC-HUANUCO (15/07/2014) VICHAYCOTO/PILLCOMARCA REUBICADO EN TAYAGASHA/PANAO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.0708,
      "lng": -75.9056
    }
  },
  {
    "id": 37,
    "name": "Radio PARAGSHA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "PARAGSHA",
    "address": "HUANUCO, LAURICOCHA, JESUS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -10.128611,
      "lng": -76.70444
    }
  },
  {
    "id": 38,
    "name": "Radio SAN PEDRO DE SECCHA",
    "frequency": "7 / 103.9 /02.3 MHz",
    "location": "SAN PEDRO DE SECCHA",
    "address": "HUANUCO, LAURICOCHA, RONDOS",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "SISTEMA DE TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, falta el tendido de energía eléctrica para poner en funcionamiento debido a que llego la energía electrica. se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -10.0169444,
      "lng": -76.7286111
    }
  },
  {
    "id": 39,
    "name": "Radio SANTO DOMINGO DE ANDA",
    "frequency": "8 / 9 / 103.9 MHz",
    "location": "SANTO DOMINGO DE ANDA",
    "address": "HUANUCO, LEONCIO PRADO, JOSE CRESPO Y CASTILLO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "PARA REUBICACION EL CENTRO POBLADO NO QUIERE LA ESTACION POR LO TANTO HICIERON UN ACTA DE RENUNCIA DE LA ESTACION YA QUE NO DESEAN PORQUE CUENTAN CON SERVICIO DE CABLE (posible reubicacion a la localidad de Ututo el 23/01/2023) REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -8.6773,
      "lng": -76.1214
    }
  },
  {
    "id": 40,
    "name": "Radio HUANCHAY",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "HUANCHAY",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -8.531667,
      "lng": -77.1311
    }
  },
  {
    "id": 41,
    "name": "Radio PISO",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "PISO",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, debido a que el transmisor de Tvse encuentra quemado debido a las descargas electricas se traslado para su reparacion,se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -8.500833,
      "lng": -77.2625
    }
  },
  {
    "id": 42,
    "name": "Radio QUILLABAMBA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "QUILLABAMBA",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -8.551944,
      "lng": -77.158611
    }
  },
  {
    "id": 43,
    "name": "Radio FRAYLE RUMI",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "FRAYLE RUMI",
    "address": "HUANUCO, MARAÑON, SAN BUENAVENTURA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -8.736944444,
      "lng": -77.13583333
    }
  },
  {
    "id": 44,
    "name": "Radio VILLAMAR",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "VILLAMAR",
    "address": "HUANUCO, MARAÑON, SAN BUENAVENTURA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -8.812778,
      "lng": -77.1675
    }
  },
  {
    "id": 45,
    "name": "Radio CHUCCHUCC",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "CHUCCHUCC",
    "address": "HUANUCO, AMBO, COLPAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -10.2069444,
      "lng": -76.466111
    }
  },
  {
    "id": 46,
    "name": "Radio YAMOR",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "YAMOR",
    "address": "HUANUCO, AMBO, COLPAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -10.2780556,
      "lng": -76.4430556
    }
  },
  {
    "id": 47,
    "name": "Radio YAPAC",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "YAPAC",
    "address": "HUANUCO, AMBO, COLPAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -10.306111,
      "lng": -76.41694445
    }
  },
  {
    "id": 48,
    "name": "Radio PULPOL",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "PULPOL",
    "address": "HUANUCO, AMBO, SAN FRANCISCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.294889,
      "lng": -76.3102778
    }
  },
  {
    "id": 49,
    "name": "Radio HUANCACHACA\n(ReubiCada de Shachavaca)",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "HUANCACHACA\n(ReubiCada de Shachavaca)",
    "address": "HUANUCO, YAROWILCA, APARICIO POMARES",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA REUBICADO POR LA DRTC-HUANUCO 22/11/2023 SACHAVACA/MONZON REUBICADO EN LA LOCALIDAD DE HUANCACHACA/APARICIO POMARES REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.6713,
      "lng": -76.6519
    }
  },
  {
    "id": 50,
    "name": "Radio QUEROPALCA",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "QUEROPALCA",
    "address": "HUANUCO, LAURICOCHA, QUEROPALCA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.18302778,
      "lng": -76.8068611
    }
  },
  {
    "id": 51,
    "name": "Radio HUACARCOCHA",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "HUACARCOCHA",
    "address": "HUANUCO, LAURICOCHA, RONDOS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.01711,
      "lng": -76.72780556
    }
  },
  {
    "id": 52,
    "name": "Radio MARGARITA",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "MARGARITA",
    "address": "HUANUCO, LEONCIO PRADO, HERMILIO VALDIZAN",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.115,
      "lng": -75.818889
    }
  },
  {
    "id": 53,
    "name": "Radio SAN AGUSTIN",
    "frequency": "TV 7 / FM 103.9 MHz",
    "location": "SAN AGUSTIN",
    "address": "HUANUCO, LEONCIO PRADO, HERMILIO VALDIZAN",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.14930556,
      "lng": -75.80980556
    }
  },
  {
    "id": 54,
    "name": "Radio CHUNATAHUA",
    "frequency": "TV 7 / FM 104.1 MHz",
    "location": "CHUNATAHUA",
    "address": "HUANUCO, LEONCIO PRADO, MARIANO DAMASO BERAUN",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.40889,
      "lng": -75.87611
    }
  },
  {
    "id": 55,
    "name": "Radio LOS CEDROS",
    "frequency": "TV 7 / FM 104.1 MHz",
    "location": "LOS CEDROS",
    "address": "HUANUCO, LEONCIO PRADO, RUPA RUPA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.105556,
      "lng": -76.1333
    }
  },
  {
    "id": 56,
    "name": "Radio LOS ANGELES",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "LOS ANGELES",
    "address": "HUANUCO, PUERTO INCA, CODO DEL POZUZO",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que los equipos se encuentran en el almacen de la direccion de telecomunicaciones para ser trasladado",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.56202778,
      "lng": -75.256889
    }
  },
  {
    "id": 57,
    "name": "Radio SANTA MARTHA CC.NN.",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "SANTA MARTHA CC.NN.",
    "address": "HUANUCO, PUERTO INCA, CODO DEL POZUZO",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que el centro poblado no cuenta con energía eléctrica y el sistema de paneles solares se encuentra malogrado para ser cambiado",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.5569722,
      "lng": -75.31180556
    }
  },
  {
    "id": 58,
    "name": "Radio NUEVO TRUJILLO",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "NUEVO TRUJILLO",
    "address": "HUANUCO, PUERTO INCA, PUERTO INCA",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que el centro poblado renunció a la estacion debido a que cuentan con señales abierta y radios locales",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.4819444,
      "lng": -75.03
    }
  },
  {
    "id": 59,
    "name": "Radio MACUYA",
    "frequency": "TV 7 / FM 88.3 MHz",
    "location": "MACUYA",
    "address": "HUANUCO, PUERTO INCA, TOURNAVISTA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -8.923889,
      "lng": -75.041944
    }
  },
  {
    "id": 60,
    "name": "Radio ACOCHACAN",
    "frequency": "TV 12 / FM 88.3 MHz",
    "location": "ACOCHACAN",
    "address": "HUANUCO, AMBO, SAN FRANCISCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.295889,
      "lng": -76.3322778
    }
  },
  {
    "id": 61,
    "name": "Radio SANTO DOMINGO DE RONDOS",
    "frequency": "TV 12 / FM 89.1 MHz",
    "location": "SANTO DOMINGO DE RONDOS",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA DE TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku PARA REUBICACION EL CENTRO POBLADO SOLICITA LA REUBICACION DE LA ESTACION EN OTRO PUNTO DENTRO DE LA MISMA LOCALIDAD. ( Posible reubicación el 06/02/2023) REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.2887778,
      "lng": -76.1795833
    }
  },
  {
    "id": 62,
    "name": "Radio TANTACOTO",
    "frequency": "TV 8 / FM 88.5 MHz",
    "location": "TANTACOTO",
    "address": "HUANUCO, DOS DE MAYO, MARIAS",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.60425,
      "lng": -76.4991944
    }
  },
  {
    "id": 63,
    "name": "Radio UMBE",
    "frequency": "TV 12 / FM 88.3 MHz",
    "location": "UMBE",
    "address": "HUANUCO, HUACAYBAMBA, CANCHABAMBA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -8.91375,
      "lng": -77.110389
    }
  },
  {
    "id": 64,
    "name": "Radio MARAVILLAS",
    "frequency": "TV 8 / FM 88.7 MHz",
    "location": "MARAVILLAS",
    "address": "HUANUCO, HUAMALIES, MONZON",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.295222,
      "lng": -76.46175
    }
  },
  {
    "id": 65,
    "name": "Radio VILLA TRANCA PILLAO",
    "frequency": "TV 12 / FM 104.3 MHz",
    "location": "VILLA TRANCA PILLAO",
    "address": "HUANUCO, HUANUCO, CHINCHAO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.790667,
      "lng": -75.9964722
    }
  },
  {
    "id": 66,
    "name": "Radio PAGSHA",
    "frequency": "TV 12 / FM 89.3 MHz",
    "location": "PAGSHA",
    "address": "HUANUCO, HUANUCO, CHURUBAMBA",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.751667,
      "lng": -76.2637222
    }
  },
  {
    "id": 67,
    "name": "Radio BELLA",
    "frequency": "TV 12 / FM 88.3 MHz",
    "location": "BELLA",
    "address": "HUANUCO, LEONCIO PRADO, MARIANO DAMASO BERAUN",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.323389,
      "lng": -76.0376667
    }
  },
  {
    "id": 68,
    "name": "Radio CAYUMBA GRANDE",
    "frequency": "TV 12 / FM 88.3 MHz",
    "location": "CAYUMBA GRANDE",
    "address": "HUANUCO, LEONCIO PRADO, MARIANO DAMASO BERAUN",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -9.323389,
      "lng": -76.037667
    }
  },
  {
    "id": 69,
    "name": "Radio LA FLORIDA",
    "frequency": "TV 12 / FM 88.3 MHz",
    "location": "LA FLORIDA",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV-FM",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -8.6303611,
      "lng": -77.0838611
    }
  },
  {
    "id": 70,
    "name": "Radio SANTA ROSA DE PATA\n(Reubicado de San Juan del Codo)",
    "frequency": "TV 12 / FM 88.5 MHz",
    "location": "SANTA ROSA DE PATA\n(Reubicado de San Juan del Codo)",
    "address": "HUANUCO, PUERTO INCA, TOURNAVISTA",
    "systemType": "TV-FM",
    "status": "INOPERATIVO",
    "description": "SISTEMA TV-FM REUBICADO POR LA DRTC-HUANUCO (30/05/2021) SAN JUAN DEL CODO / CODO DE POZUSO REUBICADO ENSANTA ROSA DE PATA / TOURNAVISTA MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, debido a que el transmisor de TV está malogrado se traslado para su reparacion en el taller de comunicaciones",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.64633,
      "lng": -75.28611
    }
  },
  {
    "id": 71,
    "name": "Radio COCONAN\n(Reubicado de Huaracalla)",
    "frequency": "TV 13 / FM N.A. MHz",
    "location": "COCONAN\n(Reubicado de Huaracalla)",
    "address": "HUANUCO, AMBO, COCHAMARCA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA DE TV  REUBICADO POR LA DRTC- HUANUCO (14/11/2019) HUARACALLA  /AMBO REUBICADO EN COCONAN /COCHAMARCA REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -10.1692,
      "lng": -76.1075
    }
  },
  {
    "id": 72,
    "name": "Radio MARAYPATA",
    "frequency": "TV 11 / FM N.A. MHz",
    "location": "MARAYPATA",
    "address": "HUANUCO, AMBO, AMBO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -10.1691667,
      "lng": -76.1075
    }
  },
  {
    "id": 73,
    "name": "Radio UTCUSH",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "UTCUSH",
    "address": "HUANUCO, AMBO, CAYNA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.22861111,
      "lng": -76.3283
    }
  },
  {
    "id": 74,
    "name": "Radio COLPAS",
    "frequency": "11 / 2 / N.A. MHz",
    "location": "COLPAS",
    "address": "HUANUCO, AMBO, COLPAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.2675,
      "lng": -76.4175
    }
  },
  {
    "id": 75,
    "name": "Radio COQUIN",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "COQUIN",
    "address": "HUANUCO, AMBO, COLPAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -10.24944,
      "lng": -76.4333
    }
  },
  {
    "id": 76,
    "name": "Radio ANGASMARCA",
    "frequency": "13 / 7 / N.A. MHz",
    "location": "ANGASMARCA",
    "address": "HUANUCO, AMBO, HUACAR",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV-FM ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.239722,
      "lng": -76.23194445
    }
  },
  {
    "id": 77,
    "name": "Radio 3 DE MAYO DE RODEO",
    "frequency": "2 / 11 / N.A. MHz",
    "location": "3 DE MAYO DE RODEO",
    "address": "HUANUCO, AMBO, SAN FRANCISCO",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que, la antena parabólica se encuentra malograda, y a la torre le faltan dos cuerpos de 3m cada uno",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.35833,
      "lng": -76.26333
    }
  },
  {
    "id": 78,
    "name": "Radio MATIHUACA",
    "frequency": "12/ 10 / N.A. MHz",
    "location": "MATIHUACA",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "PARA REUBICACION REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que las autoridaes del cnetro poblado renunciaron a tener la estación ya cuentan con señales de cable",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -10.337778,
      "lng": -76.16667
    }
  },
  {
    "id": 79,
    "name": "Radio SAN JERONIMO DE COCHACALLA",
    "frequency": "2 / 9 / N.A. MHz",
    "location": "SAN JERONIMO DE COCHACALLA",
    "address": "HUANUCO, AMBO, SAN RAFAEL",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -10.35805556,
      "lng": -76.20944
    }
  },
  {
    "id": 80,
    "name": "Radio CHUQUIS",
    "frequency": "TV 4 / FM N.A. MHz",
    "location": "CHUQUIS",
    "address": "HUANUCO, DOS DE MAYO, CHUQUIS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#00B894",
    "coordinates": {
      "lat": -9.678611,
      "lng": -76.7080556
    }
  },
  {
    "id": 81,
    "name": "Radio CRUZPAMPA",
    "frequency": "12 / 13 / N.A. MHz",
    "location": "CRUZPAMPA",
    "address": "HUANUCO, DOS DE MAYO, PACHAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.713611,
      "lng": -76.775
    }
  },
  {
    "id": 82,
    "name": "Radio SHUNQUI",
    "frequency": "TV 10 / FM N.A. MHz",
    "location": "SHUNQUI",
    "address": "HUANUCO, DOS DE MAYO, SHUNQUI",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.731944,
      "lng": -76.7863889
    }
  },
  {
    "id": 83,
    "name": "Radio YANAS",
    "frequency": "TV 12 / FM N.A. MHz",
    "location": "YANAS",
    "address": "HUANUCO, DOS DE MAYO, YANAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.715555556,
      "lng": -76.75277778
    }
  },
  {
    "id": 84,
    "name": "Radio HUACAYBAMBA",
    "frequency": "TV 2 / FM N.A. MHz",
    "location": "HUACAYBAMBA",
    "address": "HUANUCO, HUACAYBAMBA, HUACAYBAMBA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "PARA REUBICACION EL CENTRO POBLADO SOLICITA LA REUBICACION DE LA ESTACION EN OTRO PUNTO DENTRO DE LA MISMA LOCALIDAD, (posible fecha el 24/04/2023) REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -9.03833,
      "lng": -76.9572
    }
  },
  {
    "id": 85,
    "name": "Radio QUICHIRRAGRA",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "QUICHIRRAGRA",
    "address": "HUANUCO, HUACAYBAMBA, HUACAYBAMBA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.003056,
      "lng": -77.0025
    }
  },
  {
    "id": 86,
    "name": "Radio MIRAFLORES",
    "frequency": "TV 8 / FM N.A. MHz",
    "location": "MIRAFLORES",
    "address": "HUANUCO, HUAMALIES, MIRAFLORES",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.493889,
      "lng": -76.821944
    }
  },
  {
    "id": 87,
    "name": "Radio PUNCHAO",
    "frequency": "TV 12 / FM N.A. MHz",
    "location": "PUNCHAO",
    "address": "HUANUCO, HUAMALIES, PUNCHAO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.464722,
      "lng": -76.831944
    }
  },
  {
    "id": 88,
    "name": "Radio ACOMAYO",
    "frequency": "TV 4 / FM N.A. MHz",
    "location": "ACOMAYO",
    "address": "HUANUCO, HUANUCO, CHINCHAO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.80222,
      "lng": -76.075
    }
  },
  {
    "id": 89,
    "name": "Radio PUENTE DURAND",
    "frequency": "TV 9 / FM N.A. MHz",
    "location": "PUENTE DURAND",
    "address": "HUANUCO, HUANUCO, CHINCHAO",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que se está construyendo la caseta en otro punto para ser trasladado los equipos de transmisión y sistema radiante",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.55333,
      "lng": -76.008611
    }
  },
  {
    "id": 90,
    "name": "Radio CHULQUI",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "CHULQUI",
    "address": "HUANUCO, HUANUCO, CHURUBAMBA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.84305556,
      "lng": -76.130833
    }
  },
  {
    "id": 91,
    "name": "Radio COCHAS",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "COCHAS",
    "address": "HUANUCO, HUANUCO, MARGOS",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "NO VERIFICADA REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, las autoridades del centro poblado, no quiere tener la estacion ya que cuentan con señales de cable",
    "color": "#16A085",
    "coordinates": {
      "lat": -10.0327778,
      "lng": -76.50111
    }
  },
  {
    "id": 92,
    "name": "Radio HUACORA",
    "frequency": "TV 11 / FM N.A. MHz",
    "location": "HUACORA",
    "address": "HUANUCO, HUANUCO, MARGOS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.9730556,
      "lng": -76.49778
    }
  },
  {
    "id": 93,
    "name": "Radio PAMPAS",
    "frequency": "TV 9 / FM N.A. MHz",
    "location": "PAMPAS",
    "address": "HUANUCO, HUANUCO, QUISQUI",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.89944,
      "lng": -76.4741667
    }
  },
  {
    "id": 94,
    "name": "Radio SAN PEDRO DE CANI",
    "frequency": "TV 9 / FM N.A. MHz",
    "location": "SAN PEDRO DE CANI",
    "address": "HUANUCO, HUANUCO, QUISQUI",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.8819444,
      "lng": -76.3922
    }
  },
  {
    "id": 95,
    "name": "Radio SAN PEDRO DE CHAULAN",
    "frequency": "TV 2 / FM N.A. MHz",
    "location": "SAN PEDRO DE CHAULAN",
    "address": "HUANUCO, HUANUCO, SAN PEDRO DE CHAULAN",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que en el terreno que se encontraba la estacion fue construida una comisaria y requieren traslado a otro punto dentro de la misma localidad.",
    "color": "#00B894",
    "coordinates": {
      "lat": -10.05694,
      "lng": -76.486944
    }
  },
  {
    "id": 96,
    "name": "Radio POMACUCHO",
    "frequency": "TV 12 / FM N.A. MHz",
    "location": "POMACUCHO",
    "address": "HUANUCO, HUANUCO, SANTA MARIA DEL VALLE",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.826389,
      "lng": -76.249444
    }
  },
  {
    "id": 97,
    "name": "Radio SAN SEBASTIAN DE QUERA",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "SAN SEBASTIAN DE QUERA",
    "address": "HUANUCO, HUANUCO, SANTA MARIA DEL VALLE",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#00B894",
    "coordinates": {
      "lat": -9.8494445,
      "lng": -76.26778
    }
  },
  {
    "id": 98,
    "name": "Radio SIRABAMBA",
    "frequency": "TV 11 / FM N.A. MHz",
    "location": "SIRABAMBA",
    "address": "HUANUCO, HUANUCO, SANTA MARIA DEL VALLE",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.7791667,
      "lng": -76.313611
    }
  },
  {
    "id": 99,
    "name": "Radio YARUMAYO",
    "frequency": "TV 9 / FM N.A. MHz",
    "location": "YARUMAYO",
    "address": "HUANUCO, HUANUCO, YARUMAYO",
    "systemType": "TV",
    "status": "INEXISTENTE",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 No se encontro los equipos en el terreno donde se indica que se encuentra la estacion",
    "color": "#E67E22",
    "coordinates": {
      "lat": -10.004722,
      "lng": -76.4675
    }
  },
  {
    "id": 100,
    "name": "Radio BAÑOS",
    "frequency": "TV 10 / FM N.A. MHz",
    "location": "BAÑOS",
    "address": "HUANUCO, LAURICOCHA, BAÑOS",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo, no se encontró los equipos donde indica que se instaló  la estacion",
    "color": "#F28211",
    "coordinates": {
      "lat": -10.0778,
      "lng": -76.73833
    }
  },
  {
    "id": 101,
    "name": "Radio JIVIA",
    "frequency": "TV 10 / FM N.A. MHz",
    "location": "JIVIA",
    "address": "HUANUCO, LAURICOCHA, JIVIA",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "SISTEMA DE TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que el transmisor de TV se encuientra malogrado se traslado para su reparacion en el taller.se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": 10.0252778,
      "lng": -76.6819445
    }
  },
  {
    "id": 102,
    "name": "Radio PUMAHUASI",
    "frequency": "TV 9 / FM 88.9 MHz",
    "location": "PUMAHUASI",
    "address": "HUANUCO, LEONCIO PRADO, DANIEL ALOMIA ROBLES",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que hay Instalación de antenas de internet en la torre que interfieren la señal y no se puede subir a la torre para configurar el sistema radiante",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.1861,
      "lng": -75.95583
    }
  },
  {
    "id": 103,
    "name": "Radio CHINCHIL",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "CHINCHIL",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#E67E22",
    "coordinates": {
      "lat": -8.6502778,
      "lng": -77.23916667
    }
  },
  {
    "id": 104,
    "name": "Radio CHOCOBAMBA",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "CHOCOBAMBA",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT,antena parabolica 90cm, LNB banda Ku.",
    "color": "#00B894",
    "coordinates": {
      "lat": -8.6425,
      "lng": -77.11333
    }
  },
  {
    "id": 105,
    "name": "Radio HUACHUMAY",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "HUACHUMAY",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku. SE REALIZO MANTENIMIENTO CORRECTIVO POR LA DRTC-HUANUCO (24/10/2023) OF. N°1662-2023-GRH.GRI/DRTC (E-600095-2023) de 15/11/2023 INF. N°0245-2023-GRH.GRI/DRTC de 09/11/2023 INF. N°036-2023-GRH.GRI/DRTC-DTEL/PPPO de 08/11/2023 El sistema tipo B fue cambiado a tipo A, ya que localidad cuenta con energía electrica.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -8.69333,
      "lng": -77.21333
    }
  },
  {
    "id": 106,
    "name": "Radio HUAYCHAO",
    "frequency": "TV 4 / FM N.A. MHz",
    "location": "HUAYCHAO",
    "address": "HUANUCO, MARAÑON, HUACRACHUCO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -8.565833,
      "lng": -77.2363889
    }
  },
  {
    "id": 107,
    "name": "Radio SANTA ROSA ALTA\n(Reubicado de Chinchavito)",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "SANTA ROSA ALTA\n(Reubicado de Chinchavito)",
    "address": "HUANUCO, PACHITEA, CHAGLLA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA DE TV REUBICADA POR LA DRTC-HUANUCO ( 29/09/2018) CHINCHAVITO/CONGALLA REUBICADO EN SANTA ROSA ALTA/CONGALLA REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.5066,
      "lng": -75.9358
    }
  },
  {
    "id": 108,
    "name": "Radio HUARICHACA",
    "frequency": "TV 13 / FM N.A. MHz",
    "location": "HUARICHACA",
    "address": "HUANUCO, PACHITEA, MOLINOS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, Decodificador Digital Com,antena parabolica 90cm, LNB banda Ku.",
    "color": "#E84393",
    "coordinates": {
      "lat": -9.9480556,
      "lng": -76.033055
    }
  },
  {
    "id": 109,
    "name": "Radio MOLINOS",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "MOLINOS",
    "address": "HUANUCO, PACHITEA, MOLINOS",
    "systemType": "TV",
    "status": "INEXISTENTE",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 No se encontro los equipos en el terreno donde indica que se encuentra la estacion",
    "color": "#00B894",
    "coordinates": {
      "lat": -9.91222,
      "lng": -76.018611
    }
  },
  {
    "id": 110,
    "name": "Radio C.P.M. TIPSA",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "C.P.M. TIPSA",
    "address": "HUANUCO, PACHITEA, PANAO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.916667,
      "lng": -75.925833
    }
  },
  {
    "id": 111,
    "name": "Radio NUEVO HONORIA",
    "frequency": "TV 4 / FM N.A. MHz",
    "location": "NUEVO HONORIA",
    "address": "HUANUCO, PUERTO INCA, HONORIA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#00B894",
    "coordinates": {
      "lat": -8.754445,
      "lng": -74.690833
    }
  },
  {
    "id": 112,
    "name": "Radio SAN JOSE DE CARACALLA\n(Reubicado del el Nuevo Porevenir)",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "SAN JOSE DE CARACALLA\n(Reubicado del el Nuevo Porevenir)",
    "address": "HUANUCO, AMBO, HUACAR",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "REUBICADA (03/07/2014) NUEVO PORVENIR/PUERTO INCA REUBICADO EN SANJOSE DE CARACALLA/HUACAR  Falta de energía eléctria, el centro poblado solicita la reubicación en otro punto, dentro de la misma localidad posible fecha 13/02/2023,  REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que, las autoridades del centro poblado tienen inconvenientes para pagar los recibos de luz",
    "color": "#E67E22",
    "coordinates": {
      "lat": -9.2,
      "lng": -75.0130556
    }
  },
  {
    "id": 113,
    "name": "Radio PUERTO SIRA",
    "frequency": "TV 13 / FM N.A. MHz",
    "location": "PUERTO SIRA",
    "address": "HUANUCO, PUERTO INCA, PUERTO INCA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#E84393",
    "coordinates": {
      "lat": -9.2122,
      "lng": -74.872778
    }
  },
  {
    "id": 114,
    "name": "Radio SANTA ROSA DE YANAYACU",
    "frequency": "TV 11 / FM N.A. MHz",
    "location": "SANTA ROSA DE YANAYACU",
    "address": "HUANUCO, PUERTO INCA, YUYAPICHIS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.55667,
      "lng": -75.01222
    }
  },
  {
    "id": 115,
    "name": "Radio CHUPAN",
    "frequency": "TV 13 / FM N.A. MHz",
    "location": "CHUPAN",
    "address": "HUANUCO, YAROWILCA, APARICIO POMARES",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#6C5CE7",
    "coordinates": {
      "lat": -9.7491667,
      "lng": -76.65083
    }
  },
  {
    "id": 116,
    "name": "Radio CAHUAC",
    "frequency": "TV 7 / FM N.A. MHz",
    "location": "CAHUAC",
    "address": "HUANUCO, YAROWILCA, CAHUAC",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#1C20E9",
    "coordinates": {
      "lat": -9.853055,
      "lng": -76.633611
    }
  },
  {
    "id": 117,
    "name": "Radio SHULLUYACO",
    "frequency": "8 / 7 / N.A. MHz",
    "location": "SHULLUYACO",
    "address": "HUANUCO, YAROWILCA, CHACABAMBA",
    "systemType": "TV",
    "status": "INOPERATIVO",
    "description": "SIATEMA DE TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku MANTENIMIENTO REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta inoperativo debido a que el transmisor de Tvse encuentra malogrado se traslado para reparacion en el taller de telecomunicaciones, se implementó Decodificador EKT, antena parabolica 90cm, LNB banda Ku.",
    "color": "#16A085",
    "coordinates": {
      "lat": -9.912778,
      "lng": -76.6311
    }
  },
  {
    "id": 118,
    "name": "Radio CHORAS",
    "frequency": "TV 12 / FM N.A. MHz",
    "location": "CHORAS",
    "address": "HUANUCO, YAROWILCA, CHORAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.91027,
      "lng": -76.60816
    }
  },
  {
    "id": 119,
    "name": "Radio SAN CRISTOBAL DE JACAS CHICO",
    "frequency": "10 / 9 / N.A. MHz",
    "location": "SAN CRISTOBAL DE JACAS CHICO",
    "address": "HUANUCO, YAROWILCA, JACAS CHICO",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.888055,
      "lng": -76.506389
    }
  },
  {
    "id": 120,
    "name": "Radio OBAS",
    "frequency": "TV 11 / FM N.A. MHz",
    "location": "OBAS",
    "address": "HUANUCO, YAROWILCA, OBAS",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta estado operativo",
    "color": "#2ECC71",
    "coordinates": {
      "lat": -9.7963889,
      "lng": -76.66833
    }
  },
  {
    "id": 121,
    "name": "Radio PAMPAMARCA",
    "frequency": "TV 9 / FM N.A. MHz",
    "location": "PAMPAMARCA",
    "address": "HUANUCO, YAROWILCA, PAMPAMARCA",
    "systemType": "TV",
    "status": "OPERATIVO",
    "description": "SISTEMA TV ADAPTADO A LA TECNOLOGIA DTH, BANDA Ku REPORTE DE LA DRTC OF. N°012-2024-GRH-GRI-DRTC de 08/01/2025 INF. N°0398-2024-GRH-GRI-DRTC/DT  del 08/11/2024 El sistema esta operativo se implementó Decodificador EKT,antena parabolica 90cm, LNB banda Ku.",
    "color": "#F28211",
    "coordinates": {
      "lat": -9.704722,
      "lng": -76.704722
    }
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
