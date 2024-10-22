document.addEventListener("DOMContentLoaded", function () {
    const Password = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = Password.getAttribute('type') === 'password' ? 'text' : 'password';
        Password.setAttribute('type', type);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const oldPassword = document.getElementById('oldpassword');
    const toggleoldPassword = document.getElementById('toggleoldPassword');

    toggleoldPassword.addEventListener('click', function () {
        const typeoldpassword = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        oldPassword.setAttribute('type', typeoldpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const newPassword = document.getElementById('newpassword');
    const togglenewPassword = document.getElementById('togglenewPassword');

    togglenewPassword.addEventListener('click', function () {
        const typenewpassword = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        newPassword.setAttribute('type', typenewpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const confirmPassword = document.getElementById('confirmpassword');
    const toggleconfirmPassword = document.getElementById('toggleconfirmPassword');

    toggleconfirmPassword.addEventListener('click', function () {
        const typeconfirmpassword = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', typeconfirmpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const RegPassword = document.getElementById('Regpassword');
    const toggleregPassword = document.getElementById('toggleregpassword');

    toggleregPassword.addEventListener('click', function () {
        const typeregpassword = RegPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        RegPassword.setAttribute('type', typeregpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const confRegPassword = document.getElementById('ConfRegpassword');
    const toggleconfregPassword = document.getElementById('toggleconfregpassword');

    toggleconfregPassword.addEventListener('click', function () {
        const typeconfregpassword = confRegPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confRegPassword.setAttribute('type', typeconfregpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});