function contarMediaMenor7Turma(){
    if(media < 7){
        qtMenor7Turma++;
    }   
}
function contarMediaMenor7Escola(){
    if(media < 7){
        qtMenor7Escola++;
}
}
function contarMediaMaior7Turma(){
    if( media >= 7){
        qtMaior7Turma++;
    }   
}
function contarMediaMaior7Escola(){
    
    if(media >= 7){
        qtMaior7Escola++;
    }   
}
function localizarMenorMaiorMedia(){
    if(media >= MediaMaior ){
        MediaMaior = media;
        NomeMaior = nome;
    }
    if(media <= MediaMenor){
        MediaMenor = media;
        NomeMenor = nome;
    }
}
function somarMediasTurma(){
        TotalMediaTurma = (TotalMediaTurma + media);
    /*else{
        mediaTurma = mediaTurma / qtdAlunos
    }*/
}
function somarMediasEscola(){
    TotalMediaEscola = TotalMediaEscola + media;

}
function contarAlunos(){
    if(media >= 0){
    
    TotalAlunos++
}
}
function calcularMediaTurma(){
    MediaTurma = TotalMediaTurma / qtdAlunos;
}
function zerarTotalMediaTurma(){
    TotalMediaTurma = 0
}
function zerarQtMenorMaior7(){
    qtMaior7Turma = 0;
    qtMenor7Turma = 0;
}
function calcularMediaEscola(){
    MediaEscola = TotalMediaEscola / TotalAlunos;
}
function calcularPercentuais(){
    percMenor7Escola = (qtMenor7Escola / TotalAlunos ) * 100;
    percMaior7Escola = (qtMaior7Escola / TotalAlunos ) * 100;
}
