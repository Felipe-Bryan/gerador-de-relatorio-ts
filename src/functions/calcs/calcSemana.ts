import { defineFaltaMeta } from '../defineIptValues/defineFaltaMeta';
import { defineMetaDia } from '../defineIptValues/defineMetaDia';
import { definePercentSemana } from '../defineIptValues/definePercenSemana';
import { definePercentDia } from '../defineIptValues/definePercentDia';

export function calcSemana(): void {
  defineMetaDia();
  defineFaltaMeta();
  definePercentDia();
  definePercentSemana();
}
