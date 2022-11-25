function somar(){
    soma = soma + num;
}
function calcularmedia(){
    media = soma /( i - 1);
}
function calcmaior(){
    if (num > maior){
        maior = num;
    }
}
function calcmenor(){
    if(num < menor){
        menor = num;
    }
}
function acharmaiormenor(){
    if(i==1){
    maior = num;
    menor = num;
    }
    if(num > maior){
        maior = num;
    }
    if(num <  menor){
        menor = num;
    }
}
function parimpar(){
if(num % 2 == 0){
    par++
}
else{
    impar++
}
}
function retornartabuada(){
    tabuada= num*i;
}