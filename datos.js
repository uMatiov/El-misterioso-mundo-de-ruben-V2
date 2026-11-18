const DATOS_CAMPANA = {
  personajes: [
    {
      nombre: "Mob",
      rol: "Protagonista",
      imagen: "img/mob",
      encuadre: "center 15%",
      resumen: "Escribe aquí un mini resumen de 2 o 3 líneas sobre su origen, personalidad y qué lo mueve dentro del grupo.",
      rasgoClave: "Por definir",
      estadoActual: "Activo en campaña"
    },
    {
      nombre: "Alexander",
      rol: "Protagonista",
      imagen: "img/alexander",
      encuadre: "center 15%",
      resumen: "Impulsivo y directo, suele meterse en problemas sociales que sus compañeros terminan resolviendo.",
      rasgoClave: "Impredecible en trato social",
      estadoActual: "Activo en campaña"
    },
    {
      nombre: "Clavel",
      rol: "Protagonista",
      imagen: "img/clavel",
      encuadre: "center 15%",
      resumen: "Atenta a los detalles y al estilo, mantiene la calma del grupo aunque no duda en intervenir si alguien lo necesita.",
      rasgoClave: "Observadora y protectora",
      estadoActual: "Activo en campaña"
    },
    {
      nombre: "Kris",
      rol: "Protagonista",
      imagen: "img/kris",
      encuadre: "center 15%",
      resumen: "Escribe aquí su personalidad, habilidades características y vínculos principales con el resto de la mesa.",
      rasgoClave: "Por definir",
      estadoActual: "Activo en campaña"
    },
    {
      nombre: "Robin",
      rol: "Protagonista",
      imagen: "img/robin",
      encuadre: "center 15%",
      resumen: "Escribe aquí su papel dentro de las misiones, conflictos personales y evolución durante los arcos.",
      rasgoClave: "Por definir",
      estadoActual: "Activo en campaña"
    },
    {
      nombre: "Morgan",
      rol: "Protagonista",
      resumen: "Escribe aquí su historia breve, estilo y papel dentro de la campaña.",
      rasgoClave: "Doble forma (Hombre / Femenina)",
      estadoActual: "Activo en campaña",
      formas: [
        {
          etiqueta: "Hombre",
          imagen: "img/morgan_hombre",
          encuadre: "center 15%",
          resumen: "Descripción o actitud de Morgan en su forma masculina."
        },
        {
          etiqueta: "Femenina",
          imagen: "img/morgan_femenina",
          encuadre: "center 15%",
          resumen: "Descripción o actitud de Morgan en su forma femenina."
        }
      ]
    },
    {
      nombre: "Rubén",
      rol: "Director de Mundo",
      imagen: "img/ruben",
      encuadre: "center 15%",
      resumen: "Arquitecto del mundo, los conflictos políticos, los rumores de los periódicos y cada aliado o rival que cruza el camino del grupo.",
      rasgoClave: "Narrador del mundo",
      estadoActual: "Director de campaña"
    }
  ],

  codice: [
    {
      nombre: "Marquitas",
      categoria: "NPC",
      aparicionCap: 25,
      descripcion: "Pequeño compañero bajo el cuidado de Clavel, a quien suele llevar consigo a todas partes."
    },
    {
      nombre: "Emilie",
      categoria: "NPC",
      aparicionCap: 25,
      descripcion: "Participante en la competencia de talentos del festival; cercana a Alexander y Robin."
    },
    {
      nombre: "Calypso",
      categoria: "NPC",
      aparicionCap: 25,
      descripcion: "Figura vinculada al entorno de Clavel y al cuidado de Marquitas."
    },
    {
      nombre: "Gaceta del Festival",
      categoria: "Facción",
      aparicionCap: 22,
      descripcion: "Publicación local famosa por exagerar los vínculos entre los protagonistas y convertirlos en folletines."
    }
  ],

  // Aquí puedes dejar capítulos especiales/perdidos o sobreescribir el arco/sinopsis de cualquier capítulo
  capitulos: [
    {
      numero: 21,
      arco: "Arco II — Rumores y preparativos",
      titulo: "Sesión sin registro de video",
      perdido: true,
      sinopsis: "Crónica breve de transición reconstruida a partir del resumen inicial de la siguiente sesión.",
      parrafos: [
        "No se conserva grabación de esta sesión. Según lo relatado al inicio del capítulo siguiente, el grupo completó su traslado y dejó preparados los asuntos pendientes antes del festival."
      ]
    }
  ]
};