import { inputs } from '../../utils/inputList';
import { calcDia } from '../calcs/calcDia';
import { calcEfetivas } from '../calcs/calcEfetivas';
import { calcMes } from '../calcs/calcMes';
import { calcSemana } from '../calcs/calcSemana';

export function defineCalcs() {
  inputs.vendaDiaIpt.addEventListener('blur', calcDia);
  inputs.efetivasDRIpt.addEventListener('blur', calcEfetivas);
  inputs.efetivasFRIpt.addEventListener('blur', calcEfetivas);
  inputs.programadasIpt.addEventListener('blur', calcEfetivas);
  inputs.metaSemanaIpt.addEventListener('blur', calcSemana);
  inputs.vendaSemanaIpt.addEventListener('blur', calcSemana);
  inputs.vendaMesIpt.addEventListener('blur', calcMes);
  inputs.metaMesIpt.addEventListener('blur', calcMes);
}
