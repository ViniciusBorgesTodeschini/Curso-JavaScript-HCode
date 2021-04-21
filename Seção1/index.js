var olaMundo = "Olá, mundo!";

let n = 5;
for (let i = 0; i <= 10; i++)
{
    console.log(`${i} X ${n} = ${i*n}`);
    //console.log( i  + " X " + n + " = " + (i*n));
}

function calc(x1,x2, operator)
{
    return eval(`${x1}${operator}${x2}`);
}

let resultado = calc(1,2,'-');

console.log(resultado);

//Função anonima
/**
(function (x1,x2, operator){
    return eval(`${x1}${operator}${x2}`);
})(1,2,'+');
*/

//Arrow function
/**
let calc2 = (x1,x2, operator) => {
    return eval(`${x1}${operator}${x2}`);
}
 */

