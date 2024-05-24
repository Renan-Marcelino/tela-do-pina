document.getElementById('videoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const url = document.getElementById('url').value;
    const duracao = document.getElementById('duracao').value;
    const categoria = document.getElementById('categoria').value;
    const restrito = document.getElementById('restrito').checked;

    const videoData = {
        titulo: titulo,
        url: url,
        duracao: duracao,
        categoria: categoria,
        restrito: restrito,
        id: () => {
            
        }
    };

    fetch('http://localhost:8080/video/postar/3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(videoData)
    })
        .then(response => response.json())

        .then(data => {

            console.log('Success:', data);
            alert('Vídeo postado com sucesso!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao postar o vídeo.');
        });
});
