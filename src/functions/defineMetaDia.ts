import { inputs } from '../utils/inputList';
import { defineDiasRestantesMes } from './defineDiasRestantesMes';

function defineDiasRestantesSemana(): number {
  const diasRestantesMes = defineDiasRestantesMes();

  if (diasRestantesMes >= 5) {
    if (inputs.diaSemanaIpt.value == 'Segunda-Feira') {
      return 5;
    } else if (inputs.diaSemanaIpt.value == 'Terça-Feira') {
      return 4;
    } else if (inputs.diaSemanaIpt.value == 'Quarta-Feira') {
      return 3;
    } else if (inputs.diaSemanaIpt.value == 'Quinta-Feira') {
      return 2;
    } else if (inputs.diaSemanaIpt.value == 'Sexta-Feira') {
      return 1;
    } else {
      return 1;
    }
  } else {
    return diasRestantesMes;
  }
}

export function defineMetaDia() {
  inputs.metaSemanaIpt.value = String(inputs.metaSemanaIpt.value);

  const diasRestantes = defineDiasRestantesSemana();

  const metaDia = Number(inputs.faltaMetaIpt.value) / diasRestantes;

  if (metaDia <= 0) {
    inputs.metaDiaIpt.value = '0';
  } else {
    inputs.metaDiaIpt.value = String(metaDia);
  }
}
