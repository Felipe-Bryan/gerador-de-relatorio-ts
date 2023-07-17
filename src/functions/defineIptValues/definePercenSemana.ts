import { inputs } from '../../utils/inputList';

export function definePercentSemana(): void {
  let porcentSemana = ((Number(inputs.vendaSemanaAtualIpt.value) / Number(inputs.metaSemanaIpt.value)) * 100).toFixed(
    1
  );

  if (porcentSemana == 'Infinity') {
    porcentSemana = '0';
  }

  inputs.porcentSemanaIpt.value = porcentSemana;
}
