// variables globales
const PI = Math.PI;

// variables de calculo para el cuadrado
const btnPCuadrado = document.getElementById("btnPCuadrado");
const btnACuadrado = document.getElementById("btnACuadrado");
const resCuadrado = document.getElementById("resultadoCuadrado");

// variables de calculo para el triangulo 
const btnPTriangulo = document.getElementById("btnPTriangulo");
const btnATriangulo = document.getElementById("btnATriangulo");
const resTriangulo = document.getElementById("resultadoTriangulo");

// variables para el calculo del circulo
const btnPCirculo = document.getElementById("btnPCirculo");
const btnACirculo = document.getElementById("btnACirculo");
const resCirculo = document.getElementById("resultadoCirculo");

//variables para el calculo de la altura del circulo
const btnAlturaTS = document.getElementById("btnAlturaTS");
const resultadoTS = document.getElementById("resultadoTS");

// variables para manejar las cards de las figuras
const iCuadrado = document.getElementById("iCuadrado");
const iCirculo = document.getElementById("iCirculo");
const iTriangulo = document.getElementById("iTriangulo");
const iIsoceles = document.getElementById("iIsoceles");


ocultarItem("isoceles");
ocultarItem("cuadrado");
ocultarItem("triangulo");
ocultarItem("circulo");


// -------------------------- FUNCIONES ------------------------//
// cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado (lado)
{
    return Math.pow(lado, 2);
}


console.groupEnd();

// triángulo
console.group("Triangulo");

function areaTriangulo (base, altura)
{
    return ( base * altura ) / 2;
}

function perimetroTriangulo (lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

console.groupEnd();


// Círculo 
console.group("Circulo");

function diametroCirculo (radio)
{
    return radio * 2;
}

function perimetroCirculo (radio)
{
    return diametroCirculo(radio) * PI;
}

function areaCirculo (radio)
{
    return PI * Math.pow(radio,2);
}

function ocultarItem(item)
{
    document.getElementById(item).style.display = "none"; 
}

function mostrarItem(item)
{
    document.getElementById(item).style.display = ""; 
}

console.groupEnd();

// triangulo isoceles

function alturaIsoceles (lado1, lado2, base)
{
    // validar triangulo isoceles
    if(lado1 === lado2 || lado1 === base || lado2 === base)
    {
        return Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2)/4));
    }
    else
    {
        alert("Las medidad proporcionadas no corresponden a un triangulo "+
        "isoceles, al menos 2 lados deben tener la misma medida para ser "+
        "un triángulo isóceles");
        return;
    }
}


// eventos para la figura de cuadrado
btnPCuadrado.addEventListener('click',function(){
    const ladoC = parseInt(document.getElementById("ladoCuadrado").value);
    const medida = document.getElementById("medidaCuadrado").value;

    resCuadrado.innerText = `Perímetro: ${perimetroCuadrado(ladoC)} ${medida}`;
});

btnACuadrado.addEventListener('click', function(){
    const ladoC = parseInt(document.getElementById("ladoCuadrado").value);
    const medida = document.getElementById("medidaCuadrado").value;

    resCuadrado.innerText = `Área: ${areaCuadrado(ladoC)} ${medida}^2`;
});

// eventos para los calculos de triangulos
btnPTriangulo.addEventListener('click',function(){
    const baseT = parseInt(document.getElementById("baseT").value);
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const medidaT = document.getElementById("medidaTriangulo").value;

    resTriangulo.innerText = `Perímetro: ${perimetroTriangulo(lado1, lado2, baseT)} ${medidaT}`;
});

btnATriangulo.addEventListener('click', function(){
    const baseT = parseInt(document.getElementById("baseT").value);
    const alturaT = parseInt(document.getElementById("alturaT").value);
    const medidaT = document.getElementById("medidaTriangulo").value;

    resTriangulo.innerText = `Área: ${areaTriangulo(baseT, alturaT)} ${medidaT}^2`;
});

// eventos para los calculos de circulo

btnPCirculo.addEventListener('click', function(){
    const radio = parseInt(document.getElementById('radio').value);
    const medida = document.getElementById("medidaCirculo").value;
    
    resCirculo.innerText = `Perímetro: ${perimetroCirculo(radio).toFixed(3)} ${medida}`;
});

btnACirculo.addEventListener('click', function(){
    const radio = parseInt(document.getElementById('radio').value);
    const medida = document.getElementById("medidaCirculo").value;
    
    resCirculo.innerText = `Área: ${areaCirculo(radio).toFixed(3)} ${medida}^2`;
});

// eventos para los calculos de la altura del isoceles
btnAlturaTS.addEventListener('click', function(){
    const baseTS = parseInt(document.getElementById("baseTS").value);
    const ladoIzqTS = parseInt(document.getElementById("ladoIzqTS").value);
    const ladoDerTS = parseInt(document.getElementById("ladoDerTS").value);
    const medida = document.getElementById("medidaTS").value;

    resultadoTS.innerText = `Altura: ${alturaIsoceles(ladoIzqTS, ladoDerTS, baseTS).toFixed(2)} ${medida}`; 
});

//eventos para los items del menu de figuras
iCuadrado.addEventListener('click', function(){
    mostrarItem("cuadrado");
    ocultarItem("isoceles");
    ocultarItem("triangulo");
    ocultarItem("circulo");
    iCuadrado.style.color="#f0ac2f";
    iCirculo.style.color="";
    iTriangulo.style.color="";
    iIsoceles.style.color="";
});

iTriangulo.addEventListener('click', function(){
    mostrarItem("triangulo");
    ocultarItem("isoceles");
    ocultarItem("cuadrado");
    ocultarItem("circulo");
    iCuadrado.style.color="";
    iCirculo.style.color="";
    iTriangulo.style.color="#f0ac2f";
    iIsoceles.style.color="";
});

iCirculo.addEventListener('click', function(){
    mostrarItem("circulo");
    ocultarItem("isoceles");
    ocultarItem("cuadrado");
    ocultarItem("triangulo");
    iCuadrado.style.color="";
    iCirculo.style.color="#f0ac2f";
    iTriangulo.style.color="";
    iIsoceles.style.color="";
});

iIsoceles.addEventListener('click', function(){
    mostrarItem("isoceles");
    ocultarItem("cuadrado");
    ocultarItem("triangulo");
    ocultarItem("circulo");
    iCuadrado.style.color=""; 
    iCirculo.style.color="";
    iTriangulo.style.color="";
    iIsoceles.style.color="#f0ac2f";
});