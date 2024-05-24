async function submitRegisterForm() {
    const form = document.getElementById('registerForm');
    const formData = new FormData(form);
    console.log(formData)

    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    const jsonData = JSON.stringify(jsonObject);

   await fetch('http://localhost:8080/usuario/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => {
            if (!response.ok) {
                console.log("bbbbbbbb")
                throw new Error('Erro ao enviar o formulário.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            window.location.href = './telaLogin.html';
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}
