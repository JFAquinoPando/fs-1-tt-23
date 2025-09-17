console.log(valor);

const btnGuardar = document.querySelector("[data-name='btn-guardar']");
const textoTarea = document.querySelector("input[name='nueva-tarea']");
const listadoTareas = document.querySelector("ul");
const btnLimpiar = document.querySelector("#btn-limpiar")
const btnsEliminar = document.querySelectorAll(".eliminar")

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


console.log(btnsEliminar);

btnsEliminar.forEach(
    function(elemento){
        elemento.addEventListener("click", function (evento) {
            evento.target.closest("li").outerHTML = ""
        })
    }
)

