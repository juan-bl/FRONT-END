Algoritmo "estoque"

Var
i : inteiro
nome : vetor[1..3] de caractere
valor : vetor[1..3] de real
total : real

Inicio

para i de 1 ate 3 faca
     escreval("Digite o nome de um produto: ")
     leia(nome[i])
     escreval("Digite o valor do produto: ")
     leia(valor[i])
     total <- total + valor[i]
fimpara

limpaTela()

para i de 1 ate 3 faca
     escreval(nome[i], " ........ R$", valor[i])
fimpara

escreval("O valor total em estoque � R$ ", total)
escreval("A media do pre�o das mercadorias �: ", total/3)

Fimalgoritmo