import { inputs } from '../utils/inputList';
import { calcDia } from './calcDia';
import { calcEfetividade } from './calcEfetividade';
import { calcMes } from './calcMes';
import { calcSemana } from './calcSemana';

export function defineCalcs() {
  inputs.vendaDiaIpt.addEventListener('blur', calcDia);
  inputs.efetivasDRIpt.addEventListener('blur', calcEfetividade);
  inputs.efetivasFRIpt.addEventListener('blur', calcEfetividade);
  inputs.programadasIpt.addEventListener('blur', calcEfetividade);
  inputs.metaSemanaIpt.addEventListener('blur', calcSemana);
  inputs.vendaSemanaIpt.addEventListener('blur', calcSemana);
  inputs.vendaMesIpt.addEventListener('blur', calcMes);
  inputs.metaMesIpt.addEventListener('blur', calcMes);
}
