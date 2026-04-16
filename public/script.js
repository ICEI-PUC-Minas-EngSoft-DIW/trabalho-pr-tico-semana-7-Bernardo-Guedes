// Entrada de nome e renda do usuário e validação com while
let nome = prompt("Informe seu nome completo:");
let rendaMensal = prompt("Informe sua renda mensal:");
rendaMensal= Number(rendaMensal);
while (isNaN(rendaMensal)){
    rendaMensal = prompt("Valor Inválido! Informe sua renda mensal:");
    rendaMensal= Number(rendaMensal);
}

// Entrada e validação da quantiade de despesas do usuário com while
let quantidadeDesp = prompt("Informe a quantidade de despesas (1 a 5):");
quantidadeDesp = Number(quantidadeDesp);
while(isNaN(quantidadeDesp)){
    quantidadeDesp = prompt("Valor inválido! Informe a quantidade de despesas (1 a 5):");
    quantidadeDesp = Number(quantidadeDesp);
}
if (quantidadeDesp>5){
    quantidadeDesp = 5;
} else if (quantidadeDesp<1){
    quantidadeDesp = 1;
}

// Entrada e soma do valor de cada despesa do usuário e validação com while
let somaDespesas = 0
for (let i=1; i<=quantidadeDesp; i++){
    var valorDespesa = prompt(`Informe o valor da despesa ${i}:`);
    valorDespesa = Number(valorDespesa);
    while (isNaN(valorDespesa)){
        valorDespesa = prompt(`Valor Inválido! Informe o valor da despesa ${i}:`);
        valorDespesa = Number(valorDespesa);
    }
    somaDespesas += valorDespesa;
}
// Saída no console
console.log(`Nome: ${nome}`);
console.log(`Sua renda mensal é R$ ${rendaMensal.toFixed(2)}`);
console.log(`A soma total de suas despesas é R$ ${somaDespesas.toFixed(2)}`)

// Alerta
let alerta = "";
alerta += `Nome: ${nome}\n`;
alerta += `Sua renda mensal é R$ ${rendaMensal.toFixed(2)}\n`;
alerta += `A soma total de suas despesas é R$ ${somaDespesas.toFixed(2)}\n`;


// Verificação da situação do usuário
let sobra = rendaMensal - somaDespesas;
console.log(`A sobra após o pagamento das despesas é R$ ${sobra.toFixed(2)}.`)
alerta += `A sobra após o pagamento das despesas é R$ ${sobra.toFixed(2)}\n`;
if (sobra < 0){
    console.error("⚠️ Atenção: Você gastou mais do que ganhou.");
    alerta += "⚠️ Atenção: Você gastou mais do que ganhou.";
} else if ((rendaMensal-somaDespesas)>=rendaMensal*3/10){
    console.log("✅ Ótimo: Boa margem de sobra.");
    alerta += "✅ Ótimo: Boa margem de sobra.";
} else {
    console.warn("🙂 Ok: Da pra melhorar a sobra.")
    alerta += "🙂 Ok: Dá pra melhorar a sobra.";
}

alert(alerta);

// console.clear();
