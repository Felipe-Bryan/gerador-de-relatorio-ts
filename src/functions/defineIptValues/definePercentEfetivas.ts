import { inputs } from '../../utils/inputList';

export function definePercentEfetivas(): void {
  const programadas = Number(inputs.programadasIpt.value);
  const efetivasDR = Number(inputs.efetivasDRIpt.value);
  const efetivasFR = Number(inputs.efetivasFRIpt.value);

  const porcentEfet = (((efetivasDR + efetivasFR) / programadas) * 100).toFixed(1);
  inputs.porcentEfetIpt.value = porcentEfet;
}
