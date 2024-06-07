function contador(){
    sum1 = Number(document.querySelector('#input1').value)
    sum2 = Number(document.querySelector('#input2').value)
    sum3 = Number(document.querySelector('#input3').value)
    sumando = sum1 + sum2 + sum3

    if(sumando <=10){
        document.querySelector('.frase').innerHTML= `llevas ${sumando} stickers`
    }else{
        document.querySelector('.frase').innerHTML= `llevas Demaciados stickers`
    }

}