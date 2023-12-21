// Calculadora de parcelas

let entrada = prompt("Deseja calcular as parcelas do seu produto? (Digite 'sair' caso queira encerrar o programa).");

while (entrada != "sair") {
    let valor = prompt("Informe o valor do produto:");
    let parcela = prompt("Deseja pagar em quantas parcelas?");

    let parcelaValor = valor / parcela;

    alert("Valor do produto: " + valor + " reais. Número de parcelas: " + parcela + ". Valor de cada parcela: " + parcelaValor + " reais.");
    entrada = prompt("Deseja calcular novamente? (Digite 'sair' caso queira encerrar o programa)");
}

