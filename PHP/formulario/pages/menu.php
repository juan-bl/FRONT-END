<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Principal</title>
    <link rel="stylesheet" href="../styles/all.css">
</head>
<body>
    <header>
        <div id="logo">Logo</div>
        <nav>
            <ul>
                <li><a href="menu.php">Home</a></li>
                <li><a href="../index.php">Log out</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <?php
            $titulo = "Login Efetuado!<br>";
            // comando de verificação
            // $titulo = "Matrix";
            // var_dump($titulo);

            // $status = True;
            // var_dump($status);

            // Aceita requisições: get, post e cookies. É utilizado para imprimir em tela todos os dados salvos
            var_dump($_REQUEST);

            $nome = $_REQUEST['nome'];
            $email = $_REQUEST['email'];
            $senha = $_REQUEST['senha'];

            echo "<br> Olá $nome, seja Bem Vindo! <br>";
            echo "<br>$nome, seu email é: $email <br>";
            echo "<br>E sua senha é $senha <br>";
        ?>
    </main>

    <footer>
        Todos os direitos reservados a Victor
        <?php echo date("Y"); ?>
    </footer>
    
</body>
</html>