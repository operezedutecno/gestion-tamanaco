export const anios = {
    primer_anio: {
        nombre: "Primer Año",
        materias: {
            ca: {
                nombre: "Castellano"
            },
            ile: {
                nombre: "Inglés y Otras Lenguas Extranjeras"
            },
            ma: {
                nombre: "Matemáticas"
            },
            ef: {
                nombre: "Educación física"
            },
            ap: {
                nombre: "Arte y Patrimonio"
            },
            cn: {
                nombre: "Ciencias Naturales"
            },
            ghc: {
                nombre: "Geografía, Historia y Ciudadanía"
            },
            oc: {
                nombre: "Orientación y Convivencia"
            },
            pg: {
                nombre: "Grupo de Creación, Recreación y Participación"
            },
        }
    }
}

export const momentos = {
    primer_momento: {
        nombre: "Primer Momento"
    },
    segundo_momento: {
        nombre: "Segundo Momento"
    },
    tercer_momento: {
        nombre: "Tercer Momento"
    },
}

export const tiposActividades = {
    an: {
        nombre: "Actividad Navideña"
    },
    ar: {
        nombre: "Actividad de refuerzo"
    },
    atp: {
        nombre: "Análisis teórico práctico"
    },
    cc: {
        nombre: "Cuadro comparativo"
    },
    cos: {
        nombre: "Realizar los puntos básicos para coser a mano."
    },
    cues: {
        nombre: "Cuestionario"
    },
    diag: {
        nombre: "Diálogo"
    },
    dia: {
        nombre: "Diario"
    },
    dic: {
        nombre: "Dictado"
    },
    dl: {
        nombre: "Dibujo libre"
    },
    de: {
        nombre: "Dibujo explicativo"
    },
    dip: {
        nombre: "Díptico"
    },
    ej: {
        nombre: "Ejercicios"
    },
    em: {
        nombre: "Elongación muscular"
    },
    esc: {
        nombre: "Escenificación"
    },
    gd: {
        nombre: "Guión del diálogo"
    },
    gl: {
        nombre: "Glosario"
    },
    gt: {
        nombre: "Guía de trabajo"
    },
    hist: {
        nombre: "Historieta"
    },
    infog: {
        nombre: "Infografía"
    },
    infor: {
        nombre: "Informe"
    },
    lam: {
        nombre: "Laminario"
    },
    mc: {
        nombre: "Mapa conceptual"
    },
    mfp: {
        nombre: "Mapa físico y poblacional"
    },
    mh: {
        nombre: "Mapa histórico"
    },
    mm: {
        nombre: "Mapa mental"
    },
    pd: {
        nombre: "Inicio elaboración del picaporte navideño"
    },
    pd2: {
        nombre: "Culminación y decoración del picaporte navideño"
    },
    pe: {
        nombre: "Prueba estructurada"
    },
    pil: {
        nombre: "Práctica e informe de laboratorio"
    },
    pm: {
        nombre: "Presentación del muestrario"
    },
    pp: {
        nombre: "Prueba Práctica"
    },
    pr: {
        nombre: "Práctica"
    },
    quiz: {
        nombre: "Quiz"
    },
    rc: {
        nombre: "Revisión de cuadernos"
    },
    rd: {
        nombre: "Representación mediante el dibujo"
    },
    res: {
        nombre: "Resumen"
    },
    rh: {
        nombre: "Reseña histórica"
    },
    td: {
        nombre: "Trabajo con defensa"
    },
    tdm: {
        nombre: "Transferencia del diseño o modelo"
    },
    te: {
        nombre: "Trabajo escrito"
    },
    ti: {
        nombre: "Taller individual"
    },
    tp: {
        nombre: "Taller en pareja"
    },
    trip: {
        nombre: "Tríptico"
    },
    tt: {
        nombre: "Taller teórico"
    },
}

