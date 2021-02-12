/**
 * Usando generics para calcular diferença entre datas
 */

import { Data } from '../classes/aula01'
import { OperacaoBinaria } from './aula05'

class DiferencaEntreData extends OperacaoBinaria<Data, string>{
    getDate(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getDate(this.op1)
        const t2 = this.getDate(this.op2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 1, 2021)
const d2 = new Data(4, 9, 2021)
console.log(new DiferencaEntreData(d1, d2).executar());