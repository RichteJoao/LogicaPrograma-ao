function verificar() {
    if (num == 1) {

        document.write('1-para sim')
    }
}
function verificar1() {
    if (num == 2) {

        document.write('2-para nao')
    }
}
function verificar2() {
    if (num > 2) {
        num = Number(prompt('informe:\n1- Para sim.\n2- Para não.'));
    }
}