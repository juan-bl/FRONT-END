Algoritmo "times"

Var
time1, time2 : caractere
gols1, gols2 : inteiro

Inicio
escreval("Qual é o nome do primeiro time:")
leia(time1)
escreval("Quantos gols fez o time ", time1)
leia(gols1)

escreval("Qual é o nome do segundo time:")
leia(time2)
escreval("Quantos gols fez o time ", time2)
leia(gols2)

se (gols1 > gols2) entao
   escreval(time1, " VENCEU!")
fimSe

se (gols2 > gols1) entao
   escreval(time2, " VENCEU!")
fimSe

se (gols1 = gols2) entao
   escreval("FOI UM EMPATE!")
fimSe

Fimalgoritmo