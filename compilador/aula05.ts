function Saudar(isNoite: boolean): string{
    let saudacao: string
    if(isNoite){
        saudacao = 'Boa noite!'
    }else{
        saudacao = 'Bom dia!'
    }
    return saudacao
}