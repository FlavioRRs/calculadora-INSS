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

  if (salario <= primFaixa && salario >= 0) {
    return  salario * primAliquota;
  }

  if (salario <= segFaixa && salario > 0) {
    return calcularDescontoINSS(primFaixa) + (salario - primFaixa) * segAliquota;
  }

  if (salario <= terFaixa && salario > 0) {
    return  calcularDescontoINSS(segFaixa) + (salario - segFaixa) * terAliquota;
  }

  if (salario <= quaFaixa && salario > 0) {
    return  calcularDescontoINSS(terFaixa) + (salario - terFaixa) * quaAliquota;
  }
  
  if (salario > quaFaixa) {
    return  calcularDescontoINSS(quaFaixa);
  }
}

//função que mostra os valores na tela.
function imprimirElementos () {

  const salario_bruto = document.querySelector("#salario").value;
  const box_resultados = document.querySelector('.resultados');
  
  if (salario_bruto >= 0) {

    desconto = calcularDescontoINSS(salario_bruto);

    box_resultados.innerHTML = `<div class="box-resultado"><p>Desconto total</p> <p>R$ ${desconto.toFixed(2)}</p></div>
                                <div class="box-resultado"><p>Valor restante</p> <p>R$ ${(salario_bruto - desconto).toFixed(2)}</p></div>`
  } 
  else {
    box_resultados.innerHTML = `<div class="box-alerta"><p>!</p><p>Insira um valor valido!</p></div>`
  }
}