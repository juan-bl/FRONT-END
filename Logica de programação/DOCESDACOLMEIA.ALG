Algoritmo "docesDaColmeia"

Var
opcao, FinalizarCarrinho, opcaoFinalizar : caractere
valorTotal : real

procedimento adicionaraoCarrinho(vp: real)
       var
       nomep : caractere
       Inicio
       escreval("Digite o nome do produto: ")
       leia(nomep)
       escreval("Item ", nomep, " adicionado!")
       valorTotal <- valorTotal + vp
       escreval("Valor total do carrinho R$ :", valorTotal)
fimProcedimento

Inicio

FinalizarCarrinho <- "N"

enquanto (finalizarCarrinho = "N") faca

   escreval("**********catalogo**********")
   escreval("1 - TRUFA                    R$ 8,00")
   escreval("2 - BOLO NO POTE             R$ 10,00")
   escreval("3 - COPO DA FELICIDADE       R$ 15,00")
   escreval("4 - DOCINHO                  R$ 3,00")
   escreval("5 - PUDIM                    R$ 25,00")
   escreval("6 - CANCELAR")
   escreval("7 - CARRINHO")

   leia(opcao)

   //switch / case

   escolha(opcao)
      caso "1"
           adicionaraoCarrinho(8)
      caso "2"
          adicionaraoCarrinho(10)
      caso "3"
          adicionaraoCarrinho(15)
      caso "4"
          adicionaraoCarrinho(3)
      caso "5"
          adicionaraoCarrinho(25 )
      caso "6"
          escreval("Compra cancelada :(")
      caso "7"
          escreval("opcao7")
      outroCaso
          escreval("Op��o inv�lida!")
   fimEscolha
   
   escreval("Deseja adicionar mais alguma coisa?")
   escreval("1 - Sim")
   escreval("2 - N�o")
   leia(opcaoFinalizar)
   
   se(opcaoFinalizar = "1") entao
       FinalizarCarrinho <- "N"
   senao
        FinalizarCarrinho <- "S"
   fimSe
   limpaTela()
fimEnquanto

escreval("Compra Finalizada!")
escreval("Valor Total: R$ ", valorTotal)
escreval("-----------------------------")
escreval("N� Pedido 1234")

Fimalgoritmo