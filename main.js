
let nota1 = parseInt (prompt('ingrese la primer nota'))
let nota2 = parseInt (prompt('ingrese la segunda nota'))
let nota3 = parseInt (prompt('ingrese la tercer nota'))

let ListaDeNotas = [nota1,nota2,nota3]

function ContadorDeNotas (ListaDeNotas){
    let SumadorDeNotas = 0;
    for(let i = 0; i < 3; i++){
        SumadorDeNotas = SumadorDeNotas + ListaDeNotas[i];
    }
    return SumadorDeNotas;
}

const promedio = SumadorDeNotas/3;
if(promedio > 6){
    console.log('Aprobaste la cursada, tu nota es: ' + promedio)
} else {
    console.log('Reprobaste la cursada , tu nota es: ' + promedio)
}

