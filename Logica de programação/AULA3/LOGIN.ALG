Algoritmo "login"

Var
senha, senhaC, email, emailC : caractere

Inicio
senhaC <- "1234"
emailC <- "emailmuitotop@gmail.com"

escreval("Qual é o seu email:")
leia(email)
escreval("Qual é a sua senha:")
leia(senha)

se(senha = senhaC) e (email = emailC) então
     escreval("Login efetuado com sucesso! Sextou :)")
senao
     escreval("Usuario ou senha incorreta! Tente novamente")

fimSe


Fimalgoritmo