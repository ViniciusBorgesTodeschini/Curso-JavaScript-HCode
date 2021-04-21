var olaMundo = "Olá, mundo!";

let n = 5;
for (let i = 0; i <= 10; i++)
{
    console.log(`${i} X ${n} = ${i*n}`);
    //console.log( i  + " X " + n + " = " + (i*n));
}

function somar(x1,x2)
{
    return x1 + x2;
}

let resultado = somar(1,2);

console.log(resultado);