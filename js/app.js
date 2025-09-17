console.log(valor);

const btnGuardar = document.querySelector("[data-name='btn-guardar']");
const textoTarea = document.querySelector("input[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");
const btnLimpiar = document.querySelector("#btn-limpiar")
let btnsEliminar = []

btnGuardar.addEventListener("click", function(evento){
    console.log(textoTarea.value);
    const tarea = `<li class="flex justify-between items-center">
                <span> ${textoTarea.value} </span>
                <button class="bg-red-900 px-3 rounded-lg eliminar">x</button>
    </li>`
    listadoTareas.insertAdjacentHTML("beforeend", tarea)
});

btnLimpiar.addEventListener("click", function(evento){
    listadoTareas.innerHTML = ""
})


listadoTareas.addEventListener("click", function(evento){
    console.log("Evento: ", evento.target);

    if (evento.target.tagName == "BUTTON") {
        evento.target.closest("li").remove()
    }

    if (evento.target.tagName == "SPAN") {
        alert(evento.target.textContent)
    }
    
})

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


