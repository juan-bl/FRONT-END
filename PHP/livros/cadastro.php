<?php
    include("db/conexao.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <main>
        <form action="process.php" method="post">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" required><br><br>

            <label for="imagem">Link da Imagem:</label><br>
            <input type="url" id="imagem" name="imagem" required><br><br>

            <label for="descricao">Descrição:</label><br>
            <textarea id="descricao" name="descricao" required></textarea><br><br>

            <label for="avaliacao">Avaliação:</label><br>
            <input type="text" id="avaliacao" name="avaliacao" required><br><br>

            <input type="submit" value="Enviar">
        </form>
    </main>

    <?php
        $nome = $_POST['nome'];
        $imagem = $_POST['imagem'];
        $descricao = $_POST['descricao'];
        $avaliacao = $_POST['avaliacao'];

        $sql = "INSERT INTO avaliacoes (nome, imagem, descricao, avaliacao) VALUES ($nome, $imagem, $descricao, $avaliacao)";

        $query = mysqli_query($conexao, $sql) or die("Erro na requisição!".mysqli_error($conexao));

        if ($conn->query($sql) === TRUE) {
            echo "Avaliação enviada com sucesso!";
        } else {
            echo "Erro ao enviar avaliação: " . $conn->error;
        }

        $conn->close();
    ?>
</body>
</html>