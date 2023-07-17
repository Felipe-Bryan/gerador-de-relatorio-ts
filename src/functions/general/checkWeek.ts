import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { getDados } from './getDados';

function newWeek() {
  const dados: DadosType = getDados();

  dados.metaSemana = 0;
  dados.metaDia = 0;
  dados.efetivasSemana = 0;
  dados.vendaSemana = 0;
  localStorage.setItem('dadosRota', JSON.stringify(dados));

  inputs.metaSemanaIpt.value = '';
  inputs.vendaSemanaIpt.value = '';
  inputs.efetivaSemanaIpt.value = '';
  inputs.metaDiaIpt.value = '';
  inputs.faltaMetaIpt.value = '';
}

export function checkWeek() {
  if (inputs.diaSemanaIpt.value == 'Segunda-Feira') {
    let confirmation = confirm('Deseja iniciar nova semana?');
    if (confirmation) {
      newWeek();
    }
  }
}
