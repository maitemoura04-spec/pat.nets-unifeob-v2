function login(){

const usuario =
document.getElementById('usuario').value;

const senha =
document.getElementById('senha').value;

if(usuario === ''){

alert('Digite RA ou E-mail');

return;

}

if(senha === '123456'){

localStorage.setItem(
'usuario',
usuario
);

window.location.href =
'home.html';

}else{

alert('Senha inválida');

}

}
