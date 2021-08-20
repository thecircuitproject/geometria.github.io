//--------------------SQUARE-----------------------------------------------
function perimetroCuadrado(lado){
    return 4*lado;
}

function areaCuadrado(lado){
    return Math.pow(lado,2)
}
//Connect with HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    document.getElementById("outputCuadrado").value = perimetro;
    //alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("outputCuadrado").value = area;
}
//-------------------------------------------------------------------------
//--------------------TRIANGLE---------------------------------------------

function perimetroTriangulo(lado1,lado2,base){
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

function areaEquilatero(lado){
    const area = (Math.sqrt(3)*Math.pow(lado,2))/4
    return area;
}

function areaIsosceles(a,b){
    console.log(a,b);
    const base = b/2;
    const h = Math.sqrt(Math.pow(a,2)-Math.pow(base,2));
    const area = (b*h)/2;
    console.log(area);
    return area;
}

function areaEscaleno(a,b,c){
    const c2 = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    if (c == c2){
        const area = (a*b)/2
        return area;
    }
    const s = (a + b + c)/2;
    const heron = s*(s-a)*(s-b)*(s-c);
    const area = Math.sqrt(heron,2);
    return area;
}

function areaTriangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado1 == lado3){
        const areaE = areaEquilatero(lado1);
        return areaE;
    }
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        const sides = [lado1,lado2,lado3];
        sides.sort(function(a,b){return a-b});
        console.log(sides);
        if(sides[0]==sides[1]){
            const repeated = sides[0];
            const side = sides[2];
            const areaI = areaIsosceles(repeated,side);
            return areaI;
        }
        else{
            const repeated = sides[2];
            const side = sides[0];
            console.log(repeated,side);
            const areaI = areaIsosceles(repeated,side);
            return areaI;
        }
    }
    else{
        const sides = [lado1,lado2,lado3];
        sides.sort(function(a,b){return a-b});
        const smallSide = sides[0];
        const mediumSide = sides[1]
        const largeSide = sides[2];
        const areaEs = areaEscaleno(smallSide,mediumSide,largeSide);
        return areaEs;
    }
}
//Connect with HTML
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTriangulo3");
    const lado3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,lado3);
    document.getElementById("outputTriangulo").value = perimetro;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTriangulo3");
    const lado3 = parseInt(input3.value);

    const area = areaTriangulo(lado1,lado2,lado3);
    document.getElementById("outputTriangulo").value = area;
}
//-------------------------------------------------------------------------
//--------------------CIRCLE---------------------------------------------
const PI = Math.PI;
function diametro(radio){
    return radio*2;
}
function circunferencia(radio){
    return 2*PI*radio;
}
function areaCirculo(radio){
    return PI*Math.pow(radio,2);
}

//Conectamos con HTML
function calcularCircunferencia(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const circun= circunferencia(value);
    document.getElementById("outputCircle").value = circun;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    document.getElementById("outputCircle").value = area;
}