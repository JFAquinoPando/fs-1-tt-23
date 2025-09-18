var valor = 10000

function guardar(clave, valor) {
    localStorage.setItem(clave, valor)
    return true
}

function recuperar(clave) {
    return localStorage.getItem(clave)
}

