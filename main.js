let precio1 = parseInt (prompt('ingrese precio del primer producto'))
let precio2 = parseInt (prompt('ingrese precio del segundo producto'))
let precio3 = parseInt (prompt('ingrese precio del tercer producto'))

const ListaDePrecios = [precio1,precio2,precio3]
let SumadorDePrecios = 0;

for(let i = 0; i < 3; i++){
    SumadorDePrecios = SumadorDePrecios + ListaDePrecios[i];
}

console.log('Tu monto a pagar es ' + SumadorDePrecios);
