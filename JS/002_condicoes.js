// Verdadeiro e Falso (se, senão)
// operadores: == igual, === identico, != diferente, !== não identico, > maior, < menor, >= igual ou maior, =< igual ou menor
let valor = 1;

if (valor == 1) {
    console.log('Número certo');
} else {
    console.error('não é esse valor!');
}

// Verdadeiro e Falso (Condicional ternario)
valor = 2;

valor != 2 ? console.log('numero diferente de 2') : console.log('numero igual a 2');

// Switch
valor = 3;

switch(valor) {
    case 1: console.log('Primeiro'); break;
    case 2: console.log('Segundo'); break;
    case 3: console.log('Terceiro'); break;
    default: console.log('Nenhuma das opções!');
}

