import { anios, tiposActividades, actividades, momentos } from "../data/data.js"

const anio_selected = "primer_anio"
const momento_selected = "primer_momento"

const listarPlanMaterias = () => {
    $("#list-plan-materias").html("")
    const materias = Object.entries(anios[anio_selected].materias);
    for (const [id, materia] of materias) {
        $("#list-plan-materias").append(`
            <a href="#" class="plan-materias list-group-item list-group-item-action" data-materia="${id}">${materia.nombre}</a>
        `)
    }
}

const listarActividades = () => {
    let listActividades = actividades[anio_selected][momento_selected];
    listActividades = listActividades.sort((a, b) => new Date(a.fecha_evaluacion) - new Date(b.fecha_evaluacion));
    for (const actividad of listActividades) {
        $("#table-actividades tbody").append(`
            <tr>
                <td>${anios[anio_selected].materias[actividad.materia].nombre}</td>
                <td class="text-nowrap">${formatearFecha(actividad.fecha_evaluacion)}</td>
                <td class="text-center">${actividad.ponderacion}%</td>
                <td class="text-center">${calcularPuntaje(actividad.ponderacion)}</td>
                <td class="text-center">${tiposActividades[actividad.tipo_actividad].nombre}</td>
            </tr>
        `)
    }
}

const mostrarSeleccionados = () => {
    $("#plan-anio, #actividades-anio").html(`${anios[anio_selected].nombre} - ${momentos[momento_selected].nombre}`)
}

const calcularPuntaje = (porcentaje) => (porcentaje * 20) / 100


const formatearFecha = (dateString) => {
    const [year, month, day] = dateString.split('-');
  
    return `${day}/${month}/${year}`;
}
$(() => {
    $(document).on("click","#list-plan-materias .list-group-item-action", function() {
        $("#list-plan-materias .list-group-item-action").removeClass("active");
        $(this).addClass("active")
        const idMateria = $(this).data("materia")
        const listActividades = actividades[anio_selected][momento_selected].filter(item => item.materia === idMateria);

        const materias = anios[anio_selected].materias;
        $("#plan-materia").removeClass("d-none").html(materias[idMateria].nombre)
        $("#table-plan").removeClass("d-none")
        $("#table-plan tbody").html("")
        if(listActividades.length === 0) {
            $("#table-plan tbody").html(`
                <tr>
                    <td colspan="5" class="text-danger text-center">El plan de evaluación para esta asignatura no ha sido cargado.</td>
                </tr>
            `)
        }
        for (const actividad of listActividades) {
            $("#table-plan tbody").append(`
                <tr>
                    <td>${actividad.tema}</td>
                    <td class="text-nowrap">${formatearFecha(actividad.fecha_evaluacion)}</td>
                    <td class="text-center">${actividad.ponderacion}%</td>
                    <td class="text-center">${calcularPuntaje(actividad.ponderacion)}</td>
                    <td class="text-center">${tiposActividades[actividad.tipo_actividad].nombre}</td>
                </tr>
            `)
        }
    })

    listarPlanMaterias()
    mostrarSeleccionados()
    listarActividades()
})