Algoritmo "semnome"
Var
id : inteiro


Procedimento idade(num : inteiro)
   Inicio
      se ((num >= 5) e (num <= 7)) entao
         escreval("Classificação: Infantil A")
      FimSe
      se ((num >= 8) e (num <= 11)) entao
         escreval("Classificação: Infantil B")
      FimSe
      se ((num >= 12) e (num <= 13)) entao
         escreval("Classificação: Juvenil A")
      FimSe
      se ((num >= 14) e (num <= 17)) entao
         escreval("Classificação: Juvenil B")
      FimSe
      se ((num >= 18)) entao
         escreval("Classificação: Adultos")
      FimSe
FimProcedimento

Inicio
escreval("Qual é sua idade:")
leia(id)
idade(id)

Fimalgoritmo