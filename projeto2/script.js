/* fuscando a função (converter), atribuida ao botao no HTML */
function Converter(){
/* Fusca todo o conteudo/ tag que tem o id valor */
    var valorElemento = document.getElementById("valor").value;
/* retorna apenas o valor inserido no compo do html, (ESSE TCOMANDO FOI SUBSTITUIDO PELO .value)
    var valor = valorElemento.value; */
/* converte o valor digitado de string para numero */
    var valorEmDolar = parseFloat(valor);
    
    var valorEmReal = valorEmDolar * 5.02;
    console.log("o valor em real é");
    console.log(valorEmReal);

    /*agora vamos criar uma variavel e atribuir a ela o valor inserido no html, nesse caso o h2 com o id=valorConvertido e vamos alteralo,
    com isso alteramos o conteudo do H2, colocando nele o resultado da corversao
    */

    var ElementoValorConvertido = document.getElementById("valorConvertido");
/* agopra atribuimos á variavel valorConvertido um texto + o valor convertido em real (concatenamos a string com um valor numerido com +) */
    var valorConvertido = "o resultado em real é R$ " + valorEmReal;

/* Nesse comando vamos inserir dentro da variavel ElementoValorConvertido, que recebeu o H2 do HTML a variavel  valorConvertido, que tem o texto + valor */
    ElementoValorConvertido.innerHTML = valorConvertido;
}