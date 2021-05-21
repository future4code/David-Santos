function calculaSalario(carrosVendidos, valorVendas) {
  // Escreva seu código aqui
  const comissao = (valorVendas * 0.05) + (carrosVendidos * 100)
  const salario = 2000 + comissao
  return salario
}