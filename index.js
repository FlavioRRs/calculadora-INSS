//função que calcula o desconto total do INSS
function calcularDescontoINSS (salario) {

  let primFaixa = 1212,
    segFaixa = 2427.35,
    terFaixa = 3641.03,
    quaFaixa = 7087.22,
    primAliquota = 0.075,
    segAliquota = 0.09,
    terAliquota = 0.12,
    quaAliquota = 0.14;

  if (salario <= primFaixa && salario > 0) {
    desconto_total = salario * primAliquota;
    return desconto_total;
  }
  if (salario <= segFaixa && salario > 0) {
    desconto_total = calcularDescontoINSS(primFaixa) + (salario - primFaixa) * segAliquota;
    return desconto_total;
  }
  if (salario <= terFaixa && salario > 0) {
    desconto_total = calcularDescontoINSS(segFaixa) + (salario - segFaixa) * terAliquota;
    return desconto_total;
  }
  if (salario <= quaFaixa && salario > 0) {
    desconto_total = calcularDescontoINSS(terFaixa) + (salario - terFaixa) * quaAliquota;
    return desconto_total;
  }
  if (salario > quaFaixa) {
    desconto_total = calcularDescontoINSS(quaFaixa);
    return desconto_total;
  }
}

//função que mostra os valores na tela.
function imprimirElementos () {

  const salario_bruto = document.querySelector("#salario").value;
  const tabela = document.querySelector('.resultados');
  
  if (salario_bruto >= 0) {

    //reset do valor desconto total.
    desconto_total = 0

    calcularDescontoINSS(salario_bruto)

    tabela.innerHTML = `<div class="box-resultado"><p>Desconto total</p><p>R$ ${desconto_total.toFixed(2)}</p></div><div class="box-resultado"><p>Valor restante</p><p>R$ ${(salario_bruto - desconto_total).toFixed(2)}</p></div>`
  } 
  else {
    tabela.innerHTML = `<div class="box-alerta"><p>!</p><p>Insira um valor valido!</p></div>`
  }
}