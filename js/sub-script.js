const dismissButton = document.getElementById('dismiss');
const emailSave = document.getElementById('email-save');

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const correo = urlParams.get('correo');

    if (correo) {
        console.log(correo);
        emailSave.textContent = correo;
    }
})

dismissButton.addEventListener('click', function () {
    window.location.href = 'index.html';
});