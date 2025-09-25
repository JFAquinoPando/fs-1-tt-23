export function calcularDescuento(precio, descuento) {
    if(descuento > 0){
        let resultado = precio - (precio * (descuento/100));
        if (resultado > 0) {
            return resultado
        }else{
            return 0
        }
    }else{
        return precio
    }
}