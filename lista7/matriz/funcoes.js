function preenchermatriz(lin, col) {
    var i, j, mat = [];
    for (i = 0; i < lin; i++) {
        mat[i] = [];
        for (j = 0; j < col; j++) {
            mat[i][j] = Number(prompt('informe o numero'));
        }
    }
    return mat;
}
function exibirmatriz(mat, lin, col) {
    var i, j;
    for (i = 0; i < lin; i++) {
        for (j = 0; j < col; j++) {
            document.write('matriz[', i, '][', j, ']=', mat[i][j], '<br>');
        }
    }
}
function exibirmatriz2(mat, lin, col) {
    var i, j;
    for (i = 0; i < lin; i++) {
        for (j = 0; j < col; j++) {
            if (j < (col - 1)) {
                document.write(mat[i][j], ' - ');
            }
            else {
                document.write(mat[i][j], '<br>');
            }
        }
    }
}
function acharmaior(mat,lin,col){
    var i, j, maior=0;
    for(i=0;i<lin;i++){
        for(j=0;j<col;j++){
            if(mat[i][j] > maior){
                maior = mat[i][j];
            }
        }
    }
    return maior;
}
function gerarmatrizresultante(mat, lin, col, maior) {
    var i, j, matR = [];
    for (i = 0; i < lin; i++) {
        matR[i] = []
        for (j = 0; j < col; j++) {
            matR[i][j] = mat[i][j] * maior

        }
    }
    return matR;
}
function somarmatriz(mat, col, lin) {
    var i, j, soma = 0;
    for (i = 0; i < lin; i++) {
        for (j = 0; j < col; j++) {
            soma = soma + mat[i][j];
        }
    }
    return soma;
}
function somarlinhas(mat, lin, col) {
    var i, j, somal = [];
    for (i = 0; i < lin; i++) {
        somal[i] = 0;
        for (j = 0; j < col; j++) {
            somal[i] = somal[i] + mat[i][j];
        }
    }
    return somal;
}
function exibirvetor(vet){
    var i;
    for(i=0;i < vet.lenght; i++){
        document.write('posição'+i+' =  '+vet[i]+ '<br>');
    }
}