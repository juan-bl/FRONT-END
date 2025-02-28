<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles/all.css">
    <link rel="stylesheet" href="styles/index.css">
</head>
<body>
    

    <main>

        <h1>CADASTRO</h1>

        <!-- method="get" encaminha o formulario via url
         method="post" não encaminha via url, faz o encapsulamento de dados e é mais seguro -->
        <form action="pages/menu.php" method="post">

            <!-- NOME USUARIO -->
            <div class="form-input">
                <label for="nome">Nome</label>
                <input placeholder="Insira seu nome completo Ex Jhoh Doe" name="nome" id="nome" type="text">
            </div>

            <!-- EMAIL USUARIO -->
            <div class="form-input">
                <label for="email">Email</label>
                <input placeholder="Insira seu email Ex nome@email.com" name="email" id="email" type="email">
            </div>

            <!-- SENHA USUARIO -->
            <div class="form-input">
                <label for="senha">Senha</label>
                <input placeholder="Insira sua senha" name="senha" id="senha" type="password">
            </div>

            <button type="submit">Enviar</button>
        </form>

        

    </main>
    
</body>
</html>