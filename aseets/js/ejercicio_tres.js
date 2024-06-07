function concatenar(){
    sum1 = document.querySelector('.num1').value
    sum2 = document.querySelector('.num2').value
    sum3 = document.querySelector('.num3').value
    sumando = sum1 + sum2 + sum3
    console.log(sumando)

    if(sumando === '911'){
        document.querySelector('.frase').innerHTML= 'Password 1 Correcto'
    }else if(sumando === '714' ){
        document.querySelector('.frase').innerHTML= 'Password 2 es Correcto'
    }else{
        document.querySelector('.frase').innerHTML= 'Password Incorrecto'
    }

}