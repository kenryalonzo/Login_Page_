
const login = document.querySelector('.login-section');
const loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    login.classList.add('active');
});

loginlink.addEventListener('click', () => {
    login.classList.remove('active');
});