import { defineFaltaMeta } from '../defineIptValues/defineFaltaMeta';
import { definePercentSemana } from '../defineIptValues/definePercenSemana';
import { definePercentDia } from '../defineIptValues/definePercentDia';
import { definePercentMes } from '../defineIptValues/definePercentMes';
import { defineVendaMesAtual } from '../defineIptValues/defineVendaMesAtual';
import defineVendaSemanaAtual from '../defineIptValues/defineVendaSemanaAtual';

export function calcDia(): void {
  definePercentDia();
  defineVendaSemanaAtual();
  definePercentSemana();
  defineFaltaMeta();
  defineVendaMesAtual();
  definePercentMes();
}
