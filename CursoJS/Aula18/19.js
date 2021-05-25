// FUNÇÕES EM JAVASCRIPT //
//Verifica se é par ou ímpar
function parimp(n){
    if(n%2 == 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

let res = parimp(12);
console.log(res);

///////////////////////////


//Soma dois números
function soma(n1, n2){
    return n1+n2;
}

console.log(soma(5,5));
///////////////////

//Eleva um número ao quadrado
let v = function(x){
    return x**2;
}
console.log(v(11));

///////////

/////// CALCULA O FATORIAL: 5! = 5*4*3*2*1
 function fatorial(number){
    let c = 1;
    for(var i = 1; number >= i ; number--){
         c *= number;
    }
     return c;
}
console.log(fatorial(5));

////

//// Fatorial usando recursão:
let fatorialrec = function(f){
    if(f == 1){
        return 1;
    }else{
        return f*fatorialrec(f-1);
    }
}
console.log(fatorialrec(1))