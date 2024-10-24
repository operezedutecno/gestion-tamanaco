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

const listarActividades = (busqueda = "") => {
    const mostrarTodo = $("#check-todos").is(':checked');
    const fechaActual = moment().format('YYYY-MM-DD');

    let listActividades = [ ...actividades[anio_selected][momento_selected]];
    console.log(listActividades);
    const materias = Object.entries(anios[anio_selected].materias);
    const busquedaMateria = materias.filter(item => item[1].nombre.toLowerCase().includes(busqueda)).map(item => item[0])
    const busquedaTipoActividad = Object.entries(tiposActividades).filter(item => item[1].nombre.toLowerCase().includes(busqueda)).map(item => item[0])
    listActividades = listActividades.sort((a, b) => new Date(a.fecha_evaluacion) - new Date(b.fecha_evaluacion));
    listActividades = listActividades.filter(item => {
        const fechaEvaluacion = item.fecha_evaluacion
        console.log({ fechaEvaluacion, fechaActual });
        if(!mostrarTodo) {
            if(item.fecha_evaluacion < fechaActual) {
                return false;
            }
        }
        return item;
    })

    console.log({ busqueda });

    if(busqueda !== "") {
        listActividades = listActividades.filter(item => {
            let contieneMateria = false
            let contieneTipoActividad = false
            if(busquedaMateria.length > 0) {
                contieneMateria = busquedaMateria.some(valor => item.materia.toLowerCase().includes(valor.toLowerCase()));
            }
            if(busquedaTipoActividad.length > 0) {
                contieneTipoActividad = busquedaTipoActividad.some(valor => item.tipo_actividad.toLowerCase().includes(valor.toLowerCase()));
            }
            const contieneFecha = moment(item.fecha_evaluacion).format('DD/MM/YYYY').includes(busqueda)

            return contieneMateria || contieneFecha || contieneTipoActividad
        })
    }
    console.log({ listActividades });
    $("#table-actividades tbody").html("")
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

    $(document).on("keyup","#txt-buscar", function() {
        const busqueda = String($(this).val()).toLowerCase()
        listarActividades(busqueda)
    })

    $('#check-todos').change(function() {
        // if($(this).is(':checked')) {
        //   // Acción cuando el checkbox está marcado
        //   console.log('El checkbox ha sido marcado.');
        // } else {
        //   // Acción cuando el checkbox está desmarcado
        //   console.log('El checkbox ha sido desmarcado.');
        // }

        const busqueda = String($("#txt-buscar").val()).toLowerCase()
        listarActividades(busqueda)
      });

    listarPlanMaterias()
    mostrarSeleccionados()
    listarActividades()
})