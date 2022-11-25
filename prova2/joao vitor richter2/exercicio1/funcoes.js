function  votoA(){
    if(Voto == 1){
       c1++ 
    }
}
function  votoB(){
    if(Voto == 2){
       c2++ 
    }
}
function  votoC(){
    if(Voto == 3){
       c3++ 
    }
}
function  votobrancos(){
    if(Voto == 4){
       brancos++ 
    }
}
function  votonulos(){
    if(Voto >= 5){
       nulos++ 
    }
}
function  zerar(){
    c1=0
    c2=0
    c3=0
    brancos=0
    nulos=0
}
function totalvot(){
    if(Voto >= 1){
        totalvotantes++
    }
}
function totalvotosc1(){
    totalc1 = totalc1 + c1
}
function totalvotosc2(){
    totalc2 = totalc2 + c2
}
function totalvotosc3(){
    totalc3 = totalc3 + c3
}
function totalvotosbrancos(){
    totalbrancos = totalbrancos + brancos
}
function totalvotosnulos(){
    totalnulos = totalnulos + nulos
}
function totalvalidvotos(){
    totalvalid = totalc1 + totalc2 + totalc3
}
function totalbrancnulo(){
    totalinvalid = totalnulos + totalbrancos
}
function eleicoesvalidas(){
    if(totalinvalid>= totalvalid){
        document.write('ELEICOES INVALIDAS');
    }else{
        document.write('ELEICOES VALIDAS');
    }
}
function  vencedor(){
    if(c1>c2 && c1>c3){
        document.write('CANDIDATO 1 É O VENCEDOR <br>')
    }else{
        document.write('CANDIDATO 1 PERDEU<br>')
    }
}
function  vencedor1(){
    if(c2>c1 && c2>c3){
        document.write('CANDIDATO 2 É O VENCEDOR<br>')
    }else{
        document.write('CANDIDATO 2 PERDEU<br>')
    }
}
function  vencedor2(){
    if(c3>c1 && c3>c2){
        document.write('CANDIDATO 3 É O VENCEDOR<br>')
    }else{
        document.write('CANDIDATO 3 PERDEU<br>')
    }
}