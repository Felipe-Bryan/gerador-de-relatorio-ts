import { inputs } from '../../utils/inputList';

export function checkMonth() {
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
