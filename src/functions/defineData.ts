import { inputs } from '../utils/inputList';
import { meses } from '../utils/meses';
import { semana } from '../utils/semana';

export function defineData() {
  const d = new Date();

  inputs.diaSemanaIpt.value = semana[d.getDay()];

  const dia = d.getDate();
  const mes = meses[d.getMonth()];

  inputs.dataIpt.value = `${dia < 10 ? `0${dia}` : dia}/${mes}`;
}
