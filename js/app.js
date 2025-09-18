import { valor, guardar, recuperar } from "./auxiliar.js";

const btnGuardar = document.querySelector("[data-name='btn-guardar']");
const textoTarea = document.querySelector("input[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");
const btnLimpiar = document.querySelector("#btn-limpiar")

let historicoTareas =recuperar("estados") ?? []


export function guardarTarea(evento){
    console.log(textoTarea.value);
    historicoTareas.push(textoTarea.value)

    const tarea = `<li class="flex justify-between items-center">
                <span> ${textoTarea.value} </span>
                <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`
    listadoTareas.insertAdjacentHTML("beforeend", tarea)

    guardar("estados", historicoTareas)
}

btnGuardar.addEventListener("click", guardarTarea);

btnLimpiar.addEventListener("click", function(evento){
    listadoTareas.innerHTML = ""
    guardar("estados", [])
})

function recuperarTodo() {
    const mostrar = historicoTareas.map(
        function (elemento) {
            return `<li class="flex justify-between items-center">
                        <span>${elemento}</span>
                        <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
                    </li>`
        }
    )
    
    listadoTareas.insertAdjacentHTML("beforeend" , mostrar.join(""))
}


listadoTareas.addEventListener("click", function(evento){
    /* Agrego como delegación de eventos:
            llego al hijo a través del padre (elemento HTML)
    */
    console.log("Evento: ", evento.target);

    if (evento.target.tagName == "BUTTON") {
        const texto = evento.target.closest("li").querySelector("span").textContent
        console.log("revisar: ",texto);
        
        evento.target.closest("li").remove()
        historicoTareas = historicoTareas.filter(function(tarea){
            return tarea != texto
        })
        
        guardar("estados", historicoTareas)

    }

    if (evento.target.tagName == "SPAN") {
        alert(evento.target.textContent)
    }
    
})


recuperarTodo()

/* setInterval(
    function () {
        btnsEliminar =  document.querySelectorAll(".eliminar")

        btnsEliminar.forEach(
            function(elemento){
                elemento.addEventListener("click", function (evento) {
                    evento.target.closest("li").outerHTML = ""
                })
            }
        )
    }
    , 3000) */


