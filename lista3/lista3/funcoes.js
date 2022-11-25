function n(){
    switch(sexo){
        case'F':
            document.write('Feminino');
            break;

        case'M':
            document.write('Masculimo');
            break;
        default:
            document.write('caracter invalido');
    }
}
function retornarparimpar(){
    switch(num){
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            document.write('par');
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            document.write('impar');
            break;
            default:
            document.write('numero fora do intervalo');
    }
}
function retornarparimpar2(){
    var mod;
    mod = num % 2
    switch(mod){
        case 0:
            document.write('par');
            break;
        case 1:
            document.write('impar');
            break;
        default:
            document.write('numero fora do intervalo');
    }
}
function calcularmedia(){
    switch(true){
        case ( media >= 0) && (media < 50):
            document.write('insuficiente');
            break;
        case ( media >= 50) && (media < 65):
            document.write('regular');
            break;
         case ( media >= 65) && (media < 85):
            document.write('bom');
            break;
        case ( media >= 85) && (media <= 100):
            document.write('otimo');
            break;
            default:
            document.write('valor invalido');
    }
}
function exercicio1(){
    switch(sinal){
        case '+':
            document.write('soma = ', n1 + n2);
            break;
        case '-':
            document.write('subtração = ',n1 - n2);
            break;
        case '/':
             document.write('divisão = ',n1 / n2);
            break;
         case '*':
              document.write('Multiplicação = ',n1 * n2);
            break;
          default:
              document.write('caracter invalido.');
    }
}
function exercicio3(){
    switch(op){
        case '1':
            document.write('A media aritimetica e de: ',(n1 + n2) / 2 );
            break;
        case '2':
            document.write('A diferença entre os numeros são de: ',(n1 / n2));
            break;
        case '3':
            document.write('O produto da multipicação e de: ',n1 * n2);
            break;
        case '4':
            document.write('A divisão e de: ',n1 / n2);
            break;
        default:
            document.write('operação invalida');               
    }
}