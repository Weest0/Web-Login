function validar(){

	var email = document.getElementById('email');
	var senha = document.getElementById('senha');
	var avisoEmail = document.getElementById('aviso1');
	var avisoSenha = document.getElementById('aviso2');
	var infoEmail = email.value;
	var infoSenha = senha.value;
	
	if(infoEmail.trim() === ''){
		var erroEmail = document.getElementById('email');
		erroEmail.style.borderBottom = '2px solid red'
		avisoEmail.textContent = 'O campo não pode estar vazio.'
		avisoEmail.style.color = 'red'
	} else {
		var erroEmail = document.getElementById('email');
		erroEmail.style.borderBottom = '2px solid #4bc87f'
		avisoEmail.textContent = ''
		avisoEmail.style.color = 'green'
	}
	if(infoSenha.trim() === ''){
		var erroSenha = document.getElementById('senha');
		erroSenha.style.borderBottom = '2px solid red'
		avisoSenha.textContent = 'O campo não pode estar vazio.'
		avisoSenha.style.color = 'red'
	} else {
		var erroEmail = document.getElementById('senha');
		erroEmail.style.borderBottom = '2px solid #4bc87f'
		avisoSenha.textContent = ''
		avisoSenha.style.color = 'green'
	};

};
var control = false;
function tema(){	

	if(control){
		var fundo = document.getElementById('fundo');
		fundo.style.backgroundColor = 'white'
		var corpo = document.getElementById('op');
		corpo.style.backgroundColor = '#f2f2f2'
		var btnTema = document.getElementById('tema');
		btnTema.style.backgroundImage = 'url(style/images/lua.png)'
		btnTema.style.backgroundColor = '#f2f2f2'
		var email = document.getElementById('email');
		email.style.color = 'black'
		var senha = document.getElementById('senha');
		senha.style.color = 'black'
		const video = document.getElementById('stars');
		video.src = 'style/videos/To the stars.mp4'

	} else {
		var fundo = document.getElementById('fundo');
		fundo.style.backgroundColor = '#2B2A33'
		var corpo = document.getElementById('op');
		corpo.style.backgroundColor = '#42414d'
		var email = document.getElementById('email');
		email.style.color = 'white'
		var senha = document.getElementById('senha');
		senha.style.color = 'white'
		var btnTema = document.getElementById('tema');
		btnTema.style.backgroundImage = 'url(style/images/sol.png)'
		btnTema.style.backgroundColor = '#42414d'
		const video = document.getElementById('stars');
		video.src = 'style/videos/To the stars dark.mp4'
	}

	control = !control
};