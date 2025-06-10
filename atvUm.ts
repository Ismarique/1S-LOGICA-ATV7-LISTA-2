// 1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
// equilátero, isósceles ou escaleno. Sendo que:
// − Triângulo Equilátero: possui os 3 lados iguais.
// − Triângulo Isóscele: possui 2 lados iguais.
// − Triângulo Escaleno: possui 3 lados diferentes.

const teclado = require(`prompt-sync`)();
let anguloUm : number = parseInt(teclado(`escreva o angulo: `))
let anguloDos : number = parseInt(teclado(`escreva o angulo: `))
let anguloTres : number = parseInt(teclado(`escreva o angulo: `))

let somaAngu : number = (anguloUm+anguloDos+anguloTres)

if(somaAngu == 180){

if(anguloUm == 90 || anguloDos == 90 || anguloTres == 90){

console.log(`é um Triângulo Equilatero`)

}

if(anguloUm > 90 || anguloDos > 90 || anguloTres > 90){

    console.log(`é um Triângulo Isóscele`)
    
    }
    
    if(anguloUm < 90 && anguloDos < 90 && anguloTres < 90){

        console.log(`é um Triângulo Escaleno`)
        
        }
    
}else{
console.log(`isso não é um triangulo`)
}