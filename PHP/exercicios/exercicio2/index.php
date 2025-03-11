<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio</title>
</head>
<body>

<!-- tudo que precisar mandar ou enviar é bom que utilize um form no php, se não,é só deixar o include -->
    <!-- ATIVIDADE 1 -->
     <form action="scripts/cotacao.php" method="post">
    <!-- step -> ajuda a colocar numeros quebrados (decimais) -->
     <input step="0.01" name="dolar" id="dolar" type="number">
     <button type="submit">Enviar</button>
     </form>
     <hr>
     <!-- ATIVIDADE 2 -->
     <form action="scripts/idade.php" method="post">
    <!-- idade é número inteiro, por isso não tem o step -->
     <input name="idade" id="idade" type="number">
     <button type="submit">Enviar</button>
     </form>

<?php
    include "scripts/aleatorio.php";
?>
    
</body>
</html>