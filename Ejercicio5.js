function numerosPrimos(){
    var num1=parseInt(document.getElementById("primos").value)
    cont= 0;
    for(let i=0; i<num1; i++){
        if(i%2==0 && i%3==0 && i%5==0 ){
            document.write(i);
        }
    }


}


function numerosMultiplos(){
    var num2=parseInt(document.getElementById("Multiplos").value)
    for(let i=0; i<num2; i++){
        if(i%3==0 && i%5==0){
            document.write(i+'<br>')
        }
    }
}



function numerosFactorial(){
    var num=parseInt(document.getElementById("numero").value)
    let factorial = 1 ;
    for (let i = 1 ; i<= num ; i++){
        factorial *= i ;
    }
    document.write("factorial: "+factorial); 
}    


function bonoNavideño(){
    var salario=parseInt(document.getElementById("salario").value)
    var antiguedad=parseInt(document.getElementById("antiguedad").value)
    let bono= 0
    if(antiguedad>4 || salario<2000){
        bono= salario * 0.25;
    }else{
        bono= salario *0.20;
    }
    document.write("su bono es de:" + bono)

}
