import { inputs } from '../utils/inputList';
import { getDados } from './getDados';

export function calcEfetividade() {
  const programadas = Number(inputs.programadasIpt.value);
  const efetivasDR = Number(inputs.efetivasDRIpt.value);
  const efetivasFR = Number(inputs.efetivasFRIpt.value);

  const currentEfetivasSemana = Number(getDados().efetivasSemana);

  const efetTotal = currentEfetivasSemana + efetivasDR + efetivasFR;

  const porcentEfet = (((efetivasDR + efetivasFR) / programadas) * 100).toFixed(1);
  inputs.porcentEfetIpt.value = porcentEfet;
  inputs.efetivaSemanaIpt.value = String(efetTotal);
}
