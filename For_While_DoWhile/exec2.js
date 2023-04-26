nome = prompt("Informe o seu nome");
senha = nome;

while (senha == nome) {
    senha = prompt("Infome a sua senha");

    if (senha == nome) {
        alert("A senha não pode ser igual ao nome de usuário! Tente novamente");
        window.location.reload();
    }
}

document.write(`<center>Olá <b>${nome}</b>, seja bem-vindo(a)!`);