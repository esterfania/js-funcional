/* 
Uma função pura é uma função em que o valor
de retorno é determinado APENAS por seus valores
de entrada, sem efeitos colaterais observáveis 
*/

// funcao IMPURA - pois depende de algo externo
function areaCircImpura(raio) {
  return raio * raio * Math.PI;
}

// funcao PURA - pois nãoo depende de algo externo
function areaCircImpura(raio, pi) {
  return raio * raio * pi;
}
