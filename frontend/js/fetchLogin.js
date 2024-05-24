document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", async function () {
        const form = document.getElementById("loginForm");
        const formData = new FormData(form);

        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        const jsonData = JSON.stringify(jsonObject);

       await fetch("http://localhost:8080/usuario/login", {
            method: "POST",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                console.log("aaaaaaa")
                if (!response.ok) {
                    throw new Error("Erro ao enviar o formulário.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Resposta do servidor:", data);

                console.log("Redirecionando para a próxima página...");
                window.location.href = './telaPrincipal.html';
            })
            .catch((error) => {
                console.error("Erro:", error);
            });
    });
});
