<?php 
  // em php, o simbolo ($) faz criar uma variável
  $dolar = $_REQUEST['dolar'];
  $real = $dolar * 5.77;

  echo "A quantidade em reais é de R$ $real";
?>