const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');

emailInput.addEventListener('input', function () {
    if (emailInput.checkValidity()) {
        submitButton.classList.add('valid');
    } else {
        submitButton.classList.remove('valid');
    }
});

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
        submitButton.disabled = false;
    } else {
        emailInput.classList.add('error');
        errorMessage.textContent = 'Valid email required';
        submitButton.disabled = true;
    }
});

submitButton.addEventListener('click', function (event) {
    if (!emailInput.checkValidity()) {
        event.preventDefault();
        submitButton.disabled = true;
    } 
});

function saveAddress() {
    const correo = emailInput.value;
    const url = 'subscribing.html?correo=' + encodeURIComponent(correo);
    window.location.href = url;
};