import { defineDia } from './defineDia';
import { defineDiaSemana } from './defineDiaSemana';
import { defineDiasRestantesMes } from './defineDiasRestantesMes';

export function defineDiasRestantesSemana(): number {
  const diasRestantesMes = defineDiasRestantesMes();
  const diaSemana = defineDiaSemana();
  const diaMes = defineDia();

  let dias = 1;

  if (diaSemana == 'Segunda-Feira') {
    dias = 5;
  }
  if (diaSemana == 'Terça-Feira') {
    dias = 4;
  }
  if (diaSemana == 'Quarta-Feira') {
    dias = 3;
  }
  if (diaSemana == 'Quinta-Feira') {
    dias = 2;
  }
  if (diaSemana == 'Sexta-Feira') {
    dias = 1;
  }

  if (diasRestantesMes >= 5) {
    return dias;
  }

  if (diaMes === 27 || diaMes === 28) {
    return dias;
  }

  return diasRestantesMes;
}
