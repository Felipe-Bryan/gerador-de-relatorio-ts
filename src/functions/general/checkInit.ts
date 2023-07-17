import { DadosType } from '../../types/DadosType';
import { defineMes } from '../defines/defineMes';
import { checkMonth } from './checkMonth';
import { checkWeek } from './checkWeek';
import { getDados } from './getDados';

export function checkInit() {
  const dados: DadosType = getDados();

  const mesAtual = Number(defineMes());

  if (dados.mes !== mesAtual) {
    checkMonth();
  } else {
    checkWeek();
  }
}
