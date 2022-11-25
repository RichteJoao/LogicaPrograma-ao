function somarNumeros(qtde){
    var total=0, cont=1, num;
    while(cont<= qtde){
        num = Number(prompt('Informe o '+cont+'o numero'));
        total = total + num;
        cont++;
        document.write(num,'<br>');
    }
    return total;
}   

function somarNumeros2(){
    var total=0, cont=0, num, resposta='s';
    while(resposta=='s'){
        cont++;
        num = Number(prompt('Informe o '+cont+'º numero'));
        total = total + num;
        document.write(num,'<br>');
        resposta = prompt('deseja continuar <br> s - para Sim <br> n - para Não');
    }
    document.write('qtd de numeros informados: ',cont,'<br>')
    return total;
}   

function somarNumeros3(){
    var total=0, cont=1, num, resposta=0;
    alert('Para encerrar digite 111');
    num = Number(prompt('Informe o '+cont+'º numero'));
    while(num != 111 ){
        cont++;
        total = total + num;
        document.write(num,'<br>');
        num = Number(prompt('Informe o ',cont-1,'º numero'));
    }
    document.write('<hr> qtd de numeros informados: ',cont,'<br>')
    return total;
}   

function somarNumeros4(){
    var total=0, cont=1, num, resposta=0;
    alert('Para encerrar digite algo diferente de numero');
    num = Number(prompt('Informe o '+cont+'º numero'));
    while(isNaN(num) == false){
        cont++;
        total = total + num;
        document.write(num,'<br>');
        num = Number(prompt('Informe o '+cont+'º numero'));
    }
    document.write('<hr> qtd de numeros informados: ',cont-1,'<br>')
    return total;
}   
function calcularquadrado(){
    while(qtde<=20){
        quadrado = qtde * qtde;
        document.write(quadrado,'<br>');
        qtde++;
    }
}
function calcularpar(){
    do{
        num = num+2;
        document.write(num,'<br>');
    }while(num <= 598&& num %2 == 0)
       
    

}
function somarNumeros1a10(qtde){
    var total=0;
    do{ 
        document.write(num,'<br>');
    total = total + num;
    num++;
}while(num <= qtde)
        
    
    return total;
}
function somar24a200() {
    do {
        soma = soma + num;
        document.write(num,' - ')
        num = num + 2;
    } while (num <= 200)
    document.write('<hr> soma: ', soma);
}
function somarnumeros(){
    do{
        num = Number(prompt('informe o numero'));
        document.write(num,'<br>');
        soma = soma + num;
        i++;
    }while(i<qtnum)
    return soma;
    
}
function tabuada1(){
    do {
        tabuada = num * i;
        document.write(num,'x',i,'=',tabuada,'<br>');
        i++
    }while(i<=10)
    
}
function tabuada1a10(){
    do {
        i++
        tabuada = num * i;
        document.write(num,' x ',i,' = ',tabuada,'<br>');
    }while(i<10)
    num++
    i=0
}
function numeromaximo(){
    if(i % 2 !=0){
        document.write(i,' - ');
    }
}
    function contarpar2(){
        if(i % 2 == 0){
            document.write(i,' - ');
        }
    }
    
