document.addEventListener("DOMContentLoaded", function () {
    const resetPassword = document.getElementById('resetpw');
 
    document.getElementById('togglerespw').addEventListener('click', function () {
        const typeresetpassword = resetPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        resetPassword.setAttribute('type', typeresetpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const resetPassword = document.getElementById('cresetpw');

    document.getElementById('togglecrpw').addEventListener('click', function () {
        const typeresetpassword = resetPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        resetPassword.setAttribute('type', typeresetpassword);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    })
});