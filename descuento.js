const btnCalcular = document.getElementById("btnCalcular");
const precioFinal = document.getElementById("precioFinal");

const cupones = [
    {nombre:"sanvalentin2022", descuento: 10},
    {nombre:"AFLOP12", descuento: 30},
    {nombre:"BRIDGE091", descuento: 15}
];

function precioConDescuento (precio, descuento)
{
    return (precio * (100 - descuento))/100;
}



btnCalcular.addEventListener('click',function(){
    const precio = parseInt(document.getElementById("inputPrecio").value);
    const descuento = parseInt(document.getElementById("inputDescuento").value);
    const cuponUsuario = document.getElementById("inputCupon").value;

    let precioNuevo = precioConDescuento(precio, descuento);

    const cuponValido = cupones.find(function(cupon){
        return cupon.nombre === cuponUsuario;
    });

    if(cuponUsuario === "")
    {
        precioFinal.innerText = `El precio a pagar por el producto es de $${precioNuevo}`;
    }
    else if(cuponValido)
    {
        const precioConCupon = precioConDescuento(precioNuevo,cuponValido.descuento);
        precioFinal.innerText = `El precio a pagar por el producto con cupón es de $${precioConCupon}`;
    }
    else
    {
        alert("¡¡¡CUPÓN INVÁLIDO!!!");
        precioFinal.innerText = `El precio a pagar por el producto es de $${precioNuevo}`;
    }
    precioNuevo = 0;
});
