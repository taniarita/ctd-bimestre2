const body = document.querySelector('body');
const titulo = document.querySelector('h1');
const lista = document.querySelector('ul');
const button = document.querySelector('button')
const btnDarkMode = document.getElementById('dark-mode');

const darkMode = () => {
    body.classList.toggle('dark-mode');
    lista.classList.toggle('dark-mode');
    titulo.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
}

btnDarkMode.addEventListener('click', darkMode);
