const alunoCerto= {
    nome: "Pedro Ribeiro",
    idade: 15,
    cursando: ["POO", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "22002200"
}

const alunoErrado= {
    nome: "Pedro",
    idade: 15,
    cursando: ["POO", "PDM"],
    presenca: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "22002200"
}


console.log(validaCadastro(alunoCerto))
console.log(validaCadastro(alunoErrado))



function validaCadastro(aluno) {
    const resposta = {
        status: "valid",
        messages: [],
        aluno
    }

    //valida quantidade de caracteres do nome
    if (aluno.nome.length < 10) {
        resposta.status = "invalid"
        resposta.messages.push("Nome inválido")
    }

    //valida a idade do aluno
    if (aluno.idade <= 14) {
        resposta.status = "invalid"
        resposta.messages.push("Idade inválida")
    }

    //valida a quantidade de materias do aluno
    if (aluno.cursando.length < 3) {
        resposta.status = "invalid"
        resposta.messages.push("Cursando inválido")
    }

    //valida a quantidade de presencas 
    if (aluno.presenca.length < 2) {
        resposta.status = "invalid"
        resposta.messages.push("Quantidade de presenças inválida")
    }

    //valida a o RA
    if (aluno.ra.length == 7) {
        resposta.status = "invalid"
        resposta.messages.push("RA inválido")
    }


    if(resposta.status == "valid") {
        resposta.messages = ["Aluno valido"]
        return resposta
    }

    return resposta

}







