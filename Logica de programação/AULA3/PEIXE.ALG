Algoritmo "peixe"

Var
peixes, excesso, multa : inteiro

Inicio
escreval("Qual o peso dos peixes:")
leia(peixes)

se (peixes <= 50) entao
escreval("Tudo certo, boa viagem!")
fimSe

se (peixes >= 50) entao
excesso <- peixes - 50
escreval("Você está com um excesso de", excesso, " peixes")
multa <- excesso * 4
escreval("Sua multa será de R$", multa)
fimSe

Fimalgoritmo