

let monto = parseFloat(prompt("ingrese el monto del producto"))

let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas 1, 3, 6, 9, 12 , 18"))

let promo =((monto * 10) / 100)


let montoConCuota = monto

const calculador = () => {

    if (cantidadCuotas != 1) {
        for (i = 1; i <= cantidadCuotas; i++) {
            let porCuota =((monto * 5) / 100)
            montoConCuota = montoConCuota + porCuota

        }
        let valorPorCuota = (montoConCuota / cantidadCuotas).toFixed(2)

        document.write( "El valor del producto es $" + monto + " la cantidad de cuotas son " + cantidadCuotas + " y el precio por cada una es de $" + valorPorCuota + " lo cual queda en un monto de $" + montoConCuota)

    } else {
        document.write( "El valor del producto es $" + monto + " y estas dentro del 10% de descuento por un pago y queda en $" + (monto - promo))

    }

}

calculador()
