<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<link rel="stylesheet" href="style.css">

<title>Perfil</title>

</head>

<body>

<h1>Perfil Acadêmico</h1>

<div class="card">

<p id="usuarioLogado"></p>

<p>Status: Ativo</p>

<p>Viagens Realizadas: 12</p>

<p>Tempo Economizado: 1h42</p>

</div>

<button onclick="location.href='home.html'">

Voltar

</button>

<script>

document.getElementById(
'usuarioLogado'
).innerText =
'Identificação: ' +
localStorage.getItem(
'usuario'
);

</script>

</body>
</html>
