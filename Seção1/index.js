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

//Eventos DOM
window.addEventListener('focus',event => {
    console.log("focus");
})

document.addEventListener('click',event => {
    console.log("click");
})

let agora = new Date(); //variavel recebe um novo objeto data
console.log(agora.getDate()); //pega o dia da data
console.log(agora.getFullYear()); //pega o ano da data em 4 digitos
console.log(agora.getMonth()); //pega o mês da data
console.log(agora.toLocaleDateString("pt-BR")); //traz a data no formato da região do usuário

let carros = ["palio","uno","toro",98, true, new Date()]; //array com objetos de vários tipos 
console.log(carros); //retorna o array
console.log(carros.length); //retorna quantos itens tem o array
console.log(carros[0]); //retorna o valor a primeira posição do array

carros.forEach(function(value,index){ 
    console.log(index,value);
})
