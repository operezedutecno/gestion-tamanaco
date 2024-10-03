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
    segundi_momento: {
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
            
        ]
    }
}