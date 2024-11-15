document.addEventListener("DOMContentLoaded", function () {
    const elements = [
        { inputId: 'pw', toggleId: 'togglepw' },
        { inputId: 'oldpw', toggleId: 'toggleoldpw' },
        { inputId: 'newpw', toggleId: 'togglenewpw' },
        { inputId: 'cpw', toggleId: 'togglecpw' },
        { inputId: 'rpw', toggleId: 'togglerpw' },
        { inputId: 'crpw', toggleId: 'togglecrpw' },
        { inputId: 'resetpw', toggleId: 'togglerespw' },
        { inputId: 'cresetpw', toggleId: 'togglecrpw' }
    ];

    elements.forEach(({ inputId, toggleId }) => {
        const inputElement = document.getElementById(inputId);
        const toggleElement = document.getElementById(toggleId);

        if (inputElement && toggleElement) {
            toggleElement.addEventListener('click', function () {
                const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
                inputElement.setAttribute('type', type);

                this.classList.toggle('bi-eye');
                this.classList.toggle('bi-eye-slash');
            });
        }
    });
});
