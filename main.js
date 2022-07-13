
let nota1 = parseInt (prompt('ingrese la primer nota'))
let nota2 = parseInt (prompt('ingrese la segunda nota'))
let nota3 = parseInt (prompt('ingrese la tercer nota'))

let ListaDeNotas = [nota1,nota2,nota3]

function ContadorDeNotas (ListaDeNotas){
    let ContadorDeNotas=0;
    for(let i = 0; i < 3; i++){
        ContadorDeNotas = ContadorDeNotas + ListaDeNotas[i];
    }
    return ContadorDeNotas;
}

let contador = ContadorDeNotas(ListaDeNotas);

function SacarPromedio(contador){
    let promedio = Math.round(contador/3);
    return promedio;
}

let PromedioFinal = SacarPromedio(contador)
if(PromedioFinal > 6){
    alert('Tu nota es de ' + PromedioFinal + 'Estás Aprobado')
} else {
    alert('Tu nota es de ' + PromedioFinal + 'Estás Desaprobado')
}

