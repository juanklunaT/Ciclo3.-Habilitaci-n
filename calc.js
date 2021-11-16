function calcula (operación){
    var n1=document.calculadora.numero1.value;
    var n2=document.calculadora.numero2.value;
    var n3=eval(n1+operación+n2);
    document.calculadora.resultado.value=n3;
}

function porcentajee (){
    var n1=document.calculadora.resultado.value;
    var n2=document.calculadora.porcentaje.value;
    var n3=n1*n2/100;
    document.calculadora.resultado2.value=n3;
}

