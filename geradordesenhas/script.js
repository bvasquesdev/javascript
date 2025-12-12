function gerarSenha(){
    let senha = "";
    let todosOsCaracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/"
    let listaCaracteres = todosOsCaracteres.split("");

    for (let i = 0; i < 8; i++){
        let indiceAleatorio = Math.floor(Math.random() * listaCaracteres.length);
        let caracterSorteado = listaCaracteres[indiceAleatorio];
        senha += caracterSorteado;
    }

    return senha;
}

console.log(gerarSenha());