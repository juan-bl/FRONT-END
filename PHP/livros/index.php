<?php
    include("db/conexao.php");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concessionária</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>

    <header>
        <h1>Livros</h1>
    </header>

    <div id="mural">
        <h2><a href="cadastro.php">Cadastrar Livro</a></h2>
        <div class="lista">
            <?php
                $sql = "SELECT * FROM livro";
                // pedido
                $query = mysqli_query($conexao, $sql) or die("Erro na requisição!".mysqli_error($conexao));

                while($dados = mysqli_fetch_assoc($query)) {
                    ?>
                        <div class="card">
                            <h3><?=$dados['nome']?></h3>
                            <img src="<?=$dados['imagem']?>"></img>
                            <div class="desc">
                                <p><?=$dados['descricao']?></p>
                            <p><?=$dados['avaliacao']?></p>
                            </div>
                            
                        </div>
                    <?php
                }

            ?>

        </div>
    </div>
    
</body>
</html>