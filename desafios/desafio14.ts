/*
    Criar um decorator que impeça de usuarios não administradores
    acesse a classe MudancaAdministrativa

    AULA 133 do curso na udemy
*/
type Class = { new(...args: any[]): {} }

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

function perfilAdmin<T extends Class>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            if (!usuarioLogado || !usuarioLogado.admin) throw new Error('Este usuário não é um administrador')
            super(...args)
        }
    }
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()