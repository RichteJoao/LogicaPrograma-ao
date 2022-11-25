function calcularArea(){
    area = (base * alt) / 2;
}
function CL(){
    reajuste = salarioB * 0.128;
    salarioR = (salarioB + reajuste);
}
function calcularreajuste(){
   taxai = (kwatt * 0,41) * 0.03;
}
function calcularfatura(){
    contaF = (kwatt + taxai) + 1.70;
}
function calcularSF(){
    inss = salarioB * 0.05;

    doir = salarioB * 0.07;

    alim = salarioB * 0.08;

    salarioF = ((salarioB - inss) - doir) + alim;
}
function calcularproduto(){
    lucro = (precoV - precoC) * qntdV;

}
function alturapredio(){
    altP = altA * qntdA;
}
function calcidade(){
    idade = (ano * 365) + (mes * 30) + dia;
    
}
function prestacoescalculo(){
    totalP = (prestacoesP * valor);
    saldoD = (prestacoes - prestacoesP) * valor;
}
function calculocelcius(){
    tempC = (5 / 9) * (tempF-32);
}
function calculoF(){
    tempF = (9 / 5) * (tempC + 32);
}

function c1(){
    if(valorC >= 5000){
        desconto = valorC * 0.20;
        valorF = valorC - desconto;
        document.write('o valor do desconto e: ',desconto,'<br>');
        document.write('o valor final e: ',valorF);
    }else if( valorC < 5000){
        desconto = valorC * 0.15;
        valorF = valorC - desconto;
        document.write('o valor do desconto e: ',desconto,'<br>');
        document.write('o valor final e: ',valorF);
    }
} 
function calcularpeso(){
if(sexo == 'masculino'){
    pesoI = (72.7 * altura) -58;
    document.write('seu peso ideal e de : ',pesoI.toFixed(2));
}
else if(sexo == 'feminino'){
    pesoI = (62.1 * altura)-44.7
    document.write('seu peso ideal e de : ',pesoI.toFixed(2))
}
}
function parouimpar(){
    if(n1 % 2  == 0){
        document.write(n1,' - par');
    }else { 
    document.write(n1,' - impar');
}}
function calcularmaior(){
    n3 = (n2 - n1);
}
function calcularpositivo(){
    if(n1 > 0){
document.write('seu numero ',n1,' e positivo');
    }
    else if(n1 <0){
document.write('seu numero ',n1,' e negativo');
    }
    else {
document.write('eu numero ',n1,' e nulo');
    }
}