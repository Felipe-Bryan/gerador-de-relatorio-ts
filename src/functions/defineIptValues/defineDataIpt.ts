import { inputs } from '../../utils/inputList';
import { defineDia } from '../defines/defineDia';
import { defineDiaSemana } from '../defines/defineDiaSemana';
import { defineMes } from '../defines/defineMes';

export function defineDataIpt() {
  const dia = defineDia();
  const mes = defineMes();

  inputs.diaSemanaIpt.value = defineDiaSemana();

  inputs.dataIpt.value = `${dia < 10 ? `0${dia}` : dia}/${mes}`;
}
