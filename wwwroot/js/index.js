document.addEventListener("DOMContentLoaded", function () {
    const Password = document.getElementById('pw');

    document.getElementById('togglepw').addEventListener('click', function () {
        const type = Password.getAttribute('type') === 'password' ? 'text' : 'password';
        Password.setAttribute('type', type);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});
document.addEventListener("DOMContentLoaded", function () {
    const oldPassword = document.getElementById('oldpw');

    document.getElementById('toggleoldpw').addEventListener('click', function () {
        const typeoldpassword = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        oldPassword.setAttribute('type', typeoldpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const newPassword = document.getElementById('newpw');

    document.getElementById('togglenewpw').addEventListener('click', function () {
        const typenewpassword = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        newPassword.setAttribute('type', typenewpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const confirmPassword = document.getElementById('cpw');

    document.getElementById('togglecpw').addEventListener('click', function () {
        const typeconfirmpassword = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', typeconfirmpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const RegPassword = document.getElementById('rpw');

    document.getElementById('togglerpw').addEventListener('click', function () {
        const typeregpassword = RegPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        RegPassword.setAttribute('type', typeregpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const confRegPassword = document.getElementById('crpw');

    document.getElementById('togglecrpw').addEventListener('click', function () {
        const typeconfregpassword = confRegPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confRegPassword.setAttribute('type', typeconfregpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});
