<h1>VOCÊ ESTÁ NA LISTA DE CARROS</h1>

<table>
    <th>Modelo</th>
    <th>Marca</th>
    <th>Valor</th>
    <th>Ano</th>
    <th>Cor</th>


<?php
    $sql = "SELECT * FROM carros";
    // pedido
    $query = mysqli_query($conexao, $sql) or die("Erro na requisição!".mysqli_error($conexao));

    while($dados = mysqli_fetch_assoc($query)) {
        ?>
            <tr>
                <td><?=$dados['modelo']?></td>
                <td><?=$dados['marca']?></td>
                <td><?=$dados['valor']?></td>
                <td><?=$dados['data']?></td>
                <td><?=$dados['cor']?></td>
            </tr>
        <?php
    }

?>

</table>