
function Converter(){

    var valorElemento = document.getElementById("valor").value;

    var valorEmDolar = parseFloat(valor);
    
    var valorEmReal = valorEmDolar * 5.02;
    console.log("o valor em real é");
    console.log(valorEmReal);

  
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "o resultado em real é R$ " + valorEmReal;

    ElementoValorConvertido.innerHTML = valorConvertido;
}
