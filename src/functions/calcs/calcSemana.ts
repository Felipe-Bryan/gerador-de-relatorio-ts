import { defineFaltaMeta } from '../defineIptValues/defineFaltaMeta';
import { defineMetaDia } from '../defineIptValues/defineMetaDia';
import { definePercentSemana } from '../defineIptValues/definePercenSemana';

export function calcSemana(): void {
  defineMetaDia();
  defineFaltaMeta();
  definePercentSemana();
}
