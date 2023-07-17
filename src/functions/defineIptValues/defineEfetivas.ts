import { inputs } from '../../utils/inputList';
import { getDados } from '../general/getDados';

export function defineEfetivas(): void {
  const programadas = Number(inputs.programadasIpt.value);
  const efetivasDR = Number(inputs.efetivasDRIpt.value);
  const efetivasFR = Number(inputs.efetivasFRIpt.value);

  const currentEfetivasSemana = Number(getDados().efetivasSemana);

  const efetTotal = currentEfetivasSemana + efetivasDR + efetivasFR;

  inputs.efetivaSemanaIpt.value = String(efetTotal);
}
