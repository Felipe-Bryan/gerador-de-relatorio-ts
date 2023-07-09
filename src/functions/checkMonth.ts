import { DadosType } from '../types/DadosType';
import { inputs } from '../utils/inputList';
import { meses } from '../utils/meses';
import { getDados } from './getDados';

export function checkMonth() {
  const dados: DadosType = getDados();

  const mesAtual = Number(meses[new Date().getMonth()]);

  if (dados.mes !== mesAtual) {
    let confirmation = confirm('Deseja iniciar um novo mês?');

    if (confirmation) {
      inputs.metaDiaIpt.value = '';
      inputs.efetivaSemanaIpt.value = '';
      inputs.vendaSemanaIpt.value = '';
      inputs.vendaMesIpt.value = '';
      inputs.metaSemanaIpt.value = '';
      inputs.metaMesIpt.value = '';
      inputs.faltaMetaIpt.value = '';
    }
  }
}
