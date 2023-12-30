const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const passwordInput = document.getElementById('register-password');
const confirmPasswordInput = document.getElementById('register-confirm-password');
const strengthIndicators = document.querySelectorAll('.strength-indicator');


loginToggle.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginToggle.classList.add('active');
    registerToggle.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    registerToggle.classList.add('active');
    loginToggle.classList.remove('active');
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);


    strengthIndicators.forEach((indicator, index) => {
        if (index <= strength) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
});

function calculatePasswordStrength(password) {
    
    if (password.length < 8) {
        return 0; 
    } else if (password.length < 12) {
        return 1; 
    } else {
        return 2; 
    }
}
