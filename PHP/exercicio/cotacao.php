<form action="cotacao.php" method="get">
  Digite algo: <input type="number" name="formulario"><br>
  <input type="submit">
</form>
 
 <?php 
    echo "Cotação atual do Dolar: 5,83", "<br>";
    echo "Reais: ", $_GET["formulario"], "<br>";

    echo $_GET["formulario"] * 5.83;
 ?>
