button = document.getElementById('button')
text = document.getElementById('text')
login = document.getElementById('login')
pass = document.getElementById('pass')

button.addEventListener('click', function(event){
    event.preventDefault()
    if (login.value.length < 1 || pass.value.length < 1 ) {

        text.innerHTML = 'não deixe campos em <br>branco!'
        text.classList.add('fail')
        text.classList.remove('success')

    } else if (login.value == pass.value && login.value == 'admin') {

        text.innerHTML = 'Logado com Sucesso'
        text.classList.add('success')
        text.classList.remove('fail')

    } else {

        text.innerHTML = 'Login ou Senha incorretos'
        text.classList.add('fail')
        text.classList.remove('success')

    }

})