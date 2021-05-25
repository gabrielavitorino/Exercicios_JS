let num = [5,8,2,9,3]
num[3] = 6
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem crescente é: ${num.sort()}`)
//console.log(num[3])

console.log('Valores do vetor no loop')
for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}

// for(let pos in num){
//     console.log(num)
// }


//buscando valores no vetor com indexOf

console.log('Buscando valores no vetor')

var retorna = num.indexOf(7); //buscando se existe numero 7 no vetor

if(retorna != -1){
    console.log('Existe esse numero no vetor')
}else{
    console.log('Não existe no vetor')
}