export const actividades = {
    primer_anio: {
        primer_momento: [
            // Castellano
            { materia: "ca", tema:"Refuerzo y nivelación. contenidos vistos en el año anterior", tipo_actividad:"te", ponderacion: 10, fecha_evaluacion:"2024-10-01"},
            { materia: "ca", tema:"Lenguaje y comunicación. Código lingüístico. Situaciones comunicacionales o comunicativas. Clases y elementos de la comunicación", tipo_actividad:"ti", ponderacion: 20, fecha_evaluacion:"2024-10-17"},
            { materia: "ca", tema:"Palabras primitivas, derivadas y compuestas Sufijos y prefijos. Sinónimos, antónimos y homónimos", tipo_actividad:"pe", ponderacion: 20, fecha_evaluacion:"2024-10-24"},
            { materia: "ca", tema:"Expresiones lingüísticas Imágenes sensoriales y afectivos", tipo_actividad:"ti", ponderacion: 20, fecha_evaluacion:"2024-11-21"},
            { materia: "ca", tema:"Micro biografías de diferentes héroes y heroínas", tipo_actividad:"atp", ponderacion: 20, fecha_evaluacion:"2024-12-05"},
            { materia: "ca", tema:"Portada- Presentación general (Margen, numeración de las páginas).- Presencia del Plan de Evaluación.- Pulcritud e higiene.- Ortografía.- Desarrollo del contenido de c/u de las clases.- Realización de tareas y/o asignaciones.- Firma del representante", tipo_actividad:"rc", ponderacion: 10, fecha_evaluacion:"2024-12-11"},
            
            // Inglés
            { materia: "ile", tema:"Temas vistos en años anteriores", tipo_actividad:"ar", ponderacion: 10, fecha_evaluacion:"2024-09-30"},
            { materia: "ile", tema:"Saludar, presentarse y presentar a otros, despedirse. El alfabeto.", tipo_actividad:"gd", ponderacion: 10, fecha_evaluacion:"2024-10-10"},
            { materia: "ile", tema:"Resumen. Presentarse y presentar a otros. Despedirse. El alfabeto", tipo_actividad:"diag", ponderacion: 15, fecha_evaluacion:"2024-10-17"},
            { materia: "ile", tema:"Expresar agradecimiento y responder a él. - Decir los números en inglés", tipo_actividad:"diag", ponderacion: 15, fecha_evaluacion:"2024-10-31"},
            { materia: "ile", tema:"Entender y expresar aprobación. desaprobación Días de la semana, meses y números cardinales ,pronombres personales, adjetivos posesivos, formas del verbo to be..", tipo_actividad:"pe", ponderacion: 15, fecha_evaluacion:"2024-11-13"},
            { materia: "ile", tema:"Entender y expresar mandatos, peticiones, Instrucciones y prohibiciones. Singular y plural.", tipo_actividad:"dic", ponderacion: 10, fecha_evaluacion:"2024-11-18"},
            { materia: "ile", tema:"Actividad navideña", tipo_actividad:"an", ponderacion: 15, fecha_evaluacion:"2024-11-28"},
            { materia: "ile", tema:"Presentación, pulcritud, plan de evaluación, horario de clase, actividades desarrolladas en clase, firma del representante", tipo_actividad:"rc", ponderacion: 10, fecha_evaluacion:"2024-12-09"},
            
            // Matemáticas
            { materia: "ma", tema:"Refuerzo - nivelación", tipo_actividad:"te", ponderacion: 10, fecha_evaluacion:"2024-10-04"},
            { materia: "ma", tema:"Números naturales (N), Operaciones Aritméticas, Orden en N y ecuaciones de primer grado en N", tipo_actividad:"pp", ponderacion: 10, fecha_evaluacion:"2024-10-11"},
            { materia: "ma", tema:"Adición y sustracción con números Z y sus propiedades", tipo_actividad:"ti", ponderacion: 20, fecha_evaluacion:"2024-10-25"},
            { materia: "ma", tema:"Producto y cociente con números Z y sus propiedades", tipo_actividad:"ej", ponderacion: 20, fecha_evaluacion:"2024-11-08"},
            { materia: "ma", tema:"Potenciación en Z", tipo_actividad:"tp", ponderacion: 20, fecha_evaluacion:"2024-11-22"},
            { materia: "ma", tema:"Números enteros, operaciones en Z, MCM, MCD.", tipo_actividad:"pp", ponderacion: 20, fecha_evaluacion:"2024-12-06"},


            // Educación Física
            { materia: "ef", tema:"Fundamentos Técnicos del Baloncesto • Tipos de Pase • Recepciones • Tipos de Saque", tipo_actividad:"pr", ponderacion: 10, fecha_evaluacion:"2024-10-21"},
            { materia: "ef", tema:"Fundamentos Técnicos del Baloncesto • Tipos de Pase • Recepciones • Tipos de Saque", tipo_actividad:"infog", ponderacion: 15, fecha_evaluacion:"2024-10-28"},
            { materia: "ef", tema:"Fundamentos Técnicos del Baloncesto • Driblin • Doble Paso • Lanzamientos", tipo_actividad:"pr", ponderacion: 15, fecha_evaluacion:"2024-11-11"},
            { materia: "ef", tema:"Fundamentos Técnicos del Baloncesto • Driblin • Doble Paso Lanzamientos", tipo_actividad:"gl", ponderacion: 15, fecha_evaluacion:"2024-11-18"},
            { materia: "ef", tema:"Prueba Ariet", tipo_actividad:"pr", ponderacion: 15, fecha_evaluacion:"2024-12-02"},
            { materia: "ef", tema:"Movimientos angulares de las articulaciones. Estructura neuromuscular", tipo_actividad:"em", ponderacion: 15, fecha_evaluacion:"2024-12-09"},
            { materia: "ef", tema:"Juegos Recreativos y Pre-deportivos", tipo_actividad:"pr", ponderacion: 10, fecha_evaluacion:"2024-12-09"},
            { materia: "ef", tema:"Rasgos Uniformidad Puntualidad Asistencia", tipo_actividad:"dia", ponderacion: 5, fecha_evaluacion:"2024-12-09"},


            // Arte y Patrimonio
            { materia: "ap", tema:"La forma, el espacio y el tiempo como elementos fundamentales de las manifestaciones artísticas.", tipo_actividad:"rd", ponderacion: 15, fecha_evaluacion:"2024-10-09"},
            { materia: "ap", tema:"Las manifestaciones culturales en los pueblos del mundo.", tipo_actividad:"rd", ponderacion: 15, fecha_evaluacion:"2024-10-16"},
            { materia: "ap", tema:"El color, el círculo cromático. Relatividad del color.", tipo_actividad:"dl", ponderacion: 10, fecha_evaluacion:"2024-10-23"},
            { materia: "ap", tema:"Artes visuales, artes escénicas, artes musicales.", tipo_actividad:"td", ponderacion: 10, fecha_evaluacion:"2024-10-30"},
            { materia: "ap", tema:"El respeto a la diversidad y las diferencias en las creaciones humanas. Las creaciones humanas no compiten; se disfrutan y se comparten", tipo_actividad:"ti", ponderacion: 10, fecha_evaluacion:"2024-11-13"},
            { materia: "ap", tema:"	El lenguaje visual. Lenguaje auditivo. Lenguaje cinestésico. El disfrute de la creación artística en los distintos lenguajes de expresión humana. Línea, valor, colores en las artes plásticas. El volumen y la textura en las esculturas. El color, el círculo cromático. Relatividad del color. El volumen y la textura. Los elementos de la expresión musical: timbre, intensidad, duración, ritmo, altura, afinación.", tipo_actividad:"pe", ponderacion: 20, fecha_evaluacion:"2024-11-27"},
            { materia: "ap", tema:"Elementos básicos de la expresión escénica: la teatralidad, el teatro y la danza, el texto, los personajes, los actores y las actrices, escenografía, utilería, vestuario, musicalización, maquillaje, público, director o directora.", tipo_actividad:"esc", ponderacion: 20, fecha_evaluacion:"2024-12-04"},
        
            // Ciencias naturales
            { materia: "cn", tema:"* Refuerzo nivelación de contenidos vistos en años anteriores.", tipo_actividad:"gt", ponderacion: 10, fecha_evaluacion:"2024-10-02"},
            { materia: "cn", tema:"* Método científico: concepto, características, elementos e importancia.", tipo_actividad:"res", ponderacion: 10, fecha_evaluacion:"2024-10-16"},
            { materia: "cn", tema:"* Problemas de investigación en ciencias (IC). * Síntesis del proceso de investigación.", tipo_actividad:"mc", ponderacion: 10, fecha_evaluacion:"2024-10-23"},
            { materia: "cn", tema:"* La observación. * El subproceso de observación en las ciencias naturales y la tecnología.", tipo_actividad:"tt", ponderacion: 10, fecha_evaluacion:"2024-10-30"},
            { materia: "cn", tema:"* Principales problemas ambientales que afectan que afectan a Venezuela. * Contaminación ambiental: definición y tipos. * Calentamiento global: definición, causas y consecuencias.", tipo_actividad:"trip", ponderacion: 10, fecha_evaluacion:"2024-11-06"},
            { materia: "cn", tema:"* Cadenas alimentarias. * Redes o tramas tróficas.", tipo_actividad:"mm", ponderacion: 10, fecha_evaluacion:"2024-11-13"},
            { materia: "cn", tema:"* Circulación de la materia y la energía en una cadena alimentaria. * Pirámides tróficas.", tipo_actividad:"infor", ponderacion: 15, fecha_evaluacion:"2024-11-20"},
            { materia: "cn", tema:"* Normas que deben cumplir en el laboratorio de Ciencias Naturales. * Tipos de materiales existentes en un laboratorio de Ciencias Naturales.", tipo_actividad:"lam", ponderacion: 10, fecha_evaluacion:"2024-11-27"},
            { materia: "cn", tema:"* La observación como un medio de reconocer la biodiversidad de las plantas", tipo_actividad:"pil", ponderacion: 15, fecha_evaluacion:"2024-12-04"},


            //Geografía, historia y ciudadanía
            { materia: "ghc", tema:"Ciencias sociales y su importancia (Contenidos vistos el año escolar anterior)", tipo_actividad:"ar", ponderacion: 10, fecha_evaluacion:"2024-09-30"},
            { materia: "ghc", tema:"Relación entre las potencialidades del espacio geográfico y las labores productivas y el cambio en el espacio geográfico por mano del hombre", tipo_actividad:"de", ponderacion: 15, fecha_evaluacion:"2024-10-07"},
            { materia: "ghc", tema:"Relación del ser humano con el espacio donde hace vida. ¿Cómo concibe el mundo un llanero en la sabana o un andino entre las montañas?", tipo_actividad:"mm", ponderacion: 10, fecha_evaluacion:"2024-10-21"},
            { materia: "ghc", tema:"Problemas de riesgos en la comunidad donde se vive.", tipo_actividad:"quiz", ponderacion: 10, fecha_evaluacion:"2024-10-28"},
            { materia: "ghc", tema:"Distribución de la población mundial y los factores: climas, zonas de adversidad y zonas de bonanza, climas extremos y relieves de difícil acceso.", tipo_actividad:"mfp", ponderacion: 10, fecha_evaluacion:"2024-11-11"},
            { materia: "ghc", tema:"La comunidad como hábitat de convivencia de muchas familias. Características de convivencia y corresponsabilidad en los pueblos indígenas. Responsabilidad del Estado venezolano con la protección de la familia. La protección familiar en otros países. Autobiografía. Biografía de nuestros ascendientes. El árbol genealógico-cultural de las familias", tipo_actividad:"mh", ponderacion: 10, fecha_evaluacion:"2024-11-18"},
            { materia: "ghc", tema:"La comunidad donde se reside, su conexión geohistórica y cultural con el municipio, la región y el país. La organización política, social, económica, cultural y ambiental en las comunidades. Consejos comunales y comunas.", tipo_actividad:"rh", ponderacion: 15, fecha_evaluacion:"2024-12-02"},
            { materia: "ghc", tema:"Márgenes, plan de evaluación, portada por lapso adaptada a los temas a los temas abordados, actividades, contenido dado en clase, pulcritud, responsabilidad", tipo_actividad:"rc", ponderacion: 10, fecha_evaluacion:"2024-12-09"},
            { materia: "ghc", tema:"- Comportamiento en aula - Trabajo en aula - Cumplimiento de las normas - Cumplimiento de las actividades", tipo_actividad:"dia", ponderacion: 10, fecha_evaluacion:"2024-12-09"},
            

            // Orientación
            { materia: "oc", tema:"La Familia. Importancia. Relación familia, liceo y comunidad (Refuerzo)", tipo_actividad:"mc", ponderacion: 20, fecha_evaluacion:"2024-10-03"},
            { materia: "oc", tema:"Relaciones interpersonales. La mediación y conciliación como procesos para la resolución de conflictos. Conflicto y violencia", tipo_actividad:"hist", ponderacion: 10, fecha_evaluacion:"2024-10-10"},
            { materia: "oc", tema:"Sistema de protección, Defensorías, Consejos de Protección y Consejos de Derecho de niños, niñas y adolescentes. Deberes y Derechos de Niños y Adolescentes", tipo_actividad:"cc", ponderacion: 10, fecha_evaluacion:"2024-10-17"},
            { materia: "oc", tema:"La sexualidad en la adolescencia. Métodos de prevención de enfermedades ITS", tipo_actividad:"tp", ponderacion: 10, fecha_evaluacion:"2024-10-31"},
            { materia: "oc", tema:"La sexualidad en la adolescencia. Qué es la sexualidad humana, resumen", tipo_actividad:"res", ponderacion: 10, fecha_evaluacion:"2024-11-07"},
            { materia: "oc", tema:"La sexualidad en la adolescencia.Riesgos en la adolescencia. Amenaza, prevención, riesgos, debilidades y fortalezas del adolescente", tipo_actividad:"dip", ponderacion: 10, fecha_evaluacion:"2024-11-14"},
            { materia: "oc", tema:"Tradiciones y Fiestas navideñas en Venezuela", tipo_actividad:"cues", ponderacion: 10, fecha_evaluacion:"2024-11-21"},
            { materia: "oc", tema:"Tradiciones y Fiestas navideñas en Venezuela", tipo_actividad:"cues", ponderacion: 10, fecha_evaluacion:"2024-11-28"},
            { materia: "oc", tema:"Rasgos", tipo_actividad:"dia", ponderacion: 10, fecha_evaluacion:"2024-12-05"},

            // Grupo de Creación, Recreación y Participación
            { materia: "pg", tema:"Realizar muestrario puntos básicos para coser a mano. Puntada recta, puntadas atrás, punto festón, costura francesa, remate de la costura inicio y final. Material a utilizar: un retazo de tela unicolor de 45x45cm, aguja, alfileres, hilos de diferente color, regla, tijera. Evaluaciones: Grupo A: 01/10, Grupo B: 08/10", tipo_actividad:"cos", ponderacion: 20, fecha_evaluacion:"2024-10-01"},
            { materia: "pg", tema:"Presentación del muestrario con los puntos básicos. Selección y copia del modelo del picaporte Navideño seleccionado. Material próxima clase un cuarto de tela de mono, negro, beige o roja, blanca según e modelo seleccionado hilo, aguja, alfileres, tijera. Evaluaciones: Grupo A: 15/10, Grupo B: 22/10", tipo_actividad:"pm", ponderacion: 25, fecha_evaluacion:"2024-10-15"},
            { materia: "pg", tema:"Transferencia del patrón del picaporte navideño a la tela y cartón. Evaluaciones: Grupo A: 29/10, Grupo B: 05/11", tipo_actividad:"tdm", ponderacion: 15, fecha_evaluacion:"2024-10-29"},
            { materia: "pg", tema:"Inicio ensamblaje del picaporte navideño utilizando el punto básico- puntada recta o costura francesa remate de la costura inicio y final. Evaluaciones: Grupo A: 12/11, Grupo B: 19/11", tipo_actividad:"pd", ponderacion: 15, fecha_evaluacion:"2024-11-12"},
            { materia: "pg", tema:"Culminación del picaporte navideño utilizando el punto básico- puntada recta o costura francesa remate de la costura inicio y final. Evaluaciones: Grupo A: 26/11, Grupo B: 03/12", tipo_actividad:"pd2", ponderacion: 15, fecha_evaluacion:"2024-11-26"},
            { materia: "pg", tema:"Portada plan de evaluación, horario, margen en las hojas, enumerar las páginas, firma representante en la actividad realizada, toda actividad debe llevar encabezado. Evaluaciones: Grupo A: 26/11, Grupo B: 03/12", tipo_actividad:"rc", ponderacion: 10, fecha_evaluacion:"2024-11-26"},
        ]
    }
}