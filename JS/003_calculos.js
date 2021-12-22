let no = [12,21];
let calculo = 5;

switch(calculo){
    case 0: console.log(no[0] + no[1]); break; // soma
    case 1: console.log(no[0] - no[1]); break; // subtração
    case 2: console.log(no[0] / no[1]); break; // divisão
    case 3: console.log(no[0] * no[1]); break; // multiplicação
    case 4: console.log(no[0] ** no[1]); break; // base elevada a potencia (12²¹)
    case 5: console.log(no[0] % no[1]); break; // resto da divisão
}

if (no[0] < 100 ) {
    no[0]++; // Ou no[0] += 1;
} else {
    no[0]--; // Ou no[0] -= 1;
}

console.log(no[0]);