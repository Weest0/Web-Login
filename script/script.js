function validar(){
	var email = document.getElementById('email');
	var senha = document.getElementById('senha');
	var avisoEmail = document.getElementById('aviso1');
	var avisoSenha = document.getElementById('aviso2');
	var infoEmail = email.value;
	var infoSenha = senha.value;
	var erroEmail = document.getElementById('email');
	var erroSenha = document.getElementById('senha');

	if(infoEmail.trim() === ''){
		erroEmail.style.borderBottom = '2px solid red'
		avisoEmail.textContent = 'O campo não pode estar vazio.'
		avisoEmail.style.color = 'red'
	} else {
		erroEmail.style.borderBottom = '2px solid #4bc87f'
		avisoEmail.textContent = ''
		avisoEmail.style.color = 'green'
	}
	if(infoSenha.trim() === ''){
		erroSenha.style.borderBottom = '2px solid red'
		avisoSenha.textContent = 'O campo não pode estar vazio.'
		avisoSenha.style.color = 'red'
	} else {
		erroEmail.style.borderBottom = '2px solid #4bc87f'
		avisoSenha.textContent = ''
		avisoSenha.style.color = 'green'
	}

};

var control = false;
var fundo = document.getElementById('fundo');
var corpo = document.getElementById('op');
var btnTema = document.getElementById('tema');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
const video = document.getElementById('stars');

function tema(){
	if(control){
		fundo.style.backgroundColor = 'white'
		corpo.style.backgroundColor = '#f2f2f2'
		btnTema.style.backgroundImage = 'url(style/images/lua.png)'
		btnTema.style.backgroundColor = '#f2f2f2'
		email.style.color = 'black'
		senha.style.color = 'black'
		video.src = 'style/videos/To the stars.mp4'
	} else {
		fundo.style.backgroundColor = '#2B2A33'
		corpo.style.backgroundColor = '#42414d'
		email.style.color = 'white'
		senha.style.color = 'white'
		btnTema.style.backgroundImage = 'url(style/images/sol.png)'
		btnTema.style.backgroundColor = '#42414d'
		video.src = 'style/videos/To the stars dark.mp4'
	}
	control = !control
};

function user() {
  const userData = [
    { email: 'gitemail@gmail.com', senha: '15070302' },
    { email: 'testeemail@gmail.com', senha: '594826' },
    { email: 'umapessoa@gmail.com', senha: '226470' }
  ];

  var next = document.getElementById('next')
  var avisoErro = document.getElementById('aviso3')
  var infoEmail = email.value;
  var infoSenha = senha.value;

  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email === infoEmail && userData[i].senha === infoSenha) {
      next.href = 'teste.com'
      return;
    }
  }
  
  avisoErro.textContent = 'Email ou senha incorretos!'
  avisoErro.style.color = 'red'
}