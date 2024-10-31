const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_kndjrbb';

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            btn.value = 'Enviar';
            alert('Mensaje Enviado correctamente!');
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});