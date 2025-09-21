const form = document.getElementById('contact-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.textContent = "Terima kasih, pesanmu telah terkirim!";
    message.style.color = "#1e90ff";
    form.reset();
});
